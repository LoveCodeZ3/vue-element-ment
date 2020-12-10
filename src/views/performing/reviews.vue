<template>
  <div>
    <div class="title">
      北方演艺集团党委召开第二次党员代表大会
    </div>
    <div style="line-height: 12px;margin-bottom: 20px">
      2020-08-31
      <el-image style="" :src="require('../../assets/imgs/yanjing_huaban1.jpg')" />
      125
    </div>
    <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
      <div style="margin: 20px 0;line-height: 40px">
        <p v-for="(item,index) in info3" :key="index">{{ item }}</p>
        <el-button type="text" @click="open">查看地图</el-button>
      </div>
      <div class="content">
        <p v-for="(item,index) in info2" :key="index">{{ item }}</p>
        <div style="background-color: white;margin: 20px;">
          <p v-for="(item,index) in info" :key="index"> {{ item }}</p>
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
      info: [
        ' 演出时间：2020年10月1日（周四）19:15',
        '演出单位：天津京剧院',
        '演出地点：天津滨湖剧院大剧场',
        '演员表：',
        '穆桂英——王 艳',
        '佘太君——李 宏',
        '寇 准——赵 华',
        '杨宗保——焦鹏飞',
        '杨金花——曹熙珺',
        '杨文广——吴奇峪',
        '宋 王——马 杰',
        '王 强——高 航',
        '王 伦——程洪磊',
        '杨 洪——芮振起',
        '票 价：380、280、180、100、80、50（元）',
        '文惠价：304、224、144、80、64、40（元）'
      ],
      info2: [
        ' 2020年天津市名家经典惠民演出季',
        ' 天津京剧院庆国庆系列演出京剧《穆桂英挂帅'
      ],
      info3: [
        ' 剧目简介：2020年天津市名家经典惠民演出季天津京剧院庆国庆系列演出京剧《穆桂英挂帅》',
        '演出时间：2020年10月1日19:15',
        '演出剧团：天津京剧院',
        '演出时长：120分钟',
        '剧目票价：50起',
        '售票状态：正在售票',
        '演出地点：滨湖剧院-天津市河西区环湖中路6号'
      ]
    }
  },
  methods: {
    open() {
      this.$alert('这是一段内容', '标题名称', {
        confirmButtonText: '确定',
        callback: action => {
          this.$message({
            type: 'info',
            message: `action: ${action}`
          })
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.title {
  margin: 50px 0;
  font-size: 21px;
  color: #4D90FE;
  font-weight: bold;
}

.content {
  font-size: 15px;
  color: #000000;
  line-height: 40px;
  text-indent: 40px; //缩进
  background-color: gainsboro;
  text-align: center;
  padding-bottom: 5px
}

@media screen and (min-width: 414px) and (max-width: 499px) {
  .title {
    font-size: 20px;
  }
  .content {
    font-size: 10px;
    line-height: 15px;
    text-indent: 20px;

  }
}

</style>
