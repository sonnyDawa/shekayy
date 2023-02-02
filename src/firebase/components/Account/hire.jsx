import { addDoc, collection, getFirestore, setDoc,doc } from 'firebase/firestore';
import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import { v4 } from 'uuid';
import { UseAuth } from '../../../context/context';

const Hire = () => {
    const [jobtitle,setjobtitle] = useState(null)
    const [jobdescription,setjobdescription] = useState(null)
    const [jobprice,setjobprice] = useState(null)
    const [contactnumber,setcontactnumber] = useState(null)
    const [jobcatagory,setjobcatagory] = useState(null)
    // const [governmentId,setGovernmentId] = useState([])
    const [jobField,setjobfield] = useState(null)
    const [companyname,setcompanyname] = useState(null)
    const [joblength,setjoblength] = useState(null)
    const [companyDetail,setcompanydetail] = useState(null)
    const [jobRequirement,setjobRequirement] = useState(null)
    const db = getFirestore()
    const {users,firstName,lastname,photo} = UseAuth()
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
    const time = `${current.getHours()}:${current.getMinutes()}:${current.getSeconds()}`;
    // const [authError,setAuthError] = useState(null)

    const handleSubmit =(e)=>{
        e.preventDefault()
        const success = document.getElementById("success")
        const signup = document.getElementById("signUpContainer")
        const loading = document.getElementById("loading")
        const activityRef = collection(db, "activityRecent");
        const mainActivityRef = collection(activityRef, users.uid, 'landmarks,')
        const usersid = users.uid + v4()

        setTimeout(() => {
        
        
     
          // signup.style.width=(0)
          // loading.style.width=("60%")

          
              addDoc(collection(db, "MainJobSection"), {
                        uniqueKey:lastname + firstName +v4(),
                jobtitle:jobtitle,
                jobprice:jobprice,
                jobcatagory:jobcatagory,
                jobdescription:jobdescription,
                joblength:joblength,
                companyDetail:companyDetail,
                companyname:companyname,
                jobField:jobField,
                contactnumber:contactnumber,
                jobRequirement:jobRequirement,
                time:time,
                date:date,
                id:users.uid,
                employer:firstName + " " + lastname,
                profilePic:photo,
                uniqueKey:usersid,
                
               }).then(
              
                addDoc(collection(activityRef, users.uid, 'landmarks,'), {
                  jobtitle:jobtitle,
                  jobprice:jobprice,
                  uniqueKey:usersid,

                  jobcatagory:jobcatagory,
                  jobdescription:jobdescription,
                  joblength:joblength,
                  companyDetail:companyDetail,
                  companyname:companyname,
                  jobField:jobField,
                  contactnumber:contactnumber,
                  jobRequirement:jobRequirement,
                  time:time,
                  date:date,
                  id:users.uid,
                  employer:firstName + " " + lastname,
                  profilePic:photo
  
              }),
                
                // addDoc(collection(db, "RecentActivity","kjswlk"),{   

              
              
                //  })
                
           
               ).then(console.log("done")).catch(e=>console.log(e.message))
      
          }, 3000);

         
      
          
  
    }


    return (
        <div className='accountSell'>
              <div className='sell-left__side'>
              
                         
                          <section class="text-gray-600 body-font ">
    <div class="container px-5 py-5 mx-auto">
      <div class="flex flex-wrap -m-4">

<div class="p-4 md:w-1/3" >
<div class="h-full border-2 width border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
    <div class="w-full">
        <div class="w-full flex p-2">
            <div class="p-2 ">
            <i class="w-10 h-10  overflow-hidden fa-sharp fa-solid fa-magnifying-glass-chart icon"></i>
            
            </div>
            <div class="pl-2 pt-2 ">
              <p class="font-bold">Job Title: {jobtitle}</p>
              <p class="text-xs">Date Posted: {date}</p>
            </div>
          </div>
    </div>
    
  
  <img class="lg:h-48 md:h-36 w-full object-cover object-center" src="https://firebasestorage.googleapis.com/v0/b/thecaffeinecode.appspot.com/o/blog.jpg?alt=media&token=271cb624-94d4-468d-a14d-455377ba75c2" alt="blog cover"/>
  
  <div class="p-4">
    <h2 class="tracking-widest text-xs title-font font-bold text-blue-600 mb-1 uppercase ">Salary: {jobprice} ETB/Month</h2>
    <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Job Catagory: {jobcatagory}</h1>
    
    <div class="flex items-center flex-wrap ">
      <a href="#" class="text-green-800  md:mb-2 lg:mb-0">
      <p class="inline-flex items-center purple" >Read More
              <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </p>
      </a>
      <span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
        <svg class="w-4 h-4 mr-1"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
        24
      </span>
      <span class="text-gray-400 inline-flex items-center leading-none text-sm">
        <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
        </svg>
        89
      </span>
    </div>
    
    
  </div>
</div>
</div>


{/* <!--End here--> */}
      </div>
    </div>
  </section>
                      
                        
              </div>
            	<div className="right__side-sell">
              {/* <div id="loading"className='loading'><i className="fa-solid fa-spinner"></i></div>
              <div id="success"className='success'>Job successfully posted <Link to="/dashbord"><i class="fa-sharp cancel fa-solid fa-xmark"></i></Link></div>
	 */}
    
              <form onSubmit={handleSubmit}  id="signUpContainerpage " className='post__job'>
        <div className="mb-6">
            <label htmlFor="jobName" className="capitalize block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Job Name</label>
            <input onChange={e=>{setjobtitle(e.target.value)}} type="text" id="jobName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 capitalize block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Abebe" />
        </div>
        <div className="mb-6">
            <label htmlFor="last_name" className="capitalize block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Job length</label>
            <select className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 capitalize block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='DAW'required
           onChange={e=>setjoblength(e.target.value)} >
                        <option className='skill__input-option'value="Contractual">Contractual</option>
                        <option className='skill__input-option'value="Freelance">Freelance</option>
                        <option className='skill__input-option' value="Part-time">Part-time</option>
                        <option className='skill__input-option' value="permanent">permanent</option>
        
        </select> </div>
        <div className="mb-6">
            
            <label htmlFor="company" className="capitalize block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Company Name</label>
           
      <input type="text" id="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 capitalize block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={e=>setcompanyname(e.target.value)}  />
                        
                      </div>   
        <div className="mb-6">
            <label htmlFor="phone" className="capitalize block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Company Detail</label>
            <select
            onChange={e=>setcompanydetail(e.target.value)}
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 capitalize block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            type='text'
            required
          >
        <option className='CompanyDetail--option'value="verified">Verified</option>
        <option className='CompanyDetail--option' value="Not verified">Not Verified</option>
        <option className='CompanyDetail--option' value="none">none</option>

          </select></div>


        
        {/* <div>
            <label htmlFor="website" className="capitalize block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Website URL</label>
            <input type="url" id="website" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 capitalize block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="flowbite.com" />
        </div>
        <div>
            <label htmlFor="visitors" className="capitalize block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Unique visitors (per month)</label>
            <input type="number" id="visitors" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 capitalize block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" />
        </div> */}
   
    <div className="mb-6">
        <label htmlFor="salary" className="capitalize block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Job salary</label>
        <input onChange={e=>{setjobprice(e.target.value)}}type="number" id="number" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 capitalize block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  />

    </div> 
    <div className="mb-6">
        <label htmlFor="password" className="capitalize block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Contact Number</label>
       
        <input onChange={e=>{setcontactnumber(e.target.value)}} type="tel" id="tel" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 capitalize block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
        {/* {passLength &&  <p className='error capitalize block mb-2 text-sm  capitalize'><i className="fa-solid fa-triangle-exclamation "></i> Password Must be equal to 8.</p>} */}
    </div> 
    <div className="mb-6">
        <label htmlFor="confirm_password" className="capitalize block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Job Catagory</label>
        <select className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 capitalize block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' required placeholder='DAW'
           onChange={e=>setjobcatagory(e.target.value)}>
        <option className='skill__input-option' value="Bank and finance" >Bank and finance</option>
        <option className='skill__input-option' value="Development & IT">Development & IT</option>
        <option className='skill__input-option' value="Engineering & Architecture">Engineering & Architecture</option>     
        <option className='skill__input-option' value="Sales & Marketing">Sales & Marketing</option>
            <option className='skill__input-option' value="IT" >IT</option>
            <option className='skill__input-option' value="other">other</option>
        </select>
    </div> 

    <div className="mb-6">
    <label
          for="message"
          class="mb-3 block text-base font-medium text-[#07074D]"
        >
             Job description
        </label>
        <textarea
          rows="4"
          name="message"
          id="message"
          placeholder="Type your message"
          class="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        ></textarea>
    </div> 

    <div className="mb-6">
    <label
          for="message"
          class="mb-3 block text-base font-medium text-[#07074D]"
        >
              Job Requirement
        </label>
        <textarea
          rows="4"
          name="message"
          id="message"
          placeholder="Type your message"
          class="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        ></textarea>
    </div> 
    {/* <div className="flex items-start mb-6">
        <div className="flex items-center h-5">
        <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" />
        </div>
        <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-400">I agree with the <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a>.</label>
    </div> */}
    <button  type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Next</button>
</form>
    
    
    

	</div>
        </div>
    );
}

export default Hire;
