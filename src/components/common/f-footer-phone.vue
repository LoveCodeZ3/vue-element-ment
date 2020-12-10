<template>
  <div style="background-color: #4D90FE">
    <el-collapse v-model="activeNames" accordion>
      <el-collapse-item style="background-color: #4D90FE" title="友情链接" name="1">
        <div v-for="(item,index) in message" :key="index" class="center">{{ item }}</div>
      </el-collapse-item>
      <el-collapse-item style="background-color: #4D90FE" title="联系我们" name="2">
        <div class="footer1" style="width: 100%;text-align: center">
          <img src="../../assets/imgs/footer1.jpg" alt="">
          <div class="footer1-size">
            关注天津北方演艺集团
            <div>微信订阅号</div>
          </div>
        </div>
        <div class="footer2" style="width: 100%;text-align: center">
          <img src="../../assets/imgs/footer2.jpg" alt="">
          <div class="footer2-size">
            关注天津演艺网票务管家
            <div>微信服务号</div>
          </div>
        </div>
      </el-collapse-item>
    </el-collapse>
    <div style="margin-top: 60px">
      <el-divider class="Line" />
      <div class="hotline">
        全国统一咨询热线：400-160-1266工作时间：9:30-20:00
      </div>
      <div class="copyright">
        Copyright@ All rights reserved 天津演艺网版权所有 津ICP备15001182号-1
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'FFooterPhone',
  data() {
    return {
      activeNames: ['1'],
      message: [
        '中国文联',
        '天津文旅局',
        '天津文艺界',
        '津云(北方网)',
        '天津演艺网',
        '北京演艺集团',
        '河北演艺集团',
        '上海演艺集团'
      ]
    }
  },
  methods: {
    handleChange(val) {
      console.log(val)
    }
  }
}
</script>

<style lang="scss" scoped>
/deep/ .el-collapse-item__header {
  background-color: #4D90FE;
}

.center {
  text-align: center;
}

.hotline {
  text-align: center;
  font-size: 14px;

}

.copyright {
  text-align: center;
  font-size: 14px;
}
</style>
