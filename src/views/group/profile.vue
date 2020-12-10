
<template>
  <div style="padding-bottom: 50px">
    <div class="title">
      天津北方演艺集团简介
    </div>
    <div class="content">
      天津北方演艺集团下辖天津人民艺术剧院、天津市儿童艺术剧团、天津市杂技团、天津市曲艺团、天津评剧院、天津市评剧白派剧团、天津河北梆子剧院、天津青年友好使者艺术团、天津市演出公司、中国大戏院、 演艺票务分公司、对外演艺交流公司、舞美公司、艺术教育中心等14家单位，拥有光华剧院、红旗剧院、海河剧院、 中国大戏院等4个大型剧场，在职员工1300余人，是天津市规模最大的国有演艺文化企业。集团拥有实力雄厚的专业艺术创作和表演力量， 创作、积累了一大批舞台表演精品剧目，拥有13位中国戏剧“梅花奖”获得者，16部剧目获得 “文华奖”，10部剧目荣获全国“ 五个一工程”奖。集团多年来建设实施“天津市文化惠民卡”项目，打造“天津演艺网”购票体系，引领天津市国有及民营文化企业成立 “文化惠民演出联盟”，打通线上线下演出产业链，具备充足的演艺演出资源，为繁荣天津舞台演出事业作出突出贡献。
    </div>
  </div>
</template>

<script>

export default {
  name: 'Profile'
}
</script>

<style  lang="scss" scoped>
.title{
  margin: 50px;
  font-size: 30px;
  text-align: center;
  font-weight: bold;
}
.content{
  font-size: 18px;
  color: #000000;
  line-height:40px;
  text-indent : 40px;
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
