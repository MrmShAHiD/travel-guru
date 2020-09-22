import React, { useContext, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";
import { UserContext } from "../../App";
import SignUpForm from "../form/SignUpForm";
import LoginForm from "../form/LoginForm";

const Login = () => {
    const [newUser, setNewUser] = useState(false);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const [currentUser, setCurrentUser] = useState({
        isSigningIn: false,
        email: "",
        password: "",
        error: "",
        success: false
    })

    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const handleFormToggle = () => {
        setNewUser(!newUser);
    }
    
    if(!firebase.apps.length){
        firebase.initializeApp(firebaseConfig);
    }

    // Sign in Options
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    const fbprovider = new firebase.auth.FacebookAuthProvider();

    // sign in with google
    const handleSignInWithGoogle = () => {
        firebase.auth().signInWithPopup(googleProvider)
        .then(res => {
            const { displayName, email } = res.user;
            const newUser = {
                isSigningIn: true,
                email: email,
                name: displayName
            };

            setCurrentUser(newUser);
            setLoggedInUser(newUser);
            history.replace(from);
        })
        .catch(error =>{
            const newUser = {...currentUser};
            newUser.error = error.message;
            newUser.success = false;
            setLoggedInUser(newUser);
        })
    };

    // sign in with facebook 
    const handleSignInWithFacebook = () => {
        firebase.auth().signInWithPopup(fbprovider)
        .then(res => {
            const { displayName, email } = res.user;
            const newUser = {
                isSignedIn: true,
                email: email,
                name: displayName,
            };

            setCurrentUser(newUser);
            setLoggedInUser(newUser);
            history.replace(from);
        })
        .catch(error =>{
            const newUser = {...currentUser};
            newUser.error = error.message;
            newUser.success = false;
            setLoggedInUser(newUser);
        })
    };

    ///////////////////////////////////////////

    const [errors, setErrors] = useState({
		name: "",
		email: "",
		password: "",
		confirmPassword: ""
	});
	let pass1, pass2;
	const handleFormValidation = (e) => {
		let isFieldValid = true;
		const newError = { ...errors };

		if (e.target.name === "name") {
			isFieldValid = e.target.value.length < 30;
			if(!isFieldValid){
				newError[e.target.name] = "Name is not valid";
				setErrors(newError);
            }
            else{
				newError[e.target.name] = "";
				setErrors(newError);
			}
		}

		if(e.target.name === "email"){
			isFieldValid = /\S+@\S+/.test(e.target.value);
			if(!isFieldValid){
				newError[e.target.name] = "Email is not valid";
				setErrors(newError);
            }
            else{
				newError[e.target.name] = "";
				setErrors(newError);
			}
		}

		if(e.target.name === "password" || e.target.name === "confirmPassword"){
			const isPasswordLengthValid = e.target.value.length > 8;
			const passwordHasNumber = /\d{1}/.test(e.target.value);

			isFieldValid = isPasswordLengthValid && passwordHasNumber;

			if(e.target.name === "password"){
				pass1 = e.target.value;
				if(!isFieldValid){
					newError[e.target.name] = "Password is not valid";
					setErrors(newError);
                }
                else{
					newError[e.target.name] = "";
					setErrors(newError);
				}
            }
            
			if(e.target.name === "confirmPassword"){
				pass2 = e.target.value;
				if(!isFieldValid && pass1 !== pass2){
					newError[e.target.name] = "Password is not matched";
					setErrors(newError);
                }
                else{
					newError[e.target.name] = "";
					setErrors(newError);
				}
			}
		}

		if(isFieldValid){
			const newUser = { ...currentUser };
			newUser[e.target.name] = e.target.value;
			setCurrentUser(newUser);
		}
	};

    ///////////////////////////////////////////

    // sign in with email and password
    const handleSignInWithEmail = (e) => {
        e.preventDefault();

        if(!currentUser.email && !currentUser.password){
            const newError = {...errors};
            newError.email = "Your email is invalid!";
            newError.password = "Please set a password with at least 8 charactor existing at least one number";
            setErrors(newError);
        }
        else{
            firebase.auth().signInWithEmailAndPassword(currentUser.email, currentUser.password)
            .then(res => {
                const {displayName, email} = res.user;
                const newUser = {
                    isSigningIn:true,
                    email:email,
                    name: displayName,
                    error: "",
                    success:true
                };

                setCurrentUser(newUser);
                setLoggedInUser(newUser);
                history.replace(from);
            })
            .catch(error => {
                const newUser = {...currentUser};
                newUser.error = error.message;
                newUser.success = false;
                setLoggedInUser(newUser);
            })
        }
    }

    // create new user section 
    const handleCreateNewUser = (e) => {
        e.preventDefault();

        if(!currentUser.email && !currentUser.password){
            const newError = { ...errors };
            newError.name = "Name is invalid!";
            newError.email = "Your email is invalid!";
            newError.password = "Please set a password with at least 8 charactor existing at least one number";
            newError.confirmPassword = "Password not matched!";
            setErrors(newError);
        }
        else{
            firebase.auth().createUserWithEmailAndPassword(currentUser.email, currentUser.password)
            .then(res => {
                const {displayName, email} = res.user;
                const newUser = {
                    email: email,
                    name: displayName,
                    error:"",
                    success: true
                };
                setCurrentUser(newUser);
                setLoggedInUser(newUser);
            })
            .catch(error => {
                const newUser = {...currentUser};
                newUser.error = error.message;
                newUser.success = false;
                setLoggedInUser(newUser);
            })
        }
    }

    return (
        <div className="text-center">
            <div className="container">
                {
                    currentUser.success && (
                        <div class="alert alert-success" role="alert">
                            Successful!
                        </div>
                    )
                }
                {
                    loggedInUser.error && (
                        <div class="alert alert-warning" role="alert">
                            {loggedInUser.error}
                        </div>
                    )
                }
                {
                    newUser ? (<SignUpForm formtoggle={handleFormToggle} formValid={handleFormValidation} submit={handleCreateNewUser} errors={errors}></SignUpForm>) : (<LoginForm formToggle={handleFormToggle} formValid={handleFormValidation} submit={handleSignInWithEmail} errors={errors}></LoginForm>)
                }
                
            </div>
        </div>
    );
};

export default Login;