import React,{useState} from 'react';
import { app } from '../../firebase';
import { getFirestore } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { getStorage } from 'firebase/storage';
import { UseAuth } from '../../../context/context';
import GoogleButton from 'react-google-button';
import { Link } from 'react-router-dom';

const SignUpEmployer = () => {
    const [lastname,setLastName] = useState(null)
    const [password,setPassword] = useState(null)
    const [confirmPassword,setConfirmPassword] = useState(null)
    const [email,setEmail] = useState(null)
    const [phoneNumber,setPhoneNumber] = useState(null)
    const [governmentId,setGovernmentId] = useState(null)
    const [firstName,setFirstName] = useState(null)
    const [birthDate,setBirthDate] = useState(null)
    const [storagetext,setStorageText] = useState(null)
    const [storageError,setStorageError] = useState(null)
    const [authtext,setAuthText] = useState(null)
    const [authError,setAuthError] = useState(null)
    const [uid,setUid] = useState(2)
    const storage = getStorage(app)
   const firestore = getFirestore(app)
   const navigate = useNavigate()
   const {createUser,user} = UseAuth();


   const company = (e) =>{
     e.preventDefault()
     const spinner = document.getElementById("loading")
     const signupSecondPage = document.getElementById("signup2nd")
     const signup = document.getElementById("signUpContainerpage")
     const loading = document.getElementById("loading")
     const lastpage = document.getElementById("signUpContainerlast")
 
    
 
 
   
     setTimeout(() => {
         
         
      
      signup.style.width=(0)
      loading.style.zIndex=(100)
      loading.style.width=("50%")
 
      setTimeout(() => {
           
 
           setTimeout(() => {
              navigate("/company")
           }, 3000);
      }, 3000);
 
     
  
      
 }, 1000);
    
 }

   const myself = (e) =>{
    e.preventDefault()
    const spinner = document.getElementById("loading")
    const signupSecondPage = document.getElementById("signup2nd")
    const signup = document.getElementById("signUpContainerpage")
    const loading = document.getElementById("loading")
    const lastpage = document.getElementById("signUpContainerlast")

   


  
    setTimeout(() => {
        
        
     
     signup.style.width=(0)
     loading.style.zIndex=(100)
     loading.style.width=("50%")

     setTimeout(() => {
          

          setTimeout(() => {
             navigate("/individual")
          }, 3000);
     }, 3000);

    
 
     
}, 1000);
   
}
    return (
        <div className='signup-page '>

                     
             <div className='flex_ '>
             <div className='leftside__img-signup' >
<img className='leftside__imgsignup' src="https://firebasestorage.googleapis.com/v0/b/test-f59f4.appspot.com/o/users%2FSign%20up-cuate.svg?alt=media&token=ec81cc05-0629-49f8-a769-659ab18cdc5c" alt="" />
</div>
             
<div className="rightside__img-signup   bg-black p-16">     
<div className='flex items-center justify-center min-h-screen' id='loading'>
   
    <div style={{borderTopColor:"transparent",width:"70px",height:70}} className="w-8  border-4 border-blue-500 rounded-full animate-spin"></div>
    {/* <p className="ml-3" style={{fontSize:"30px"}}>Proccessing...</p> */}
</div>

             
             <form id="signUpContainerpage" className='middle'>
                  <div className='signup__btns'>
                       <h1 className='mb-4 text-center text-2xl text-gray-900 font-bold md:text-4xl'>Who are you hiring for?</h1>
                  {/* <GoogleButton
                  label="Sign Up with google"/> */}
                  </div>
             
          
             
                  <div className='signup__wrapper'>
                          <button  onClick={myself} className="hireme_btn text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto  text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Myself</button>
<br />
                 

                  </div>
                  <div className='signup__wrapper'>
                   <button  onClick={company} className="hireme_btn text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto  text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Company</button>

                       
                     
                  </div>
               

             </form>
             </div>
             </div>
             </div>
             


             


             
           
       

    );
}

export default SignUpEmployer;
