import React, { useState ,Component} from 'react';
import {createUserWithEmailAndPassword,Auth, signOut,sendEmailVerification} from"firebase/auth"
import { app, auth, db } from '../../firebase';
import { addDoc, doc,setDoc ,collection, getFirestore} from 'firebase/firestore';
import { getDownloadURL, listAll, uploadBytesResumable, uploadString } from 'firebase/storage';
import { useNavigate } from 'react-router-dom';
import Connectors from '../connectors/connectors';
import GoogleButton from 'react-google-button'
import { getStorage,ref,uploadBytes } from 'firebase/storage';
import { v4 } from 'uuid';
import { UseAuth } from '../../../context/context';
import { CountryDropdown,RegionDropdown  } from 'react-country-region-selector';
import { MultiSelect } from 'react-multi-select-component';





// 'file' comes from the Blob or File API



const SignUp = () => {

     const [lastname,setLastName] = useState(null)
     const [country,setCountry] = useState(null)
     const [jobTitle,setjobTitle] = useState(null)
     const [jobStudy,setjobStudy] = useState(null)
     const [EmploymentField,setEmploymentField] = useState(null)
     
     const [recentcompany,setRecentCompany] = useState(null)
     const [region,setRegion] = useState(null)
     const [password,setPassword] = useState(null)
     const [confirmPassword,setConfirmPassword] = useState(null)
     const [gender,setGender] = useState(null)
     const [email,setEmail] = useState(null)
     const [phoneNumber,setPhoneNumber] = useState(null)
     const [governmentId,setGovernmentId] = useState([])
     const [profilePhoto,setProfilePhoto] = useState(null)
     const [firstName,setFirstName] = useState(null)
     const [birthDate,setBirthDate] = useState(null)
     const [storagetext,setStorageText] = useState(null)
     const [storageError,setStorageError] = useState(null)
     const [passLength,setPassLength] = useState(null)
     const [passMatch,setPassMatch] = useState(null)
     const [uid,setUid] = useState("")
     const [progress,setprogress] = useState("")
     const storage = getStorage(app)
    const firestore = getFirestore(app)
    const navigate = useNavigate()
    const {createUser,users} = UseAuth();
    const [selected, setSelected] = useState([]);
      
    const options = [
     { label: "Amharic ", value: "Amharic" },
     { label: " Oromo  ", value: " Oromo " },
     { label: "Tigrigna ", value: "Tigrigna"},
   ];
console.log(firstName)
const submit = (e)=>{
     const reff = ref(storage, `governmentsonny/${profilePhoto.name}`)
     // const uploadImage= uploadBytesResumable(reff,profilePhoto)
   
     const uploadImage= uploadBytesResumable(reff,profilePhoto)
     // const downloadImg = getDownloadURL(uploadImage.snapshot.ref)
     e.preventDefault();


          createUserWithEmailAndPassword(auth,email,password).then(credentials=>{
               const db = getFirestore()

               const activityRef = collection(db, "Authentication")


               uploadImage.on('state_changed', 
               (snapshot) => {
                 // Observe state change events such as progress, pause, and resume
                 // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                 const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                 setprogress(progress)

               }, 
               (error) => {
                 console.log(error)
               }, 
               () => {
                 // Handle successful uploads on complete
                 // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                          getDownloadURL(uploadImage.snapshot.ref).then((downloadURL) => {

                 addDoc(collection(activityRef,credentials.user.uid, 'UserDetails'), {
 
                    firstName:firstName,
                    lastname:lastname,
                    email:email,
                    birthDate:birthDate,
                    phoneNumber:phoneNumber,
                    profilePhoto:downloadURL,
                   gender:gender,
                  //  FieldOfStudy:jobStudy,
                   jobTitle:jobTitle,
                   EmploymentField:EmploymentField,
                   recentcompany:recentcompany,
                   region:region,
                   birthDate:birthDate,
                    uid:credentials.user.uid
                   
                    
                  }).then(

                    setDoc(doc(db, 'Auth',credentials.user.uid), {
 
                         firstName:firstName,
                         lastname:lastname,
                         email:email,
                         birthDate:birthDate,
                         phoneNumber:phoneNumber,
                         profilePhoto:downloadURL,
                        gender:gender,
                       //  FieldOfStudy:jobStudy,
                        jobTitle:jobTitle,
                        EmploymentField:EmploymentField,
                        recentcompany:recentcompany,
                        region:region,
                        birthDate:birthDate,
                        uid:credentials.user.uid
                        
                         
                       }).then(
                         setDoc(doc(db, 'userChats',credentials.user.uid),{})
                       ).then(navigate("/account")).catch(e=>(console.log(e.message))) 



                  )
                   
               }

               )}
              
          )})
     

    
    

               // getDownloadURL(uploadImage.snapshot.ref).then((downloadURL) => {




                   
                            
                   
               //  })
               // setDoc(doc(firestore, "cities", users.uid), {
               //      firstName:"firstName",
               //      lastname:lastname,
               //    //   email:email,
               //    //   birthDate:birthDate,
               //    //   phoneNumber:phoneNumber,
               //    //   // profilePhoto:downloadURL,
               //    //  gender:gender,
               //    // //  FieldOfStudy:jobStudy,
               //    //  jobTitle:jobTitle,
               //    //  EmploymentField:EmploymentField,
               //    //  recentcompany:recentcompany,
               //    //  region:region,
               //    //  birthDate:birthDate,
               //    //   uid:credentials.user.uid
               //    }).then(console.log("added"))
         
     
          

    
              
          

    
   };


   
          
          
    


