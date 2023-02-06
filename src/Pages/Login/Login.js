import React from 'react';
import './Login.css'

const Login = () => {
  return (
    <div class='login'>
   
         <div class="container">
         <img src='./images/MeuLogo.png' alt='Meulabs Logo' width='120px' height="70px"  />
  <div class="left">
  
    <div class="header">

    <h2 class="animation a3" id='meulabs'>Meu Labs</h2>
      <h2 class="animation a1">Student Information System</h2>
      <h4 class="animation a2">Log in to your account using username and password</h4>
    </div>
    <div class="form">
      <input type="username" class="form-field animation a3" placeholder="Username" />
      <input type="password" class="form-field animation a4" placeholder="Password" />
    
        <a href='/Dashboard'>
      <button class="animation a6" id="btnlogin">LOGIN</button>
      </a>
    
    </div>
  </div>
  <div class="right"></div>
</div>
    </div>
    
  )
}

export default Login