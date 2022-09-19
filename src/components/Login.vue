<template>
    <div align="center">
<v-container fluid>
<v-card
 class="ma-15"
 max-width="500"
 style="background: linear-gradient(90deg, rgba(107,191,102,1) 0%, rgba(0,255,110,1) 13%, rgba(234,246,234,0.9868989832261029) 97%);"
  elevation="24"
 
>
  <v-card-title>Login User Account</v-card-title>
  <div class="form-group">
       <v-label>Email</v-label>
       <v-text-field label="Enter Email Address" type="email" v-model="email"></v-text-field>
       
     </div>
     <div class="form-group">
       <v-label>Password</v-label>
       <v-text-field label="Enter Password" type="password" v-model="password"></v-text-field>
     </div>
 <v-btn
 style="background: #FFDBA4"
 @click="signIn">Submit</v-btn>
 </v-card>
 </v-container>
 </div>
 </template>
 
 <script setup>
   import { ref } from 'vue';
   import { useRouter } from 'vue-router';
   import firebase from 'firebase/compat';
   import Swal from 'sweetalert2';


   const email = ref('')
   const password = ref('')
   const router = useRouter()
const signIn = () => {

   firebase.auth().signInWithEmailAndPassword(email.value, password.value)
   .then((data) => {
    Swal.fire('Good job!', 'Successfully User Log In','success');
       router.push('/')
   })
   .catch(error => {
       switch(error.code) {
           case 'auth/invalid-email':
               alert('Invalid emaiil')
               break
           case 'auth/user-not-found':
               alert('You have no account')
               break
           case 'auth/wrong-password':
               alert('Invalid password')
               break
           default:
               alert('incorrect email or password')        


       }
   });
   
}
 </script>
 
 <style>
 
 </style>