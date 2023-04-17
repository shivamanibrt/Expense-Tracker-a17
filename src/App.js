import './App.css';
import React from "react";
// import { Route, Router, Link } from 'react-router-dom';
import Login from './Pages/login/Login';
import Register from './Pages/register/Register';
import Dashboard from './Pages/dashboard/Dashboard';
import Layout from './Components/Layout';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <Layout>
        <Routes>
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
          <Route path='dashboard' element={<Dashboard />} />
        </Routes>
      </Layout>


    </div >
  );
}

export default App;
