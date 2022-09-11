<template>
   <v-app id="app">
    <v-main>
       <Navbar/>
       <router-view></router-view>
       <footer>
         <Footer></Footer>
       </footer>
    </v-main>
   
   </v-app>
</template>

<script setup>
  import Navbar from '@/components/NavBar.vue';
 
import Footer from './components/Footer.vue';
</script>

<style >
#app {
   background: rgb(127,188,210);
background: linear-gradient(90deg, rgba(127,188,210,1) 0%, rgba(165,241,233,1) 13%, rgba(225,255,238,1) 97%);
}
</style>
