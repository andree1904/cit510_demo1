<template >
    <div align="center"  >
   <v-container fluid>
  <v-card
    class="ma-15"
    max-width="900"
    style="background: linear-gradient(90deg, rgba(107,191,102,1) 0%, rgba(0,255,110,1) 13%, rgba(234,246,234,0.9868989832261029) 97%);"
     elevation="24"
 >
  <v-card-title> Questions </v-card-title>
   <v-list-item 
   v-for="question in questions"
   :key="question.id">
            <v-list-item-title class="mt-1 font-weight-bold"> {{ unescapeHtml(question.question) }} </v-list-item-title>
           
            <v-list-item>{{question.correct_answer}}</v-list-item>

            
</v-list-item>

<v-btn @click="getQuestions"
class="ma-3"
      outlined
      color="indigo"
>Enter</v-btn>

  </v-card>
   </v-container>
</div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { decode } from 'html-entities';




const questions = ref([])

async function getQuestions() {
    axios.get('https://opentdb.com/api.php?amount=10').then( response => {
        questions.value=(response.data.results)
        
        
    })
   
}
function unescapeHtml(str) {
        return str
        .replace(/&amp;/g, "&")
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
        .replace(/&quot;/g, "\"")
        .replace(/&#039;/g, "\'")
        ;
}
</script>

<style>
.mt-1 {
font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}
</style>