function readURL(input) {
   
   }

const handleSubmit = (e) =>{
     e.preventDefault()
     const spinner = document.getElementById("spinner")
     const signup2ndpage = document.getElementById("signup2nd")
     const signup = document.getElementById("signUpContainerpage")
     const loading = document.getElementById("loading")
     const signUpContainerlast = document.getElementById("signUpContainerlast")

     if (password === confirmPassword){
             
     setTimeout(() => {
        
        
     
          signup.style.width=(0)
          loading.style.zIndex=(100)
          loading.style.width=("50%")

          setTimeout(() => {
               

               setTimeout(() => {
                    loading.style.zIndex=(-100)
                    loading.style.width=(0)
                    signup2ndpage.style.width=("50%")
                    signup2ndpage.style.zIndex=(100)
               }, 3000);
          }, 3000);

         
      
          
     }, 1000);
   

     }

 
// 
     else{
          setPassMatch("password does not match")
         
         
     }
    

 

    

}

const handleJobLast = (e)=>{
     e.preventDefault()
     const spinner = document.getElementById("spinner")
     const signup2ndpage = document.getElementById("signup2nd")
     const signup = document.getElementById("")
     const loading = document.getElementById("loading")
     const signUpContainerlastt = document.getElementById("signUpContainerlast")

             
     setTimeout(() => {
        
        
     
          signup2ndpage.style.width=(0)
          loading.style.width=("60%")

          setTimeout(() => {
               

               setTimeout(() => {
                    loading.style.width=(0)
                    signUpContainerlastt.style.width=("60%")
               }, 3000);
          }, 3000);

         
      
          
     }, 1000)


}

function handleBackLast(e){
     e.preventDefault()
     const spinner = document.getElementById("spinner")
     const signup2ndpage = document.getElementById("signup2nd")
     const signup = document.getElementById("signUpContainerpage")
     const loadingg = document.getElementById("loading")
     const signUpContainerlastt = document.getElementById("signUpContainerlast")

     setTimeout(() => {
        
        
     
          signUpContainerlastt.style.width=(0)
          signUpContainerlastt.style.zIndex=(-200)
          loadingg.style.zIndex=(100)
          loadingg.style.width=("50%")

          setTimeout(() => {
               

               setTimeout(() => {
                    loadingg.style.width=(0)
                    loadingg.style.zIndex=(0)
                    signup2ndpage.style.zIndex=(100)
                    signup2ndpage.style.width=("50%")
               }, 1000);
          }, 1000);

         
      
          
     }, 1000);

}


