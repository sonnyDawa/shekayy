import React,{createContext,useContext,useState,useEffect,useReducer} from 'react';
import { app } from '../firebase/firebase';
import { useNavigate } from 'react-router-dom';
import { auth ,} from '../firebase/firebase';
import { createUserWithEmailAndPassword,onAuthStateChanged,getAuth,signOut, signInWithEmailAndPassword} from 'firebase/auth';
import { addDoc, doc,setDoc ,collection, getFirestore, getDoc,onSnapshot} from 'firebase/firestore';
import { getDownloadURL, getStorage, listAll, uploadBytesResumable, uploadString ,ref, uploadBytes} from 'firebase/storage';
import { async } from '@firebase/util';
import { Navigate } from 'react-router-dom';
import { v4 } from 'uuid';
import { Firestore } from 'firebase/firestore';


 export const UserContext = createContext();
 const Context = ({children}) => {
    const [lastname,setLastName] = useState(null)
    // const [password,setPassword] = useState(null)
    const [confirmPassword,setConfirmPassword] = useState(null)
    const [email,setEmail] = useState(null)
    const [phoneNumber,setPhoneNumber] = useState(null)
    const [governmentId,setGovernmentId] = useState(null)
    const [firstName,setFirstName] = useState(null)
    const [users,setuser] = useState(null)
    const [birthDate,setBirthDate] = useState(null)
    const [cred,setcred] = useState(null)
    const [storageError,setStorageError] = useState(null)
    const [authtext,setAuthText] = useState(null)
    const [authError,setAuthError] = useState(null)
    const [messageSent,setmessageSent] = useState([])

    const [uid,setUid] = useState(null)
    const [photo, setPhoto] = useState(null)
    const db = getFirestore()

    const ref = collection(db, "activityRecent")
    const activityRef = collection(db, "Authentication")

  
   
   
   
   const firestore = getFirestore(app)
   const navigate = useNavigate()
   const storage = getStorage();


   const INITIAL_STATE = {
    chatId: "null",
    user: {},
  };

  const chatReducer = (state, action) => {
    switch (action.type) {
      case "CHANGE_USER":
        return {
          user: action.payload,
          chatId:
            users.uid > action.payload.uid
              ? users.uid + action.payload.uid
              : action.payload.uid + users.uid,
        };

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(chatReducer, INITIAL_STATE);


  


   const createIndividualUser = (email, password,firstName,reff,downloadImg ,lastname,birthDate,phoneNumber,governmentId,storageRef,gender,img,jobTitle,EmploymentField,recentcompany,region) => {
    createUserWithEmailAndPassword(auth, email, password)
    .then((credentials=>{
          
      listAll(storageRef).then((response)=>{
        response.items.forEach(item=>{
          getDownloadURL(item).then(url=>{
  
                
           setDoc(doc(firestore, "Individual", "credentials.user.uid"), {
            
               
  
            firstName:firstName,
            // lastname:lastname,
            email:email,
            birthDate:birthDate,
            phoneNumber:phoneNumber,
          governmentId:url,
           gender:gender,
           // FieldOfStudy:jobStudy,
           // jobTitle:jobTitle,
           // EmploymentField:EmploymentField,
           // recentcompany:recentcompany,
           region:region,
           birthDate:birthDate,
           uid:credentials.user.uid
           
            
     }).then(console.log("img added").catch(e=>(console.log(e.message))))
  
  
            
          })
        })
       })
      
   })
  )
  };



  
    
const auth = getAuth();


const user = auth.currentUser;

const createCompany = (Companyemail,  companyPassword,Companystatus,storageRef) => {
  createUserWithEmailAndPassword(auth, Companyemail,  companyPassword)
  .then((credentials=>{
    

       

         setDoc(doc(firestore, "Company", credentials.user.uid), {
          Companystatus:Companystatus,
          Companyemail: Companyemail,
          birthDate:birthDate,
         
         uid:credentials.user.uid
        }).then(console.log("img added").catch(e=>(console.log(e.message))))
    

    

    
 })
)
};










const createUser = (email, password,firstName,lastname,birthDate,profilePhoto, uploadImage,phoneNumber,governmentId,storageRef,gender,img,jobTitle,EmploymentField,recentcompany,region) => {
  // createUserWithEmailAndPassword(auth, email, password)
  
  // .then((credentials=>{
 
 
 
  //   // uploadImage.on('state_changed', 
  //   // (snapshot) => {
  //   //   // Observe state change events such as progress, pause, and resume
  //   //   // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
  //   //   const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
  //   //   console.log('Upload is ' + progress + '% done');
  //   // //   switch (snapshot.state) {
  //   // //     case 'paused':
  //   // //       console.log('Upload is paused');
  //   // //       break;
  //   // //     case 'running':
  //   // //       console.log('Upload is running');
  //   // //       break;
  //   // //   }
  //   // }, 
  //   // (error) => {
  //   //   console.log(error)
  //   // }, 
  //   // () => {
  //   //   // Handle successful uploads on complete
  //   //   // For instance, get the download URL: https://firebasestorage.googleapis.com/...
  
  //   // }
  // })
    

  // )


};

 const signIn = (email, password) =>  {
  return signInWithEmailAndPassword(auth, email, password)
 }

const logout = () => {
    return signOut(auth)
}

useEffect(() => {

  const unsubscribe = onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
    //  setcred(uid)
    console.log(uid)
      setuser(user);
      onSnapshot(collection(activityRef,uid, 'UserDetails'),(snapshot)=>{
        let recent = []
        snapshot.forEach(item=>{
            recent.push({...item.data()})
            setFirstName(item.data())
            recent.map(details=>{
             const {firstName,lastname,phoneNumber,profilePhoto,email} = details
             setFirstName(firstName)
             setLastName(lastname)
             setPhoneNumber(phoneNumber)
            setPhoto(profilePhoto)
             setEmail(email)
            })
            onSnapshot(collection(ref, cred, 'landmarks'), snapshot=>{

              let message = []
              snapshot.docs.forEach(doc=>{
                  message.push({...doc.data()})
                  setmessageSent(message)
                  messageSent.map(item=>{
                   const {     employersEmail
                   } = item
       
                   console.log(employersEmail)
                  })
             
              })
              
          })

        })
 

  });
      
      // ...
    } else {
      console.log("logged out")
      
    }
  });
  
    

  return () => {
    unsubscribe();
  };
}, []);

useEffect(() => {
  (async()=>{

  })
   ()
  }, [])





const logOut = ()=>{
  signOut(auth)
}



    
   
  
 return(
    <UserContext.Provider value={{createUser,users,data:state, dispatch,createIndividualUser,uid,photo,firstName,lastname,email,signIn,createCompany,logOut,phoneNumber,birthDate}}>
    {children}
  </UserContext.Provider>
 )
}



export const UseAuth = () => {
    return useContext(UserContext);
  };

  export default Context