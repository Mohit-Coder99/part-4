// Your web app's Firebase configuration
var firebaseConfig = {
     apiKey: "AIzaSyCokA7TPh20Vcw2EMEd1txN2cSGtw9awB4",
     authDomain: "test-a0fb8.firebaseapp.com",
     databaseURL: "https://test-a0fb8-default-rtdb.firebaseio.com",
     projectId: "test-a0fb8",
     storageBucket: "test-a0fb8.appspot.com",
     messagingSenderId: "381561912713",
     appId: "1:381561912713:web:c8a75887920d57804bb558"
   };
   // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS
function addUser() {
     user_name = document.getElementById("user_name").value;
     firebase.database().ref("/").child(user_name).update({
          purpose : "test"
     });
}