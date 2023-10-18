<template>
  <router-view/>
</template>

<script>
  export default {
    watch: {
            title: {
                immediate: true,
                handler() {
                    document.title = 'ELBET';
                }
            }
        },
  } 
</script>

<!-- <script>
import NavBar from './components/NavBar.vue';
import HomeSection from './components/sections/HomeSection.vue';



export default {
  name: 'App',
  components: {
    NavBar, 
    HomeSection,
  }
}
</script> -->
