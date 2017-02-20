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

var notesRef = firebaseRef.child('notes');

notesRef.on('child_added', (snapshot) => {
  console.log('child_added', snapshot.key, snapshot.val())
})
notesRef.on('child_changed', (snapshot) => {
  console.log('child_changed', snapshot.key, snapshot.val())
})
notesRef.on('child_removed', (snapshot) => {
  console.log('child_removed', snapshot.key, snapshot.val())
})

var newNoteRef = notesRef.push();
newNoteRef.set({
  text: 'Walk the dog'
})

var key = notesRef.push({
  text: 'Get a dog'
}).key
console.log(key)

var todosRef = firebaseRef.child('todos')
todosRef.on('child_added', (snapshot) => {
  console.log('todo added:', snapshot.key, snapshot.val())
})

todosRef.on('child_changed', (snapshot) => {
  console.log('todo changed:', snapshot.key, snapshot.val())
})

todosRef.on('child_removed', (snapshot) => {
  console.log('todo removed:', snapshot.key, snapshot.val())
})

todosRef.push({text: 'Todo 1'})
todosRef.push({text: 'Todo 2'})