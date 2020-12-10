<template>
  <div>
    <template v-if="isactive">
      <el-col v-for="(item,index) in img1" :key="index" style="cursor:pointer" :xs="12" :sm="12" :md="12" :lg="6" :xl="6">
        <div style="margin-top: 10px" @click="jump">
          <el-image style="width: 80%" :src="item.path" fit="cover" />
          <div class="mask">
            {{ item.name }}
          </div>
        </div>
      </el-col>
    </template>
    <template v-else>
      <starts />
    </template>
  </div>
</template>
<script>
import starts from '@/views/star/starts'
export default {
  name: 'Profile',
  components: { starts },
  data() {
    return {
      isactive: true,
      img1: [
        {
          name: '艺术名家 | 杨乃珍',
          path: require('../../assets/imgs/virtuoso1.jpg')
        },
        {
          name: ' 艺术名家 | 王丽堂',
          path: require('../../assets/imgs/virtuoso2.jpg')
        },
        {
          name: '艺术名家 | 王键',
          path: require('../../assets/imgs/virtuoso3.jpg')
        },
        {
          name: '名家荟萃 | 张继青',
          path: require('../../assets/imgs/virtuoso4.jpg')
        },
        {
          name: '艺术名家 | 杨乃珍',
          path: require('../../assets/imgs/virtuoso1.jpg')
        },
        {
          name: ' 艺术名家 | 王丽堂',
          path: require('../../assets/imgs/virtuoso2.jpg')
        },
        {
          name: '艺术名家 | 王键',
          path: require('../../assets/imgs/virtuoso3.jpg')
        },
        {
          name: '名家荟萃 | 张继青',
          path: require('../../assets/imgs/virtuoso4.jpg')
        },
        {
          name: '艺术名家 | 杨乃珍',
          path: require('../../assets/imgs/virtuoso1.jpg')
        },
        {
          name: ' 艺术名家 | 王丽堂',
          path: require('../../assets/imgs/virtuoso2.jpg')
        },
        {
          name: '艺术名家 | 王键',
          path: require('../../assets/imgs/virtuoso3.jpg')
        },
        {
          name: '名家荟萃 | 张继青',
          path: require('../../assets/imgs/virtuoso4.jpg')
        },
        {
          name: '艺术名家 | 杨乃珍',
          path: require('../../assets/imgs/virtuoso1.jpg')
        },
        {
          name: ' 艺术名家 | 王丽堂',
          path: require('../../assets/imgs/virtuoso2.jpg')
        },
        {
          name: '艺术名家 | 王键',
          path: require('../../assets/imgs/virtuoso3.jpg')
        },
        {
          name: '名家荟萃 | 张继青',
          path: require('../../assets/imgs/virtuoso4.jpg')
        }

      ]
    }
  },
  watch: {
    $route() {
      if (this.$route.path === '/star/stage' && !this.isactive) {
        this.isactive = !this.isactive
      }
    }
  },
  methods: {
    jump() {
      this.isactive = !this.isactive
      this.$router.push('/star/stage/starts')
    }
  }
}
</script>
<style lang="scss" scoped>
.mask {
    background-color: black;
    opacity: 0.5;
    height: 30px;
    color: white;
    text-align: center;
    line-height: 30px;
    margin-top: -35px;
    font-size: 15px;
    width: 80%;
}

@media screen and (min-width: 414px) and (max-width: 499px) {

    .mask {
        width: 80%;
        font-size: 10px;
    }
}

</style>
