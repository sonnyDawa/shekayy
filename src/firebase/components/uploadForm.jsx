import React, { useState ,useEffect} from 'react';
import { storage } from '../firebase';
import {ref,uploadBytes,getDownloadURL,listAll, uploadBytesResumable} from "firebase/storage"
import Progress from './progress';
import UseStorage from '../../hooks/useStorage';
import { addDoc, collection, getFirestore, onSnapshot } from 'firebase/firestore';

const UploadForm = () => {
const[img,setImg] = useState(null)
const[error,setError] = useState(null)
const [progress,setProgress] = useState(0)
const [Error,seterror] = useState(null)
const [url,seturl] = useState([])
const firestore = getFirestore()



useEffect(() => {
    (async()=>{
 onSnapshot(collection(firestore,"produ"),(snapshot)=>{
    const user = []
    snapshot.docs.forEach(item=>{
        user.push({...item.data(),id:item.id})
        seturl(user)

    })
 })


    })
 ()
 }, []);



function handleChange(e){
    e.preventDefault()

    const selected = e.target.files[0]
    const type = ["image/png","image/jpeg"]
    const file  = selected
   



         
     









 if(selected && type.includes(selected.type)){
    setImg(selected)
    setError("")
         
    const imgListRef = ref(storage,`images/`)

 
   
  
   const img =  uploadBytesResumable(imgListRef,file)

   img.on("state_changed",
   (snapshot)=>{
     let percentage = (snapshot.bytesTransferred/snapshot.totalBytes) *  100
    setProgress(percentage)
    console.log(percentage)
   },(err)=>{
    seterror(err)
   },()=>{
    getDownloadURL(imgListRef).then(url=>{
      
        addDoc(collection(firestore,"produ"),{
            url:url
        }).then(console.log("img added"))
    })

   }
   )

  
         // const storeRef = ref(storage,file.name)
     
     
   
       
       
 
         
      
        //  uploadBytes(imgRef,file).then((snapshot) => {
        //    let percentage = (snapshot.bytesTransferred/snapshot.totalBytes) *  100
         
        //  console.log(percentage)

        //      console.log('Uploaded a blob or file!');
        //    }).then(listAll(imgListRef).then((response)=>{
        //      response.items.forEach(item=>{
        //        getDownloadURL(item).then(urll=>{
                
        //         console.log("added")
               
     
     
     
        //        }).catch(e=>console.log(e.message))
        //      }).catch(e=>console.log(e.message))
        //    })).catch(e=>console.log(e.message))
     
        //  // uploadBytes(storeRef, file).then((snapshot) => {
        //  //     let percentage = (snapshot.bytesTransferred/snapshot.totalBytes) *  100
        //  //     setProgress(percentage)
        //  //     console.log('Uploaded a blob or file!');
        //  //   }).then(
     
      
        //  //     getDownloadURL(storeRef)
        //  //       .then((url) => {
        //  //         // `url` is the download URL for 'images/stars.jpg'
        //  //         seturl(url)
        //  //         // This can be downloaded directly:
                
             
        //  //       }).then(console.log("done"))
     
        //  //   )
        //  // //   (err)=>{
        //  // //     seterror(err)
        //  //   }
  



 }

//  else if (type.includes(selected.type)){
//     setImg(selected)

//  }

 else{
    setImg(null)
    setError("select an image file (png or jpeg)")
 }



}

    return (
        <form>
            <input type="file" onChange={handleChange} />
            {/* <p>{img.name}</p> */}
            <p>{error}</p>
            <Progress file={["hello","ejd",2]} setImg={setImg} />
            
            
        </form>
    );
}

export default UploadForm;
