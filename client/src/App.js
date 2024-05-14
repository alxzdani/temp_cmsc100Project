import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useEffect } from "react";
import './App.css';
import LandingPage from "./pages/LandingPage";
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import ShopPage from './pages/ShopPage';
import Dashboard from './pages/adminPages/admin-dashboard';
import ShoppingCart from "./pages/ShoppingCart";

//log out implemented but not in proper page

function App() {
  const isUserLogIn = !!localStorage.getItem('token')
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
    
        {/* if user not logged in they cannot access:
              - shopping cart
              - shop
            
            if user customer
              - they cannot access adminpage  
        
        */}
        {isUserLogIn && <Route path="/shop" element={<ShopPage />}/>}

        {isUserLogIn && <Route path="/cart" element={<ShoppingCart />}/>}

        {/* admin dashboard should be protected */}
        {isUserLogIn && <Route path="/admin-dashboard" element={<Dashboard />} />}

      </Routes>
    </div>
  );
}

export default App;
