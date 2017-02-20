import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyAkuO3P-8oK2S2BbJSKEOuzVzjpUjurxQU",
  authDomain: "todoapp-10e64.firebaseapp.com",
  databaseURL: "https://todoapp-10e64.firebaseio.com",
  storageBucket: "todoapp-10e64.appspot.com",
  messagingSenderId: "167670636308"
};

firebase.initializeApp(config);
var firebaseRef = firebase.database().ref();
firebaseRef.set({
  app: {
    name: 'Todo App',
    version: '1.0.0'
  },
  isRunning: true,
  user: {
    name: 'Peter',
    age: 48
  }
})

// console.log('1 - Updating...')
// firebaseRef.update({
//   isRunning: false,
//   'app/version': '1.0.1'
// }).then(() => console.log('Done update 1'))

// console.log('1 - Updating...')
// firebaseRef.child('app').update({
//   name: 'This is a todo app'
// }).then(() => console.log('Done update 2'))

firebaseRef.update({
  isRunning: false
})

firebaseRef.update({
  'app/name': 'Todo Application',
  'user/name': 'Lois Griffin'
})

firebaseRef.child('app').update({
  version: '1.0.2'
})

firebaseRef.child('user').update({
  age: 40
})
// ** REMOVING **
// firebaseRef.child('app/name').remove();
// firebaseRef.child('app').update({
//   name: null,
//   version: '2.0.0'
// }) 
// firebaseRef.update({isRunning: null})
// firebaseRef.child('user/age').remove();

// firebaseRef
// .child('app')
// .once('value')
// .then((snapshot) => {
//   console.log('Got db:', snapshot.val())
//   console.log('App:', snapshot.key)
// })
// .catch((err) => console.log('Unable to fetch value', e))
// console.log('Done')

var logData = (snapshot) => {
  console.log('Values: ', snapshot.val())
}

// firebaseRef.on('value', logData)
// firebaseRef.off('value', logData)

// firebaseRef.update({isRunning: true})

firebaseRef.child('user').on('value', (snapshot) => {
  console.log('User:', snapshot.val())
});

firebaseRef.child('user').update({
  name: 'Glen Quagmire'
})

firebaseRef.child('app').update({
  name: 'Some app'
})