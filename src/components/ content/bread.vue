<template>
  <div>
    <el-image class="home-img" :src="require('../../assets/imgs/yemian1.jpg')" />
    <el-breadcrumb separator="/">
      <el-breadcrumb-item
        :to="{ path:'/index' }"
      >网站首页
      </el-breadcrumb-item>
      <el-breadcrumb-item
        v-for="(item,index) in breadList"
        :key="index"
        :to="{ path: item.path }"
      >{{ item.meta.title }}</el-breadcrumb-item>
    </el-breadcrumb>
    <el-divider />
  </div>
</template>

<script>
export default {
  name: 'Bread',
  data() {
    return {
      breadList: [] // 路由集合
    }
  },
  watch: {
    $route() {
      this.getBreadcrumb()
    }
  },
  created() {
    this.getBreadcrumb()
  },
  methods: {
    isHome(route) {
      return route.name === 'home'
    },
    getBreadcrumb() {
      let matched = this.$route.matched
      // 如果不是首页
      if (!this.isHome(matched[0])) { // false   这里判断他是不是首页，如果不是首页就加入一个首页的数组
        matched = [{ path: '/home', meta: { title: '首页' }}].concat(matched)
      }
      this.breadList = matched.splice(1) // 这里二级页面这样写
    }
  }
}
</script>

<style lang="scss" >
//由于三级页面， 二次点击同一个路由的时候会让主页面内容全部消失，组织同一个title，点击第二次
 .el-breadcrumb__item:last-child {
    pointer-events: none
}

</style>
