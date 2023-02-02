import React,{useEffect,useState} from 'react';
import {onSnapshot,collection, getFirestore, setDoc, addDoc} from "firebase/firestore"
import ReactPaginate from 'react-paginate';
import JobModal from './jobModal';
import { UseAuth } from '../../../context/context';
import { async } from '@firebase/util';
import { date,time } from '../AccountEmployer/accountemployer';



  

const Jobs = () => {
    const Firestore = getFirestore()
    
    const [search,setsearch] = useState("")
    const [firstName,setfirstName] = useState("")
    const [lastname,setlastname] = useState("")


    const [birthDate,setbirthDate] = useState("")
    const [email,setemail] = useState("")
    const [message,setmessage] = useState("")
    const [salaryexpectation,setsalaryexpectation] = useState("")
    const [phoneNumber,setphoneNumber] = useState("")



    const [postsPerPage,setPostsperPage] = useState(4)
    const [currentPage,setCurrentPage] = useState(1)
    const [pageNumber,setPageNumber] = useState(0)
    const [selectedJob,setselectedJob] = useState([])
    const [job,setjob] = useState([])
    const [messageSent,setmessageSent] = useState([])
    const [uid,setid] = useState("")

const {users} =UseAuth()
    const wrapper__modal = document.getElementById("wrapper__modal")
    const    modal_jobs = document.getElementById("popup__main")
    const db = getFirestore()
    const mainJob = document.getElementById("main__job")
    const activityRef = collection(db, "activityRecent");

    useEffect(() => {
      (async()=>{
       onSnapshot(collection(Firestore,"MainJobSection"),snapshot=>{
           let message = []
           snapshot.docs.forEach(doc=>{
               message.push({...doc.data(),ma:doc.id})
            console.log(doc.id)
          
           })
           
       })
      })
       ()
      }, [])

    


    const handleApplySubmit =(e)=>{
      e.preventDefault()
      const apply = document.getElementById("apply__page")

      const success = document.getElementById("success__job")

      const loading = document.getElementById("loading_jobss")

      addDoc(collection(activityRef, uid, 'landmarks'), {
     employersFirstName:firstName,
     employerslastname:lastname,
     employersEmail:email,
     employersBirthDate:birthDate,
     employersMessage:message,
     employersPhoneNumber:phoneNumber,
     employersSalaryexpectation:salaryexpectation,
        time:time,
        date:date,
        id:users.uid

    })
    

       
    
        


    }

    const handleJobList = ()=>{
      const apply = document.getElementById("popup")

      // const main = document.getElementById("popup__main")
      const main = document.getElementById("popup__main")


      const loading = document.getElementById("loading_jobss")
 
      setTimeout(() => {
       
       
    
        main.style.width=(0)
      //  main.style.zIndex=(0)
        loading.style.zIndex=(100)
        loading.style.width=("100%")

        setTimeout(() => {
             

             setTimeout(() => {
                  loading.style.width=(0)
                  loading.style.zIndex=(0)
                  apply.style.zIndex=(100)
                  apply.style.width=("100%")
             }, 1000);
        }, 1000);

       
    
        
   }, 1000);

}



    const handleClick = ()=>{
      const loading = document.getElementById("loading__job")
      const main = document.getElementById("popup")
      const success = document.getElementById("success__job")
      setTimeout(() => {
        main.style.zIndex=0
   
        loading.style.width="100%"
        loading.style.zIndex=200
        setTimeout(() => {
          loading.style.width=0
          loading.style.zIndex=0
         
          
        },5500);

        setTimeout(() => {
          
          success.style.width="100%"
          success.style.zIndex=200
        },5500);
        
      },1000);
    }


   function setselected(item){
    setselectedJob(item)
   

    modal_jobs.style.width=("100%")

    }

   


    function handleBack(){

      setTimeout(() => {
      modal_jobs.style.width=(0)

      }, 2);
     
  
      }

    useEffect(() => {
        (async()=>{
         onSnapshot(collection(Firestore,"MainJobSection"),snapshot=>{
             let users = []
             snapshot.docs.forEach(doc=>{
                 users.push({...doc.data()})
                 console.log(doc.data().uidd)
                 
                 setjob(users)
             })
             
         })
        })
         ()
        }, [])

        function minimize(){
      const success = document.getElementById("success__job")
           
         success.style.width=(0)
        }
  function handleClick2(){
    mainJob.style.width=(0)
    mainJob.style.zIndex=(0)
    wrapper__modal.style.width=("80%")
  }

  

        const userPerPage = 9
        const pagesVisited = pageNumber * userPerPage
        const pageCount = Math.ceil(job.length / userPerPage)
        function changePage({selected}){
            setPageNumber(selected)

          }
          const books = []
          books.push({...selectedJob})

   
    return (
        <div className='relative  main__job-section'>
        <div  className='job_m' id='popup'>
                    <div className='relative selectedJob' >
          {books.map(item=>{
            const {jobtitle,companyname,jobdescription,jobField,joblength, CompanyDetail,Requirement,jobprice,profile,employer} = item
              
            return(
              <div className='relative ' >

<div className=' '  id='loading_jobss'>
   <div className='align'>
   
   <div style={{borderTopColor:"transparent",width:"70px",height:70}} className="w-8  border-4 border-blue-500 rounded-full animate-spin"></div>
  
   </div>
</div>


<div className=' ' id='success__job'>
   <div className='align'>
   <i className=" fa-sharp fa-solid fa-xmark text-white" id='cancel' onClick={minimize}></i>
   
   <i class="fa-solid fa-circle-check"></i>
   <h1 className='text-whitee capitalize'style={{color:"white"}}>Proposal submited successfully</h1>
   </div>
</div>
                <div>
                <div className='relative '  style={{width:"100%",height:"100%"}}>



<div className='flex items-center justify-center min-h-screen ' id='apply__page'>
   
  
<form  id="signUpContainerpage " className='auto9'>
    <div className="grid gap-6 mb-6 lg:grid-cols-2">
        <div>
            <label htmlFor="first_name" className="capitalize block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">First name</label>
            <input onChange={e=>setfirstName(e.target.value)} type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 capitalize block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Abebe" />
        </div>
        <div>
            <label htmlFor="last_name" className="capitalize block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Last name</label>
            <input onChange={e=>setlastname(e.target.value)} type="text" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 capitalize block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Solomon"  />
        </div>
        <div>
            
            <label htmlFor="company" className="capitalize block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Birth Date</label>
           
      <input onChange={e=>setbirthDate(e.target.value)} type="date" id="date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 capitalize block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  />
                        
                      </div>   


        <div>
            <label htmlFor="phone" className="capitalize block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Phone number</label>
            <input onChange={e=>setphoneNumber(e.target.value)} type="tel" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 capitalize block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"get />
        </div>
        
        <div>
            <label htmlFor="website" className="capitalize block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Website URL</label>
            <input type="url" id="website" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 capitalize block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="flowbite.com" />
        </div>
        <div>
            <label htmlFor="visitors" className="capitalize block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Unique visitors (per month)</label>
            <input type="number" id="visitors" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 capitalize block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" />
        </div> 
    </div>

  

    
    <div className="mb-6">
        <label htmlFor="email" className="capitalize block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email address</label>
        <input onChange={e=>setemail(e.target.value)} type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 capitalize block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" />

    </div>

      <div className="mb-6">
    <label htmlFor="company" className="capitalize block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Salary Expectation</label>
           
           <input  onChange={e=>setsalaryexpectation(e.target.value)}placeholder='Salary Expectation' type="number" id="number" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 capitalize block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  />
               
    </div>  
    <div className="mb-6">
        <label  className="capitalize block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"> Upload Resume</label>
        

 {/* <!-- This is an example component -->  */}
<div className="max-w-2xl mx-auto">

<input className="capitalize block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file"/>


    
</div>
    
    
    </div> 

    <div className="mb-6">
    <label
          for="message"
          class="mb-3 block text-base font-medium text-[#07074D]"
        >
          Message
        </label>
        <textarea
        onChange={e=>setmessage(e.target.value)}
          rows="4"
          name="message"
          id="message"
          placeholder="Type your message"
          class="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        ></textarea>
    </div> 
     <div className="flex items-start mb-6">
        <div className="flex items-center h-5">
        <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" />
        </div>
        <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-400">I agree with the <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a>.</label>
    </div> *
    <button onClick={handleApplySubmit}  type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit Proposal</button>
</form> 
</div>

<div class="" id='popup__main'>
      <div class="form flex flex-col w-11/12 sm:w-5/6 lg:w-1/2 max-w-2xl mx-auto rounded-lg  ">
  
        <div class="flex flex-col px-6 py-5 bg-blue">
<div className='flex space-between items-center'>
  <div>
  <h1 class="mb-2 font-bold text-blue-500">Job Title: <p class=" font-semibold  text-black"> {jobtitle}</p></h1>
          {/* <h1 class="mb-2 font-bold text-blue-500">Compan: <p class=" font-semibold  text-black"> FrontEnd developer</p></h1> */}

          <h1 class="mb-2 font-bold  text-blue-500">Job Field: <p class=" font-semibold  text-black"> {jobField}</p></h1>
  </div>
  <button  className="text-white bg-pink-700 hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800">Employer Details</button>

</div>
          <h1 class="mb-2 font-bold text-blue-500">Job Length: <p class=" font-semibold  text-black"> {joblength}</p></h1>
          <h1 class="mb-2 font-bold text-blue-500">Job Location: <p class=" font-semibold  text-black"> Addis Ababa</p></h1>
         
          <h1 class="mb-2 font-bold text-blue-500">Job Salary: <p class=" font-semibold  text-black"> {jobprice} ETB / Month</p></h1>
         
          <h1 class="mb-2 font-bold  text-blue-500">Job Description: <p class=" font-semibold  text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid neque sapiente sint eum doloremque, fugiat cupiditate asperiores? Excepturi nisi id dolorum libero magni aliquid ad aut! Aliquid sequi omnis vitae.</p></h1>
          
          <h1 class="mb-2 font-bold  text-blue-500">Job Requirement: <p class=" font-semibold  text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid neque sapiente sint eum doloremque, fugiat cupiditate asperiores? Excepturi nisi id dolorum libero magni aliquid ad aut! Aliquid sequi omnis vitae.</p></h1>
          

    

   

         

        </div>
        <div
          class="flex flex-row items-center justify-between p-5 bg-white border-t border-gray-200 rounded-bl-lg rounded-br-lg"
        >
              <button onClick={handleBack}  className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 capitalize margin">Back</button>

              <button onClick={handleJobList} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Apply</button>

        </div>
      </div>
    </div>
    </div>

                </div>

             
               
                </div>



            )
        
            })}
       
        </div>
        </div>


                <label htmlFor=""><input type="text" className='jobs__search' placeholder='search here' onChange={(e)=>{
                  setsearch(e.target.value)
                }}  />
                        <ion-icon name="search"></ion-icon>
                        </label>
<div>
<div  className='grid'  >
                {job.filter(item=>{
                    if (search==""){
                        return item
                    }
                    else if (item.jobtitle.toLocaleLowerCase().includes(search.toLocaleLowerCase())){
                        return item
                    }

                }).slice(pagesVisited,pagesVisited + userPerPage).map(item=>{
                    const {jobtitle,uidd,companyname,jobdescription,jobField,joblength,date,jobprice,jobcatagory,employer,profilePic, CompanyDetail,Requirement} = item
              
                    return(



                        
                       

    <section class="text-gray-600 body-font widfour  ">
    <div class="widfour">
      <div class="">

<div class="p-4 segment" >

<div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">

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
    <div class="flex items-center username__wrapper">
            <div class="mr-2">
                <img class="w-7 h-7 rounded-full" src={profilePic}/>
            </div>
            <span className='username'>{employer}</span>
        </div>
    <div class="flex items-center flex-wrap ">
 
      <a href="#" class="text-green-800  md:mb-2 lg:mb-0">
      <p class="inline-flex items-center" onClick={()=>{setselected(item)
 }}>Read More
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
                    

                       

    

                         
                      
                    )
                
                
                })}
            </div>
            </div>
            <div className='paginate__btn'>
                <ReactPaginate
                previousLabel={"Previous"}
                nextLabel={"Next"}
                pageCount={pageCount}
                onPageChange={changePage}
                previousLinkClassName={"previous__link-pagination"}
                nextLinkClassName={"next__link-pagination"}
                containerClassName={"container-pagination"}
                disabledClassName={"disabled-pagination"}
                activeClassName={"active-pagination"}
                />
            
            </div>
           
          
        </div>
    );
}

export default Jobs;
