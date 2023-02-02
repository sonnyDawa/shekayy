import React from 'react';
import Nav from './nav';

const Support = () => {
    return (
        <div>
            {/* <!-- Tailwind Play: https://play.tailwindcss.com/qIqvl7e7Ww  --> */}
            <Nav/>

               <div className='flex_'>
               
<div className='leftside__img-signup ' >
<img className='bg-white h-full' src="https://firebasestorage.googleapis.com/v0/b/test-f59f4.appspot.com/o/users%2F5124556%5B1%5D.jpg?alt=media&token=648a51b2-651c-420e-85e3-9f9930ca6862" alt="" />
</div>
<div className="rightside__img-signup   bg-black p-16">
<div class="flex min-h-screen marginn justify-start bg-white">

  <div class="mx-auto w-full max-w-lg">
    <h1 class="text-4xl text-blue-700  font-medium">Contact us</h1>
    <p class="mt-3  ">Email us at help@domain.com or message us here:</p>

    <form action="https://api.web3forms.com/submit" class="mt-10">
    
    {/* <!-- This is a working contact form. 
         Get your free access key from: https://web3forms.com/  --> */}

      <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" /> 
      <div class="grid gap-6 sm:grid-cols-2">
        <div class="relative z-0">
          <input type="text" name="name" class="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" " />
          <label class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Your name</label>
        </div>
        <div class="relative z-0">
          <input type="text" name="email" class="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" " />
          <label class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Your email</label>
        </div>
        <div class="relative z-0 col-span-2">
          <textarea name="message" rows="5" class="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" "></textarea>
          <label class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Your message</label>
        </div>
      </div>
      <button type="submit" class="mt-5 rounded-md  bg-blue-700 hover:bg-blue-800 px-10 py-2 text-white focus:ring-4 focus:outline-none focus:ring-blue-300">Send Message</button>

    </form>
  </div>
</div>
</div>
</div>
        </div>
    );
}

export default Support;
