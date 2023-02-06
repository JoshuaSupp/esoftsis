
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from './Pages/Login/Login';
import Dashboard from './Pages/Dashboard/Dashboard';
import Sidebar from './Components/Sidebar/Sidebar';
import Admin from './Pages/Admin/Admin'
import KXRegistry from './Pages/KXRegistry/KXRegistry';
import ANRegistry from './Pages/ANRegistry/ANRegistry';
import PDRegistry from './Pages/PDRegistry/PDRegistry';
import CreateAdmin from './Pages/CreateAdmin/CreateAdmin';

function App() {
  return (
    <BrowserRouter>
    
    <Routes>
    <Route path='/' exact to element={<Login/>} />
    <Route path='/Sidebar' exact to element={<Sidebar/>} />
    <Route path='/Dashboard' exact to element={<Dashboard/>} />
    <Route path='/Admin' exact to element={<Admin/>} />
    <Route path='/KXRegistry' exact to element={<KXRegistry/>} />
    <Route path='/ANRegistry' exact to element={<ANRegistry/>} />
    <Route path='/PDRegistry' exact to element={<PDRegistry/>} />
    <Route path='/CreateAdmin' exact to element={<CreateAdmin/>} />
    </Routes>
    
    </BrowserRouter>
  );
}

export default App;
