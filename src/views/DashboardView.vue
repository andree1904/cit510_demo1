<template>
 
  <div>
    <v-card
    class="mx-auto"
    max-width="1500px"
    style="background: linear-gradient(90deg, rgba(127,188,210,1) 0%, rgba(165,241,233,1) 13%, rgba(225,255,238,1) 97%);"
    
  >
  <v-card-title>
    <h1 align="center" class="font-italic">Welcome</h1>
  </v-card-title>
    <v-card-text>
     <p align="center">Hello everyone this website is all about my compilation on the laboratories in Integrative programming and Technologies 2. Wherein in there are 7 sections of the website. First is the dashboard, Next is a simple calculator, Next is String manipulatior, Next is About me section, Next is the research work on what is vuetify, and last is the Quiz app about music.</p>
    </v-card-text>
 
 

  
   

  
     <h1 align="center" class="font-italic">
    Gallery
 </h1>
  
  <v-carousel hide-delimiters>
   
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    ></v-carousel-item>
  </v-carousel>
</v-card>
  </div>

</template>
<script setup>
import { ref } from 'vue'

const items = ref([
{
            src: 'https://i.pinimg.com/736x/60/fd/ae/60fdae197ef68550807cd91c4d0eae42.jpg',
          },
          {
            src: 'https://i.pinimg.com/474x/32/93/ad/3293ade2a71def1d49f872eb73d0392d.jpg',
          },
          {
            src: 'https://i.pinimg.com/600x315/af/83/f8/af83f81ab6d1986b9becd22b3486d723.jpg',
          },
          {
            src: 'https://i.pinimg.com/600x315/98/89/f5/9889f5ce3c0499fbfef97d50b335d9ef.jpg',
          },
])
 
</script>

<style scoped>
  .finedTitle {
    font-weight: 900;
    text-shadow: 2px 2px #000000;
  }
  
  .social-icon {
    font-size: 21px;
    color: white;
  }
  .elevation-0 {
    background: rgb(127,188,210);
background: linear-gradient(90deg, rgba(127,188,210,1) 0%, rgba(165,241,233,1) 13%, rgba(225,255,238,1) 97%);
  }
  </style>