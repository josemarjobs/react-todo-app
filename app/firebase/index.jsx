import firebase from 'firebase';

try {
  var config = {
    apiKey: "AIzaSyAkuO3P-8oK2S2BbJSKEOuzVzjpUjurxQU",
    authDomain: "todoapp-10e64.firebaseapp.com",
    databaseURL: "https://todoapp-10e64.firebaseio.com",
    storageBucket: "todoapp-10e64.appspot.com",
    messagingSenderId: "167670636308"
  };
  firebase.initializeApp(config);
} catch(e) {

}
export var firebaseRef = firebase.database().ref();
export default firebase;