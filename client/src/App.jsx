import './App.css';
import './index.css';
import React from 'react';
import LandingPage from './components/MainApp/LandingPage';
import Register from './components/Authentication/Register';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={LandingPage} />
          <Route path="/Register" Component={Register} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
