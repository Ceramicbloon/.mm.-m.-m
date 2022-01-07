import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
  apiKey: "AIzaSyAfwfHEUMLiuJnXcE4CPq15YIqdy_zsxys",
  authDomain: "asdfds-536a7.firebaseapp.com",
  projectId: "asdfds-536a7",
  storageBucket: "asdfds-536a7.appspot.com",
  messagingSenderId: "125793100008",
  appId: "1:125793100008:web:0bd75c7fad4d0d34c2e95d"
 
};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

