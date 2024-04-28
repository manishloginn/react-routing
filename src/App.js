import React, { createContext, useEffect, useState } from 'react';
import { BrowserRouter, Navigate, Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
import Signup from './Component/Signup';
import Profile from './Component/Profile';
import Nav from './Component/Nav';



export const AuthContext = createContext()

const home = () => {

  return (
    <>
      <div>
        <Nav />
      </div>
      <div>
        <Outlet />
      </div>
    </>
  )
}


function App() {

  const [signup, setsignup] = useState(false);
  const [work, setwork] = useState(false);
  // const [userdata, setuserdata] = useState(null);
  const [userdata, setuserdata] = useState([]);

  useEffect(() => {
    const Token = localStorage.getItem('token');
    if (Token) {

      setsignup(true)
      // debugger
      // const storedata = localStorage.getItem('userdata')
      // if(userdata){
      //   setuserdata(JSON.parse(storedata))
      // }
      setuserdata(JSON.parse(Token))
    }
  }, [work])

  const changework = () => {
    return setwork(true)
  }

  const logout = () => {

    localStorage.removeItem('token'); // Remove token from local storage
    localStorage.removeItem('userData');
    setsignup(false)
  }



  return (
    <div style={{ width: "100vw", height: "100vh", backgroundColor: "#000" }}>
      <AuthContext.Provider value={{ changework, logout }}>
        <BrowserRouter>
          <Routes>
            <Route path='/' Component={home}>
              <Route path='/' element={signup ? <Navigate to="/Profile" /> : <Signup />} />
              <Route path='/Profile' element={!signup ?<Navigate to="/" /> : <Profile userdata={userdata} />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
