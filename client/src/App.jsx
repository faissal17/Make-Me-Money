import React from 'react';
import LandingPage from './components/MainApp/LandingPage';
import Register from './components/Authentication/Register';
import Login from './components/Authentication/Login';
import ForgotPassword from './components/Authentication/ForgotPassword';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={LandingPage} />
          <Route path="/Login" Component={Login} />
          <Route path="/Register" Component={Register} />
          <Route path="/ForgetPassword" Component={ForgotPassword} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
