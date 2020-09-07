<template>
  <!-- <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
  </div>-->
  <VirtualScroll :arr="arr" :itemHeight="150" :visualHeight="800" class="virtualScroll" />
</template>

<script>
import VirtualScroll from "./components/VirtualScroll/VirtualScroll";
import arr from "./assets/mockArr.json";

// const arr = new Array(800);

export default {
  name: "App",
  components: {
    VirtualScroll,
  },
  setup() {
    return {
      arr,
    };
  },
};
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

.virtualScroll {
  margin: 100px auto 0 auto;
  padding: 10px;
  width: 800px;
  border: 1px solid #dcdcdc;
  border-radius: 5px;

  &::-webkit-scrollbar {
    width: 15px;
  }

  &::-webkit-scrollbar-thumb {
    margin: 5px;
    border-radius: 7.5px;
    background-color: #868686;

    &:active {
      background-color: #6b6b6b;
    }
  }

  &::-webkit-scrollbar-track {
    border-radius: 7.5px;
    margin-right: 5px;
    background-color: #f1f1f1;
  }

  &::-webkit-scrollbar-button {
    height: 1%;
  }
}
</style>
