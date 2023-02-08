import React from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import './CreateAdmin.css'

const CreateAdmin = () => {
  return (
    <div>
    <Sidebar>
    

    <div class="login-box">
  <h2>Create Admin</h2>
  <form>
    <div class="user-box">
      <input type="text" name="" required="" placeholder='admin id......'/>
      <label>Admin ID</label>
    </div>
    <div class="user-box">
      <input type="text" name="" required="" placeholder='username......'/>
      <label>Username</label>
    </div>
    <div class="user-box">
      <input type="password" name="" required="" placeholder='password......'/>
      <label>Password</label>
    </div>
    <div class="user-box">
      <input type="text" name="" required="" placeholder='role......'/>
      <label>Role</label>
    </div>

    <a href="/CreateAdmin">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Create Admin
    </a>
  </form>
</div>
    </Sidebar>
    </div>
  )
}

export default CreateAdmin