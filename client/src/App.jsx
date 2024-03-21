import React from 'react';
import LandingPage from './components/MainApp/LandingPage';
import Register from './components/Authentication/Register';
import Login from './components/Authentication/Login';
import ForgotPassword from './components/Authentication/ForgotPassword';
import ResetPassword from './components/Authentication/ResetPassword';
import ExperienceHome from './components/Experiences/ExperienceHome';
import ProblemeHome from './components/probleme/ProblemeHome';
import ProjectHome from './components/project/ProjectHome';
import ArticleInfo from './shared/ExperienceShared/ArticleInfo';
import { PrivateRoutes } from './routes/PrivateRoutes';
import profile from './components/user/profile';
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
          <Route path="/resetpassword" Component={ResetPassword} />

          {/*Home Routes*/}

          <Route element={<PrivateRoutes />}>
            <Route path="/Experience" Component={ExperienceHome} />
            <Route path="/Probleme" Component={ProblemeHome} />
            <Route path="/Project" Component={ProjectHome} />
            <Route path="/profile/:id" Component={profile} />
          </Route>

          {/*End Home Routes*/}
          <Route path="/info/:id" Component={ArticleInfo} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
