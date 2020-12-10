<!--集团荣誉-->

<template>
  <el-row :gutter="40" type="flex" justify="center" class="el-row-center">
    <el-col v-for="(item,index) in massage1" :key="index" :xs="12" :sm="12" :md="12" :lg="6" :xl="6">
      <div style="margin-top: 10px">
        <el-image style="width: 100%;" :src="item.path" fit="cover" />
        <div class="mask">
          {{ item.name }}
        </div>
      </div>
    </el-col>
    <!--            分页-->
    <paging />
  </el-row>
</template>
<script>
import Paging from '@/components/ content/paging'
export default {
  name: 'Profile',
  components: { Paging },
  data() {
    return {
      massage1: [
        {
          name: '光华剧院大剧场',
          path: require('../../assets/imgs/theatre1.jpg')
        },
        {
          name: '  天津海河剧院  ',
          path: require('../../assets/imgs/theatre5.jpg')
        },
        {
          name: '天津音乐厅',
          path: require('../../assets/imgs/theatre2.jpg')
        },
        {
          name: ' 谦祥益文苑 ',
          path: require('../../assets/imgs/theatre6.jpg')
        },
        {
          name: '中华剧院',
          path: require('../../assets/imgs/theatre3.jpg')
        },
        {
          name: ' 武清影剧院 ',
          path: require('../../assets/imgs/theatre7.jpg')
        },
        {
          name: ' 津湾大剧院四层小剧场 ',
          path: require('../../assets/imgs/theatre4.jpg')
        },
        {
          name: ' 光华剧院小剧场 ',
          path: require('../../assets/imgs/theatre8.jpg')
        }
      ]
    }
  },
  methods: {
  }
}
</script>

<style  lang="scss" scoped>
.mask{
  background-color: black;
  opacity: 0.5;
  height: 30px;
  width: 100%;
  color: white;
  text-align: center;
  line-height: 30px;
  margin-top: -35px;
  font-size: 15px;
}
.paging{
  padding: 30px 0;
}

</style>
