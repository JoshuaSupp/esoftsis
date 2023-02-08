import React from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import './KXRegistry.css'

const KXRegistry = () => {
  return (
    <div>
    <Sidebar>
      <h2>KX1E01</h2>
      <div id='kxtable'>
    <table id="customers">
  <tr id="headings">
    <th>ID</th>
    <th>Index No</th>
    <th>Full Name</th>
    <th> Age </th>
    <th>DOB</th>
    <th>School</th>
    <th>Student Contact</th>
    <th>Parent Name</th>
    <th>Parent Email</th>
    <th>Parent Contact</th>
    <th>Address</th>
    <th>Comments</th>
    <th>Payments</th>
    <th id='attendance'>Attendance
     <br/>
     <th>Week 01</th>
     <th>Week 02</th>
     <th>Week 03</th>
     <th>Week 04</th>
     <th>Week 05</th>
     <th>Week 06</th>
     <th>Week 07</th>
     <th>Week 08</th>
     <th>Week 09</th>
     <th>Week 10</th>
     <th>Week 11</th>
     <th>Week 12</th>
     <th>Week 13</th>
     <th>Week 14</th>
     <th>Week 15</th>
     <th>Week 16</th>
    </th>
  </tr>
  <tr>
    <td>1</td>
    <td>KXE0001</td>
    <td>Max Taylor</td>
    <td>10</td>
    <td>02/02/2013</td>
    <td>Gateway International</td>
    <td>0773292103</td>
    <td>Seth Taylor</td>
    <td>sethtaylor123@gmail.com</td>
    <td>07732973438</td>
    <td>No.111/1, 5th Lane, Colombo 06</td>
    <td>Start after second week</td>
    <td>Installments - 10,000 paid (1st Month)</td>
    <td><input id='check1' type="checkbox" /> <input id='checkbox'type="checkbox"/>
    <input id='checkbox'type="checkbox"/> <input id='checkbox'type="checkbox"/> 
    <input id='checkbox'type="checkbox"/> <input id='checkbox'type="checkbox"/>
    <input id='checkbox'type="checkbox"/> <input id='checkbox'type="checkbox"/>
    <input id='checkbox'type="checkbox"/> <input id='checkbox'type="checkbox"/>
    <input id='checkbox'type="checkbox"/> <input id='checkbox'type="checkbox"/>
    <input id='checkbox'type="checkbox"/> <input id='checkbox'type="checkbox"/>
    <input id='checkbox'type="checkbox"/> <input id='checkbox'type="checkbox"/>   
    </td>
     
  
    



  </tr>
 
  </table>
  </div>
    </Sidebar>
   
    </div>
  )
}

export default KXRegistry