import React,{useState} from 'react';
import { UseAuth } from '../../../context/context';
import { doc,getDoc,getFirestore } from 'firebase/firestore';
import { app } from '../../firebase';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { auth } from '../../firebase';
import { getAuth, signOut } from 'firebase/auth';
import AccountSell from './accountsell';
import JobsApplied from './JobsApplied';


const Accountbody = () => {
    // const [users,setuser] = useState([])
    const {firstName, logOut,users} = UseAuth()
    const firestore = getFirestore(app)
    const auth = getAuth()
    

    

    const navigate = useNavigate()
  
    

    

    return (
        <div className='account__body'>
           <div className='account__bodywrapper'>
{firstName && <h1 className='account__body-header'>Welcome {firstName} <img className='accountbody__smileimg' src="https://firebasestorage.googleapis.com/v0/b/test-f59f4.appspot.com/o/users%2Fundraw_smiley-face.svg?alt=media&token=f6202887-aa54-46c6-bc6c-90c100af6685" alt="smile" /></h1> }

           
           <div className='account__body--search-wrapper'>

           <input type="search" className='account__search'  placeholder='Type to search'/>
           
            <select  className='account-search__option' name="" id="">
             
                <option className='optiond' value="BuyItems">Buy Items</option>
                <option className='optiond' value="FindJobs">Find Jobs</option>
                
            </select>
  
            <button >Logout</button>
           </div>
            
           </div>

           

           <div className='rightside__accountbody'>
            <img className='accountbody__img' src="https://firebasestorage.googleapis.com/v0/b/test-f59f4.appspot.com/o/users%2Fundraw_opinion_re_jix4.svg?alt=media&token=b9db85f4-1181-49e0-b67b-76314a0a127f" alt="" />

           </div>
           
     

            
        </div>
    );
}

export default Accountbody;
