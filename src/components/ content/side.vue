<template>
  <el-col :xs="0" :sm="5" :md="5" :lg="4" :xl="3">
    <div class="first-title">
      {{ title }}
    </div>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      :background-color="variables.SonMenuBg"
      :text-color="variables.SonmenuTextColor"
      :active-text-color="variables.SonMenuActiveTextColor"
      :default-active="$route.path"
      :router="true"
    >
      <template v-for="(item,index) in application">
        <el-menu-item
          :key="index"
          class="el-submenu-deep"
          style="font-size: 16px"
          :index="item.path"
        ><i class="el-icon-caret-right" />{{ item.name }}
        </el-menu-item>
      </template>
    </el-menu>
  </el-col>
</template>

<script>
import variables from '@/common/css/public.scss'
export default {
  name: 'Side',
  data() {
    return {
      title: '',
      group: '集团概况',
      performing: '演艺之声',
      star: '名家新星',
      development: '演艺拓展',
      building: '党的建设',

      application: [],
      info1: [
        {
          name: '集团简介',
          path: '/group/profile'
        },
        {
          name: '机构设置',
          path: '/group/setting'
        },
        {
          name: '剧场介绍',
          path: '/group/theatre'
        },
        {
          name: '集团荣誉',
          path: '/group/honor'
        },
        {
          name: '联系我们',
          path: '/group/we'
        }

      ],
      info2: [
        {
          name: '集团动态',
          path: '/performing/news'
        },
        {
          name: '政治专栏',
          path: '/performing/column'
        },
        {
          name: '戏剧评论',
          path: '/performing/review'
        }
      ],
      info3: [
        {
          name: '艺术名家',
          path: '/star/virtuoso'
        },
        {
          name: '舞台新星',
          path: '/star/stage'
        },
        {
          name: '星专访',
          path: '/star/interview'
        }
      ],
      info4: [
        {
          name: '舞美服务',
          path: '/development/service'
        },
        {
          name: '艺术培训',
          path: '/development/training'
        },
        {
          name: '文化融合',
          path: '/development/integration'
        }

      ],
      info5: [
        {
          name: '党建活动',
          path: '/building/activities'
        },
        {
          name: '企业精神',
          path: '/building/spirit'
        }
      ]

    }
  },
  computed: {
    variables() {
      return variables
    }
  },
  mounted() {
    if (this.$route.meta.id === 1) {
      this.application = this.info1
      this.title = this.group
    }
    if (this.$route.meta.id === 2) {
      this.application = this.info2
      this.title = this.performing
    }
    if (this.$route.meta.id === 3) {
      this.application = this.info3
      this.title = this.star
    }
    if (this.$route.meta.id === 4) {
      this.application = this.info4
      this.title = this.development
    }
    if (this.$route.meta.id === 5) {
      this.application = this.info5
      this.title = this.building
    }
  }
}
</script>

<style  lang="scss" scoped>
/deep/  .el-menu-item.is-active {
  background: #4D90FE !important;
}
.el-menu-item:hover{
  background: #4D90FE !important;
  color: #fff !important;
}
.el-submenu-deep{
  width: 100%;
}
</style>
