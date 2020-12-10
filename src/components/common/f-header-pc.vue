<template>
  <div class="header-pc">
    <el-row type="flex" justify="center" style="flex-wrap: wrap">
      <el-col :xs="24" :sm="24" :md="15" :lg="15" :xl="15">
        <el-menu
          :default-active="$route.path"
          :router="true"
          class="el-menu-demo"
          mode="horizontal"
          :background-color="variables.menuBg"
          :text-color="variables.menuTextColor"
          :active-text-color="variables.subMenuActiveText"
        >
          <template v-for="item in menuData">
            <el-submenu v-if="item.child" :key="item.path" class="el-submenu-deep" :index="item.path">
              <template slot="title">
                {{ item.title }}<span class="el-icon-caret-bottom" style="padding-bottom: 5px;font-size: 12px" />
              </template>
              <template v-for="(child,index) in item.child">
                <el-menu-item :key="index" :index="child.path">{{ child.title }}</el-menu-item>
              </template>
            </el-submenu>
            <el-menu-item v-else :key="item.title" class="el-submenu-deep" :index="item.path"><span>{{ item.title }}</span></el-menu-item>
          </template>
        </el-menu>
      </el-col>
      <el-col :xs="0" :sm="5" :md="4" :lg="3" :xl="3">
        <div class="sou-suo">
          <el-input v-model="input1" class="aaa" placeholder="请输入内容">
            <el-button slot="append" icon="el-icon-search" />
          </el-input>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import variables from '@/common/css/public.scss'
import MenuJson from '@/common/jsons/menu.json'
export default {
  name: 'FHeader',
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1',
      input1: '',
      menuData: MenuJson,
      isactive: true
    }
  },
  computed: {
    variables() {
      return variables
    }
  }

}
</script>

<style lang="scss">

.sou-suo {

  line-height: 50px;

}

.el-menu-item {
  font-size: 13px;
}

.el-submenu__title {
  font-size: 13px;
}

/deep/ .el-submenu__title :hover {
  cursor: pointer !important;
}
.myClass input.el-input__inner {
    border-radius:15px;
}

.el-menu--horizontal > .el-submenu .el-submenu__title {
  i {
    color: white;
    display: none;
  }
}
.sou-suo {
    input{
        border-radius: 45px;
    }
}

@media screen and (min-width: 957px) and (max-width: 1362px) {
  .el-submenu-deep {
    width: 80px;
  }
}

</style>
