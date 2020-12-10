<template>
  <div style="padding-bottom: 150px">
    <el-col v-for="(item,index) in message" :key="index" :xs="12" :sm="6" :md="6" :lg="6" :xl="6">
      <div style="cursor:pointer">
        <el-image style="width: 100%" :src="item.path" fit="cover" />
        <div class="mask">
          {{ item.name }}
        </div>
      </div>
    </el-col>
  </div>
</template>
<script>
export default {
  name: 'Profile',
  data() {
    return {
      message: [
        {
          name: '设备租赁',
          path: require('../../assets/imgs/service1.jpg')
        },
        {
          name: '仓储',
          path: require('../../assets/imgs/service2.jpg')
        },
        {
          name: '运输服务',
          path: require('../../assets/imgs/service3.jpg')
        }
      ]
    }
  },
  methods: {}
}
</script>

<style  lang="scss" scoped>
.mask{
  background-color: black;
  opacity: 0.5;
  height: 30px;
  color: white;
  text-align: center;
  line-height: 30px;
  margin-top: -35px;
  font-size: 15px;
}

</style>

