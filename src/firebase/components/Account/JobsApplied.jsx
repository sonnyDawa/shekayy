import React from 'react';
import { time ,date} from '../AccountEmployer/accountemployer';

const JobsApplied = () => {
    return (
    
        <div className='jobs__applied'>
                
            <div className="recent_Wr">

            <h1 className='activity__header'>
                 Recent Jobs applied
            </h1>

            <h1 className='activity__header hover'>
                See activity <i class="fa-solid fa-arrow-right"></i>
            </h1>
            </div>
<div class="container__table">
	
	<div class="table">
		<div class="table-header">
			<div class="header__item"><a id="name" class="filter__link" href="#">Job title</a></div>
			<div class="header__item"><a id="wins" class="filter__link filter__link--number" href="#">Job price</a></div>
			
			<div class="header__item"><a id="losses" class="filter__link filter__link--number" href="#">Date</a></div>
			<div class="header__item"><a id="losses" class="filter__link filter__link--number" href="#">status</a></div>
			
		</div>
		<div class="table-content">	
			<div class="table-row">		
				<div class="table-data">Front-End developer</div>
				
				<div class="table-data">2000 birr/month</div>
				<div class="table-data">{time}</div>
                <div class="table-data"><p className='status'>Approved</p></div>
			</div>
			<div class="table-row">
				<div class="table-data">Dick</div>
				<div class="table-data">10000 birr/month</div>
				<div class="table-data">{date}</div>
                <div class="table-data"><p className='status'>Approved</p></div>
			</div>
			<div class="table-row">
				<div class="table-data">Harry</div>
				
				<div class="table-data">5000 birr/month</div>
				<div class="table-data">{date}</div>
                <div class="table-data"><p className='status'>Approved</p></div>
			</div>
		</div>	
	</div>
</div>
            
        </div>
    );
}

export default JobsApplied;
