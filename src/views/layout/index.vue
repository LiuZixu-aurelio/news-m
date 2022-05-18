<template>
  <div class="layout-container">
    <router-view/>
    <van-tabbar class="layout-tabbar" v-model="active" route>
      <van-tabbar-item to="/home">
        <template v-slot:icon>
          <i class="newsm newsm-edit-add"></i>
        </template>
        <span class="text">首页</span>
      </van-tabbar-item>
      <van-tabbar-item to="/qa" icon="search">问答</van-tabbar-item>
      <van-tabbar-item to="/video" icon="friends-o">视频</van-tabbar-item>
      <van-tabbar-item to="/my" icon="setting-o">{{ $store.state.user ? '我的' : '未登录'}}</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'LayoutIndex',
  setup () {
    const active = ref(0)
    return { active }
  }

}
</script>

<style lang="less" scoped>
.layout-tabbar {
  i.newsm{
    font-size: 20px
  }
  span.text {
    font-size: 12px;
  }
}

</style>
