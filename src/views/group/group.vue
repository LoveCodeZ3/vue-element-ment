
<template>
  <div style="height: 100%;margin-top: 20px">
    <el-row :gutter="40" type="flex" justify="center" style="flex-wrap: wrap">
      <side />
      <el-col :xs="22" :sm="14" :md="14" :lg="14" :xl="14"> <!-- 居中 -->
        <bread />
        <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
          <router-view />
        </el-col>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import Side from '@/components/ content/side'
import Bread from '@/components/ content/bread'
export default {
  name: 'Profile',
  components: { Bread, Side }
}
</script>

<style  lang="scss" scoped>
</style>
