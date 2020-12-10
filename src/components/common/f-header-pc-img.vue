<template>
  <div>
    <el-row :gutter="2" type="flex" justify="center">
      <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
        <div class="header-on-img">
          <img src="@/assets/imgs/header.png" alt="">
        </div>

      </el-col>
      <div class="header-on-right">
        <el-col :xs="5" :sm="5" :md="5" :lg="5" :xl="5">
          <div class="header-on-right-item">
            <el-dropdown>
              <span class="el-dropdown-link">
                直属院校<i class="el-icon-arrow-down el-icon--right" />
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>xxx院校</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </el-col>
        <el-col :xs="3" :sm="3" :md="3" :lg="3" :xl="3">
          <div class="header-on-right-item">
            <img style="height: 13px" src="@/assets/imgs/weixin.jpg" alt="">微信
          </div>
        </el-col>
        <el-col :xs="3" :sm="3" :md="3" :lg="3" :xl="3">
          <div class="header-on-right-item">
            <img style="height: 13px" src="@/assets/imgs/weibobangding.jpg" alt="">微博
          </div>
        </el-col>
        <el-col :xs="3" :sm="3" :md="3" :lg="3" :xl="3">
          <div class="header-on-right-item">
            <img style="height: 13px" src="@/assets/imgs/douyin.jpg" alt="">抖音
          </div>
        </el-col>
        <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4">
          <div class="header-on-right-itemlast ">
            <span>设置成首页</span>
            <el-divider direction="vertical" />
            <span>加入收藏</span>
          </div>
        </el-col>
      </div>

    </el-row>

  </div>
</template>

<script>
export default {
  name: 'FHeaderPcImg'
}
</script>

<style lang="scss" scoped>
.header-on-img{
img{
  width: 284px;
  height: 37px;
}
  padding-top: 26px;
 padding-left: 65px;
 padding-bottom: 14px;
}

.header-on-right-item{
  padding-top: 35px;
  padding-left: 37px;
  padding-bottom: 14px;
  width: 80px;
}
.header-on-right-itemlast{
  padding-top: 35px;
  padding-left:42px;
  padding-bottom: 14px;
  width: 200px;
}

.el-dropdown-link {
  cursor: pointer;
  color: #409EFF;
}
.el-icon-arrow-down {
  font-size: 12px;
}

.el-icon-arrow-down el-icon--right{
  position: relative;
  left: 2px;
  top:2px;
  color: #FFFFFF;
}
.el-dropdown-link el-dropdown-selfdefine {
  position: relative !important;
  left: 2px;
  top:2px;
}
@media screen and (max-width:900px){
.header-on-right{
  display: none;
}
}

</style>
