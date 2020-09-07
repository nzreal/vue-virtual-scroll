<template>
  <div id="scroll-content" @scroll="onScroll" :style="contentStyle">
    <div id="render-list" :style="renderListStyle">
      <div id="visible-list" :style="visibleListStyle">
        <ListCard v-for="item in renderArr" :index="item.id" :desc="item.desc" :key="item.id" />
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, ref, watch } from "vue";
import { throttle } from "../../utils/utils";
import ListCard from "../ListCard/ListCard";

function useVirtualScroll(props, visibleListStyle) {
  const { visualHeight, itemHeight, arr } = props;

  // 渲染虚拟列表三倍于可视区域的长度
  const renderHeight = visualHeight * 3;
  const renderNum = renderHeight / itemHeight;
  // 从三分之一高度开始重新计算显示数组
  const startHeight = (renderNum / 3) * itemHeight;

  const startIdx = ref(0);
  const renderArr = ref(arr.slice(0, renderNum));

  const onScroll = (e) => {
    const root = e.target;
    const { scrollTop } = root;
    if (scrollTop > startHeight) {
      const distance = scrollTop - startHeight;
      startIdx.value = Math.floor(distance / itemHeight);
    } else {
      visibleListStyle.top = "0px";
      startIdx.value = 0;
    }
  };

  watch(startIdx, (startIdx, preIdx) => {
    const betweenDis = (startIdx - preIdx) * itemHeight;
    const preTop = Number(
      visibleListStyle.top.substring(0, visibleListStyle.top.indexOf("px"))
    );
    visibleListStyle.top = `${
      preTop + betweenDis > 0 ? preTop + betweenDis : 0
    }px`;
    renderArr.value = arr.slice(startIdx, startIdx + renderNum);
  });

  return {
    onScroll,
    renderArr,
  };
}

export default {
  name: "VirtualScroll",
  components: {
    ListCard,
  },
  props: {
    arr: Array,
    itemHeight: Number,
    visualHeight: Number,
  },
  setup(props) {
    // 可视框主体
    const contentStyle = reactive({
      height: `${props.visualHeight}px`,
    });
    // 虚拟列表 长度为渲染所有子项长度
    const renderListStyle = reactive({
      height: `${props.arr.length * props.itemHeight}px`,
    });
    // 实际列表列表 距上边界距离
    const visibleListStyle = reactive({
      top: "0px",
    });

    const { onScroll, renderArr } = useVirtualScroll(props, visibleListStyle);

    return {
      renderListStyle,
      contentStyle,
      visibleListStyle,
      renderArr,
      onScroll: throttle(onScroll, 27),
    };
  },
};
</script>

<style lang="less" scoped>
#scroll-content {
  position: relative;
  overflow-y: scroll;
  overflow-x: hidden;
}

#render-list {
  position: relative;
  width: 100%;
}

#visible-list {
  position: absolute;
}
</style>
