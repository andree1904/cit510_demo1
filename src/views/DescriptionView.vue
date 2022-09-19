<template>
    <div>
        <v-timeline
    align-top
   
  >
    <v-timeline-item
      v-for="(item, i) in items"
      :key="i"
      :color="item.color"
      :icon="item.icon"
      :title="item.title"
      :description="item.description"
      fill-dot
    
    >
      <v-card
        :color="item.color"
      
      >
        <v-card-title class="text-h6 font-italic">
          {{ item.title }}
        </v-card-title>
        <v-card-text class="white text--primary">
          <p>{{ item.description }}</p>
          
        </v-card-text>
      </v-card>
    </v-timeline-item>
  </v-timeline>
</div>
</template>

<script setup>
  import { ref } from 'vue';
  import firebase from 'firebase/compat';
import { onBeforeMount } from 'vue';
import { useRouter } from 'vue-router';

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
     const items = ref([
        {
          color: '#ABD9FF',
          icon: 'mdi-view-dashboard-variant',
          title: 'Dashboard',
          description: 'This section is the landing page of the website. wherein it has a carousel that contains all the my favorite kpop boy group. In the dashboard, there is a welcome page that welcomes the user in the website and also a about page on what is the purpose of this website'
        },
        {
          color: '#D2D79F',
          icon: 'mdi-plus-minus-variant',
          title: 'Simple Calculator',
          description: 'This section, the user will use this simple calculator to compute numbers. this simple calculator has the basic function of addition, subtraction, multiplication, and division. Also, the simple calculator has the average function wherein it adds the two numbers and divide that solution to 2.'
        },
        {
          color: '#FFF38C',
          icon: 'mdi-wordpress',
          title: 'String Manipulator',
          description: 'This sector, the user will be able to manipulate any string value or text value in the website. It has the function count vowels containing in the string, count the letters in the string, count all the consonants containing in the string, and to convert all the vowels in the string into asterisk(*).'
        },
        {
          color: '#B09B71',
          icon: 'mdi-account',
          title: 'About Me',
          description: 'This section is all about the information of the developer. In this section, it has the introduction of the developer and there are also many information of the user like his hobbies, his current state in college and many more.'
        },
        {
          color: '#816797',
          icon: 'mdi-information-variant',
          title: 'About Vuetify',
          description: 'This section is where all the information about vuetify which is a front-end tool in vue js. This section is a research information about what is vuetify and what is the purpose of the vuetify in web development. '
        },

        {
          color: '#FFC3C3',
          icon: 'mdi-feather',
          title: 'Quiz App',
          description: 'This section is to test the users knowledge in music using the quiz application. this section provides the set of different randomize questions that are related to music and the user will answer those questions. At the end of the quiz, it will tally and show the users score and the percentage of the score.'
        },
     ])
  
</script>

<style>

</style>