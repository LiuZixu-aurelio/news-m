<template>
<!-- 路由出口 -->
  <router-view/>
  <h1>news123</h1>
  <div>
    <i class="newsm newsm-edit-add"></i>
    <van-button type="primary">主要按钮</van-button>
    <van-button type="success">成功按钮</van-button>
    <van-button type="default">默认按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
    <van-button type="danger">危险按钮</van-button>
  </div>
  <van-cell-group>
    <van-cell title="单元格" value="内容" />
    <van-cell title="单元格" value="内容" label="描述信息" />
  </van-cell-group>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less"></style>
