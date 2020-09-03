<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
  </div>
  <VirtualScroll />
</template>

<script>
 import VirtualScroll from "./components/VirtualScroll/VirtualScroll";

export default {
  name: 'App',
  components: {
   VirtualScroll
  },
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}
</style>
