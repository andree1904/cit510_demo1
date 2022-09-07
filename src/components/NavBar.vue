<template>

  <nav>
    
      <v-toolbar app color="primary">
       <v-app-bar-nav-icon @click='toggleDrawer'></v-app-bar-nav-icon>
      <v-toolbar-title >
        <span class="font-weight-light">Midterm Laboratory</span>
        <span> 1</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <!-- dropdown menu -->
    <v-menu
      open-on-hover
    >
      <template v-slot:activator="{ props }">
        
        <v-btn
          color="primary"
          v-bind="props"
        >
          Dropdown
        </v-btn>
      </template>
      
      <v-list>
        
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          router
          :to="item.path" :prepend-icon="item.icon">
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
      
    </v-menu>

      
      
      
      </v-toolbar>
      
     <v-navigation-drawer app v-model="drawer" id="app" >
     
      <v-img
  max-height="150"
  max-width="250"
  src="https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/273461304_1142771459594561_8758031214528341052_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=FZwUquMzRusAX-ypckR&_nc_ht=scontent-lax3-2.xx&oh=00_AT8znnh78J8xJ7vODl36vUixlB-tbDkOKtbw4YBIvV3cPw&oe=631CC157"
></v-img>

       <v-list-item
          v-for="item in items"
          :key="item.title"
          router 
          :to="item.path" :prepend-icon="item.icon">
          <v-list-item-title>{{ item.title }}</v-list-item-title>
          
        </v-list-item>
      
     </v-navigation-drawer>
  </nav>

</template>

<script setup>
  import { ref } from 'vue'
    
  const drawer = ref(false)

  const  items =  ref([
           { title: 'Dashboard', icon: 'mdi-view-dashboard-variant', path: '/' },
           { title: 'Math', icon: 'mdi-plus-minus-variant', path: '/basicMath' },
           { title: 'String manipulator', icon: 'mdi-wordpress', path: '/stringApp'},
            { title: 'About Me', icon: 'mdi-account', path: '/about' },
              { title: 'Vuetify', icon: 'mdi-information-variant', path: '/vuetify' },
              { title: 'Questions', icon: 'mdi-help', path: '/questions' },
        ])

 function toggleDrawer(){
  return drawer.value = !drawer.value
 }

 
</script>
<style>
#app {
  background: rgb(127,188,210);
background: linear-gradient(90deg, rgba(127,188,210,1) 0%, rgba(165,241,233,1) 13%, rgba(225,255,238,1) 97%);
}
</style>
