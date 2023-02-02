import React from 'react';
import { Link } from 'react-router-dom';

const HomeBody = () => {
    return (
        <div className='homebody'>
       
         <div className="homebody__leftside">

      
         <h1 className='homebody__search--title text-3xl font-semibold text-gray-800 md:text-4xl' style={{color:"black"}}> Hire Expert Professionals for Your business  </h1>
         
    
         <p className=' mt-2 text-sm text-gray-500 md:text-base'>Proxify is your incredibly friendly people-first hiring partner — we take the personal approach so you get quality and motivated remote developers that match your technology and team needs.</p>
        
          {/* <Link to="/signup"> <button className='homebody-getstarted-btn'>Find a job</button></Link>  */}
   <div className="flex">
   <Link to="/signup">  <button
        class="homebody-getstarted-btn py-2 px-4 bg-transparent text-white font-semibold border border-black-600 rounded hover:bg-black hover:text-white hover:border-transparent transition ease-in duration-200 "
      >Apply for a job</button></Link> 
          <Link to="/signup">  <button
        class="homebody-getstarted-btn py-2 px-4 bg-transparent text-white font-semibold border border-black-600 rounded hover:bg-black hover:text-white hover:border-transparent transition ease-in duration-200 "
      >Hire a professional</button></Link> 
          
   </div>
         </div>
            
          <div className="homebody__rightside">  <img className='homebody__rightside-img' src="https://firebasestorage.googleapis.com/v0/b/test-f59f4.appspot.com/o/users%2FTeam-pana.svg?alt=media&token=43b2f213-3bd3-4f75-9124-ff4d01043644" alt="" /></div>
         
        </div>
    );
}

export default HomeBody;
