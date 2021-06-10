<template>
  <section class="server-info">
    <server-template 
    v-on:change-select="changeSelected($event,'first')"
    :options="options"
    :dataSets="this.first"/>
    <server-template
    v-on:change-select="changeSelected($event,'second')"
    :options="options"
    :dataSets="this.second"/>
    <server-template
    v-on:change-select="changeSelected($event,'third')"
    :options="options"
    :dataSets="this.third"/>
    <server-template
    v-on:change-select="changeSelected($event,'fourth')"
    :options="options"
    :dataSets="this.fourth"/>
  </section>
</template>

<script>
import ServerTemplate from '../components/server-template.vue'
export default {
  name: 'server-info',
  components:{
    ServerTemplate
  },
  data(){
    return {
      options:[{value:"",text:""}],
      resData:{
        labels:['',''],
        data:[1,2]
      },
      first:{
        labels:['',''],
        data:[1,2]
      },
      second:{
        labels:['',''],
        data:[1,2]
      },
      third:{
        labels:['',''],
        data:[1,2]
      },
      fourth:{
        labels:['',''],
        data:[1,2]
      }
    }
  },
  mounted() {
    this.createOptions()
  },
  methods:{
    changeSelected: async function(value,template){
      try{
        if(value.length>0){
          const response = await this.$http.get(`http://152.70.253.149:3001/server/${value}`)
          var data = {
            labels:response.data.map(item=>item.combat_power+'만이상'),
            data:response.data.map(item=>item.count)
          }
          this[template] = Object.assign({},data)
        }else{
          this[template] = Object.assign({},{
            labels:['',''],
            data:[1,2]
          })
        }
      }catch(e){
        console.log(e)
      }
    },
    createOptions:function(){
      var serverList = ['발리언','디안','아디테','에델미아','에티라크','제릴','탈리디스카']
      serverList.map(server=>{
        var leng = server==='에티라크'? 3:5
        var ary = []
        for(var i=1;i<=leng;i++){
          ary.push({value:server+i,text:server+' '+i})
        }
        this.options= this.options.concat(ary)
      })
    },
  }
}
</script>
<style>
  .server-info{
  display:flex;
  flex-direction: row;
  overflow: hidden;
  align-items: center;
  place-content: center;
  grid-column: 1;
  grid-row: 1;
  }
  @media (max-width: 640px) {
    .server-info{
      display:flex;
      flex-direction: column;
      height: fit-content;
      width:100%;
      margin-top:8%;
      overflow: scroll;
    }
  }
</style>