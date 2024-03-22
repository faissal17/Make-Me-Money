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
import ProblemeInfo from './shared/problemeShared/ProblemeInfo';
import ProjectInfo from './shared/ProjectShared/ProjectInfo';
import { PrivateRoutes } from './routes/PrivateRoutes';
import Profile from './components/user/Profile';
import Setting from './components/user/Setting';
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
            <Route path="/Profile/:id" Component={Profile} />
            <Route path="/Setting/:id" Component={Setting} />
            <Route path="/Experience/:id" Component={ArticleInfo} />
            <Route path="/Probleme/:id" Component={ProblemeInfo} />
            <Route path="/Project/:id" Component={ProjectInfo} />
          </Route>

          {/*End Home Routes*/}
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
