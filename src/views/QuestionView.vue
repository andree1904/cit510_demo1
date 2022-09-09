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
  <h1>Quiz App About Music</h1>
    <quiz @quiz-completed="handleQuizCompleted" :key="quizKey" />
    <custom-modal
      v-show="showModal"
      header="Congratulations!"
      subheader="You've completed your Quiz!"
      :score="score"
      @reload="updateQuiz"
      @close="showModal = false"
    />

<v-btn @click="getQuestions"
class="ma-3"
      outlined
      color="indigo"
>Enter</v-btn>

  </v-card>
   </v-container>
</div>
</template>

<script>
import CustomModal from "../components/CustomModal.vue";
import Quiz from "../components/Quiz.vue";
export default {
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
    },
    updateQuiz() {
      this.showModal = false;
      this.quizKey++;
    },
  },
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
  text-align: center;
  color: #2c3e50;
  line-height: 1.6;
}
</style>