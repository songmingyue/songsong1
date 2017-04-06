<script src="../../server/app.js"></script>
<script src="//cdn.bootcss.com/jquery/3.2.1/jquery.js"></script>
<template>
    <div id="app" class="app">
        <ul>
            <li v-for="(item,key) in eleme">
                <div class="picture"></div>
                <a v-bind:href="item.id">{{item.name}}</a>
            </li>
        </ul>
    </div>
</template>
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
    }

    li{
        width:254.5px;
        height:98px;
        padding: 20px;
        float: left;
        text-decoration: none;
        list-style: none;
    }
</style>
<script>
  export default {
    data () {
        return {
          key: 1,
          value: 2,
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
        }
      }
    },
    mounted() {
      this.getMenuList()
    },



  }


</script>