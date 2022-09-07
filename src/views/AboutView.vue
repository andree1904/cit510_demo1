<template>
<div align="center">


  <v-card
   class="ma-15"
    max-width="344"
     style="background: linear-gradient(90deg, rgba(107,191,102,1) 0%, rgba(0,255,110,1) 13%, rgba(234,246,234,0.9868989832261029) 97%);"
     elevation="24"
  >
   <v-card-title>
      About Me
    </v-card-title>
    <v-img
     src="https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/273461304_1142771459594561_8758031214528341052_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=FZwUquMzRusAX-ypckR&_nc_ht=scontent-lax3-2.xx&oh=00_AT8znnh78J8xJ7vODl36vUixlB-tbDkOKtbw4YBIvV3cPw&oe=631CC157"
      height="200px"
    ></v-img>

    <v-card-title>
      Andre S.Losito 
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
         My name is andre S. Losito. I am currently 4th year student in
     Technological institute of the philippines - manila and I am taking Bachelor
     of science in Information Technology. I hobbies are playing an instrument, watching BL, kdrama
     and I am expected to try new things after graduation. And I am a member of a music group Rondalla in 
     our parish that has being serving for 43 years.  
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</div>  
</template>

<script setup >
import {ref} from 'vue'

const show = ref(false)


</script>

<style>

</style>