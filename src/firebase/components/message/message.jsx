import React,{useEffect,useReducer} from 'react'
import Chat from './chat'
import Sidebar from './sidebar'
import { UseAuth } from '../../../context/context'
import { useState } from 'react'
import { collection, query, where ,onSnapshot,getDocs,getDoc,doc,updateDoc,setDoc,serverTimestamp, getFirestore, Firestore} from "firebase/firestore";
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../../firebase'


const Home = () => {
  const {firstName, logOut,users,photo,lastname} = UseAuth()
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(false);
  const [uidd,setuid] = useState(null)
  const [chats, setChats] = useState([]);
  const db = getFirestore()
  const firestore = getFirestore()




  const Mainchat = (u) => {
    dispatch({ type: "CHANGE_USER", payload: u });
  };

  const handleSearch = async () => {
    const q = query(
      collection(db, "Auth"),
      where("firstName", "==", username)
    );

    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data());
      });
    } catch (err) {
      setErr(true);
    }
  };

  const handleKey = (e) => {
    e.code === "Enter" && handleSearch();
  };

  const handleSelectMain = async () => {
    //check whether the group(chats in firestore) exists, if not create
    const combinedId =
      users.uid > user.uid
        ? users.uid + user.uid
        : user.uid + users.uid;
       
   
      const res = await getDoc(doc(db, "chats", combinedId));
      // const updateDoc = doc(db, "userChats", users.uid);

      if (!res.exists()) {
        //create a chat in chats collection
         setDoc(doc(db, "chats", combinedId), { messages: [] }).then(

        //create user chats
        updateDoc(doc(db, "userChats", users.uid), {
            [combinedId + ".userInfo"]:{
            uid: user.uid,
            displayName: user.firstName,
            photoURL: user.profilePhoto
            },
          
          [combinedId + ".date"]: serverTimestamp(),
        }).then(
            updateDoc(doc(db, "userChats", user.uid), {
                [combinedId + ".userInfo"]: {
                    uid: users.uid,
                    displayName: firstName,
                    photoURL: photo
                },
                [combinedId + ".date"]: serverTimestamp(),
              }).then(console.log("added")).catch(err=>{
              console.log(err)
      
              })
              ).then(

                setUser(null),
                setUsername("")
              )
          //   }
          )}

      

  

   
  
}


useEffect(() => {
  const getChats = () => {
    const unsub = onSnapshot(doc(db, "userChats", users.uid), (doc) => {
      setChats(doc.data());
    });

    return () => {
      unsub();
    };
  };

  users.uid && getChats();
}, []);
  

  
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

//   useEffect(() => {
// ( async()=>(




  

