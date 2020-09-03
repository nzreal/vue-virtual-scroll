<template>
  <div id="scroll-content">
      <div id="scroll-body" :style="basicStyle">
          <ListCard />
      </div>
  </div>
</template>

<script>
import { reactive } from 'vue';
import ListCard from '../ListCard/ListCard';
const arr = new Array(800)

export default {
    name: 'VirtualScroll',
    components: {
        ListCard
    },
    setup() {
        console.log(ListCard)
        const basicStyle = reactive ({
            height: `${arr.length*150}px`
        })

        return {
            basicStyle
        }
    }
}
</script>

<style lang="less" scoped>
#scroll-content {
    padding: 10px;
    width: 800px;
    height: 800px;
    margin: auto;
    border: 1px solid #dcdcdc;
    overflow-y: scroll;
    overflow-x: hidden;
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

#scroll-body {
    width: 100%;
}

</style>