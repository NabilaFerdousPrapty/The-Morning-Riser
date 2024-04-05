import { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth"
import app from './../../Firebase/Firebase.config';
export const AuthContext=createContext(null)


const AuthProvider = ({children}) => {
    const auth = getAuth(app);

    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true)
    const logOut=()=>{
        return signOut(auth)
        
    }
  
    const createUser=(email,password)=>{
        setLoading(true)
      return  createUserWithEmailAndPassword(auth, email, password)
    }
    const signInUser=(email,password)=>{
      return  signInWithEmailAndPassword(auth, email, password)
        
    }
   
    useEffect(()=>{
        const unSubscribe=  onAuthStateChanged(auth,currentUser=>{
              console.log("user in the auth state change",currentUser);
              setUser(currentUser);
              setLoading(false)
          });
          return ()=>{
              unSubscribe()
          }
      },[])
      const authInfo={
        user,
        createUser,logOut,signInUser,loading
    }
    return (
       <AuthContext.Provider value={authInfo}>
       {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;