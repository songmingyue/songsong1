<script src="../../server/app.js"></script>
<!--<script src="//cdn.bootcss.com/jquery/3.2.1/jquery.js"></script>-->
<!--<link rel="stylesheet" href="demo.css">-->
<!--<link rel="stylesheet" href="iconfont.css">-->
<template>
    <div id="app" class="app">
        <div class="head_body">
            <p><span>当前位置：</span>长宁区新靖镇临虹路空..<a>[切换地址]</a></p>
        </div>
        <ul>
            <li v-for="(item,key) in eleme" >
                <div class="picture" @click="remove(item)"><img src="../assets/zgf.png"></div>
                <a class="first_name" v-bind:href="item.id">{{item.name}}</a>
                <p class="yueshou">月售351单</p>
                <p class="text_pay">{{item.piecewise_agent_fee.tips}}</p>
                <div class="pingjia">
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
  export default {
    data () {
        return {
          key: 1,
          value5: 4,
          eleme: []
        }
    },
    methods: {
      async getMenuList() {
        try {
          let res = await this.$http.get('/api/eleme.json')
          console.log(res.data)
          this.eleme = res.data
        } catch (err) {
          console.log('err', err)
//          console.log(piecewise_agent_fee.tips)
        }
      },

      remove(entry){
        this.eleme.forEach((item,index) => {
          if(item.name ==entry.name){
            this.eleme.splice(index,1)
          }
        })
      }


    },
    mounted() {
      this.getMenuList()
    },

    created(){
//      console.log('hahaha')
    }



  }


</script>
<style>
    .app{
        width: 1180px;
        margin: 0 auto;

    }
    .picture{
        width:70px;
        height: 70px;
        background-color: #1c8de0;
        display: inline-block;
        float: left;
    }
    .first_name{
        display:inline-block;
        float:left;
        width: 136px;
        height: 21px;
        overflow:hidden;
        font-size: 15px;

    }
    .pingjia{
        width: 216px;
        height: 20px;
        /*float: left;*/
    }
    .pingjia span{
        display: inline-block;
        width: 8px;
        height: 8px;
    }
    .text_pay{
        float: left;
        font-size: 8px;
    }

    li{
        width:254.5px;
        height:98px;
        padding: 20px;
        float: left;
        /*text-decoration: none;*/
        list-style: none;
    }
    .yueshou{
        float: left;
        font-size: 8px;
        margin-right: 90px;
    }
    .head_body{
        width: 1180px;
        height: 54px;
    }
    .head_body a{
        font-size: 8px;
        color: #0089dc;
    }
</style>

