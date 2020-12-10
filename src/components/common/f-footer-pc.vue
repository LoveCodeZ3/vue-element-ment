<template>
  <div>
    <div class="footer-pc">
      <el-row>
        <el-col :xs="7" :sm="6" :md="3" :lg="3" :xl="3">
          <div class="footer-pc-szie1">
            友情连接：
          </div>
        </el-col>
        <el-col :xs="7" :sm="6" :md="3" :lg="3" :xl="3">
          <div v-for="(item,index) in footerList[0].second" :key="index" class="footer-pc-lg">
            {{ item.title }}
          </div>

        </el-col>
        <el-col :xs="7" :sm="6" :md="3" :lg="3" :xl="3">
          <div v-for="(item,index) in footerList[0].tab" :key="index" class="footer-pc-lg">
            {{ item.title }}
          </div>
        </el-col>
        <el-col :xs="7" :sm="6" :md="3" :lg="3" :xl="3">
          <div v-for="(item,index) in footerList[0].fatal" :key="index" class="footer-pc-lg">
            {{ item.title }}
          </div>

        </el-col>
        <el-col :xs="7" :sm="6" :md="3" :lg="3" :xl="3">
          <div v-for="(item,index) in footerList[0].five" :key="index" style="margin-top: 5px;">
            {{ item.title }}
            <div class="footer1" style="text-align: center;margin-top: 10px">
              <el-image :src="require('../../assets/imgs/footer1.jpg')" fit="cover" />
              <div class="footer1-size">
                关注天津北方演艺集团
                <div>微信订阅号</div>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :xs="7" :sm="6" :md="3" :lg="3" :xl="3">
          <div style="margin-top: 36px">
            <div style="text-align: center">
              <el-image :src="require('../../assets/imgs/footer2.jpg')" fit="cover" />
              <div class="footer2-size">
                关注天津演艺网票务管家
                <div>微信服务号</div>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>

    <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
      <div style="margin-top: 50px;text-align: center">
        <el-divider />
        <div>
          全国统一咨询热线：400-160-1266工作时间：9:30-20:00
        </div>
        <div>
          Copyright@ All rights reserved 天津演艺网版权所有 津ICP备15001182号-1
        </div>
      </div>
    </el-col>
  </div>

</template>

<script>
import footerList from '@/common/jsons/footer.json'

export default {
  name: 'FFooterPc',
  data() {
    return {
      footerList: footerList
    }
  },
  mounted() {
  }

}
</script>

<style lang="scss" scoped>
.footer-pc-lg {
  line-height: 40px
}

.footer-pc {
  margin-left: 150px;
  margin-top: 20px;
}

.footer-pc-szie1 {
  line-height: 40px
}

@media screen and (min-width: 990px) and (max-width: 1924px) {
  .footer-pc {

    margin-top: 100px;
  }
}

@media screen and (min-width: 500px) and (max-width: 800px) {
  .footer-pc {

    margin-top: 0;
  }
}

</style>
