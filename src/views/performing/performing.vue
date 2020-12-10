<!--二级框架-->
<template>
  <div style="height: 100%;margin-top: 20px">
    <el-row :gutter="40" type="flex" justify="center" class="el-row-center">
      <Side />
      <el-col :xs="22" :sm="16" :md="16" :lg="16" :xl="16">
        <bread />
        <!--          页面内容-->
        <el-row type="flex" justify="center" style="flex-wrap: wrap">
          <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
            <router-view />
          </el-col>
          <div ref="ispagin">
            <paging />
          </div>
        </el-row>
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
      message: [
        {
          title: '不忘初心夯基石，砥砺奋进踏新程 ',
          content: '9月9日下午，集团办公室党支部召开换届选举会议。集团党委书记、董事长郑泽云以普通党员身份参加了所在支部换届选举会议。会议由党支部书记吴文蔚主持。 9月9日下午，集团办公室党支部召开换届选举会议。集团党委书记、董事长郑泽云以普通党员身份参加了所在支部换届选举会议。会议由党支部书记吴文蔚主持。  9月9日下午，集团办公室党支部召开换届选举会议。集团党委书记、董事长郑泽云以普通党员身份参加了所在支部换届选举会议。会议由党支部书记吴文蔚主持。  ',
          time: '2020-08-31',
          number: '31',
          path: require('../../assets/imgs/yanjing_huaban1.jpg')
        },
        {
          title: '不忘初心夯基石，砥砺奋进踏新程 ',
          content: '9月9日下午，集团办公室党支部召开换届选举会议。集团党委书记、董事长郑泽云以普通党员身份参加了所在支部换届选举会议。会议由党支部书记吴文蔚主持。 9月9日下午，集团办公室党支部召开换届选举会议。集团党委书记、董事长郑泽云以普通党员身份参加了所在支部换届选举会议。会议由党支部书记吴文蔚主持。  9月9日下午，集团办公室党支部召开换届选举会议。集团党委书记、董事长郑泽云以普通党员身份参加了所在支部换届选举会议。会议由党支部书记吴文蔚主持。  ',
          time: '2020-08-31',
          number: '31',
          path: require('../../assets/imgs/yanjing_huaban1.jpg')
        },
        {
          title: '不忘初心夯基石，砥砺奋进踏新程 ',
          content: '9月9日下午，集团办公室党支部召开换届选举会议。集团党委书记、董事长郑泽云以普通党员身份参加了所在支部换届选举会议。会议由党支部书记吴文蔚主持。 9月9日下午，集团办公室党支部召开换届选举会议。集团党委书记、董事长郑泽云以普通党员身份参加了所在支部换届选举会议。会议由党支部书记吴文蔚主持。  9月9日下午，集团办公室党支部召开换届选举会议。集团党委书记、董事长郑泽云以普通党员身份参加了所在支部换届选举会议。会议由党支部书记吴文蔚主持。  ',
          time: '2020-08-31',
          number: '31',
          path: require('../../assets/imgs/yanjing_huaban1.jpg')
        },
        {
          title: '不忘初心夯基石，砥砺奋进踏新程 ',
          content: '9月9日下午，集团办公室党支部召开换届选举会议。集团党委书记、董事长郑泽云以普通党员身份参加了所在支部换届选举会议。会议由党支部书记吴文蔚主持。 9月9日下午，集团办公室党支部召开换届选举会议。集团党委书记、董事长郑泽云以普通党员身份参加了所在支部换届选举会议。会议由党支部书记吴文蔚主持。  9月9日下午，集团办公室党支部召开换届选举会议。集团党委书记、董事长郑泽云以普通党员身份参加了所在支部换届选举会议。会议由党支部书记吴文蔚主持。  ',
          time: '2020-08-31',
          number: '31',
          path: require('../../assets/imgs/yanjing_huaban1.jpg')
        },
        {
          title: '不忘初心夯基石，砥砺奋进踏新程 ',
          content: '9月9日下午，集团办公室党支部召开换届选举会议。集团党委书记、董事长郑泽云以普通党员身份参加了所在支部换届选举会议。会议由党支部书记吴文蔚主持。 9月9日下午，集团办公室党支部召开换届选举会议。集团党委书记、董事长郑泽云以普通党员身份参加了所在支部换届选举会议。会议由党支部书记吴文蔚主持。  9月9日下午，集团办公室党支部召开换届选举会议。集团党委书记、董事长郑泽云以普通党员身份参加了所在支部换届选举会议。会议由党支部书记吴文蔚主持。  ',
          time: '2020-08-31',
          number: '31',
          path: require('../../assets/imgs/yanjing_huaban1.jpg')
        },
        {
          title: '不忘初心夯基石，砥砺奋进踏新程 ',
          content: '9月9日下午，集团办公室党支部召开换届选举会议。集团党委书记、董事长郑泽云以普通党员身份参加了所在支部换届选举会议。会议由党支部书记吴文蔚主持。 9月9日下午，集团办公室党支部召开换届选举会议。集团党委书记、董事长郑泽云以普通党员身份参加了所在支部换届选举会议。会议由党支部书记吴文蔚主持。  9月9日下午，集团办公室党支部召开换届选举会议。集团党委书记、董事长郑泽云以普通党员身份参加了所在支部换届选举会议。会议由党支部书记吴文蔚主持。  ',
          time: '2020-08-31',
          number: '31',
          path: require('../../assets/imgs/yanjing_huaban1.jpg')

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
  }
}
</script>

<style  lang="scss" scoped>
.content{
    background-color: white;
    color: #E80000;
    font-size: 21px;
    padding: 5px 0 5px 20px;
    font-weight: bold;
}
.content:hover{
    background-color: gainsboro;
    cursor:pointer;
}
.content2{
    background-color: white;
    color: #5F5F5F;
    padding-left: 20px;
    padding-bottom: 5px;
    line-height: 25px
}
.paging{
    padding: 30px 0;
}

@media screen and (min-width:414px) and (max-width:499px){
    .content{
        font-size: 15px;
    }
    .content2{
        font-size: 10px;
    }
}

</style>
