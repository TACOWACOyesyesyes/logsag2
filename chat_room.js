
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
  apiKey: "AIzaSyAKvr_NCdVgvObO90HN8gNF4LxhDFOdxvM",
  authDomain: "logsag-d6fd8.firebaseapp.com",
  databaseURL: "https://logsag-d6fd8-default-rtdb.firebaseio.com",
  projectId: "logsag-d6fd8",
  storageBucket: "logsag-d6fd8.appspot.com",
  messagingSenderId: "522325814749",
  appId: "1:522325814749:web:65714545ae244d4aef1a34",
  measurementId: "G-P52Q8JNV9Q"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";

function addRoom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
            
      })
      
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
