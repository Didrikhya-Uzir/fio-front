<template>
  <div>

   <fionavbar />


  
      <p>{{ lang.name }}</p>

  <router-view/>

  <footerfio />
  </div>
</template>

<script>
import footerfio from './components/footerfio.vue'
import fionavbar from './components/fionavbar.vue'

export default {
  components: {
    footerfio,
    fionavbar
  },
  data() {
    return {
       currentlang: 'en'
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}


</style>
