<template >
    <div align="center"  >
   <v-container fluid>
  <v-card
    class="ma-15"
    max-width="900"
    style="background: linear-gradient(90deg, rgba(107,191,102,1) 0%, rgba(0,255,110,1) 13%, rgba(234,246,234,0.9868989832261029) 97%);"
     elevation="24"
 >
  <v-card-title> Questions about Music</v-card-title>
  <v-card-actions>
    <quiz @quiz-completed="handleQuizCompleted" :key="quizKey" />
  </v-card-actions>
    <custom-modal
      v-show="showModal"
      header="Congratulations!"
      subheader="You've completed your Quiz!"
      :score="score"
      @reload="updateQuiz"
      @close="showModal = false"
    />


  </v-card>
   </v-container>
</div>
</template>

<script>
import CustomModal from "../components/CustomModal.vue";
import Quiz from "../components/Quiz.vue";
import firebase from "firebase/compat";
import { onBeforeMount } from 'vue';
import { useRouter } from 'vue-router';
import Swal from "sweetalert2";


export default {
  
setup() {
  const authlistener = () => {
      const router = useRouter()
      firebase.auth().onAuthStateChanged(function(user) {
    if (!user) {
      Swal.fire({
  icon: 'error',
  title: 'Oops...',
  text: 'You need to Log in to view this page'
})
        router.push('/')
    }
  })
  
  }

onBeforeMount(() => {
  authlistener()
})
},
  components: { Quiz, CustomModal },
  name: "App",
  data() {
    return {
      quizKey: 0,
      showModal: false,
      score: {
        allQuestions: 0,
        answeredQuestions: 0,
        correctlyAnsweredQuestions: 0,
       
        
        
      },
    };
  },
  
  methods: {
    handleQuizCompleted(score) {
      
      this.score = score;
      this.showModal = true;
      firebase.firestore().collection("scores").add(
          this.score,
        ).then(() =>{
          Swal.fire('Good job!', 'Score is added to the admin database','success');
        })
     
    },
    updateQuiz() {
      this.showModal = false;
      this.quizKey++;
    },
}
};
</script>

<style>

    * {
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
 
  color: #2c3e50;
  line-height: 1.6;
}
</style>