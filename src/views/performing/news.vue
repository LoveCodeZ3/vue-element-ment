
<template>
  <div>
    <template v-if="isactive">
      <div v-for="(item,index) in message" ref="content1" :key="index">
        <div style="background-color: #F7F7F7;padding: 5px">
          <div class="content-news" @click="jump">
            {{ item.title }}
          </div>
          <div class="content2-news">
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
      <newss />
    </template>
  </div>
</template>

<script>
import newss from './newss'

export default {
  name: 'Profile',
  components: { newss },
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
      if (this.$route.path === '/performing/news' && !this.isactive) {
        this.isactive = !this.isactive
      }
    }
  },
  methods: {
    jump() {
      this.isactive = !this.isactive
      this.$router.push('/performing/news/newss')
    }
  }
}
</script>

<style  lang="scss" scoped>
.content-news{
  background-color: white;
  color: #E80000;
  font-size: 21px;
  padding: 5px 0 5px 20px;
  font-weight: bold;
}
.content-news:hover{
  background-color: gainsboro;
  cursor:pointer;
}
.content2-news{
  background-color: white;
  color: #5F5F5F;
  padding-left: 20px;
  padding-bottom: 5px;
  line-height: 25px
}
.title{
    margin: 50px 0;
    font-size: 21px;
    color: #4D90FE;
    font-weight: bold;
}
.item-margin{
    margin: 0 60px;
    padding: 20px 0
}

@media screen and (min-width:414px) and (max-width:499px){

  .content-news{
    font-size: 15px;
  }
  .content2-news{
    font-size: 10px;
  }
    .title{
        font-size: 20px;
    }
    .item-margin{
        padding:10px 0;
        margin: 0;
    }
}
</style>
