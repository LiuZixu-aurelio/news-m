<template>
  <div class="home-container">
    <van-nav-bar class="page-nav-bar">
      <template v-slot:title>
        <van-button class="search-btn" type="primary" size="mini" icon="search" round>搜索</van-button>
     </template>
    </van-nav-bar>
    <van-tabs class="channel-tabs" v-model:active="active" animated swipeable>
      <!-- <van-tab title="标签 1">内容 1</van-tab> -->
      <van-tab v-for="item in channels" :key="item.id" :title="item.name">
        {{item.name}}
        <article-list :channel="item"/>
      </van-tab>
      <template  v-slot:nav-right>
        <i class="newsm newsm-edit-add humberger-btn"></i>
      </template>
    </van-tabs>
  </div>
</template>

<script>
import { ref } from 'vue'
import { getUserChannels } from '@/api/user'
import ArticleList from './components/article-list' // 导入默认接口

export default {
  name: 'HomeIndex',
  components: { ArticleList },
  setup () {
    const active = ref(0)
    return { active }
  },
  data () {
    const channels = []
    return { channels }
  },
  created () {
    this.loadChannels()
  },
  methods: {
    async loadChannels () {
      try {
        const { data } = await getUserChannels()
        this.channels = data.data.channels // 变量名.属性.属性
      } catch (err) {
        this.$toast('获取失败')
      }
    }
  }
}
</script>

<style scoped lang="less">

.home-container {
  padding-bottom: 50px; // 显示最底部提示
  .van-nav-bar__title {
    max-width: unset;
  }

  .search-btn {
    width: 200px;
    height: 32px;
    background-color: #5babfb;
    border: none;
    font-size: 12px;
  }

  // 深度操作符
/deep/ .channel-tabs {
  .van-tabs__wrap {
    height: 40px;
  }
  .van-tab {
    border-right: 1px solid #edeff3;
    min-width: 80px;
    font-size: 14px;
    color: #777;
  }
  .van-tab--active {
    color: #333;
  }
  .van-tabs__line {
    width: 20px !important;
    height: 4px;
    background-color: #3296fa;
    top: 32px;
  }
  .humberger-btn {
    position: fixed;
    display: flex;
    right: 0px;
    height: 40px;
    width: 40px;
    justify-content: center;
    align-items: center;
    background: rgba(250,250,250,0.85);
    font-size: 20px;
  }
}
}

</style>
