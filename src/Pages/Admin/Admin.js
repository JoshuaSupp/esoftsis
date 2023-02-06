import React from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import './Admin.css'

const Admin = () => {
  return (
    <div class="admin">
        <Sidebar>
    <div>Admin</div>

    <div id='admintable'>
    <table id="customers">
  <tr>
    <th>Admin ID</th>
    <th>Username</th>
    <th>Password</th>
    <th>Role</th>

  </tr>
  <tr>
    <td>A001</td>
    <td>MaxTaylor23</td>
    <td>*******</td>
    <td>Admin</td>
  </tr>
  <tr>
  <td>A002</td>
    <td>BenSilva21</td>
    <td>*****</td>
    <td>Admin</td>
  </tr>
  <tr>
  <td>A003</td>
    <td>ShaunMarsh33</td>
    <td>*******</td>
    <td>Admin</td>
  </tr>
  <tr>
  <td>A004</td>
    <td>Bryan2</td>
    <td>******</td>
    <td>Admin</td>
  </tr>
</table>
</div>
    <div class='adminbuttons'>
    <a href='/CreateAdmin'>
    <button class='btncreate' >
      Create Admin
    </button>
    </a>
 
    <button class='btnupdate' >
      Update Admin
    </button>
   
    <button class='btndelete' >
      Delete Admin
    </button>
    </div>

    </Sidebar>
    </div>
  )
}

export default Admin