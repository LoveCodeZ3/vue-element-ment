<template>
  <div style="overflow: hidden">
    <div class="menu-phone" style="width: 100%;">
      <!--    头部布局-->
      <el-row type="flex" justify="space-between">
        <!--      菜单栏打开关闭按钮-->
        <el-col :xs="3" :sm="5" :md="3" :lg="3" :xl="5">
          <div @click="toggleSideBar">
            <i :class="sidebar ? 'el-icon-s-fold sgin' : 'el-icon-s-unfold sgin'" />
          </div>
        </el-col>
        <!--      公司标志图标-->
        <el-col :xs="14" :sm="14" :md="14" :lg="14" :xl="14">
          <div>
            <el-image style="padding-top: 10px" :src="require('@/assets/imgs/header.png')" alt="" />
          </div>
        </el-col>
        <!--        搜索图片-->
        <el-col :xs="5" :sm="5" :md="3" :lg="3" :xl="5">
          <div @click="toggleSou">
            <i :class="sou ? 'el-icon-search sgin' : 'sou1'" />
          </div>
        </el-col>
      </el-row>
    </div>
    <!--     搜索-->
  </div>
</template>
<script>
import MenuJson from '@/common/jsons/menu.json'
import { mapGetters } from 'vuex'

export default {
  name: 'FHeader',
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1',
      input1: '',
      menuData: MenuJson

    }
  },
  computed: {
    ...mapGetters(['sidebar', 'sou'])
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('toggleSideBar')
      //  防止三级路由内容消失
      if (this.$route.path === this.$route.path) {
        this.$router.push(this.$route.path)
      }
    },
    toggleSou() {
      this.$store.dispatch('toggleSou')
      //  防止三级路由内容消失
      if (this.$route.path === this.$route.path) {
        this.$router.push(this.$route.path)
      }
    }

  }

}
</script>

<style lang="scss" scoped>
.sgin {
  font-size: 20px;
  color: white;
  line-height: 60px;
  cursor: pointer;
  display: block;
}

.sou1 {
  display: none;
}
</style>

