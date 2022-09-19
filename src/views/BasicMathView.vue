

<template>
<div align="center">
 
<v-container fluid>
  <v-card
    class="ma-15"
    max-width="460"
    style="background: linear-gradient(90deg, rgba(107,191,102,1) 0%, rgba(0,255,110,1) 13%, rgba(234,246,234,0.9868989832261029) 97%);"
     elevation="24"
 >
  <v-card-title> Simple calculator </v-card-title>
  <v-text-field label="First Input" v-model.number="fNumber"></v-text-field>
  <v-text-field label="Second Input" v-model.number="sNumber"></v-text-field>

  <v-card-actions  >
    <v-btn @click="doSum">Add</v-btn>
    <v-btn @click="doSub">Subtract</v-btn>
    <v-btn @click="doMul">Multiply</v-btn>
    <v-btn @click="doDivi">Divide</v-btn>
    <v-btn @click="doAve">Average</v-btn>
  </v-card-actions>
  <v-spacer></v-spacer>
  <h4>Addition</h4>
  {{sum}}
  <v-spacer></v-spacer>
  <h4>Subtraction</h4>
  {{sub}}
  <v-spacer></v-spacer>
  <h4>Multiplication</h4>
  {{mul}}
  <v-spacer></v-spacer>
  <h4>Division</h4>
  {{divi}}
  <v-spacer></v-spacer>
  <h4>Average</h4>
  {{ave}}
  </v-card>
</v-container>
</div>

 </template>

<script setup>
  import {ref} from 'vue'
import firebase from 'firebase/compat';
import { onBeforeMount } from 'vue';
import { useRouter } from 'vue-router';
import Swal from 'sweetalert2';

  const fNumber=ref(0)
  const sNumber=ref(0)
  const sum=ref(0)
  const sub=ref(0)
  const mul=ref(0)
  const divi=ref(0)
  const ave=ref(0)
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
  function doSum(){
    sum.value = fNumber.value + sNumber.value
    return sum.value
  }
  function doSub(){
    sub.value = fNumber.value - sNumber.value
    return sub.value
  }

  function doMul(){
    mul.value = fNumber.value * sNumber.value
    return mul.value
  }

  function doDivi(){
    divi.value = fNumber.value / sNumber.value
    return divi.value
  }

  function doAve(){
    ave.value = (fNumber.value + sNumber.value) / 2
    return ave.value
  }


</script>


