<template>
  <div style="height: 100%; margin-top: 20px">
    <el-row type="flex" justify="center" clsass="el-row-center">
      <el-col :xs="22" :sm="18" :md="18" :lg="18" :xl="18">
        <bread />
        <div style="padding-top: 50px">
          <el-col :xs="24" :sm="24" :md="24" :lg="14" :xl="14">
            <el-image
              :src="require('../assets/imgs/exhibitions1.jpg')"
            />
            <div class="icon-el-icon-ump" />
            <div class="content">钢琴《黄河》•黄河大合唱</div>
          </el-col>
          <el-col :xs="24" :sm="24" :md="24" :lg="10" :xl="8">
            <div class="ex-back1">
              <div class="ex-back2">
                <div v-for="(item, index) in message1" :key="index">
                  {{ item }}
                </div>
              </div>
            </div>
          </el-col>
          <el-col :xs="24" :sm="24" :md="24" :lg="20" :xl="20">
            <div class="frame">
              <div class="frame1">
                <div style="font-size: 20px; text-align: center">
                  <div v-for="(item, index) in message2" :key="index">
                    {{ item }}
                  </div>
                  <el-divider />
                </div>
                <div class="frame2">
                  <div v-for="(item, index) in message3" :key="index">
                    {{ item }}
                  </div>
                </div>
                <div class="frame3">
                  <div v-for="(item, index) in message4" :key="index">
                    {{ item }}
                  </div>
                </div>

                <div class="frame4">
                  <div v-for="(item, index) in message5" :key="index">
                    {{ item }}
                  </div>
                </div>
              </div>
            </div>
          </el-col>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Bread from '@/components/ content/bread'
export default {
  name: 'Profile',
  components: { Bread },
  data() {
    return {
      message1: [
        ' 演出剧团：天津交响乐团',
        ' 演出时长：90分钟',
        '剧目票价：40起',
        '售票状态：正在售票',
        '演出地点：天津音乐厅-和平区建设路88号查看地图',
        '剧目简介:',
        '庆祝中华人民共和国成立71周年天津交响乐团2020-2021音乐季开幕式钢琴协奏曲《黄河》•《黄河》大合唱交响音乐会指挥：董俊杰演奏：天津交响乐团合唱：天津交响乐团（附属）青',
        '年合唱团合唱指导：李华典',
        '时间：2020年9月30日晚19:30',
        '地点：天津音乐厅'
      ],
      message2: [
        '庆祝中华人民共和国成立71周年',
        '天津交响乐团2020-2021音乐季开幕式',
        '钢琴协奏曲《黄河》•《黄河》大合唱交响音乐会',
        '演出剧团：天津交响乐团'
      ],
      message3: [
        '指挥：董俊杰',
        '演奏：天津交响乐团',
        '合唱：天津交响乐团（附属）青年合唱团',
        '合唱指导：李华典',
        '时间：2020年9月30日 晚19:30',
        '地点：天津音乐厅',
        '曲   目',
        '管弦乐：《红旗颂》   吕其明',
        '钢琴协奏曲《黄河》（中央乐团1989年修订版）',
        '中央乐团根据冼星海《黄河大合唱》改编创作',
        '殷承宗  储望华  刘庄  盛礼洪  石叔诚  许斐星'
      ],
      message4: [
        '钢琴演奏：张乐',
        '第一乐章： 黄河船夫曲  ',
        '第二乐章： 黄河颂',
        '第三乐章： 黄水谣',
        '第四乐章： 保卫黄河',
        '休   息',
        '黄河大合唱',
        '光未然词 冼星海曲'
      ],
      message5: [
        '朗诵：张鹏',
        '第一乐章：《黄河船夫曲》  ',
        '第二乐章：《黄河颂》       演唱：佘乐',
        '第三乐章：《黄河之水天上来》',
        '第四乐章：《黄水谣》',
        '第五乐章：《河边对口曲》   演唱：张凯、王来',
        '第六乐章：《黄河怨》       演唱：黄显淳',
        '第七乐章：《保卫黄河》',
        '第八乐章：《怒吼吧，黄河》'
      ]
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.ex-back1 {
    background-color: #f7f7f7;
    padding: 10px;
    margin-left: 20px;
}
.ex-back2 {
    line-height: 30px;
    background-color: white;
    margin: 5px;
    padding: 10px;
}
.content {
    text-align: center;
    padding-top: 250px;
}

.icon-el-icon-ump {
    display: flex;
    justify-content: center;
    color: #ffffff;
    margin-top: -250px;
    opacity: 0.8;
}

.icon-el-icon-ump:hover {
    transform: scale(1.1);
    -webkit-transform: scale(1.1);
    -moz-transform: scale(1.1);
}

.frame {
    background-color: #f7f7f7;
    margin-left: 20px;
    margin-top: 50px;
    padding: 10px 10px 20px;
}

.frame1 {
    line-height: 30px;
    background-color: white;
    margin: 5px;
    padding: 10px 10px 60px;
}

.frame2 {
    margin-left: 20px;
}

.frame3 {
    margin: -332px 0px 31px 535px;
}

.frame4 {
    margin: -271px 0px 31px 835px;
}

@media screen and (min-width: 1300px) and (max-width: 1700px) {
    .frame3 {
        margin: -332px 0px 31px 400px;
    }
    .frame4 {
        margin: -271px 0px 31px 635px;
    }
}

@media screen and (min-width: 500px) and (max-width: 850px) {
    .icon-el-icon-ump {
        display: none;
    }
    .content {
        padding-top: 20px;
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

@media screen and (min-width: 414px) and (max-width: 499px) {
    .icon-el-icon-ump {
        display: block;
        margin-top: -120px;
        margin-left: 150px;
    }
    .content {
        padding-top: 100px;
    }
    .frame3 {
        margin: 20px 0 31px 20px;
    }
    .frame4 {
        margin: 20px 0 31px 20px;
    }
}
</style>
