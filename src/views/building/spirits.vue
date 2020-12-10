<template>
  <div>
    <div class="title">
      <b>重温峥嵘岁月，铭记革命精神——党委办公室、人力资源部、财务部党支部联合开展廉政教育主题日活动</b>
    </div>
    <div style="line-height: 12px;margin-bottom: 20px">
      2020-08-31 <el-image style="" :src="require('../../assets/imgs/yanjing_huaban1.jpg')" /> 125
    </div>
    <el-col :xs="23" :sm="20" :md="20" :lg="20" :xl="20">
      <div class="content">
        <div style="margin: 0 60px; padding: 20px 0">
          活动中，党员同志先后参观了新四军江南指挥部史料展览馆、新四军廉洁思想教育馆，以及司令部旧址（李氏宗祠）、村中四处旧址。通过讲解和观看大量珍贵图片史料、文物、模型、沙盘等，全体党员深入了解了当年新四军江南部队在陈毅、粟裕将军的率领下，贯彻党中央“向南巩固，向东作战，向北发展”的战略方针，运筹帷幄，决战千里，开辟了苏南抗日根据地，发展抗日力量，谱写了中华民族革命史上金戈铁马、气壮山河的历史新篇章。同时也深刻感受到新四军以铁的纪律铸就的“铁军精神”以及廉洁思想——崇高坚定的信仰，守纪如铁的作风，严以律己的风范，惩治腐败的决心，亲民爱民的情怀，艰苦奋斗的精神。还有陈毅、粟裕老一辈无产阶级革命家为国为民、献身革命的坚定信仰和廉洁自律、无私奉献的崇高精神。
          <div style="height: 20px" />
          <el-image class="act-img" :src="require('../../assets/imgs/activities1.jpg')" fit="cover" />
        </div>
        <div style="margin: 0 60px; padding: 20px 0">
          活动中，党员同志先后参观了新四军江南指挥部史料展览馆、新四军廉洁思想教育馆，以及司令部旧址（李氏宗祠）、村中四处旧址。通过讲解和观看大量珍贵图片史料、文物、模型、沙盘等，全体党员深入了解了当年新四军江南部队在陈毅、粟裕将军的率领下，贯彻党中央“向南巩固，向东作战，向北发展”的战略方针，运筹帷幄，决战千里，开辟了苏南抗日根据地，发展抗日力量，谱写了中华民族革命史上金戈铁马、气壮山河的历史新篇章。同时也深刻感受到新四军以铁的纪律铸就的“铁军精神”以及廉洁思想——崇高坚定的信仰，守纪如铁的作风，严以律己的风范，惩治腐败的决心，亲民爱民的情怀，艰苦奋斗的精神。还有陈毅、粟裕老一辈无产阶级革命家为国为民、献身革命的坚定信仰和廉洁自律、无私奉献的崇高精神。
          <div style="height: 20px" />
          <el-image class="act-img" :src="require('../../assets/imgs/activities2.jpg')" fit="cover" />
        </div>
      </div>

    </el-col>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  methods: {}
}
</script>

<style  lang="scss" scoped>
.title{
  margin: 50px 0;
  font-size: 21px;
  color: #4D90FE;
}
.content{
  font-size: 15px;
  color: #000000;
  line-height:40px;
  text-indent : 40px; //缩进
  background-color: gainsboro;
}
.act-img{
  width: 80%;margin-left: 60px
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
  .act-img{
    width: 100%;margin-left: -10px
  }
}

</style>
