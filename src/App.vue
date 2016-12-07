<template>
  <div id="app">
    <c-header></c-header>
    <content-head></content-head>
  </div>
</template>

<script>
import cHeader from './components/header'
import contentHead from './components/contentHead'

export default {
  name: 'app',
  components: {
    cHeader,contentHead
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
}
</style>
