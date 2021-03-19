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

    user_name = localStorage.getItem("USERNAME");
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!!";


    function addRoom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
        purpose : "adding room"
      });
      localStorage.setItem("Roomname" , room_name);
      window.location = "kwitter_page.html";
    }

    function redirect() {

    }

    function logout() {
      window.location = "index.html";
      localStorage.removeItem("USERNAME");
      localStorage.removeItem("Roomname");

    }

    function getData() {
       firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; 
      snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key; 
        Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names); 
      row = "<div class='room_name' id="+Room_names+
      " onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"; 
      document.getElementById("output").innerHTML += row;
      //End code
      });});
    }
getData();

    function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("Roomname" , name);
      window.location = "kwitter_page.html";
    }


