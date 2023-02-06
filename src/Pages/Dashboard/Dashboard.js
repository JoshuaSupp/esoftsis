import React from 'react';
import Sidebar from '../../Components/Sidebar/Sidebar';
import './Dashboard.css';

const Dashboard = () => {
  return (
   
    <div class="dashboard">
       <Sidebar>
        <div>
            <img src='./images/MeuLogo.png' alt='Meulabs Logo' width='200px'  />
        </div>

        <div>
            <h2 id='title'>Student Information System</h2>
        </div>

        <div>
            <h2 id='events'>Meu Labs Events</h2>
        </div>
        </Sidebar>
    </div>
  )
}

export default Dashboard