import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { ref, get, child } from "firebase/database";


// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCdg4KgQsvCIpJmsX0S06v-EGb2H76G3H4",
    authDomain: "windows-application-867f5.firebaseapp.com",
    databaseURL: "https://windows-application-867f5-default-rtdb.firebaseio.com",
    projectId: "windows-application-867f5",
    storageBucket: "windows-application-867f5.appspot.com",
    messagingSenderId: "573663564334",
    appId: "1:573663564334:web:2fb48e6b5c3be71f2105bf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get a reference to the database service
var database = getDatabase(app);

// Get a reference to the login button
var loginButton = document.getElementById('loginButton');

// Add an event listener to the login button
loginButton.addEventListener('click', function () {
    // Get form data
    var username = document.querySelector('input[name="username"]').value;
    var password = document.querySelector('input[name="password"]').value;

    // Check if user exists in Firebase
    get(child(ref(database, 'users/'), username)).then((snapshot) => {
        if (snapshot.exists()) {
            console.log("User exists in database.");
            var userData = snapshot.val();
            if (userData.password === password) {
                console.log("Login successful.");
            } else {
                console.log("Incorrect password.");
            }
        } else {
            console.log("User does not exist in database.");
        }
    }).catch((error) => {
        console.error("Error reading data from Firebase:", error);
    });
});