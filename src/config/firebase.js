import  firebase  from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyBsHpdxuUSBr-OdTjoYoTZQ0L-uXS9feSk",
    authDomain: "store-f6192.firebaseapp.com",
    databaseURL: "https://store-f6192.firebaseio.com",
    projectId: "store-f6192",
    storageBucket: "store-f6192.appspot.com",
    messagingSenderId: "755935631605",
    appId: "1:755935631605:web:f4a21ad94be0ff88228dbc"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default  firebase; 