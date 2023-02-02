
import HomeOption from '../HomePage/homeOption';
import Nav from '../support/nav';
import Accountbody from './accountbody';
import AccountNav from './accountnav';
import AccountSell from './accountsell';
import Joblist from './joblist';
import { UseAuth } from '../../../context/context';
import React,{useState} from 'react';
import { doc,getDoc,getFirestore } from 'firebase/firestore';
import { app } from '../../firebase';
import JobsApplied from './JobsApplied';

const Account = () => {
    const [users,setuser] = useState([])
    const {uid} = UseAuth()
    const firestore = getFirestore(app)

    React.useEffect(() => {
        (async()=>{
            // getDoc(doc(firestore,"userInformation",uid).then(snapshot=>{
            //     const use = []
            //     use.push({...snapshot.data()})
            //     setuser(use)
            //     console.log(users)
              
            //  }))
            console.log(uid)
        })
         ()
        }, []);
    return (
        <div className='account'>
           <AccountNav/>
           <Accountbody/>
           <AccountSell/>
           <JobsApplied/>
          
            
        </div>
    );
}

export default Account;
