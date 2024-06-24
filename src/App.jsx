import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Home from './Home';
import EditInvoice from './EditInvoice';
import PendingCollection from './PendingCollection';
import Login from './Login';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  const handleLogin = () => {
    // Perform login logic here (e.g., API call, validation)
    // Assuming login is successful
    setIsLoggedIn(true);
  };

  return (
    <Router>
      <div className='grid-container'>
        {/* Conditionally render Header and Sidebar */}
        {isLoggedIn && (
          <>
            <Header OpenSidebar={OpenSidebar} />
            <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
          </>
        )}
        <div className='main-container'>
          <Routes>
            <Route path="/" element={<Login onLogin={handleLogin} />} />
            {/* Conditionally render Home, EditInvoice, and PendingCollection */}
            {isLoggedIn ? (
              <>
                <Route path="/home" element={<Home />} />
                <Route path="/editinvoice" element={<EditInvoice />} />
                <Route path="/pendingcollection" element={<PendingCollection />} />
              </>
            ) : (
              // Use a conditional Navigate component to redirect unauthorized users
              <Route path="*" element={<Navigate to="/" />} />
            )}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
