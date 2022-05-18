<template>
  <div class="my-container">

    <!-- 已登录 -->
    <div v-if="user" class="header user-info">
      <div class="base-info">
        <div class="left">
          <van-image
            class="avatar"
            src="https://cdn.jsdelivr.net/npm/@vant/assets/cat.jpeg"
            round
            fit="cover"
          />
          <span class="name">用户名称</span>
        </div>
        <div class="right">
          <van-button size="mini" round>编辑资料</van-button>
        </div>
      </div>
      <div class="data-state">
        <div class="data-item">
          <span class="count">10</span>
          <span class="text">头条</span>
        </div>
        <div class="data-item">
          <span class="count">10</span>
          <span class="text">关注</span>
        </div>
        <div class="data-item">
          <span class="count">10</span>
          <span class="text">粉丝</span>
        </div>
        <div class="data-item">
          <span class="count">10</span>
          <span class="text">获赞</span>
        </div>
      </div>
    </div>
    <!-- 未登录 -->
    <div v-else class="header not-login">
      <div class="login-btn" @click="$router.push('/login')">
        <img class="mobile-img" src="~@/assets/mobile.png" alt="">
        <span class="text">登录</span>
      </div>
    </div>

    <van-grid class="grid-nav" :column-num="2" clickable>
      <van-grid-item class="grid-item" icon="photo-o" text="文字">
        <template v-slot:icon>
          <i class="newsm newsm-edit-add"></i>
        </template>
        <template v-slot:text>
          <span class="text">收藏</span>
        </template>
      </van-grid-item>
      <van-grid-item class="grid-item" icon="photo-o" text="文字">
        <template v-slot:icon>
          <i class="newsm newsm-edit-add"></i>
        </template>
        <template v-slot:text>
          <span class="text">历史</span>
        </template>
      </van-grid-item>
    </van-grid>

    <van-cell title="小智同学" is-link></van-cell>
    <van-cell title="关于更多" is-link></van-cell>
    <van-cell clickable v-if="user" @click="Logout" class="logout" title="退出登录"></van-cell>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'MyIndex',
  computed: {
    ...mapState(['user']) // 访问容器里的数据
  },
  methods: {
    Logout () {
      this.$dialog.confirm({
        title: '确认退出吗？'
      })
        .then(() => {
        // on confirm
          this.$store.commit('setUser', null) // 清除vuex里的数据
        })
        .catch(() => {
        // on cancel
        })
    }
  }
}
</script>

<style lang="less" scoped>
.my-container {
  .header {
    height: 200px;
    background: url('~@/assets/banner.png'); // @前要加~
    background-size: cover; // 填充到盒子里
  }
  .not-login {
    display: flex;
    justify-content: center; // 水平居中
    align-items: center; // 垂直居中必须要高度

    .login-btn {
      display: flex;
      flex-direction: column;
      justify-content: center; // 水平居中
      align-items: center; // 垂直居中
        .mobile-img {
          width: 80px;
          height: 80px;
          margin-bottom: 16px;
        }
        .text {
          font-size: 18px;
          color:  #fff;
        }
    }
  }

  .user-info {
    .base-info {
      height: 120px;
      padding: 46px 16px 16px;
      box-sizing:  border-box; // 高度包括padding
      display: flex;
      justify-content: space-between; // 两边撑开
      align-items: center;
      .left {
        display: flex;
        align-items: center;
        .avatar {
          width: 80px;
          height: 80px;
          margin-right: 16px;
          border: 1px solid #fff;
        }
        .name {
          font-size: 16px;
          color: #fff;
         }
      }
    }
    .data-state {
      display: flex;
      .data-item {
        flex: 1; //平分宽度
        height: 100px;
        display: flex;
        flex-direction: column; // 垂直分布
        justify-content: center;
        align-items: center;
        color: #fff;
        .count {
          font-size: 24px;
        }
        .text {
          font-size: 12px;
        }

      }
    }
  }

  .grid-nav{
    .grid-item{
      height: 72px;
      i.newsm {
        font-size: 20px;
      }
      .newsm-edit-add {
        color: #eb5253;
      }
      span.text {
        font-size: 14px;
      }
    }
  }

  .logout {
    color: #eb5253;
    display: flex;
    text-align: center;
    margin-top: 4px;
  }
}

</style>