//    )
//    () 
//   }, []);
const handleSelect = (u) => {
};

  return (
    
<div class="flex h-screen antialiased text-gray-800">
    <div class="flex flex-row h-full w-full overflow-x-hidden">
      <div class="flex flex-col py-8 pl-6 pr-2 w-64 bg-white flex-shrink-0">
        <div class="flex flex-row items-center justify-center h-12 w-full">
          <div
            class="flex items-center justify-center rounded-2xl text-indigo-700 bg-indigo-100 h-10 w-10"
          >
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
              ></path>
            </svg>
          </div>
          <div class="ml-2 font-bold text-2xl">QuickChat</div>
        </div>
        <div
          class="flex flex-col items-center bg-indigo-100 border border-gray-200 mt-4 w-full py-6 px-4 rounded-lg"
        >
          <div class="h-20 w-20 rounded-full border overflow-hidden">
            <img
              src={photo}
              alt="Avatar"
              class="h-full w-full h-fullw-full"
            />
          </div>
          <div class="text-sm font-semibold mt-2 lowercase ">{firstName}   {lastname}</div>
          <div class="text-xs text-gray-500">Lead UI/UX Designer</div>
          <div class="flex flex-row items-center mt-3">
            <div
              class="flex flex-col justify-center h-4 w-8 bg-indigo-500 rounded-full"
            >
              <div class="h-3 w-3 bg-white rounded-full self-end mr-1"></div>
            </div>
            <div class="leading-none ml-1 text-xs">Active</div>
          </div>
        </div>
        <div class="flex flex-col mt-8">
          <input type="text"  onKeyDown={handleKey}
          onChange={(e) => setUsername(e.target.value)}
          value={username}/>
          <button onSubmit={handleSearch}>Submit</button>
          
          <div class="flex flex-row items-center justify-between text-xs">
            <span class="font-bold">Active Conversations</span>
            <span
              class="flex items-center justify-center bg-gray-300 h-4 w-4 rounded-full"
              >4</span
            >
          </div>
          <div class="flex flex-col space-y-1 mt-4 -mx-2 h-48 overflow-y-auto">
          <div className="chats">
      {Object.entries(chats)?.sort((a,b)=>b[1].date - a[1].date).map((chat) => (
          <div class="flex flex-col space-y-1 mt-4 -mx-2">
        
        <div
          className="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2"
          key={chat[0]}
          onClick={() => handleSelect(chat[1].userInfo)}
        >
          <img src={chat[1].userInfo.photoURL}classNames="imgflex flex items-center justify-center  bg-indigo-200 rounded-full" alt="" />
       

              <div class="ml-2 text-sm font-semibold">{chat[1].userInfo.displayName}</div>
            <p>{chat[1].lastMessage?.text}</p>

            </div>

        </div>
      ))}
    </div>
          
            {
              user &&             <button
              class="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2" onClick={handleSelectMain}
            >
              <div
                class="flex items-center justify-center h-8 w-8 bg-indigo-200 rounded-full"
              >
                {user.firstName[0
                ]}
              </div>
              <div class="ml-2 text-sm font-semibold">{user.firstName}</div>
            </button>
              
            }

         
           
          
          </div>
          <div class="flex flex-row items-center justify-between text-xs mt-6">
            <span class="font-bold">Archivied</span>
            <span
              class="flex items-center justify-center bg-gray-300 h-4 w-4 rounded-full"
              >7</span
            >
          </div>
          <div class="flex flex-col space-y-1 mt-4 -mx-2">
            <button
              class="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2"
            >
              <div
                class="flex items-center justify-center h-8 w-8 bg-indigo-200 rounded-full"
              >
                H
              </div>
              <div class="ml-2 text-sm font-semibold">Henry Boyd</div>
            </button>
          </div>
        </div>
      </div>
      <div class="flex flex-col flex-auto h-full p-6">
        <div
          class="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-100 h-full p-4"
        >
          <div class="flex flex-col h-full overflow-x-auto mb-4">
            <div class="flex flex-col h-full">
              <div class="grid grid-cols-12 gap-y-2">
                <div class="col-start-1 col-end-8 p-3 rounded-lg">
                  <div class="flex flex-row items-center">
                  <div className="chats">

    </div>
                  </div>
                </div>
                skkkkkkkkk0
         
          
              
              </div>
            </div>
          </div>
          <div
            class="flex flex-row items-center h-16 rounded-xl bg-white w-full px-4"
          >
            <div>
              <button
                class="flex items-center justify-center text-gray-400 hover:text-gray-600"
              >
                <svg
                  class="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                  ></path>
                </svg>
              </button>
            </div>
            <div class="flex-grow ml-4">
              <div class="relative w-full">
                <input
                  type="text"
                  class="flex w-full border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10"
                />
                <button
                  class="absolute flex items-center justify-center h-full w-12 right-0 top-0 text-gray-400 hover:text-gray-600"
                >
                  <svg
                    class="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
            <div class="ml-4">
              <button
                class="flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 rounded-xl text-white px-4 py-1 flex-shrink-0"
              >
                <span>Send</span>
                <span class="ml-2">
                  <svg
                    class="w-4 h-4 transform rotate-45 -mt-px"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    ></path>
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Home


