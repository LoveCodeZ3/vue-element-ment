<template>
  <div class="message">
    <!--    轮播-->
    <div class="message-img">
      <el-row :gutter="10">
        <div class="a2" style="height: 602px">
          <el-col el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
            <el-carousel height="603px">
              <el-carousel-item v-for="item in 4" :key="item">
                <el-image
                  style="height: 602px"
                  :src="require('@/assets/imgs/timg-170.jpg')"
                  fit="cover"
                />
              </el-carousel-item>
            </el-carousel>
          </el-col>
        </div>
        <div class="a1">
          <el-col el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
            <el-carousel>
              <el-carousel-item v-for="item in 4" :key="item">
                <el-image
                  style="height: 300px"
                  :src="require('@/assets/imgs/timg-170.jpg')"
                  fit="cover"
                />
              </el-carousel-item>
            </el-carousel>
          </el-col>
        </div>
      </el-row>
    </div>
    <!--    第一板块-->
    <div class="b">
      <el-row :gutter="40" type="flex" justify="center" class="el-row-center">
        <!--    第一模块：左边-->
        <el-col :xs="23" :sm="18" :md="18" :lg="10" :xl="10">
          <div class="title-padding1">
            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
              <div class="b-font-size2">集团动态</div>
              <div class="b-font-size1">
                <el-divider class="divider-a" direction="vertical" />
                <div class="public-size1">
                  Group news
                </div>
              </div>
              <div class="more">更多<i class="el-icon-d-arrow-right" /></div>
              <el-divider />
            </el-col>
            <el-col :xs="24" :sm="24" :md="10" :lg="10" :xl="10">
              <el-image :src="require('../assets/imgs/1.jpg') " fit="cover" />
            </el-col>
            <el-col :xs="24" :sm="24" :md="14" :lg="14" :xl="14">
              <div>
                <div class="public-size2">最新通知: 2020年8月4日，中国共产党天 津北方演艺集团有限公司第二次党…</div>
                <div class="public-size3"> 2020年10月22日</div>
                <div class="public-size3">大会选举产生了中共天津北方演艺集团有限公司第二届委员 会和中共天津北方演艺集团有限公司纪律···</div>
              </div>
            </el-col>
            <el-col :xs="0" :sm="24" :md="10" :lg="10" :xl="10">
              <el-image :src="require('../assets/imgs/1.jpg') " fit="cover" />
            </el-col>
            <el-col :xs="0" :sm="24" :md="14" :lg="14" :xl="14">
              <div>
                <div class="public-size2">最新通知: 2020年8月4日，中国共产党天 津北方演艺集团有限公司第二次党…</div>
                <div class="public-size3"> 2020年10月22日</div>
                <div class="public-size3">大会选举产生了中共天津北方演艺集团有限公司第二届委员 会和中共天津北方演艺集团有限公司纪律···</div>
              </div>
            </el-col>
          </div>
        </el-col>
        <!--            第一模块：右边-->
        <el-col :xs="23" :sm="18" :md="18" :lg="10" :xl="10">
          <div class="title-padding1">
            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
              <div class="b-font-size2">深度观察</div>
              <div class="b-font-size1">
                <el-divider class="divider-a" direction="vertical" />
                <div class="public-size1">
                  In depth observation
                </div>
              </div>
              <div class="more">更多<i class="el-icon-d-arrow-right" /></div>
              <el-divider />
            </el-col>
            <el-col :xs="24" :sm="24" :md="10" :lg="10" :xl="10">
              <el-image :src="require('../assets/imgs/2.jpg') " fit="cover" />
            </el-col>
            <el-col :xs="24" :sm="24" :md="14" :lg="14" :xl="14">
              <div>
                <div class="public-size2">最新通知: 2020年8月4日，中国共产党天 津北方演艺集团有限公司第二次党…</div>
                <div class="public-size3"> 2020年10月22日
                  <el-image :src="require('../assets/imgs/yanjing.png')" />
                  125
                </div>
                <div class="public-size3">大会选举产生了中共天津北方演艺集团有限公司第二届委员 会和中共天津北方演艺集团有限公司纪律···</div>
              </div>
            </el-col>
            <el-col :xs="0" :sm="24" :md="10" :lg="10" :xl="10">
              <el-image :src="require('../assets/imgs/2.jpg') " fit="cover" />
            </el-col>
            <el-col :xs="0" :sm="24" :md="14" :lg="14" :xl="14">
              <div>
                <div class="public-size2">最新通知: 2020年8月4日，中国共产党天 津北方演艺集团有限公司第二次党…</div>
                <div class="public-size3"> 2020年10月22日
                  <el-image :src="require('../assets/imgs/yanjing.png')" />
                  125
                </div>
                <div class="public-size3">大会选举产生了中共天津北方演艺集团有限公司第二届委员 会和中共天津北方演艺集团有限公司纪律···</div>
              </div>
            </el-col>
          </div>
        </el-col>
      </el-row>
    </div>
    <!--    第二板块-->
    <div class="c">
      <el-row :gutter="50" type="flex" justify="center" class="el-row-center">
        <!--    第2模块：左边-->
        <el-col :xs="23" :sm="18" :md="18" :lg="10" :xl="10">
          <div class="title-padding1">
            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
              <div class="b-font-size2">通知公告</div>
              <div class="b-font-size1">
                <el-divider class="divider-a" direction="vertical" />
                <div class="public-size1">
                  Notice notice
                </div>
              </div>
              <div class="more">更多<i class="el-icon-d-arrow-right" /></div>
              <el-divider />
            </el-col>

            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
              <el-carousel indicator-position="none">
                <el-carousel-item v-for="(item,index) in rotation" :key="index">
                  <el-image style="height: 300px;width: 100%" :src="item.url" fit="cover" />
                  <div class="mask">
                    <el-col :xs="20" :sm="20" :md="20" :lg="20" :xl="20">
                      <div class="mask-content1"> {{ item.first }}</div>
                      <div class="mask-content2">{{ item.second }}</div>
                    </el-col>
                  </div>
                </el-carousel-item>
              </el-carousel>
            </el-col>
            <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
              <el-image class="e-img-item" :src="require('@/assets/imgs/5.jpg')" fit="cover" />
            </el-col>
            <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
              <el-image class="e-img-item" :src="require('@/assets/imgs/6.jpg')" fit="cover" />
            </el-col>
            <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
              <el-image class="e-img-item" :src="require('@/assets/imgs/5.jpg')" fit="cover" />
            </el-col>
          </div>
        </el-col>
        <!--    第2模块：右边-->
        <el-col :xs="23" :sm="18" :md="18" :lg="10" :xl="10">
          <div class="title-padding1">
            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
              <div class="b-font-size2">精典展示</div>
              <div class="b-font-size1">
                <el-divider class="divider-a" direction="vertical" />
                <div class="public-size1">
                  Classic Exhibition
                </div>
              </div>
              <div class="more">更多<i class="el-icon-d-arrow-right" /></div>
              <el-divider />
            </el-col>
            <el-col :xs="24" :sm="24" :md="10" :lg="10" :xl="10">
              <el-image :src="require('../assets/imgs/9.jpg') " fit="cover" />
            </el-col>
            <el-col :xs="24" :sm="24" :md="14" :lg="14" :xl="14">
              <div v-for="(item,index) in message" :key="index">
                <div class="public-size2">{{ item.first }}</div>
                <div class="public-size3"> {{ item.second }}</div>
                <div class="public-size3">{{ item.third }}</div>
              </div>
            </el-col>
            <el-col :xs="24" :sm="24" :md="10" :lg="10" :xl="10">
              <el-image :src="require('../assets/imgs/9.jpg') " fit="cover" />
            </el-col>
            <el-col :xs="24" :sm="24" :md="14" :lg="14" :xl="14">
              <div v-for="(item,index) in message" :key="index">
                <div class="public-size2">{{ item.first }}</div>
                <div class="public-size3"> {{ item.second }}</div>
                <div class="public-size3">{{ item.third }}</div>
              </div>
            </el-col>
            <el-col :xs="24" :sm="24" :md="10" :lg="10" :xl="10">
              <el-image :src="require('../assets/imgs/8.jpg') " fit="cover" />
            </el-col>
            <el-col :xs="24" :sm="24" :md="14" :lg="14" :xl="14">
              <div v-for="(item,index) in message" :key="index">
                <div class="public-size2">{{ item.first }}</div>
                <div class="public-size3">{{ item.second }}</div>
                <div class="public-size3">{{ item.third }}</div>
              </div>
            </el-col>
          </div>
        </el-col>
      </el-row>
    </div>
    <!--    第3板块-->
    <div class="d">
      <el-row :gutter="40" type="flex" justify="center" class="el-row-center">
        <!--    第3模块：左边-->
        <el-col :xs="24" :sm="18" :md="18" :lg="10" :xl="10">
          <div class="title-padding1">
            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
              <div class="b-font-size2">名家名角</div>
              <div class="b-font-size1">
                <el-divider class="divider-a" direction="vertical" />
                <div class="public-size1">
                  Famous person
                </div>
              </div>
              <div class="more">更多<i class="el-icon-d-arrow-right" /></div>
              <el-divider />
            </el-col>
            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
              <div style="position: relative">
                <swiper ref="mySwiper" style="width: 75%" :options="swiperOption">
                  <swiper-slide v-for="(item,index) in rotation2" :key="index">
                    <el-image style="width: 80%;" :src="item.url" fit="cover" />
                    <div style="text-align: center">{{ item.name }}</div>
                  </swiper-slide>
                </swiper>
                <div slot="button-prev" class="swiper-button-prev" @click="next" />
                <div slot="button-next" class="swiper-button-next" @click="prev" />
              </div>
            </el-col>

          </div>
        </el-col>
        <!--            第3模块：右边-->
        <el-col :xs="23" :sm="18" :md="18" :lg="10" :xl="10">
          <div class="title-padding1">
            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
              <div class="b-font-size2">舞台新星</div>
              <div class="b-font-size1">
                <el-divider class="divider-a" direction="vertical" />
                <div class="public-size1">
                  Stage star
                </div>
              </div>
              <div class="more">更多<i class="el-icon-d-arrow-right" /></div>
              <el-divider />
            </el-col>
            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
              <div style="position: relative">
                <swiper ref="mySwiper2" style="width: 75%" :options="swiperOption">
                  <swiper-slide v-for="(item,index) in rotation3" :key="index">
                    <el-image style="width: 80%;" :src="item.url" fit="cover" />
                    <div style="text-align: center">{{ item.name }}</div>
                  </swiper-slide>
                </swiper>
                <div slot="button-prev" class="swiper-button-prev" @click="next2" />
                <div slot="button-next" class="swiper-button-next" @click="prev2" />
              </div>
            </el-col>
          </div>
        </el-col>
      </el-row>
    </div>
    <!--    第4板块-->
    <div class="e">
      <el-row :gutter="40" type="flex" justify="center" class="el-row-center">
        <!--       标题-->
        <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
          <div class="title-position">
            <div class="title-position2">
              专题专栏
            </div>
            <el-row type="flex" justify="space-around">
              <el-col :xs="10" :sm="10" :md="4" :lg="4" :xl="4">
                <el-divider style="border: #767373 " />
              </el-col>
            </el-row>
            <div style="margin-top: 7px;margin-bottom: 39px;font-size: 20px;color: #E80000">
              Special column
            </div>
          </div>
        </el-col>
        <!--       图片内容-->
        <el-col :xs="0" :sm="7" :md="7" :lg="6" :xl="6">
          <div class="title-padding1">
            <el-image style="width: 100%;" :src="require('../assets/imgs/18.jpg')" fit="cover" />
            <div style="background-color: #FFFFFF">
              <el-row>
                <el-col :xs="19" :sm="19" :md="19" :lg="19" :xl="19">
                  <el-image :src="require('../assets/imgs/yan2.jpg')" />
                  <div style="margin-top: -25px;margin-left: 25px">125</div>
                </el-col>
                <el-col :xs="5" :sm="5" :md="5" :lg="5" :xl="5">
                  <div class="data-size1">
                    08月12日
                  </div>
                </el-col>
              </el-row>
              <div class="public-size4">
                <b>北方演艺集团广大党员认真落实“双报到”
                  <div style="height: 5px" />
                  要求津北方演艺集团有限公司第二···</b>
              </div>
              <div style="height: 15px" />
              <div class="public-size5">
                新冠肺炎疫情爆发以来，北方演艺集团党委深入
                贯彻落实习近平总书记重要指示精神，认真履行
                党建主体责任···
              </div>
            </div>
          </div>
        </el-col>
        <el-col :xs="18" :sm="7" :md="7" :lg="6" :xl="6">
          <div class="title-padding1">
            <el-image style="width: 100%;" :src="require('../assets/imgs/19.jpg')" />
            <div style="background-color: #FFFFFF">
              <el-row>
                <el-col :xs="19" :sm="19" :md="19" :lg="19" :xl="19">
                  <el-image :src="require('../assets/imgs/yan2.jpg')" />
                  <div style="margin-top: -25px;margin-left: 25px">125</div>
                </el-col>
                <el-col :xs="5" :sm="5" :md="5" :lg="5" :xl="5">
                  <div class="data-size1">
                    08月12日
                  </div>
                </el-col>
              </el-row>
              <div class="public-size4">
                <b>北方演艺集团广大党员认真落实“双报到”
                  <div style="height: 5px" />
                  要求津北方演艺集团有限公司第二···</b>
              </div>
              <div style="height: 15px" />
              <div class="public-size5">
                新冠肺炎疫情爆发以来，北方演艺集团党委深入
                贯彻落实习近平总书记重要指示精神，认真履行
                党建主体责任···
              </div>
            </div>
          </div>

        </el-col>
        <el-col :xs="0" :sm="7" :md="7" :lg="6" :xl="6">
          <div class="title-padding1">
            <el-image style="width: 100%;" :src="require('../assets/imgs/20.jpg')" />
            <div style="background-color: #FFFFFF">
              <el-row>
                <el-col :xs="19" :sm="19" :md="19" :lg="19" :xl="19">
                  <el-image :src="require('../assets/imgs/yan2.jpg')" />
                  <div style="margin-top: -25px;margin-left: 25px">125</div>
                </el-col>
                <el-col :xs="5" :sm="5" :md="5" :lg="5" :xl="5">
                  <div class="data-size1">
                    08月12日
                  </div>
                </el-col>
              </el-row>
              <div class="public-size4">
                <b>北方演艺集团广大党员认真落实“双报到”
                  <div style="height: 5px" />
                  要求津北方演艺集团有限公司第二···</b>
              </div>
              <div style="height: 15px" />
              <div class="public-size5">
                新冠肺炎疫情爆发以来，北方演艺集团党委深入
                贯彻落实习近平总书记重要指示精神，认真履行
                党建主体责任···
              </div>
            </div>
          </div>

        </el-col>

      </el-row>
    </div>
    <!--    第五板块-->
    <div class="f">
      <el-row type="flex" justify="center" class="el-row-center">
        <!--       标题-->
        <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
          <div class="title-position">
            <div class="title-position2">
              企业文化
            </div>
            <el-row type="flex" justify="space-around">
              <el-col :xs="10" :sm="10" :md="4" :lg="4" :xl="4">
                <el-divider style="border: #767373 " />
              </el-col>
            </el-row>
            <div style="margin-top: 7px;margin-bottom: 39px;font-size: 20px;color: #E80000">
              corporate culture
            </div>
          </div>
        </el-col>

        <!--        内容-->
        <el-col :xs="20" :sm="10" :md="10" :lg="10" :xl="10">
          <div class="title-padding1">
            <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
              <el-image
                style="width: 100%"
                :src="require('../assets/imgs/27.jpg')"
                fit="cover"
              />
              <el-image
                style="width: 100%"
                :src="require('../assets/imgs/27.jpg')"
                fit="cover"
              />
            </el-col>
            <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
              <el-image
                style="width: 100%"
                :src="require('../assets/imgs/27.jpg')"
                fit="cover"
              />
              <el-image
                style="width: 100%"
                :src="require('../assets/imgs/27.jpg')"
                fit="cover"
              />
            </el-col>
            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
              <el-image
                style="width: 100%"
                :src="require('../assets/imgs/25.jpg')"
                fit="cover"
              />
            </el-col>
          </div>
        </el-col>
        <el-col :xs="0" :sm="10" :md="10" :lg="10" :xl="10">
          <div class="title-padding1">
            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
              <el-image
                style="width: 100%"
                :src="require('../assets/imgs/25.jpg')"
                fit="cover"
              />
            </el-col>
            <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
              <el-image
                style="width: 100%"
                :src="require('../assets/imgs/27.jpg')"
                fit="cover"
              />
              <el-image
                style="width: 100%"
                :src="require('../assets/imgs/27.jpg')"
                fit="cover"
              />
            </el-col>
            <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
              <el-image
                style="width: 100%"
                :src="require('../assets/imgs/27.jpg')"
                fit="cover"
              />
              <el-image
                style="width: 100%"
                :src="require('../assets/imgs/27.jpg')"
                fit="cover"
              />
            </el-col>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import 'element-ui/lib/theme-chalk/display.css'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'

