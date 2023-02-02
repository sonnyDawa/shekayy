import React from 'react';

const JobModal = () => {
    return (
        <div className='selectedJob'>
          <i className="fa-sharp fa-solid fa-xmark"></i>
          {(item=>{
            const {jobtitle,companyname,jobdescription,jobField,joblength, CompanyDetail,Requirement} = item
              
            return(
                <div className='job__wrapper'> 
                  <div className="job__listing">
                  <h1 className='jobs__wrapper-header title'>Job title - <span className='Jobtitle__span span '>{jobtitle}</span>  </h1>
                    <p className='jobs__wrapper-header length'>Job field - <span className='jobfield__span span'>{jobField}</span> </p>
                    <p className='jobs__wrapper-header padding'>  Job requirement:  <span className='jobrequirement__span span'>{Requirement}</span></p>
                    <p className='jobs__wrapper-header padding'>company name -  <span className='companyname__span span'>{companyname}</span></p>
                    <p  className='jobs__wrapper-header padding'>Company Detail - <span className='companydetail__span span'>{CompanyDetail}</span> </p>
                    <p className="jobs__wrapper-header padding">job length - <span className='joblength__span span'>{joblength}</span> </p>
                    <button className='apply__btn'>Apply</button>
                  </div>

                 
                </div>
            )
        
          })}
        </div>
    );
}

export default JobModal;
