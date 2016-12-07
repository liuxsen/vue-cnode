<template>
  <div id="app">
    <left-bar></left-bar>
    <content-box></content-box>
  </div>
</template>

<script>
import leftBar from './components/leftBar'
import contentBox from './components/contentBox'

export default {
  name: 'app',
  components: {
    leftBar,contentBox
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