export default {
  name: 'HomeMessage',
  components: {
    Swiper,
    SwiperSlide
  },

  data() {
    return {
      rotation: [
        {
          first: '11北方演艺集团广大党员认真落实“双报到” 要求津北方演艺集团有限公司第二···',
          second: '111新冠肺炎疫情爆发以来，北方演艺集团党委深入贯彻落实 习近平总书记重要指示精神，认真履行党建主体责任···',
          url: require('@/assets/imgs/4.jpg')
        },
        {
          first: '22北方演艺集团广大党员认真落实“双报到” 要求津北方演艺集团有限公司第二···',
          second: '222新冠肺炎疫情爆发以来，北方演艺集团党委深入贯彻落实 习近平总书记重要指示精神，认真履行党建主体责任···',
          url: require('@/assets/imgs/4.jpg')
        },
        {
          first: '33北方演艺集团广大党员认真落实“双报到” 要求津北方演艺集团有限公司第二···',
          second: '333新冠肺炎疫情爆发以来，北方演艺集团党委深入贯彻落实 习近平总书记重要指示精神，认真履行党建主体责任···',
          url: require('@/assets/imgs/4.jpg')
        },
        {
          first: '44北方演艺集团广大党员认真落实“双报到” 要求津北方演艺集团有限公司第二···',
          second: '444新冠肺炎疫情爆发以来，北方演艺集团党委深入贯彻落实 习近平总书记重要指示精神，认真履行党建主体责任···',
          url: require('@/assets/imgs/4.jpg')
        }

      ],
      rotation2: [
        {
          name: '王高丽1',
          url: require('@/assets/imgs/10.jpg')
        },
        {
          name: '王高丽2',
          url: require('@/assets/imgs/11.jpg')
        },
        {
          name: '王高丽3',
          url: require('@/assets/imgs/12.jpg')
        },
        {
          name: '王高丽4',
          url: require('@/assets/imgs/13.jpg')
        },
        {
          name: '王高丽5',
          url: require('@/assets/imgs/13.jpg')
        }
      ],
      rotation3: [
        {
          name: '王高丽5',
          url: require('@/assets/imgs/14.jpg')
        },
        {
          name: '王高丽6',
          url: require('@/assets/imgs/15.jpg')
        },
        {
          name: '王高丽7',
          url: require('@/assets/imgs/16.jpg')
        },
        {
          name: '王高丽8',
          url: require('@/assets/imgs/17.jpg')
        },
        {
          name: '王高丽9',
          url: require('@/assets/imgs/13.jpg')
        }

      ],
      message: [
        {
          first: '最新通知: 2020年8月4日，中国共产党天 津北方演艺集团有限公司第二次党…',
          second: '2020年10月22日',
          third: '大会选举产生了中共天津北方演艺集团有限公司第二届委员 会和中共天津北方演艺集团有限公司纪律···'
        }
      ],
      swiperOption: { // 调节轮播
        autoplay: true, // 自动轮播 目前不管用
        // loop:true, //循环 目前不管用
        slidesPerView: 4, // 显示几个图片
        spaceBetween: 0, // 图片之间的间距
        freeMode: false,
        navigation: { // 导航效果 点击事件
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }

      }
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper
    },
    swiper2() {
      return this.$refs.mySwiper2.$swiper
    }
  },
  methods: {
    prev() {
      this.swiper.slideNext()
    },
    next() {
      this.swiper.slidePrev()
    },

    prev2() {
      this.swiper2.slideNext()
    },
    next2() {
      this.swiper2.slidePrev()
    }
  }
}
</script>

