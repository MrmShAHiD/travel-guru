import React from 'react';

const SignUpForm = (props) => {
    const {formtoggle, formValid, submit, errors} = props;
    return (
        <div>
            <h2>Create Account</h2>
            <form onSubmit={submit}>
                <div>
                    <input type="text" placeholder="Enter Your Name" name="name" onBlur={formValid}/>
                    {errors.name.length > 0 && <p>{errors.name}</p>}
                </div>
                <div>
                    <input type="email" placeholder="Enter your email" name="email" onBlur={formValid}/>
                    {errors.email.length > 0 && <p>{errors.email}</p>}
                </div>
                <div>
                    <input type="password" placeholder="Enter your password" name="password" onBlur={formValid}/>
                    {errors.password.length > 0 && <p>{errors.password}</p>}
                </div>
                <div>
                    <input type="password" placeholder="Confirm your password" name="confirmPassword" onBlur={formValid}/>
                    {errors.confirmPassword.length > 0 && <p>{errors.confirmPassword}</p>}
                </div>
                <button type="submit" className="btn btn-warning">Create account</button>
            </form>
            <div>
                Already have account?
                <button className="btn" onClick={formtoggle}>Login</button>
            </div>
        </div>
    );
};

export default SignUpForm;