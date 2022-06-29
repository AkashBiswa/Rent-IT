import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-database.js";
const firebaseConfig = {
    apiKey: "AIzaSyCsCf6b76xcxFqw19Nf4LzKXDHrFLA4hOo",
    authDomain: "rentit-b59c8.firebaseapp.com",
    projectId: "rentit-b59c8",
    storageBucket: "rentit-b59c8.appspot.com",
    messagingSenderId: "1045450479306",
    appId: "1:1045450479306:web:1722378dda18e2a05e4633"
};
const app = initializeApp(firebaseConfig);

const database = getDatabase(app);

sign.addEventListener('click', (e) => {

    var firstname = document.getElementById('fname').value;
    var email = document.getElementById('emaill').value;
    var lastname = document.getElementById('lname').value;
    

    
    set(ref(database, 'subcribers/' + firstname), {
       FirstName: firstname,
        Email: email,
        LastName: lastname,
    });

    alert('Thanks for Subcribing!');
});