<style lang="scss" scoped>
.b-font-size2 {
    font-size: 33px
}

.more {
    float: right;
    margin-top: -30px
}

.title-padding1 {
    padding-top: 20px;
    display: flex;
    flex-flow: wrap
}

.title-size1 {
    font-size: 33px
}

.data-size1 {
    background-color: #4D90FE;
    color: #FFFFFF
}

//
.title-position {
    width: 100%;
    color: #FFFFFF;
    text-align: center
}

.title-position2 {
    margin-top: 49px;
    margin-bottom: 7px;
    font-size: 33px;
    color: #333333
}

.public-size1 {
    color: #E80000;
    font-size: 20px;
    margin-top: -55px;
    margin-left: 160px
}

.public-size2 {
    font-size: 20px
}

.public-size3 {
    font-size: 14px;
    color: #8D8D8D;
}

.public-size4 {
    font-size: 18px;
    margin-left: 20px;
    margin-right: 20px
}

.public-size5 {
    color: #8D8D8D;
    margin-left: 20px;
    margin-right: 20px;
    padding-bottom: 20px
}

.a1 {
    display: none;
}

.message-img {
    overflow-x: hidden;
}

//第一板块
.b {
    margin-top: 40px;
}

.c {
    margin-top: 40px;
}

.d {
    margin-top: 40px;
    padding-bottom: 60px;

}

.e {
    margin-top: 40px;
    padding-bottom: 20px;
}

.f {
    margin: 40px 0;

}

.divider-a {
    background-color: #333333;
    margin-left: 153px;
    margin-top: -67px;
    height: 20px;
}

// 第二板块
.mask {
    height: 100px;
    background-color: #333333;
    z-index: 999;
    opacity: 0.8;
    margin-top: -104px;
}

.mask-content1 {
    font-size: 17px;
    color: white;
    height: 45px;
    font-weight: bold;
}

.mask-content2 {
    font-size: 12px;
    color: white;
    height: 41px;
}

.e-img-item {
    margin-top: 80px;

}

//第四板块
.e {
    overflow: hidden;
    width: 100%;
    background-color: #4D90FE;
}

//第五板块

//模块响应式
@media screen and (min-width: 600px) and (max-width: 1460px) {
    //公共板块

    //第二板块
    .mask-content2 {
        display: none;
    }

}
//phone端
@media screen and (min-device-width: 414px) and (max-device-width: 600px) {
    .a1 {
        display: block;
    }
    .a2 {
        display: none;
    }

    //第二板块
    .mask-content2 {
        display: none;
    }
    .public-size1{
        font-size: 14px;
        margin-top: -52px;
    }
}
</style>
