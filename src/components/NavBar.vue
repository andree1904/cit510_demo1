<template>

  <nav>
    
      <v-toolbar app color="#D3DEDC"
       src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
      >
       <v-app-bar-nav-icon @click='toggleDrawer'></v-app-bar-nav-icon>
      <v-toolbar-title >
        <span class="white--text">Midterm Project</span>
      
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>

      
      <span v-if="currentUser">
        <v-btn @click="signOut" icon>
        <v-icon >mdi-exit-run</v-icon>
      </v-btn>
    </span>
    <span v-else>
      <v-btn :to="{name: 'login'}" icon>
        <v-icon >mdi-login-variant</v-icon>
      </v-btn>
    </span>
 
  
   
   
      <!-- dropdown menu -->
    <v-menu
      open-on-hover
    >
     
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
      
     <v-navigation-drawer app v-model="drawer" id="app" 
      >
      <v-list>
          <v-list-item class="px-2">
            <v-list-item-avatar>
              <v-img src="https://i.postimg.cc/cJMqD1G6/273461304-1142771459594561-8758031214528341052-n.jpg"
              height="100px"
              ></v-img>
            </v-list-item-avatar>
          </v-list-item>

          <v-list-item link>
            <v-list-item-content>
              <v-list-item-title class="text-h6 text-md-center">
                Andre S. Losito
              </v-list-item-title>
              <v-list-item-subtitle class="text-md-center">maslosito@tip.edu.ph</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>

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
  import firebase from 'firebase/compat';
  
  const drawer = ref(false)
  const currentUser = ref(true)
  const  items =  ref([
           { title: 'Dashboard', icon: 'mdi-view-dashboard-variant', path: '/' },
           { title: 'Math', icon: 'mdi-plus-minus-variant', path: '/basicMath' },
           { title: 'String manipulator', icon: 'mdi-wordpress', path: '/stringApp'},
           { title: 'Quiz', icon: 'mdi-feather', path: '/questions' },
            { title: 'About Me', icon: 'mdi-account', path: '/about' },
              { title: 'Vuetify', icon: 'mdi-information-variant', path: '/vuetify' },
              { title: 'Descripton', icon: 'mdi-apps', path: '/description' },
        ])

 function toggleDrawer(){
  return drawer.value = !drawer.value
 }

 
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            currentUser.value = true
        } else {
            currentUser.value = false
        }
    })
    const signOut = () => {
        firebase.auth().signOut()
        alert('successfully log out')
        router.push('/')
    }
</script>
<style>
#app {
  background: rgb(127,188,210);
background: linear-gradient(90deg, rgba(127,188,210,1) 0%, rgba(165,241,233,1) 13%, rgba(225,255,238,1) 97%);
}
</style>
