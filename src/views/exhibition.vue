<template>
  <div style="height: 100%; margin-top: 20px">
    <el-row v-if="isactive" :gutter="40" type="flex" justify="center" class="el-row-center">
      <el-col :xs="22" :sm="18" :md="18" :lg="18" :xl="18">
        <el-image class="home-img" :src="require('../assets/imgs/yemian1.jpg')" />
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path:'/index' }">网站首页</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path:'/exhibition' }">精品展示</el-breadcrumb-item>
        </el-breadcrumb>
        <el-divider />
        <div style="font-size: 20px; color: #4d90fe">
          <el-image
            style="float: left"
            :src="require('../assets/imgs/daohang.jpg')"
          />
          <div class="title-size">热播视频</div>
        </div>
        <div style="padding-top: 50px">
          <el-row :gutter="20" type="flex" justify="center" class="el-row-center">
            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
              <el-col v-for="(item, index) in img1" :key="index" :xs="12" :sm="12" :md="12" :lg="6" :xl="6">
                <div @click="exhibitions">
                  <el-image
                    style="width: 100%"
                    :src="item.path"
                    fit="cover"
                  />
                  <div class="icon-el-icon-ump" />
                  <div class="content">{{ item.name }}</div>
                </div>
              </el-col>
            </el-col>
            <paging />
          </el-row>
        </div>
      </el-col>
    </el-row>
    <template v-else>
      <router-view />
    </template>
  </div>
</template>

<script>
import '@/assets/icon/ump/iconfont.css'
import Paging from '@/components/ content/paging'
import Bread from '@/components/ content/bread'

export default {
  name: 'Profile',
  components: { Bread, Paging },
  data() {
    return {
      isactive: true,
      img1: [
        {
          name: ' 钢琴《黄河》•黄河大合唱 ',
          path: require('../assets/imgs/exhibition1.jpg')
        },
        {
          name: '  “玫瑰人生”—古典时刻四重奏  ',
          path: require('../assets/imgs/exhibition2.jpg')
        },
        {
          name: '   音乐剧《灰姑娘-女巫的秘密》   ',
          path: require('../assets/imgs/exhibition3.jpg')
        },
        {
          name: ' 舞剧二十四节气·花间十二声 ',
          path: require('../assets/imgs/exhibition4.jpg')
        },
        {
          name: ' 钢琴《黄河》•黄河大合唱 ',
          path: require('../assets/imgs/exhibition1.jpg')
        },
        {
          name: '  “玫瑰人生”—古典时刻四重奏  ',
          path: require('../assets/imgs/exhibition2.jpg')
        },
        {
          name: '   音乐剧《灰姑娘-女巫的秘密》   ',
          path: require('../assets/imgs/exhibition3.jpg')
        },
        {
          name: ' 舞剧二十四节气·花间十二声 ',
          path: require('../assets/imgs/exhibition4.jpg')
        },
        {
          name: ' 钢琴《黄河》•黄河大合唱 ',
          path: require('../assets/imgs/exhibition1.jpg')
        },
        {
          name: '  “玫瑰人生”—古典时刻四重奏  ',
          path: require('../assets/imgs/exhibition2.jpg')
        },
        {
          name: '   音乐剧《灰姑娘-女巫的秘密》   ',
          path: require('../assets/imgs/exhibition3.jpg')
        },
        {
          name: ' 舞剧二十四节气·花间十二声 ',
          path: require('../assets/imgs/exhibition4.jpg')
        },
        {
          name: ' 钢琴《黄河》•黄河大合唱 ',
          path: require('../assets/imgs/exhibition1.jpg')
        },
        {
          name: '  “玫瑰人生”—古典时刻四重奏  ',
          path: require('../assets/imgs/exhibition2.jpg')
        },
        {
          name: '   音乐剧《灰姑娘-女巫的秘密》   ',
          path: require('../assets/imgs/exhibition3.jpg')
        },
        {
          name: ' 舞剧二十四节气·花间十二声 ',
          path: require('../assets/imgs/exhibition4.jpg')
        }
      ]
    }
  },
  watch: {
    $route() {
      if (this.$route.path === '/exhibition') {
        this.isactive = !this.isactive
      }
    }
  },
  methods: {
    exhibitions() {
      this.isactive = !this.isactive
      this.$router.push('/exhibition/exhibitions')
    }
  }
}
</script>

<style lang="scss" scoped>
.title-size {
  float: left;
  margin-left: 10px;
  font-weight: bold;
}
.content {
  padding-top: 70px;
  padding-bottom: 10px;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.icon-el-icon-ump {
  width: 100%;
  height: 40px;
  margin-top: -100px;
  opacity: 0.8;
  color: white;
  display: flex;
  justify-content: center;
}
.icon-el-icon-ump:hover {
  transform: scale(1.1);
  -webkit-transform: scale(1.1);
  -moz-transform: scale(1.1);
}

@media screen and (min-width: 414px) and (max-width: 580px) {
  .icon-el-icon-ump {
    margin-top: -65px;
  }
  .content {
    padding-top: 30px;
    font-size: 10px;
  }
}
</style>
