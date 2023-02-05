
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from './Pages/Login/Login';
import Dashboard from './Pages/Dashboard/Dashboard';


function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' exact to element={<Login/>} />
    <Route path='/Dashboard' exact to element={<Dashboard/>} />
   
    </Routes>
    </BrowserRouter>
  );
}

export default App;
