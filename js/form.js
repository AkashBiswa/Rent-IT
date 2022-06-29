import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-app.js";
import { getAuth, signInWithEmailAndPassword,  createUserWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCsCf6b76xcxFqw19Nf4LzKXDHrFLA4hOo",
  authDomain: "rentit-b59c8.firebaseapp.com",
  projectId: "rentit-b59c8",
  storageBucket: "rentit-b59c8.appspot.com",
  messagingSenderId: "1045450479306",
  appId: "1:1045450479306:web:1722378dda18e2a05e4633"
};
 const app = initializeApp(firebaseConfig);
 const auth = getAuth(app);


  document.getElementById("login-btn").addEventListener('click', function(){
   const loginEmail= document.getElementById("login-email").value;
   const loginPassword =document.getElementById("login-password").value;

   signInWithEmailAndPassword(auth, loginEmail, loginPassword)
  .then((userCredential) => {
    const user = userCredential.user;
    document.getElementById("result-box").style.display="inline";
     document.getElementById("login-div").style.display="none";
     document.getElementById("result").innerHTML="Welcome Back<br>"+loginEmail+" was Login Successfully";
     window. location. href = "adminpage.html";
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    document.getElementById("result-box").style.display="inline";
     document.getElementById("login-div").style.display="none";
     document.getElementById("result").innerHTML="Sorry ! <br>"+errorMessage;

  });
});


