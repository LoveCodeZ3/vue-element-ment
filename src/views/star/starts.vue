<template>

  <div style="padding-top: 50px">
    <el-col :xs="24" :sm="24" :md="24" :lg="14" :xl="14">
      <el-image :src="require('../../assets/imgs/start1.jpg')" />
      <div style="text-align: center;padding: 10px 0">
        夏青
      </div>
    </el-col>
    <el-col :xs="24" :sm="24" :md="24" :lg="10" :xl="8">
      <div class="back">
        <div class="back2">
          <p v-for="(item,index) in info" :key="index">{{ item }}</p>
        </div>
      </div>

    </el-col>
    <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
      <div class="frame">
        <div class="frame1">
          <div class="frame2">
            多年来，本人在大型舞剧《西夏女》担任女主角，在大型组舞《西夏土风》和乐舞诗《九州新月》及西北五省区纪念“丝绸之路”2100周年由陕歌承办西北五省区各文艺团体选派精锐队伍打造的历史舞剧《丝路长虹》等担任“双人舞”及主要舞段的领舞。
            1986年参加了全国舞蹈比赛《喜悦》荣获集体表演奖。1993年荣获陕西省舞蹈比赛双人《慧梅之死》《羯鼓乐》表演一等奖和省月季花奖。
            1999年至2000年被文化厅送往舞蹈学院学习编导，学校回来后多次参加我省大型晚会的编创工作如；《建国50周年大型晚会》《陕西省艺术节》《东西部贸易洽谈会》《中俄妇女大会》乐舞诗《大唐赋》《赴澳大利亚中国年》《赴美国花车巡游》，并担任《黄帝陵“告祭乐舞”》的执行导演，《春天你好》及《金格灿灿彩》晚会的副总导演。
            2004年2月被我院委派到“大唐芙蓉园”担任编导负责开园盛典和园内演出工作。2006年至今在陕歌大剧院担任艺术监督。自参加编创工作以来主要作品《巴山采茶摇》《雁塔佛光》《俏妹子》《摇滚长安》在2008年陕西省首届“荷花杯”舞蹈比赛，作品《胡杨》三人舞《泥人魂》双双荣获创作金奖、剧目金奖的好成绩。
            在参加工作25年当中曾先后出访演出10多个国家，（美国、英国、法国、澳大利亚、意大利、西班牙……）在演出当中收到国内外有人的好评。
          </div>
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
        '姓名:  夏青',
        ' 民族:满族',
        '出生日期:  生于1967年9月',
        '学历: 本科学历',
        '1985年毕业于宁夏艺术学校分配到宁夏歌舞团工作，',
        '1993年调入陕西省歌舞剧院，现任国家一级演员，',
        '陕西省歌舞剧院歌舞团编创室主任。'
      ]
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.back {
  background-color: #F7F7F7;
  padding: 10px;
  margin-left: 20px
}

.back2 {
  line-height: 30px;
  background-color: white;
  margin: 5px;
  padding: 10px
}

.circle {
  border: solid 1px #555555;
  border-radius: 50px;
  height: 100px;
  width: 100px;
  background-color: #E6E6E6;
  opacity: 0.5;
  margin-top: -280px;
  margin-left: 50px;
}

.circle_inner_play {
  content: "";
  display: block;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 10px 0 10px 20px;
  border-color: transparent transparent transparent #555555;
  margin: 38px 0 0 43px;
}

.circle:hover {
  transform: scale(1.1);
  -webkit-transform: scale(1.1);
  -moz-transform: scale(1.1);
}

.frame {
  background-color: #F7F7F7;
  margin-left: 20px;
  margin-top: 50px;
  padding: 10px 10px 20px;
}

.frame1 {
  background-color: white;
  margin: 5px;
  padding: 10px 10px 60px;
  color: #5F5F5F;
  line-height: 30px;
  font-size: 15px;
  text-indent: 30px;
}

.frame2 {
  padding: 30px;
}

@media screen and (min-width: 1250px) and (max-width: 1700px) {
  .circle {
    margin-top: -200px;
    margin-left: 50px;
  }

}

@media screen and (min-width: 1300px) and (max-width: 1700px) {
  .frame3 {
    margin: -332px 0px 31px 400px;
  }
  .frame4 {
    margin: -271px 0px 31px 635px;
  }
}

@media screen and (min-width: 500px) and (max-width: 1299px) {
  .frame3 {
    margin: 20px 0 31px 20px;
  }
  .frame4 {
    margin: 20px 0 31px 20px;
  }
}

@media screen and (min-width: 900px) and (max-width: 1249px) {
  .circle {
    margin-top: -200px;
    margin-left: 20px;
  }
}

@media screen and (min-width: 500px) and (max-width: 899px) {
  .circle {
    margin-top: -150px;
    margin-left: 0;
  }
}

@media screen and (min-width: 414px) and (max-width: 499px) {

  .circle {
    margin-top: -140px;
    margin-left: -8px;
  }
}

</style>
