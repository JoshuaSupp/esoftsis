import React from 'react';
import './Login.css'

const Login = () => {
  return (
    <div id='loginbody'>
         <div className="div-login">
        <div className="div-login-logo"></div>
        <h2 class="loginname">Login</h2>
        <div>
          <form class="loginform" onSubmit="">
            <input
              type="email"
              name="email"
              placeholder="email..."
              required
            
            />
            <input
              type="password"
              name="pwd"
              placeholder="password..."
              required
             
            /> 
          </form>
          <div>
            <a href='/Dashboard'>
            <button class="loginbutton"> Log In </button>
            </a>
            </div>


            </div>
        </div>
    </div>
  )
}

export default Login