//ADD YOUR FIREBASE LINKS HERE
  // Your web app's Firebase configuration
  var firebaseConfig = {
     apiKey: "AIzaSyBDSVm1ZY4uE7MXMTZ5CuNpsqX_EOXF__I",
     authDomain: "kwitter-72d57.firebaseapp.com",
     databaseURL: "https://kwitter-72d57-default-rtdb.firebaseio.com",
     projectId: "kwitter-72d57",
     storageBucket: "kwitter-72d57.appspot.com",
     messagingSenderId: "131080655125",
     appId: "1:131080655125:web:4b0d806fae2f99aac1d91c"
   };
   // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
// FIREBASE LINKS ON TOP

user_name = localStorage.getItem("USERNAME");
var room_name = localStorage.getItem("Roomname");

function send() {
     msg = document.getElementById("msg").value;
     firebase.database().ref(room_name).push({
          name : user_name,
          message : msg,
          like : 0
     });
     document.getElementById("msg").value = "";

}

function logout() {
     window.location = "index.html"
     localStorage.removeItem("USERNAME");
     localStorage.removeItem("Roomname");
}
