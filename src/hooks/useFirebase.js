import { useEffect, useState } from "react"
import firebaseInitialize from './../Pages/Login/Firebase/firebase.init'
import { 
  getAuth, 
  signInWithPopup, 
  GoogleAuthProvider, 
  signOut,
  onAuthStateChanged 
} 
from "firebase/auth";

firebaseInitialize();
const googleProvider = new GoogleAuthProvider();

const auth = getAuth();

const useFirebase =()=>{
  const [user, setUser] = useState({})
  const [error, setError] = useState('')
  //google sign in
  const signInWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
      })
      .catch((err) => {
        const errorMessage = err.message;
        setError(errorMessage);
      });
  };

 

  // sign out
  const logOut = () => {
    signOut(auth)
      .then((result) => {
        setUser({});
      })
      .catch((err) => {
        setError(err.message);
      });
  };


  // get currently signed in user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      }
    });
    return () => unsubscribe;
  }, [user]);

  return{
    signInWithGoogle,
    user,
    error,
    logOut
  }

}

export default useFirebase;