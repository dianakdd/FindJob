import React from 'react'
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import { GlobalProvider } from './context/GlobalContext';
import Home from './pages/Home';
import JobVacancy from './pages/JobVacancy';
import LayoutLanding from './widget/LayoutLanding';
import LayoutDashboard from './widget/LayoutDashboard';
import Dashboard from './pages/Dashboard';
import ListJob from './pages/ListJob';
import CreateJob from './pages/CreateJob';
import Profile from './pages/Profile';
import ChangePassword from './pages/ChangePassword';
import Login from './pages/Login';
import Register from './pages/Register';
import Page404 from './pages/Page404';
import Cookies from 'js-cookie'
import DetailJob from './pages/DetailJob';

const App = () => {


  const LoginRoute = (props) => {
    if(Cookies.get('token') === undefined) {
      return props.children
    } else if(Cookies.get('token') !== undefined) {
      return <Navigate to={'/'}/>
    }
  }

  const DasboardRoute = (props) => {
    if(Cookies.get('token') === undefined) {
      return <Navigate to={'/'}/>
    } else if(Cookies.get('token') !== undefined) {
      return props.children
    }
  }

  return (
    <>
    <BrowserRouter>
      <GlobalProvider>
        <Routes>
    
          <Route path='/' element={ 
            <LayoutLanding>
              <JobVacancy /> 
            </LayoutLanding>
          }/>

          <Route path='/job-vacancy' element={ 
            <LayoutLanding>
              <JobVacancy /> 
            </LayoutLanding>
          }/>

          <Route path='/job-vacancy/detail/:idData' element={ 
            <LayoutLanding>
              <DetailJob /> 
            </LayoutLanding>
          }/>

          <Route path='/login' element={
            <LoginRoute>
              <LayoutLanding>
                <Login /> 
              </LayoutLanding>
            </LoginRoute>
          }/>

          <Route path='/register' element={ 
            <LayoutLanding>
              <Register /> 
            </LayoutLanding>
          }/>

          <Route path='/dashboard' element={ 
            <DasboardRoute>
              <LayoutDashboard>
                <Dashboard /> 
              </LayoutDashboard>
            </DasboardRoute>
          }/>

          <Route path='/dashboard/list-job' element={ 
            <DasboardRoute>
              <LayoutDashboard>
                <ListJob />
              </LayoutDashboard>
            </DasboardRoute>
            
          }/>

          <Route path='/dashboard/create-job' element={ 
            <DasboardRoute>
              <LayoutDashboard>
                <CreateJob />
              </LayoutDashboard>
            </DasboardRoute>
          }/>

          <Route path='dashboard/list-job/edit/:idData' element={ 
            <DasboardRoute>
              <LayoutDashboard>
                <CreateJob />
              </LayoutDashboard>
            </DasboardRoute>
            
          }/>

          <Route path='/dashboard/profile' element={
            <DasboardRoute>
              <LayoutDashboard>
                <Profile />
              </LayoutDashboard>
            </DasboardRoute>
            
          }/>

          <Route path='/dashboard/change-password' element={ 
            <DasboardRoute>
              <LayoutDashboard>
                <ChangePassword />
              </LayoutDashboard>
            </DasboardRoute>
            
          }/>

          <Route path='*' element={ 
            <LayoutLanding>
              <Page404 />
            </LayoutLanding>
          }/>

        </Routes>
      </GlobalProvider>
    </BrowserRouter>
    </>
  );
}

export default App;
