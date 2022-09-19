<template>
<div align="center">


  <v-card
   class="ma-15"
    max-width="344"
     style="background: linear-gradient(90deg, rgba(107,191,102,1) 0%, rgba(0,255,110,1) 13%, rgba(234,246,234,0.9868989832261029) 97%);"
     elevation="24"
  >
   <v-card-title>
      Vuetify
    </v-card-title>
    <v-img
     src="https://i.postimg.cc/HsRCnPtW/22138497.png"
      height="200px"
    ></v-img>

    <v-card-title>
      What is Vuetify? 
    </v-card-title>

    

    <v-card-actions>
      <v-btn
        color="orange lighten-2"
        text
      >
        Explore
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
        Vuetify is a complete UI framework built on top of Vue.js. 
   The goal of the project is to provide developers with the tools they need to build rich and engaging user experiences.
Vuetify takes a mobile first approach to design which means your application just works out of the box—whether it’s on a phone, tablet, or desktop computer.
Vuetify has a very active development cycle and is patched weekly, responding to community issues and reports at breakneck speed, allowing you to get your hands on bug fixes and enhancements more often.
 In addition, every major release is accompanied with 18 months of Long-term support for the previous minor version.
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</div>  
</template>

<script setup>
 import {ref} from 'vue'
 import firebase from 'firebase/compat';
import { onBeforeMount } from 'vue';
import { useRouter } from 'vue-router';

const show = ref(false)
const router = useRouter()
const authlistener = firebase.auth().onAuthStateChanged(function(user) {
    if (!user) {
        alert('you must login first')
        router.push('/')
    }
  })
  onBeforeMount(() => {
    authlistener()
})  

</script>

<style>

</style>