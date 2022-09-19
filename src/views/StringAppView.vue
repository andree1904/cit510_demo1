<template>
<div align="center">
 <v-card
    class="ma-15"
    max-width="670"
    style="background: linear-gradient(90deg, rgba(107,191,102,1) 0%, rgba(0,255,110,1) 13%, rgba(234,246,234,0.9868989832261029) 97%);"
     elevation="24"
 >
  <v-card-title> String Manipulator </v-card-title>

   <v-text-field label="Enter a String" v-model="word"></v-text-field>

   <v-card-actions  >
   <v-btn @click="Results"  >
        Count Vowel
   </v-btn>

    <v-btn @click="Results1" >
        count characters
   </v-btn>

   <v-btn @click="Results2" >
        count consonants
   </v-btn>
    
   <v-btn @click="Results3" >
        Convert vowel
   </v-btn>
   </v-card-actions>
<h4> Vowel Count</h4>
   {{vowelcount}}
  <v-spacer></v-spacer>
<h4> Number of characters</h4>
   {{count}}

    <v-spacer></v-spacer>
<h4> Count Consonants</h4>
   {{consonantcount}}

  <v-spacer></v-spacer>
<h4>Convert Vowel</h4>
   {{vowelconvert}}
 </v-card>  
</div>
</template>

<script setup>
import {ref} from 'vue'
import firebase from 'firebase/compat';
import { onBeforeMount } from 'vue';
import { useRouter } from 'vue-router';
import Swal from 'sweetalert2';

const word = ref('')
const vowelcount = ref(0)
const count =ref(0)
const consonantcount = ref(0)
const vowelconvert = ref(0)
const router = useRouter()

const authlistener = firebase.auth().onAuthStateChanged(function(user) {
    if (!user) {
     Swal.fire({
  icon: 'error',
  title: 'Oops...',
  text: 'You need to Log in to view this page'
})
        router.push('/')
    }
  })
  onBeforeMount(() => {
    authlistener()
})  
function Results () {
    
     vowelcount.value = word.value.match(/[aeiou]/gi).length;
     return vowelcount.value;     
}

function Results1 () {
       count.value = word.value.match(/[A-Za-z]/gi).length;
     return count.value;     
}

function Results2 () {
       consonantcount.value = word.value.match(/[bcdfghjklmnpqrstvwxys]/gi).length;
     return consonantcount.value;     
}

function Results3 () {
       vowelconvert.value = word.value.replace(/[aeiou]/ig,"*");
     return vowelconvert.value;     
}

</script>
