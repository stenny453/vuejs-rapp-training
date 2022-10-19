<template>
  <div id="app">
    <h1>Welcome to GSAP Training ! </h1>
    <CarRotate />
  </div>
</template>

<script>
import CarRotate from './components/CarRotate.vue'

export default {
  name: 'App',
  components: {
    CarRotate
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
