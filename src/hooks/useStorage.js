import { async } from '@firebase/util';
import React, { useState ,useEffect} from 'react';
import { storage } from '../firebase/firebase';
import {ref,uploadBytes,getDownloadURL,listAll,uploadBytesResumable} from "firebase/storage"
import { addDoc, collection, getFirestore } from 'firebase/firestore';



const UseStorage = (file) => {
    const [progress,setProgress] = useState(0)
    const [error,seterror] = useState(null)
    const [url,seturl] = useState(null)
    const firestore = getFirestore()


useEffect(() => {
   (async()=>{
    // const storeRef = ref(storage,file.name)
     
  //   const imgListRef = ref(storage,`images/`)

 
   
  
  //  const img =  uploadBytesResumable(imgListRef,file)

  //  img.on("state_changed",
  //  (snapshot)=>{
  //    let percentage = (snapshot.bytesTransferred/snapshot.totalBytes) *  100
  //   setProgress(percentage)
  //   console.log(percentage)
  //  },(err)=>{
  //   seterror(err)
  //  }
  //  )

    // uploadBytes(storeRef, file).then((snapshot) => {
    //     let percentage = (snapshot.bytesTransferred/snapshot.totalBytes) *  100
    //     setProgress(percentage)
    //     console.log('Uploaded a blob or file!');
    //   }).then(

 
    //     getDownloadURL(storeRef)
    //       .then((url) => {
    //         // `url` is the download URL for 'images/stars.jpg'
    //         seturl(url)
    //         // This can be downloaded directly:
           
        
    //       }).then(console.log("done"))

    //   )
    // //   (err)=>{
    // //     seterror(err)
    //   }
   })
()
}, [file]);
    


return {progress,url,error}
}

export default UseStorage;
