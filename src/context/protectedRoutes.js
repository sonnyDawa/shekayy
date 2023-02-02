import React from 'react';
import { useNavigate } from 'react-router-dom';
import { UseAuth } from './context';
import { Navigate } from 'react-router-dom';


    const ProtectedRoutes = ({ children }) => {
        const { users,verfied } = UseAuth();
    
     let daw = false
        if (!users) {
          console.log("Logged out")
          return <Navigate to='/' />;
          
        }

        else{
          console.log("Logged in")
          console.log(users)
        }
        return children;
      }

export default ProtectedRoutes;
