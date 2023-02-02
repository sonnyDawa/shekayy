import { async } from '@firebase/util';
import { collection, onSnapshot } from 'firebase/firestore';
import React,{useEffect} from 'react';
import { useState } from 'react';
import { db } from '../../firebase';

const ActiveUser = () => {
	const [usersList,setUsersList] = useState([])
	useEffect(() => {
(async()=>{
	onSnapshot(collection(db,"Auth"),snapshot=>{
		let mainusers = []
		snapshot.forEach(docs=>{
			mainusers.push({...docs.data(),id:docs.id})
			setUsersList(mainusers)
		})
	})
})
	()
	}, []);
    return (
<section class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
    <div class="text-center pb-12">
        <h2 class="text-base font-bold text-indigo-600">
            We have the best equipment in the market
        </h2>
        <h1 class="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-gray-900">
            Check our awesome team members
        </h1>
    </div>
   

		<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">

	{usersList.map(item=>{
		const {firstName,lastname,profilePhoto} = item
		return(
			
  
			<div class="active__users w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center">
            <div>
                <img class="active__users-img object-center object-cover h-auto w-full" src={profilePhoto} alt="photo"/>
            </div>
            <div class="text-center py-8 sm:py-6">
                <p class="text-xl text-gray-700 font-bold mb-2">{firstName} {lastname}</p>
                <p class="text-base text-gray-400 font-normal">Software Engineer</p>
            </div>
        </div>
       
      
       
     
     
		)

	})}
</div>
</section>

       
    );
}

export default ActiveUser;
