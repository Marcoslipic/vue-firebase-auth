import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import firebase from'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBHHQczz3BX2DIwOorKqTpcuErKmdJpqaU",
    authDomain: "asdf-cfb12.firebaseapp.com",
    projectId: "asdf-cfb12",
    storageBucket: "asdf-cfb12.appspot.com",
    messagingSenderId: "647697162287",
    appId: "1:647697162287:web:e77018367395882d4626da",
    measurementId: "G-77587CF0S6"
  };

  firebase.initializeApp(firebaseConfig);
  
createApp(App).use(router).mount('#app')
