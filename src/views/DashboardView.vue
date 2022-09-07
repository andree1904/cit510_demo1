<template>
 <div>
  <div>
     <h1 align="center">
    Gallery
 </h1>
  </div>
  <v-carousel hide-delimiters>
   
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    ></v-carousel-item>
  </v-carousel>
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
