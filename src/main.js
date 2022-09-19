import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import firebase from 'firebase/compat/app'

const firebaseConfig = {
    apiKey: "AIzaSyDKExrvMhVOSkvbcTFAw22wIo_KSeok6lw",
    authDomain: "finalprojectcite510.firebaseapp.com",
    projectId: "finalprojectcite510",
    storageBucket: "finalprojectcite510.appspot.com",
    messagingSenderId: "428083719526",
    appId: "1:428083719526:web:9e00296320ffc97d6aaca7",
    measurementId: "G-DX2CFG1KJ7"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);




loadFonts()

createApp(App)
    .use(router)
    .use(vuetify)
    .mount('#app')