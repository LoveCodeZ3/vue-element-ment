<template>
  <div style="height: 100%">
    <div class="pc" style="height: 100%">
      <el-container style="height: 100%">
        <!--      pc头部图片-->
        <div class="f-header-pc"> <f-header-pc-img /></div>
        <!--    头部导航-->
        <el-header>
          <!--            pc头部-->
          <div class="f-header-pc"> <f-header-pc /></div>
          <!--            phone头部-->
          <div class="f-header-phone"><f-header-phone /></div>
        </el-header>
        <el-container>
          <!--            主体-->
          <el-main>
            <!--              手机端搜索框-->
            <div :class="sou ? 'sin4' : 'sin3'">
              <el-input v-model="input" class="sou-input" placeholder="请输入内容">
                <el-button slot="append" style="cursor: pointer" @click="toggleSou">取消</el-button>
              </el-input>
            </div>
            <!--              手机端菜单-->
            <div :class="sidebar ? 'sin1' : 'sin2'">
              <el-menu :default-active="$route.path" :router="true" class="el-menu-vertical-demo" :collapse="sidebar">
                <template v-for="item in menuData">
                  <el-submenu v-if="item.child" :key="item.path" class="el-submenu-deep" :index="item.path">
                    <template slot="title">
                      {{ item.title }}
                    </template>
                    <template v-for="(child,index) in item.child">
                      <el-menu-item :key="index" :index="child.path" @click="toggleSideBar">
                        {{ child.title }}
                      </el-menu-item>
                    </template>
                  </el-submenu>
                  <el-menu-item
                    v-else
                    :key="item.title"
                    :index="item.path"
                    class="el-submenu-deep"
                    @click="toggleSideBar"
                  >
                    {{ item.title }}
                  </el-menu-item>
                </template>
              </el-menu>
            </div>

            <!--              主页面内容-->
            <div :class="sidebar ? 'm-pc' : 'm-pc2'">
              <router-view />
            </div>
          </el-main>
          <el-footer :class="sidebar ? 'el-footer' :'el-footer1'">
            <!--            底部pc-->
            <div class="f-header-pc">
              <f-footer-pc />
            </div>
            <!--              底部phone-->
            <div class="f-header-phone">
              <div :class="sidebar ? 'sin3' : 'sin4'">
                <el-footer>
                  <f-footer-phone />
                </el-footer>
              </div>
            </div>
          </el-footer>
        </el-container>
      </el-container>
    </div>
  </div>
</template>

<script>
import FHeaderPc from '@/components/common/f-header-pc'
import FHeaderPhone from '@/components/common/f-header-phone'
import FHeaderPcImg from '@/components/common/f-header-pc-img'
import FFooterPhone from '@/components/common/f-footer-phone'
import FFooterPc from '@/components/common/f-footer-pc'
import { mapGetters } from 'vuex'
import MenuJson from '@/common/jsons/menu.json'
const { body } = document
const WIDTH = 992

export default {
  name: 'Home',
  data() {
    return {
      title: '',
      isCollapse: true,
      menuData: MenuJson,
      input: ''
    }
  },
  mounted() {
    this.$router.push('/index')
  },
  // eslint-disable-next-line vue/order-in-components
  computed: {
    ...mapGetters(['sidebar', 'sou'])
  },
  beforeMount() {
    // 参数一 类型   参数二  函数
    // resize
    // none	用户无法调整元素的尺寸。
    // both	用户可调整元素的高度和宽度。
    // horizontal	用户可调整元素的宽度。
    // vertical	用户可调整元素的高度。
    window.addEventListener('resize', this.resizeHandler)
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('toggleSideBar')
    },
    toggleSou: function() {
      this.$store.dispatch('toggleSou')
      // eslint-disable-next-line no-self-compare
      if (this.$route.path === this.$route.path) {
        this.$router.push(this.$route.path)
      }
    },
    isMobile() {
      // body.getBoundingClientRect()  获取div到  整个边框的上下左右的距离
      const rect = body.getBoundingClientRect()
      return rect.width - 1 < WIDTH // false
    },
    resizeHandler: function() { // 只要窗口发生变化 ，就会执行这里
      if (!document.hidden) { //! document.hidden  当你直接变成 手机端的时候，会关闭菜单栏
        const isMobile = this.isMobile()
        if (isMobile) {
          this.$store.dispatch('toggleSideBar2')
          this.$store.dispatch('toggleSou2')
          // eslint-disable-next-line no-self-compare
          if (this.$route.path === this.$route.path) {
            this.$router.push(this.$route.path)
          }
        } else {
          this.$store.dispatch('toggleSideBar3')
          this.$store.dispatch('toggleSou3')
          // eslint-disable-next-line no-self-compare
          if (this.$route.path === this.$route.path) {
            this.$router.push(this.$route.path)
          }
        }
      }
    }
  },
  // eslint-disable-next-line vue/order-in-components
  components: {
    FFooterPc,
    FFooterPhone,
    FHeaderPcImg,
    FHeaderPc,
    FHeaderPhone
  }
}
</script>

<style lang="scss">
.el-header {
    background-color: #4d90fe;
    color: #333;
    text-align: center;
    // line-height: 60px;
}

.el-footer {
    color: white;
    background-color: #4d90fe;
    padding: 0 !important;
    height: 510px !important;
}

.el-main {
    overflow: hidden;
    color: #333;
    padding: 0 !important;
}

.m-pc {
    overflow: hidden;
    display: block;
}
.m-pc2{
    overflow: hidden;
    display: none;
}
.sin1 {
    display: none;
}

.sin2 {
    display: block;
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 0.8;
}

.sin3 {
    display: block;
    input{
        border-radius: 45px;
    }
}
.sin4 {
    display: none;
}

//手机电脑分辨
@media screen and (min-width: 414px) and (max-width: 991px) {
    .f-header-pc {
        display: none;
    }
    .f-header-phone {
        display: block;
    }
    .el-footer1{
        height: 300px !important;
    }
  .el-footer{
        height: 0 !important;
    }

}
@media screen and (min-width: 992px) and (max-width: 3000px) {
    .sin2{
        display: none;
    }
    .m-pc2{
        display: block;
    }
    .sin3{
        display: none;
    }

    .f-header-phone {
        display: none;
    }
    .f-header-pc {
        display: block;
    }
}
</style>
