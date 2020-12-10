<template>
  <div>
    <div class="title">
      北方演艺集团党委召开第二次党员代表大会
    </div>
    <div style="line-height: 12px;margin-bottom: 20px">
      2020-08-31 <el-image style="" :src="require('../../assets/imgs/yanjing_huaban1.jpg')" /> 125
    </div>
    <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
      <div class="content">
        <div v-for="(item,index) in message" :key="index" style="margin: 0 60px; padding: 20px 0">
          {{ item }}
        </div>
        <div>
          <el-image style="width: 40%;" :src="require('../../assets/imgs/columns1.jpg')" fit="cover" />
          <el-image style="width: 40%;" :src="require('../../assets/imgs/columns2.jpg')" fit="cover" />
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
        '大会听取和审查了集团党委书记、总经理赵华同志代表中共天津北方演艺集团有限公司委员会作的工作报告，报告系统回顾了五年来集团党委在市委市政府和市委宣传部的正确领导下，积极推进企业各项建设、全面落实从严治党政治责任、着力繁荣艺术创作生产、努力打造多元经营模式、创新实施文化惠民工程等方面的工作情况和取得成效，提出了当前及今后一个时期的重点任务和奋斗目标。大会审查了中共天津北方演艺集团有限公司纪律检查委员会的工作报告。',
        '大会通过了关于中共天津北方演艺集团有限公司委员会工作报告的决议。与会代表一致认为，在过去五年里，集团党委深入学习贯彻习近平新时代中国特色社会主义思想和党的十九大精神，认真贯彻新时代党的建设总要求，坚决落实中央和市委的一系列决策部署，坚定不移把党的领导融入公司治理各项环节，集团改革发展建设各项工作实现全面提高，取得了可喜的成绩。\n',
        '大会指出，在实现“两个一百年”奋斗目标、实现中华民族伟大复兴中国梦的历史进程中，我们是繁荣发展社会主义文艺的中坚力量，集团各级党组织和广大党员干部要牢固树立“四个意识”，坚定“四个自信”，坚决做到“两个维护”，旗帜鲜明讲政治，要始终坚持以习近平新时代中国特色社会主义思想为指引，以演出为中心环节，不断激发生机活力，努力取得“出人、出戏”两个成果，不断满足人民向往美好生活的精神文化需求。\n',
        '大会强调，作为国有文化企业，我们要切实担负起文化改善民生的政治责任，时刻牢记文化传承与发展的历史使命，重点实施强基工程、打造舞台艺术精品工程、深化文化惠民工程、加快推进产业升级工程、继续推进机制创新工程、大力实施人才培养工程，努力实现未来五年奋斗目标，将集团建设成为在天津文化建设中占据主力地位、在全国演艺界具有重要影响力的大型文化企业。\n',
        '大会号召，集团各级党组织和广大党员干部要更加紧密团结在以习近平同志为核心的党中央周围，高举习近平新时代中国特色社会主义思想伟大旗帜，攻坚克难，创新创业，为人民奉献更多更好的精神食粮，为职工创造更加幸福美好的生活，为谱写天津演艺事业发展新篇章而不懈奋斗！\n'
      ]
    }
  },
  methods: {}
}
</script>

<style  lang="scss" scoped>
.title{
  margin: 50px 0;
  font-size: 21px;
  color: #4D90FE;
  font-weight: bold;
}
.content{
  font-size: 15px;
  color: #000000;
  line-height:40px;
  text-indent : 40px; //缩进
  background-color: gainsboro;
}
@media screen and (min-width:414px) and (max-width:499px){
  .title{
    font-size: 20px;
  }
  .content{
    font-size: 10px;
    line-height:15px;
    text-indent : 20px;
  }
}

</style>
