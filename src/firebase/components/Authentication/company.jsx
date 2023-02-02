import React,{useState} from 'react';
import { app } from '../../firebase';
import { getFirestore } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { getStorage } from 'firebase/storage';
import { UseAuth } from '../../../context/context';
import GoogleButton from 'react-google-button';
import { Link } from 'react-router-dom';
import { ref,uploadBytesResumable } from 'firebase/storage';
import { MultiSelect } from 'react-multi-select-component';

import { CountryDropdown,RegionDropdown  } from 'react-country-region-selector';

const Company = () => {
    const [Companystatus,setCompanystatus] = useState(null)
const [selected, setSelected] = useState([]);
const [jobStudy,setjobStudy] = useState(null)
const [recentcompany,setRecentCompany] = useState(null)
const [lastname,setLastName] = useState(null)

const [region,setRegion] = useState(null)
const [jobTitle,setjobTitle] = useState(null)
const [EmploymentField,setEmploymentField] = useState(null)
  const [password,setPassword] = useState(null)
    const [companyPassword,setCompanyPassword] = useState(null)
    const [confirmPassword,setConfirmPassword] = useState(null)
    const [Companyemail,setCompanyemail] = useState(null)
    const [phoneNumber,setPhoneNumber] = useState(null)
    const [businessLicense,setbusinessLicense] = useState(null)
    const [email,setEmail] = useState(null)
    const [governmentId,setGovernmentId] = useState(null)
    const [profilePhoto,setProfilePhoto] = useState(null)
    const [CompanyName,setCompanyName] = useState(null)
    const [birthDate,setBirthDate] = useState(null)
    const [storagetext,setStorageText] = useState(null)
    const [storageError,setStorageError] = useState(null)
    const [authtext,setAuthText] = useState(null)
    const [authError,setAuthError] = useState(null)
    const [gender,setGender] = useState(null)
    const [firstName,setFirstName] = useState(null)
    const [uid,setUid] = useState(2)
    const storage = getStorage(app)
   const firestore = getFirestore(app)
   const navigate = useNavigate()
   const {createUser,user,createCompany,createIndividualUser} = UseAuth();

           
   const options = [
     { label: "Amharic ", value: "Amharic" },
     { label: " Oromo  ", value: " Oromo " },
     { label: "Tigrigna ", value: "Tigrigna"},
   ];
 
    function passwordFunction(e){
      
     setConfirmPassword(e.target.value)
     // if (password == confirmPassword){
     //      setPassMatch("")
     // }
 
 }
 
 function passwordLength(e){
     const signup = document.getElementById("signUpContainerpage")
     setCompanyPassword(e.target.value)
     console.log(password)
     
    
    
 }
 
 const handleSubmit = (e) =>{
     e.preventDefault()
     const spinner = document.getElementById("spinner")
     const signup2ndpage = document.getElementById("signup2nd")
     const signup = document.getElementById("signUpContainerpage")
     const loading = document.getElementById("loading")
     const signUpContainerlast = document.getElementById("signUpContainerlast")
 
     // if (password === confirmPassword){
             
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
   
 
     // }
 
 
 // // 
 //      else{
 //           setPassMatch("password does not match")
         
 //      }
    
 
 
 
    
 
 }
 
 
 
 const submit = (e)=>{
     const storageRef = ref(storage, "governmentI/");
      const img =  uploadBytesResumable(storageRef,governmentId)
      e.preventDefault();
 
 
 
      
 
     
           try {
             createIndividualUser(email,password,firstName,lastname,birthDate,phoneNumber,governmentId,storageRef,profilePhoto,gender,img,jobStudy,jobTitle,EmploymentField,recentcompany,region);
               
           }
 
         
               
               catch (e) {
               
                 console.log(e.message);
               }
      
 
     
    };
 
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
     
<div className='signup-page '>
              
              <div className='flex_' >
             
             
              <div className='leftside__img-signup' >
<img className='leftside__imgsignup' src="https://firebasestorage.googleapis.com/v0/b/test-f59f4.appspot.com/o/users%2FSign%20up-cuate.svg?alt=media&token=ec81cc05-0629-49f8-a769-659ab18cdc5c" alt="" />
</div>
             
<div className="rightside__img-signup   bg-black p-16">     
<div className='flex items-center justify-center min-h-screen' id='loading'>
   
    <div style={{borderTopColor:"transparent",width:"70px",height:70}} className="w-8  border-4 border-blue-500 rounded-full animate-spin"></div>
    {/* <p className="ml-3" style={{fontSize:"30px"}}>Proccessing...</p> */}
</div>



<form onSubmit={handleSubmit} id="signUpContainerpage">
   
        <div className="mb-6">
            <label htmlFor="CompanyName" className="capitalize block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Company Name</label>
            <input type="text" id="CompanyName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 capitalize block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Abebe"onChange={e=>setCompanyName(e.target.value)} />
        </div>
   

  
        
        {/* <div>
            <label htmlFor="website" className="capitalize block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Website URL</label>
            <input type="url" id="website" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 capitalize block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="flowbite.com" />
        </div>
        <div>
            <label htmlFor="visitors" className="capitalize block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Unique visitors (per month)</label>
            <input type="number" id="visitors" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 capitalize block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" />
        </div> */}
   
    <div className="mb-6">
        <label htmlFor="email" className="capitalize block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Company Status</label>
        <select className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 capitalize block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='DAW'required
           onChange={e=>setCompanystatus(e.target.value)} >
                        <option className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 capitalize block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'value="Verfied">Verfied</option>
                        <option className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 capitalize block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'value="notverfied">Not Verfied</option>
                        {/* <option className='signup__input' value="Part-time">Part-time</option>
                        <option className='signup__input' value="permanent">permanent</option> */}
        
        </select>
    </div> 

    <div className="mb-6">
            <label htmlFor="phone" className="capitalize block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Company Email</label>
            <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 capitalize block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="123-45-678" onChange={e=>setCompanyemail(e.target.value)} />
        </div>
    <div className="mb-6">
        <label htmlFor="password" className="capitalize block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Password</label>
       
        <input onChange={e=>setCompanyPassword(e.target.value)} type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 capitalize block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" />
        {/* {passLength &&  <p className='error capitalize block mb-2 text-sm  capitalize'><i className="fa-solid fa-triangle-exclamation "></i> Password Must be equal to 8.</p>} */}
    </div> 
    <div className="mb-6">
        <label htmlFor="confirm_password" className="capitalize block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Confirm password</label>
        <input onChange={e=>passwordFunction(e)}type="password" id="confirm_password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 capitalize block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" />
   {/* {passMatch &&      <p className='error capitalize block mb-2 text-sm  capitalize'><i className="fa-solid fa-triangle-exclamation "></i> Please enter the same password.</p> */}
   {/* } */}
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
        <label htmlFor="confirm_password" className="capitalize block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Contact's Name </label>
        

{/* <!-- This is an example component --> */}
<div className="max-w-2xl mx-auto">

<input onChange={e=>setCompanyName(e.target.value)} className="capitalize block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400"  type="text"/>


    
</div>
    
    
    </div> 

    <div className='mb-6'>
            <label htmlFor="phone" className="capitalize block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Company's Mobile</label>
            <input type="tel" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 capitalize block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"onChange={e=>setPhoneNumber(e.target.value)} />
        </div>

 


    <div className='mb-6'>
            <label htmlFor="last_name" className="capitalize block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">company's Region</label>
            <RegionDropdown
                         classes="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 capitalize block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        country="Ethiopia"
                        value={region}
                        onChange={value=>{setRegion(value)}}
                        /></div>

    
    <div className="mb-6">
        <label  className="capitalize block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Business Licence</label>
        

{/* <!-- This is an example component --> */}
<div className="max-w-2xl mx-auto">

<input onChange={e=>setbusinessLicense(e.target.files[0])}className="capitalize block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file"/>


    
</div>
    
    
    </div> 


    <div className="flex items-start mb-6">
        <div className="flex items-center h-5">
        <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" />
        </div>
        <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-400 capitalize">I filled out the fields above according to my Bussiness Licence.</label>
    
    </div>
    <button  onClick={handleBackSecond} className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 capitalize margin">Back</button>
    
    <button  onClick={handleSubmitLast} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Next</button>
</form>


<form  id="signUpContainerlast"  className='p-16 bg-black'>
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
</form>


</div>
</div>

</div>






     //               <div id="loading"className='loading'><i className="fa-solid fa-spinner"></i></div>
     //               <form className="signUp__form" onSubmit={handleSubmit} id="signUpContainer">
     //                    <div className='signup__btns'>
     //                         <h1 className='signup__btns-header'>Enter Company Details</h1>
                     
     //                    </div>
                 
                   
     //                    <div className='signup__wrapper'>
     //                         <label className='signup__label'>Company Name</label><br />
     //                         <input type="text" className='signup__input' onChange={e=>{setCompanyName(e.target.value)}} />
      
     //                    </div>
     //                    <div className='signup__wrapper'>
     //                         <label className='signup__label'>Company Status</label><br />
     //                         <div className='jobtitile-wrapper'>
               
     //            <select className='signup__input' placeholder='DAW'required
     //       onChange={e=>setCompanystatus(e.target.value)} >
     //                    <option className='signup__input'value="Verfied">Verfied</option>
     //                    <option className='signup__input'value="notverfied">Not Verfied</option>
     //                    {/* <option className='signup__input' value="Part-time">Part-time</option>
     //                    <option className='signup__input' value="permanent">permanent</option> */}
        
     //    </select>
     //        </div>
     //                    </div>
     //                    <div className='signup__wrapper'>
     //                         <label className='signup__label'>Company Email</label><br />
     //                         <input type="address" className='signup__input' onChange={e=>{setCompanyemail(e.target.value)}} />
      
     //                    </div>
      
     //                    <div className='signup__wrapper'>
     //                         <label className='signup__label'>Password</label><br />
     //                         <input type="text" className='signup__input' onChange={e=>{setCompanyPassword(e.target.value)}} />
      
     //                    </div>
     //                    <div className='signup__wrapper'>
     //                         <label className='signup__label'>confirm Password</label><br />
     //                         <input type="text" className='signup__input' onChange={e=>{setConfirmPassword(e.target.value)}} />
      
     //                    </div>
     //                    <button type="submit" className='input__submitbtn' ><i id="spinner"class="fa-sharp fa-solid fa-gear"></i> Next</button>
      
     //               </form>
                 
                   
     //               <div className='signup2nd' id='signup2nd'>
     //               <h1 className='signup__btns-header'>Enter your information</h1>
     //               <div className='break'>
                       
     //                     {authtext && <p>{authtext}</p>}
     //                 {authError && <p>{authError}</p>}
     //                 {storagetext && <p>{storagetext}</p>}
     //                 {storageError && <p>{storageError}</p>}
     //                    </div>

                        
     //                    <div className='signup__wrapper'>
     //                         <label className='signup__label'>Contact Name</label><br />
     //                         <input type="email" className='signup__input' onChange={e=>{setBirthDate(e.target.value)}} />
      
     //                    </div>
     //                    <div className='signup__wrapper'>
     //                         <label className='signup__label'>Company Phone number</label><br />
     //                         <input type="text" className='signup__input' onChange={e=>{setPhoneNumber(e.target.value)}} />
      
     //                    </div>
                        
     //                    {/* <div className='signup__wrapper'>
     //                         <label className='signup__label'>Business License</label><br />
                            
                           
                                  
     //                              <input type="file"  className='signup__input ' onChange={e=>setbusinessLicense(e.target.files[0])} />
                          
     //                    </div> */}
     //                    <div className='signup__wrapper'>
     //                         <label className='signup__label'>Contact Email</label><br />
     //                         <input type="email" className='signup__input' onChange={e=>{setBirthDate(e.target.value)}} />
      
     //                    </div>

      
      
                     
      
      
     //                    <button type="submit"  className='input__submitbtn' onClick={handle3rdclick} ><i id="spinner"className="fa-sharp fa-solid fa-gear"></i> Next</button>
      
                        
     //               </div>
     //          </div>


        

    );
}

export default Company;
