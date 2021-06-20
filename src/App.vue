<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>

  <select v-model="currentlang" @click="$store.commit('changelang', currentlang)"> 
        <option value="en">English</option>
        <option value="as">Assamese</option>
        <option value="bn">Bengali</option>
        <option value="hn">Hindi</option>
  </select>
      <p>{{ lang.name }}</p>

  <router-view/>
</template>

<script>
export default {
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
