<script src="main.js"></script>
<template>
  <div id="app">
     <!--<div style="background: blue;height:100px;line-height:100px;color: #fff"> {{msg}}</div>-->
      <div class="first-title">
          <div class="first-title-center">
          <div class="first-title-one font-cor"><router-link to="/" style="color: white;text-decoration: none">首页</router-link></div>
          <div class="first-title-one font-cor"><router-link to="/about" style="color: white;text-decoration: none">我的订单</router-link></div>
          <div class="first-title-one font-cor"><router-link to="/First" style="color: white;text-decoration: none">加盟合作</router-link></div>
          <div class="first-title-two font-cor"><router-link to="/hello" style="color: white;text-decoration: none">登录/注册</router-link></div>
          <div class="first-title-two font-cor"><router-link to="/hello" style="color: white;text-decoration: none">手机应用</router-link></div>
          <div class="first-title-two font-cor"><router-link to="/hello" style="color: white;text-decoration: none">服务中心</router-link></div>
          </div>
      </div>
      <div>
          <ul>
              <li v-for="items in item">
                  <span>{{items.city}}</span>
              </li>
          </ul>
      </div>
    <!--<img src="./assets/logo.png">-->
   <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'app',
  data(){
    return{
//      msg:'dd1111ddd'
        item:[
//          {city:12}
        ]
    }
  }
}
</script>
<style scoped>
    @import 'sass/app.css';
</style>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  /*margin-top: 60px;*/
}
    .first-title{
        width: 100%;
        height: 60px;
        background-color: #1e89e0 ;
        line-height: 60px;
        /*float: left;*/
        /*margin-right: 50px;*/
    }
    .first-title-center{
        margin: 0 auto;
        width: 1100px;
        height: 60px;
    }
    .first-title-one{
        float: left;
        /*margin-right: ;*/
        /*padding-left: ;*/
    }
.first-title-two{
    float: right;
    /*width: 134px;*/
    /*margin-right: ;*/
    /*padding-left: ;*/
}
    .font-cor{
    width: 134px;
    color: white;
    }
</style>
