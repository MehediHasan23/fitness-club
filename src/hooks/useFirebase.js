import { useEffect, useState } from "react"
import firebaseInitialize from './../Pages/Login/Firebase/firebase.init'
import { 
  getAuth, 
  signInWithPopup, 
  GithubAuthProvider,
  GoogleAuthProvider, 
  signOut,
  onAuthStateChanged ,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  
} 
from "firebase/auth";

firebaseInitialize();
const googleProvider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();

const auth = getAuth();

const useFirebase =()=>{
  const [user, setUser] = useState({})
  const [error, setError] = useState('')
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
console.log(user);
  //google
  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

   //github
   const signInWithGithub = () => {
    return signInWithPopup(auth, gitHubProvider);
  };

  //login with Email And Password
  const signInWithEmail = (e) => {
    e.preventDefault();
    return signInWithEmailAndPassword(auth, email, password);
  };

  // register with email & pass
  const signUpWithEmail = () => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //name
  const getName = (e) => {
    setName(e?.target?.value);
  };
  //email
  const getEmail = (e) => {
    setEmail(e?.target?.value);
  };
  //password
  const getPassword = (e) => {
    setPassword(e?.target?.value);
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


  // user login state
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
    signInWithGithub,
    signInWithEmail,
    signUpWithEmail,
    getName,
    getEmail,
    getPassword,
    user,
    name,
    error,
    setError,
    setUser,
    logOut
  }

}

export default useFirebase;