<template>
  <div>

   <fionavbar />

  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/shopping">Shopping Home</router-link> |
    <router-link to="/products">Products</router-link> |
    <router-link to="/authenticate">Login and Signup</router-link> |
    <router-link to="/service">Service Home</router-link> |
    <router-link to="/ShopProfile">Shop Profile(Buyer Side)</router-link>
  </div>
  
      <p>{{ lang.name }}</p>

  <router-view/>

  <footerfio />
  </div>
</template>

<script>
import footerfio from './components/footerfio.vue'
import fionavbar from './components/fionavbar.vue'
import axios from 'axios'

export default {
  components: {
    footerfio,
    fionavbar
  },
  data() {
    return {
       currentlang: 'en',
       firstloadflag: true
    }
  },
  beforeCreate() {
        axios.defaults.withCredentials = true
        axios.get('http://localhost:8000/api/users/validate-refresh-token-get-access-token/')
        .then(response => {
        console.log(response.data)
        this.$store.commit('updatetoken', response.data['access_token'])
        })
        .catch(err => {
         console.log(err)
        })
    
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
