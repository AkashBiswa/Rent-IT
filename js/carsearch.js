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

saveData.addEventListener('click', (e) => {

    var username = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var city = document.getElementById('listcity').value;
    var date = document.getElementById('date').value;



    var selectedValue = document.getElementById('list').value;
    

    if (selectedValue == 400) {
        var carname = "volvo";
    }
    else if (selectedValue == 500) {
        var carname = "Hyndai";
    }
    else if (selectedValue == 1000) {
        var carname = "BMW";
    }
    else if (selectedValue == 1500) {
        var carname = "Mercedes";
    }
    else if (selectedValue == 5000) {
        var carname = "Lamborgini";
    }
    
    var nodays = document.getElementById('no_days').value;
    var tc = selectedValue * nodays;


    var car = carname;
    var nodays = nodays;
    var totalcost = tc;

    set(ref(database, 'users/' + username), {
        Name: username,
        Email: email,
        Phone: phone,
        City: city,
        Date: date,
        Car: car,
        No_of_Days: nodays,
        Total_Cost:"Rs. "+ totalcost

    });

    alert('saved');
});