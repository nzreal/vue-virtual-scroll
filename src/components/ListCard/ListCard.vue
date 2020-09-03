<template>
  <div class="listCard">
      <img width="100" height="100" alt="加载失败" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1599150555263&di=fca790f25ee8b40281733955c0511708&imgtype=0&src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F201801%2F06%2F20180106153157_MBFQf.jpeg"/>
        <p>this is a title</p>
        <div class="desc">The quality of teaching can make a huge difference to students’ academic performance</div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.listCard {
    
    border: 1px solid #dcdcdc;
    border-radius: 10px;
    min-height: 150px;
    width: 100%;
    padding: 10px;

    img {
        float: left;
        margin: 10px 20px 10px 10px;
    }

    p {
        font-size: 26px;
        line-height: 36px;
        font-weight: bold;
    }

    .desc {
        font-size: 18px
    }
}
</style>