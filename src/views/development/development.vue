
<template>
  <div style="height: 100%;margin-top: 20px">
    <el-row :gutter="40" type="flex" justify="center" class="el-row-center">
      <side />
      <el-col :xs="24" :sm="14" :md="14" :lg="14" :xl="14">
        <bread />
        <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
          <el-row :gutter="40" type="flex" justify="center" style="flex-wrap: wrap">
            <router-view />
            <!--            分页-->
            <div ref="ispagin">
              <paging />
            </div>
          </el-row>
        </el-col>
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
  mounted() {
    if (this.$route.meta.ispagin === 'ispagin') {
      this.$refs.ispagin.style.display = 'none'
    } else {
      this.$refs.ispagin.style.display = 'block'
    }
  }
}
</script>
<style  lang="scss" scoped>
</style>
