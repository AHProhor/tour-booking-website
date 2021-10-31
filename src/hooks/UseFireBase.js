import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/Firebase.init";

initializeAuthentication();


const useFireBase = () =>{
    const [user, setUser] = useState({});
    const [isLoading,setIsLoading] = useState(true);

    const auth = getAuth();

    const signInUsingGoogle = () =>{
        setIsLoading(true)
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth,googleProvider)
        .finally(()=>setIsLoading(false));
    }


    // observe user state change
    useEffect(()=>{
        const unSubscribed = onAuthStateChanged(auth, user =>{
            if(user){
                setUser(user);
            }
            else{
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unSubscribed;
    },[])



    const logOut = () => {
        signOut(auth)
        .then(()=>{
        })
        .finally(()=> setIsLoading(false));
    }

    return{
        user,
        signInUsingGoogle,
        logOut,
        isLoading
    }
}

export default useFireBase;