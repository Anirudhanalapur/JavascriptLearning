import Login from "./login/login";
import './App.css'

import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Dashboard from "./components/dashboard/dashboard";

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const checkForValidAuth = () => {
    const userName = localStorage.getItem('id')
    const password = localStorage.getItem('password')

     setIsAuthenticated(!!(userName && password))
  }

  useEffect(() => {
    checkForValidAuth();
  }, [])

  return (
      <Router>
        <Routes>
          <Route path="/" element={ isAuthenticated ? <Navigate to="/dashboard"/> : <Navigate to="/" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />}/>
        </Routes>
      </Router>


  )
}

export default App;