function handleBackSecond(e){
     e.preventDefault()
     const spinner = document.getElementById("spinner")
     const signup2ndpage = document.getElementById("signup2nd")
     const signup = document.getElementById("signUpContainerpage")
     const loadingg = document.getElementById("loading")
     const signUpContainerlastt = document.getElementById("signUpContainerlast")

     setTimeout(() => {
 
          signup2ndpage.style.width=(0)
          signup2ndpage.style.zIndex=(-200)
          loadingg.style.zIndex=(100)
          loadingg.style.width=("50%")

          setTimeout(() => {
               

               setTimeout(() => {
                    loadingg.style.width=(0)
                    loadingg.style.zIndex=(0)
                    signup2ndpage.style.width=(0)
                    signup2ndpage.style.zIndex=(-10)
                    signup.style.zIndex=(100)
                    signup.style.width=("100%")
                    
               }, 1000);
          }, 1000);

         
      
          
     }, 1000);

}

function passwordFunction(e){
     
     setConfirmPassword(e.target.value)
     if (password == confirmPassword){
          setPassMatch("")
     }

}

function passwordLength(e){
     const signup = document.getElementById("signUpContainerpage")
     setPassword(e.target.value)
     console.log(password)
     
    
    
}


   
const handleSubmitLast = (e) =>{
     e.preventDefault()
     const spinner = document.getElementById("loading")
     const signupSecondPage = document.getElementById("signup2nd")
     const signup = document.getElementById("signUpContainerpage")
     const loadingg = document.getElementById("loading")
     const lastpage = document.getElementById("signUpContainerlast")

//      // if (password === confirmPassword && password > 8){
             
     setTimeout(() => {
        
        
     
          signupSecondPage.style.width=(0)
          signupSecondPage.style.zIndex=(-200)
          spinner.style.zIndex=(100)
          spinner.style.width=("50%")

          setTimeout(() => {
               

               setTimeout(() => {
                    spinner.style.width=(0)
                    spinner.style.zIndex=(0)
                    lastpage.style.zIndex=(100)
                    lastpage.style.width=("50%")
               }, 3000);
          }, 3000);

         
      
          
     }, 1000);
 }





     return (
        
          <div className='signup-page'>
               
               <div className='flex_'>
           
<div className='leftside__img-signup' >
<img className='leftside__imgsignup' src="https://firebasestorage.googleapis.com/v0/b/test-f59f4.appspot.com/o/users%2FSign%20up-cuate.svg?alt=media&token=ec81cc05-0629-49f8-a769-659ab18cdc5c" alt="" />
</div>


{/* <!-- This is an example component --> */}
<div className="rightside__img-signup  p-16">


<div className='flex items-center justify-center min-h-screen' id='loading'>
    <div style={{borderTopColor:"transparent",width:"70px",height:70}} className="w-8  border-4 border-blue-500 rounded-full animate-spin"></div>
    {/* <p className="ml-3" style={{fontSize:"30px"}}>Proccessing...</p> */}
</div>

	<form onSubmit={handleSubmit} id="signUpContainerpage">
    <div className="grid gap-6 mb-6 lg:grid-cols-2">
        <div>
            <label htmlFor="first_name" className="capitalize block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">First name</label>
            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 capitalize block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Abebe"onChange={e=>setFirstName(e.target.value)} />
        </div>
        <div>
            <label htmlFor="last_name" className="capitalize block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Last name</label>
            <input type="text" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 capitalize block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Solomon" onChange={e=>setLastName(e.target.value)} />
        </div>
        <div>
            
            <label htmlFor="company" className="capitalize block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Birth Date</label>
           
      <input type="date" id="date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 capitalize block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  onChange={e=>setBirthDate(e.target.value)}/>
                        
                      </div>   
        <div>
            <label htmlFor="phone" className="capitalize block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Phone number</label>
            <input type="tel" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 capitalize block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="+251 90-123-4567" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"onChange={e=>setPhoneNumber(e.target.value)} />
        </div>
        
        {/* <div>
            <label htmlFor="website" className="capitalize block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Website URL</label>
            <input type="url" id="website" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 capitalize block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="flowbite.com" />
        </div>
        <div>
            <label htmlFor="visitors" className="capitalize block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Unique visitors (per month)</label>
            <input type="number" id="visitors" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 capitalize block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" />
        </div> */}
    </div>
    <div className="mb-8 top-padding">
        <label htmlFor="email" className="capitalize block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email address</label>
        <input onChange={e=>setEmail(e.target.value)}type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" />

    </div> 
    <div className="mb-8">
        <label htmlFor="password" className="capitalize block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Password</label>
       
        <input onChange={e=>setPassword(e.target.value)} type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 capitalize block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" />
        {passLength &&  <p className='error capitalize block mb-2 text-sm  capitalize'><i className="fa-solid fa-triangle-exclamation "></i> Password Must be equal to 8.</p>}
    </div> 
    <div className="mb-6">
        <label htmlFor="confirm_password" className="capitalize block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Confirm password</label>
        <input onChange={e=>passwordFunction(e)}type="password" id="confirm_password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 capitalize block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" />
   {passMatch &&      <p className='error capitalize block mb-2 text-sm  capitalize'><i className="fa-solid fa-triangle-exclamation "></i> Please enter the same password.</p>
   }
    </div> 
    {/* <div className="flex items-start mb-6">
        <div className="flex items-center h-5">
        <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" />
        </div>
        <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-400">I agree with the <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a>.</label>
    </div> */}
    <button  type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Next</button>
</form>

	

<form id="signup2nd" className='p-16'>

    <div className="mb-6">
        <label  className="capitalize block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your Photo</label>
        

{/* <!-- This is an example component --> */}
<div className="max-w-2xl mx-auto">

<input onChange={e=>setProfilePhoto(e.target.files[0])}className="capitalize block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file"/>


    
</div>
    
    
    </div> 

    <div className="mb-6">
        <label htmlFor="confirm_password" className="capitalize block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Government Id </label>
        

{/* <!-- This is an example component --> */}
<div className="max-w-2xl mx-auto">

<input onChange={e=>setGovernmentId(e.target.files[0])} className="capitalize block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file"/>


    
</div>
    
    
    </div> 

    <div className='mb-6'>
            <label htmlFor="last_name" className="capitalize block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Region</label>
            <RegionDropdown
                         classes="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 capitalize block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        country="Ethiopia"
                        value={""}
                        onChange={value=>{setRegion(value)}}
                        /></div>
    <div className="mb-6">
    <label  htmlFor="password" className="capitalize block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Language</label>
   

      <MultiSelect
      
      className='bg-gray-50  text-gray-900'
        options={options}
        value={selected}
        onChange={setSelected}
        labelledBy="Select your language"
        
      />
       
   
   
   
    </div> 


    <div className="flex items-start mb-6">
        <div className="flex items-center h-5">
        <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" />
        </div>
        <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-400 capitalize">I filled out the fields above according to my government ID.</label>
    
    </div>
    <button  onClick={handleBackSecond} className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 capitalize margin">Back</button>
    
    <button  onClick={handleSubmitLast} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Next</button>
</form>




<form  id="signUpContainerlast"  className='p-16 '>
    <div className="grid gap-6 mb-6 lg:grid-cols-2">
   


       
   
   
   
    </div> 
    <div className="mb-6">
        <label htmlFor="confirm_password" className="capitalize block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Field of study</label>
        

{/* <!-- This is an example component --> */}
<div className="max-w-2xl mx-auto">

<input onChange={e=>setjobStudy(e.target.value)} className="capitalize block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400"  type="text"/>


    
</div>
    
    
    </div> 

    <div className="mb-6">
        <label htmlFor="confirm_password" className="capitalize block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Field of study</label>
        

{/* <!-- This is an example component --> */}
<div className="max-w-2xl mx-auto">

<input onChange={e=>setjobStudy(e.target.value)} className="capitalize block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400"  type="text"/>


    
</div>
    
    
    </div> 


    <div className="mb-6">
        <label htmlFor="confirm_password" className="capitalize block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Recent company that you worked for</label>
        

{/* <!-- This is an example component --> */}
<div className="max-w-2xl mx-auto">

<input onChange={e=>setRecentCompany(e.target.value)} className="capitalize block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400"  type="text"/>


    
</div>
    
    
    </div> 


 


    <div className="flex items-start mb-6">
        <div className="flex items-center h-5">
        <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" />
        </div>
        <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-400 capitalize">I filled out the fields above according to my government ID.</label>
    </div>
    <button  onClick={handleBackLast} className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 capitalize margin">Back</button>

    <button  onClick={submit}  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 capitalize">Sign up</button>
 {progress &&    <div class="w-full bg-gray-200 rounded-full padding-progress">
  <div class="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-l-full" style={{width:progress + "%"}}> {progress}</div>
</div>}
</form>


     

</div>


</div>     
{/* 




 
          <div className='signUpContainer' >
               <div className='left__side'>
               <h1 className="logo signup__logo">logo</h1>
                    <div className='signup__leftside-container'>
                         <h2 className='signup__leftside-title'>Remote Jobs with leading companies</h2>
                         <ul className="signup__list">
                              <li className="signup__list-links">long term jobs</li>
                              <li className="signup__list-links">Friendly community</li>
                              <li className="signup__list-links">awesome support</li>
                         </ul>
                    </div>
               </div> */}
{/* 
               <div id="loading"className='loading'><i className="fa-solid fa-spinner"></i></div>
               <form className="signUp__form" onSubmit={handleSubmit} id="signUpContainer">
                    <div className='signup__btns'>
                         <h1 className='signup__btns-header'>Let's get started</h1>
                  
                    </div>
                  
               
                    <div className='signup__wrapper'>
                         <label className='signup__label'>First Name</label><br />
                         <input type="text" className='signup__input' required/>

                    </div>
                    <div className='signup__wrapper'>
                         <label className='signup__label'>Last Name</label><br />
                         <input type="text" className='signup__input' onChange={e=>{setLastName(e.target.value)}} required/>

                    </div>
                    <div className='signup__wrapper'>
                         <label className='signup__label'>Email</label><br />
                         <input type="text" className='signup__input' onChange={e=>{setEmail(e.target.value)}} required />

                    </div>

                    <div className='signup__wrapper'>
                         <label className='signup__label'>Password</label><br />
                         <input type="text" className='signup__input' onChange={e=>{setPassword(e.target.value)}} required/>

                    </div>
                    <p >{uid && <p className='error'>{uid}</p>}</p>
                    <p >{pass && <p className='error'>{pass}</p>}</p>
                    <div className='signup__wrapper'>
                         <label className='signup__label'>confirm Password</label><br />
                         <input type="text" className='signup__input' onChange={e=>{setConfirmPassword(e.target.value)}} />

                    </div>
                    <button type="submit" className='input__submitbtn' ><i id="spinner"className="fa-sharp fa-solid fa-gear"></i> Next</button>

               </form>
               </div>
               <div className='signup2nd' id='signup2nd'>
               <div className='break'>
                   
                     {authtext && <p>{authtext}</p>}
                 {passMatch && <p>{passMatch}</p>}
                 {storagetext && <p>{storagetext}</p>}
                 {storageError && <p>{storageError}</p>}
                    </div>
                    <div className='signup__wrapper'>
                         <label className='signup__label'>Phone number</label><br />
                         <input type="text" className='signup__input' onChange={e=>{setPhoneNumber(e.target.value)}} required/>

                    </div>
                    <div className='signup__wrapper'>
                         <label className='signup__label'>Select Region</label><br />
                         {/* <input type="date" className='signup__input' onChange={e=>{setBirthDate(e.target.value)}} required/> */}
                        {/* <div className='country__select'>
                         <RegionDropdown
                         classes='signup__input'
                        country="Ethiopia"
                        value={region}
                        onChange={value=>{setRegion(value)}}
                        />
                        </div>
                    </div>
                    <div className="controls signup__wrapper ">
      <h1  className='signup__label radio'>Gender</h1>
      <select className='signup__input ' required
           onChange={e=>setGender(e.target.value)} >
               <option className='signup__input'>Choose your gender</option>
                        <option className='signup__input'value="Male">Male</option>
                        <option className='signup__input'value="female">female</option>
                    
        
        </select>
  </div>

                    <div className='signup__wrapper '>
                         <label className='signup__label'>Government Id</label><br />
                        
                        
                              
                              <input type="file" id="pic" placeholder='' className=' govid'onChange={e=>setGovernmentId(e.target.files[0])} required />
                         
                    </div>

                 

             
   

                    <button type="submit" onClick={handleSubmitLast} className='input__submitbtn' ><i id="spinner"className="fa-sharp fa-solid fa-gear"></i> Next</button>

                    
               </div> */} 


               {/* <form className="signup2nd" onSubmit={handleJobLast} id="signUpContainerlast">
                    <div className='signup__btns'>
                         <h1 className='signup__btns-header'>Let's get started</h1>
                  
                    </div>
                  
               
                    <div className='signup__wrapper'>
                         <label className='signup__label'>What did you study? </label><br />
                         <input type="text" className='signup__input' onChange={e=>{setjobStudy(e.target.value)}} required/>

                    </div>
                    <div className='signup__wrapper'>
                         <label className='signup__label'>Recent job title</label><br />
                         <input type="text" className='signup__input' onChange={e=>{setjobTitle(e.target.value)}} required/>

                    </div>
                    <div className='signup__wrapper'>
                         <label className='signup__label'>Employment type</label><br />
                         <select className='signup__input ' required
           onChange={e=>setEmploymentField(e.target.value)} >
                <option className='signup__input'value="select-one">Select One</option>
                <option className='signup__input'value="contract">Contract</option>
                <option className='signup__input'value="freelance">Freelance</option>
                <option className='signup__input'value="Full-time">Full-time</option>
                <option className='signup__input'value="internship">Internship</option>
                <option className='signup__input'value="part-time">Part-time</option>
              
               <option className='signup__input'value="selfEmployed">Self Employed</option>
                       
                       
                        
                       
                        
                        
                       
                    
        
        </select>
                    </div>

                    <div className='signup__wrapper'>
                         <label className='signup__label'>Recent company you worked for?</label><br />
                         <input type="text" className='signup__input' onChange={e=>{setRecentCompany(e.target.value)}} required/>

                    </div>
                 
                  
                    <button type="submit" className='input__submitbtn' ><i id="spinner"className="fa-sharp fa-solid fa-gear"></i> Next</button>
   
               </form>


               
               <form className="signup2nd" onSubmit={submit} id="signUpjoblast">
                    <div className='signup__btns'>
                         <h1 className='signup__btns-header'>Let's get started</h1>
                  
                    </div>
             <div>
               <input type="radio" placeholder='sonny' name='s' value="unchecked"  />
             </div>

                  <button type="submit" className='input__submitbtn' ><i id="spinner"className="fa-sharp fa-solid fa-gear"></i> Next</button>
   
               </form> */}


          </div>
     );
}

export default SignUp;
