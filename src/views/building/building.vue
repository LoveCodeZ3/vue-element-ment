<template>
  <div style="height: 100%;margin-top: 20px">
    <el-row :gutter="40" type="flex" justify="center" class="el-row-center">
      <side />
      <el-col :xs="22" :sm="16" :md="16" :lg="16" :xl="16">
        <bread />
        <el-row type="flex" justify="center" class="el-row-center">
          <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
            <router-view />
          </el-col>
          <div ref="ispagin">
            <paging />
          </div>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Side from '@/components/ content/side'
import Paging from '@/components/ content/paging'
import Bread from '@/components/ content/bread'
export default {
  name: 'Profile',
  components: { Bread, Paging, Side },
  data() {
    return {}
  },
  watch: {
    $route() {
      if (this.$route.meta.ispagin === 'ispagin') {
        this.$refs.ispagin.style.display = 'none'
      } else {
        this.$refs.ispagin.style.display = 'block'
      }
    }
  },
  methods: {}
}
</script>

<style  lang="scss" scoped>
</style>
