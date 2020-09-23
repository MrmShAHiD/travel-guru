import { Link } from '@material-ui/core';
import React from 'react';

const LoginForm = (props) => {
    const {formToggle, formValid, submit, errors} = props;
    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={submit}>
                <div>
                    <input type="email" placeholder="Type your email" name="email" onBlur={formValid}/>
                    {errors.email.length > 0 && <p>{errors.email}</p>}
                </div>
                <div>
                    <input type="password" placeholder="Enter your password" name="password" onBlur={formValid}/>
                    {errors.password.length > 0 && <p>{errors.password}</p>}
                </div>
                <div>
                    <div>
                        <input type="checkbox" className="custom-control-input" id="rememberUser" />
                        <label className="custom-control-label" htmlFor="rememberUser">Remember me</label>
                    </div>
                    <Link to="/">Forgot Password</Link>
                </div>
                <button type="submit" className="btn btn-warning">Login</button>
            </form>

            <div>
                <p>Don't have an account?</p>
                <button className="btn" onClick={formToggle}>Creat accout</button>
            </div>
        </div>
    );
};

export default LoginForm;