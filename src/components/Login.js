import React from 'react';
import logo from './timesheet.png';

export default function Login() {
  return (
    <>
    <div className="body">
            <div className="Login flex flex-col items-center justify-center">
                <img src={logo} alt="" className="mb-3" width="300" />
                <form action="" className="px-4 py-4 rounded" >
                    <span className="sign-in text-center block mt-1">Login to your account</span> <br />
                    <label htmlFor="username" className="text-sm">Username</label> <br />
                    <input type="email" required/>
                    <label htmlFor="username" className="text-sm">Password</label> <br />
                    <input type="password" minlength="6" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 6 or more characters" required/>
                    <div className="one-row-text flex items-center justify-center">
                        <div>
                            <input type="checkbox" name="remember" id="remember" className="inline-block mr-1" /><span
                                className="remember-btn text-sm inline-block">Remember me</span>
                        </div>
                        <div className="forgot-text">
                            <a href="/" className="forgot text-sm">Forgot your password?</a>
                        </div>
                    </div>
                    <button type="submit" className="login-btn">LOGIN</button>

                </form>
            </div>
        </div>
    </>
  )
}
