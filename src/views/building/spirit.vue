<template>
  <div>
    <template v-if="isactive">
      <div v-for="(item,index) in message" :key="index">
        <div style="background-color: #F7F7F7;padding: 5px">
          <div class="content" @click="jump">
            {{ item.title }}
          </div>
          <div class="content2">
            {{ item.content }}
            <div style="line-height: 12px">
              {{ item.time }} <el-image style="" :src="item.path" />{{ item.number }}
            </div>
          </div>
        </div>
        <div style="height: 10px" />
      </div>
    </template>
    <template v-else>
      <spirits />
    </template>
  </div>
</template>
<script>
import spirits from '@/views/building/spirits'
export default {
  name: 'Profile',
  components: { spirits },
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
      ],
      isactive: true
    }
  },
  watch: {
    $route() {
      if (this.$route.path === '/building/spirit' && !this.isactive) {
        this.isactive = !this.isactive
      }
    }
  },
  methods: {
    jump() {
      this.isactive = !this.isactive
      this.$router.push('/building/spirit/spirits')
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
  background-color: gainsboro !important;
  cursor:pointer !important;
}
.content2{
  background-color: white;
  color: #5F5F5F;
  padding-left: 20px;
  padding-bottom: 5px;
  line-height: 25px
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
