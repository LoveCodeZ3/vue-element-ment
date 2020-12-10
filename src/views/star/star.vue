<template>
  <div style="height: 100%;margin-top: 20px">
    <el-row :gutter="40" type="flex" justify="center" class="el-row-center">
      <Side />
      <el-col :xs="22" :sm="14" :md="14" :lg="14" :xl="14">
        <bread />
        <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
          <el-row :gutter="40" type="flex" justify="center" class="el-row-center">
            <router-view />
            <div ref="ispagin">
              <paging />
            </div>
          </el-row>
        </el-col>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Side from '@/components/ content/side'
import Paging from '@/components/ content/paging'
import Bread from '@/components/ content/bread'
export default {
  name: 'Profile',
  components: { Bread, Paging, Side },
  data() {
    return {
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
      if (this.$route.meta.ispagin === 'ispagin') {
        this.$refs.ispagin.style.display = 'none'
      } else {
        this.$refs.ispagin.style.display = 'block'
      }
    }
  },
  methods: {
    jump() {
      this.$router.push('/star/starts')
    }
  }
}
</script>

<style lang="scss" scoped>
.tab {
    margin: 10px 0;
    padding: 10px 0
}

.tab:hover {
    background-color: #4D90FE;
    color: white;
    cursor: pointer;
}

.tab-active {
    background-color: #4D90FE;
    color: white;
}

.paging {
    padding: 20px 0;
}

.mask {
    background-color: black;
    opacity: 0.5;
    height: 30px;
    color: white;
    text-align: center;
    line-height: 30px;
    margin-top: -35px;
    font-size: 15px;
}

@media screen and (min-width: 414px) and (max-width: 499px) {

    .mask {
        width: 100%;
        font-size: 10px;
    }
}

</style>
