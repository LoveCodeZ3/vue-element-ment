<template>
  <div>
    <el-col v-for="(item,index) in massage" :key="index" :xs="12" :sm="12" :md="12" :lg="6" :xl="6">
      <div style="margin-top: 10px">
        <el-image style="width: 100%;" :src="item.path" fit="cover" />
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
      massage: [
        {
          name: '旅游景点',
          path: require('../../assets/imgs/integration1.jpg')
        },
        {
          name: '旅游景点',
          path: require('../../assets/imgs/integration1.jpg')
        },
        {
          name: '旅游景点',
          path: require('../../assets/imgs/integration2.jpg')
        },
        {
          name: '旅游景点',
          path: require('../../assets/imgs/integration2.jpg')
        },
        {
          name: '旅游景点',
          path: require('../../assets/imgs/integration1.jpg')
        },
        {
          name: '旅游景点',
          path: require('../../assets/imgs/integration1.jpg')
        },
        {
          name: '旅游景点',
          path: require('../../assets/imgs/integration2.jpg')
        },
        {
          name: '旅游景点',
          path: require('../../assets/imgs/integration2.jpg')
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
