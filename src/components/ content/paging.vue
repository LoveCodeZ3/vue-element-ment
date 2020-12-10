<template>
  <el-row type="flex" justify="space-around" class="el-row-center">
    <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
      <div class="paging">
        <el-pagination
          background
          layout="prev, pager, next"
          :total="100"
          :page-count="pageant"
          :current-page="currentPage1"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'Paging',
  data() {
    return {
      currentPage1: 5,
      pageant: 100
    }
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
    }
  }

}
</script>

<style lang="scss" scoped>
.paging{
    padding: 20px 0;
}
</style>
