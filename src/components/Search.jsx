import React, { useContext, useState } from 'react'
import Img from "../img/user.jpg"
import { db } from '../firebase';
import {collection,where, query, getDocs, setDoc, doc, updateDoc, serverTimestamp } from 'firebase/firestore';
import { AuthContext } from '../context/AuthContext';

const Search = ()=>{
    const [userName,setUserName ] = useState("");
    const [user,setUser] = useState(null);
    const [err,seterr] = useState(false);
    const {currentUser} = useContext(AuthContext);

    const handleSearch=async ()=>{
        const q = query(collection(db,"users"),where("displayName","==",userName));
        try {
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc)=>{
                setUser(doc.data())
            });
        } catch (error) {
            seterr(true);
        }
        

    }
    const handleKey = (e) =>{
        e.code === "Enter" && handleSearch();

    }
    const handleSelect = async () => {
        const combineID = currentUser.uid > user.uid ? currentUser.uid + user.uid : user.uid + currentUser.uid;
        try {
            const res = await getDocs(doc(db,"chats",combineID));
            console.log(res)
            console.log(res.exists)
            if(!res.exists){
                await setDoc(doc(db,"chats",combineID),{messages:[]});
                await updateDoc(doc(db,"userChats",currentUser.uid),{
                    [combineID+".userInfo"]:{
                        uid:user.uid,
                        displayName:user.displayName,
                        photoURL:user.photoURL
                    },
                    [combineID+".date"]:serverTimestamp()
                });

            }
        } catch (error) {
            console.log(error)
        }

    }
    return(
        <div className='search'>
           <div className="searchForm">
            <input type="text" placeholder='Find a user' onKeyDown={handleKey} onChange={(e)=> setUserName(e.target.value)}/>
           </div>
           {err && <span>User not found!</span>}
           {user &&   <div className="userChat" onClick={handleSelect}>
            <img src={user.photoURL} alt="" />
            <div className="userChatInfo">
                <span>{user.displayName}</span>
            </div>
           </div>}

        </div>
    )
}

export default Search