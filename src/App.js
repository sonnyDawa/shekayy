import logo from './logo.svg';
import './App.css';

import UploadForm from './firebase/components/uploadForm';
import Progress from './firebase/components/progress';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignIn from './firebase/components/Authentication/SignIn';
import SignUp from './firebase/components/Authentication/signUp';
import Home from './firebase/components/HomePage/home';

import Account from './firebase/components/Account/account';

import Hire from './firebase/components/Account/hire';
import  Context  from './context/context';
import AccountDetail from './firebase/components/Account/accountDetail';
import ProtectedRoutes from './context/protectedRoutes';
import SignUpEmployer from './firebase/components/Authentication/signUpEmployer';
import Employee from './firebase/components/Authentication/Employee';
import Company from './firebase/components/Authentication/company';
import Jobs from './firebase/components/Jobs/jobs';
import Accountemployer from './firebase/components/AccountEmployer/accountemployer';
import Signupprice from './firebase/components/PriceTable.jsx/signupprice';
import AccountMain from './firebase/components/Account/accountMain';
import Support from './firebase/components/support/support';
import ActiveUser from './firebase/components/Account/activeUser';
import Message from './firebase/components/message/message';

function App() {
  return (
<Context>
     <>

      <Routes>
        <Route element={<SignIn /> } path="/signin"/>
        <Route element={<Message/> } path="/message"/>
        <Route  element={<SignUp/> } path="/signup"/> 
        <Route  element={<SignUpEmployer/> } path="/employer"/> 
        <Route  element={
           <ProtectedRoutes>
           <Accountemployer/>
          </ProtectedRoutes>
      } path="/dashbord"/> 
        <Route  element={<Employee/> } path="/individual"/> 
        <Route  element={<Company/> } path="/company"/> 
        <Route  element={<Home/>} path="/"/>
        <Route  element={<Hire/>} path="/hire"/>
        <Route  element={<Jobs/>} path="/jobs"/>
        <Route  element={<Signupprice/>} path="/price"/>
        <Route  element={<Support/>} path="/support"/>
        <Route  element={<ActiveUser/>} path="/users"/>

        <Route
            path='/profile'
            element={
              <ProtectedRoutes>
               {/* <Account/> */}
               <AccountDetail/>
              </ProtectedRoutes>
            }
          />
       
        <Route
            path='/account'
            element={
              <ProtectedRoutes>
               {/* <Account/> */}
               <AccountMain/>
              </ProtectedRoutes>
            }
          />
        
     
      </Routes>
      </>
    </Context>
      
    
  
  );
}

export default App;
