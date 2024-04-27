import React, { createContext, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Signup from './Component/Signup';
import Profile from './Component/Profile';
import Nav from './Component/Nav';



export const AuthContext = createContext()

function App() {

  const [signup, setsignup] = useState(() => Boolean(localStorage.getItem('token')));



  return (
    <div style={{ width : "100vw", height: "100vh", backgroundColor: "#000"}}>
      <Nav  />
      <AuthContext.Provider value={{ signup, setsignup }}>
        <Signup>
          <BrowserRouter>
            <Routes>
              <Route path='/Profile' Component={Profile} />
              {/* <Route path='*' element={<NotFound />} /> */}
            </Routes>
          </BrowserRouter>
        </Signup>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
