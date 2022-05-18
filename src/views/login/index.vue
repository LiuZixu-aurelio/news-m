<template>
  <div class="login-container">
    <!-- 登录页面 -->
    <van-nav-bar class="page-nav-bar" title="登录" >
      <template v-slot:left>
        <van-icon class="van-icon" name="cross" @click="$router.back()"/> <!-- 返回 -->
      </template>
    </van-nav-bar>
    <!-- 表单 -->
    <van-form ref='loginForm' @submit="onSubmit">
        <van-cell-group inset>
            <van-field
                v-model="user.mobile"
                name="mobile"
                placeholder="请输入手机号"
                left-icon="smile-o"
                :rules="userFormRules.mobile"
            >
                <!-- v3.0的插槽 -->
                <template v-slot:left-icon>
                    <!-- 插入字库名 图标名 -->
                    <i class="newsm newsm-edit-add"></i>
                </template>
            </van-field>
            <van-field
                v-model="user.code"
                name="code"
                placeholder="请输入验证码"
                :rules="userFormRules.code"
            >
                <template v-slot:left-icon>
                    <i class="newsm newsm-edit-add"></i>
                </template>
                <template #button>
                  <van-count-down
                    v-if="isCountDownShow"
                    :time="1000 * 10"
                    format="ss s"
                    @finish="isCountDownShow = false"
                    /> <!-- ss格式 s字符 -->
                  <van-button
                    v-else
                    class="send-sms-btn"
                    round
                    native-type="button"
                    size="small"
                    type="default"
                    @click='onSendSms'
                  >发送验证码</van-button>
                </template>
            </van-field>
        </van-cell-group>
        <div class="login-btn-wrap">
            <van-button class="login-btn" block type="primary" native-type="submit">
            登录
            </van-button>
        </div>
    </van-form>
</div>
</template>

<script>
import { login, sendSms } from '@/api/user'

export default {
  name: 'LoginIndex',
  data () {
    return {
      user: {
        mobile: '',
        code: ''
      },
      userFormRules: {
        mobile: [{
          required: 'ture',
          message: '手机不能为空'
        }, {
          pattern: /^1[3|5|7|8]\d{9}$/,
          message: '手机号格式错误'
        }],
        code: [{
          required: 'ture',
          message: '验证码不能为空'
        }, {
          pattern: /^\d{6}$/,
          message: '验证码格式错误'
        }]
      },
      isCountDownShow: false
    }
  },
  methods: {
    // async异步操作简化代码
    async onSubmit () {
      // 1.获取数据
      const user = this.user

      // 组件中必须用 this.$toast调用
      this.$toast.loading({
        message: '登录中...',
        orbidClick: true,
        duration: 0
      })

      // 2.表单验证
      // 3.提交请求登录
      try {
        const { data } = await login(user)
        this.$store.commit('setUser', data.data)
        this.$toast.success('登录成功')
        this.$router.back()
        console.log(data.data)
      } catch (err) {
        if (err.response.status === 400) {
          this.$toast.loading('验证码错误')
          console.log('验证码错误')
        } else { console.log('登录失败', err); this.$toast.loading('登录失败') }
      }

    // 4.根据响应进行处理
    },
    async onSendSms () {
      // 1.校验手机号
      try {
        await this.$refs.loginForm.validate('mobile')
        console.log('通过')
      } catch (err) {
        return console.log('code失败', err)
      }
      // 2.验证通过显示倒计时
      this.isCountDownShow = true
      // 3.请求发送验证码
      try {
        const res = await sendSms(this.user.mobile)
        console.log('发送成功', res)
      } catch (err) {
        console.log('发送失败', err)
      }
    }
  }
}
</script>

<style lang="less" scoped>
.login-container {
    .newsm{font-size: 24px;}
}
.van-cell {
/*     padding-left: 0px; */
}
.van-cell-group--inset{
    margin: 0px;
}
.send-sms-btn {
    background-color: #ededed;
    width: 120x;
    height: 28px;
    color: #666;
    font-size: 10px;
}
.login-btn-wrap {
    padding: 53px 33px;
}
.login-btn {
    background-color: #6db4fb;
    border: none;
}
</style>
