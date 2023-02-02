import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { UseAuth } from '../../../context/context';
import GoogleButton from 'react-google-button';

const SignIn = ({uid}) => {
  const [email,setEmail] = useState(null)
  const [password,setPassword] = useState(null)
  const navigate = useNavigate()
  const {signIn} = UseAuth()
  
  
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      await signIn(email, password)
      navigate('/account')
    } catch (e) {
     
      console.log(e.message)
    }
  };

  
  const handleGoogleSignIn = async () => {
    try {
     //  await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };
  
  
 



    
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

<form onSubmit={handleSubmit} id="signinContainer">

<div class="mb-6">
<label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" >Email address</label>
<input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"onChange={e=>setEmail(e.target.value)} placeholder="john.doe@company.com" />
</div> 
<div class="mb-6">
<label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" >Password</label>
<input type="password" id="password" onChange={e=>setPassword(e.target.value)}class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" />
</div>
<div class="flex items-start mb-6">
        <div class="flex items-center h-5">
        <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" />
        </div>
        <label for="remember" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-400">Remember Password</label>
    </div> 

<button  type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Log In</button>
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

export default SignIn;
