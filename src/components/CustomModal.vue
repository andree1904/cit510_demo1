<template>
 
    <div name="modal"  transition="scale-transition" >
      <div class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-container">
            <div class="modal-header">
              <h2 class="font-italic">{{ header }}</h2>
              <h3 class="font-italic">{{ subheader }}</h3>
            </div>
  
            <div class="modal-body">
              <v-card id="score"
              elevation="24"
              >
                <span class="font-italic">You answered </span>
                <span class="highlight font-italic ">
                  {{
                    Math.floor(
                      (score.correctlyAnsweredQuestions / score.allQuestions) *
                        100
                    )
                  }}
                  <span class="font-italic">% correclty </span>
                </span>
                <span class="font-italic"> Answered </span>
                <span class="highlight font-italic">
                  {{ score.correctlyAnsweredQuestions }} out of
                  {{ score.allQuestions }}
                </span>
               <span class="font-italic"> questions. </span>
              </v-card>
            </div>
  
            <div class="modal-footer">
              <v-btn
                id="play-again"
                class="button-footer"
                x large
                @click="$emit('reload')"
              >
              <v-icon>mdi-play</v-icon>
              </v-btn>
              <v-btn
                id="close-button"
                class="button-footer"
                @click="$emit('close')"
              >
              <v-icon>mdi-close</v-icon>
              </v-btn>
            </div>
          </div>
        </div>
      </div>
    </div>
 
  </template>
  
  <script>
  export default {
    props: {
      header: String,
      subheader: String,
      score: Object,
    },
  };
  </script>
  
  <style scoped>
  .modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: table;
    transition: opacity 0.3s ease;
  }
  .modal-wrapper {
    display: table-cell;
    vertical-align: middle;
  }
  .modal-container {
    width: 90vw;
    max-width: 650px;
    margin: 0px auto;
    padding: 20px 30px;
    background:linear-gradient(90deg, rgba(107,191,102,1) 0%, rgba(0,255,110,1) 13%, rgba(234,246,234,0.9868989832261029) 97%);
    border-radius: 6px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    transition: all 0.3s ease;
  }
  .modal-header {
    text-align: center;
  }
  .modal-header h2 {
    color: #1B2430;
  }
  .modal-header h3 {
    color: #1B2430;
  }
  .modal-body {
    display: flex;
    flex-direction: column;
    margin: 20px 0;
    line-height: 3rem;
  }
  .modal-body > * {
    margin: 1rem 0;
    padding: 0.25rem 0.5rem;
  }
  .modal-footer {
    display: flex;
    justify-content: space-between;
  }
  /*
   Modal Transition
   */
  .modal-enter {
    opacity: 0;
  }
  .modal-leave-active {
    opacity: 0;
  }
  .modal-enter .modal-container,
  .modal-leave-active .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
  .button-footer {
    padding: 5px 10px;
    background: linear-gradient(90deg, rgba(38,126,109,1) 11%, rgba(47,158,104,1) 65%, rgba(88,179,134,1) 95%);
    
    border: none;
  }
  .anchor-footer {
    color: black;
    text-decoration: none;
    cursor: default;
  }
  .button-footer:active,
  .button-footer:focus {
    outline: none;
  }
  .button-footer:hover {
    transform: scale(1.02);
  }
  .highlight {
    border-radius: 4px;
    background-color: rgba(187, 0, 47, 0.3);
    padding: 0.25rem 0.5rem;
  }
  #score {
    background-color: #C3F8FF;
    border-radius: 5px;
    box-shadow: 2px 3px 9px gray;
  }
  #chooseCategory {
    text-align: center;
  }
  </style>

