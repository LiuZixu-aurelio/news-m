<template>
  <div class="article-list">
    <van-pull-refresh
      v-model="isreFreshLoading"
      :success-text="refreshSuccessText"
      :success-duration="1500"
    >
      <van-list
        v-model:loading="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <!-- <article-item
          v-for="(article, index) in list"
          :key="index"
          :article="article"
        /> -->
        <van-cell v-for="item in list" :key="item" :title="item" />
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
import { getArticles } from '@/api/article.js'
/* import ArticleItem from '@/components/article-item' */

export default {
  name: 'ArticleList',
  /* components: {
    ArticleItem
  }, */
  props: {
    channel: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      list: [], // 存储列表数据的数组
      loading: false, // 控制加载中 loading 状态
      finished: false, // 控制数据加载结束的状态
      timestamp: null, // 请求获取下一页数据的时间戳
      error: false, // 控制列表加载失败的提示状态
      isreFreshLoading: false, // 控制下拉刷新的 loading 状态
      refreshSuccessText: '刷新成功' // 下拉刷新成功提示文本
    }
  },
  methods: {
    async onLoad () {
      try {
        const { data } = await getArticles({ // 找到getArticles中的data属性
        })
        const { results } = data.data

        // 数组展开操作
        console.log(results)
        for (let i = 0; i <= results.length; i++) {
          this.list.push(results[i].title)
        }
      } catch (err) {
        console.log('请求列表失败')
      }
    }
  }
}

</script>

<style>

</style>
