<template>
  <section class="hero-info-container">
    <b-input-group>
    <b-input-group-text>캐릭터 이름</b-input-group-text>
    <b-form-input @change="changeInputValue"></b-form-input>
    <b-button variant="primary" :disabled="busy" @click="changeInputValue">
      <b-spinner v-if="busy" small style="margin-bottom: 3px;"></b-spinner>검색
    </b-button>

    </b-input-group>
    <div id="card-container">
      <b-card
        header="전투력">
        <b-card-text>{{combatPower}}</b-card-text>
      </b-card>
      <b-card
        header="전체 순위">
        <b-card-text>{{totRank}}</b-card-text>
      </b-card>
      <b-card
        header="클래스 순위">
        <b-card-text>{{classRank}}</b-card-text>
      </b-card>
      <b-card
        header="서버 순위">
        <b-card-text>{{serverRank}}</b-card-text>
      </b-card>
    </div>
    <div class="chart-container">
      <hero-chart
      :data-list="dataList"/>
    </div>
  </section>
</template>

<script>
import HeroChart from '../components/charts/hero-chart.vue'

  export default {
    name: 'hero-info',
    components: {
      HeroChart
    },
    data:function(){
      return{
        busy: false,
        dataList:{
        },
        totRank:"-",
        serverRank:"-",
        classRank:"-",
        combatPower:"-",
      }
    },
    methods:{
      changeInputValue:async function(event){
        try{
          this.busy=true
          const response = await this.$http.get(`http://152.70.253.149:3001/hero/${event}`)
          
          var data = {}
          data.totRanks = response.data.map(res=>res.tot_rank*1)
          data.serverRanks = response.data.map(res=>res.server_rank*1)
          data.classRanks = response.data.map(res=>res.class_rank*1)
          data.labels = response.data.map(res=>res.d_kst)

          this.totRank = data.totRanks[data.totRanks.length-1]
          this.serverRank = data.serverRanks[data.serverRanks.length-1]
          this.classRank = data.classRanks[data.classRanks.length-1]
          this.combatPower =  response.data[response.data.length-1].combat_power.toLocaleString('ko-KR')

          this.dataList = Object.assign({},this.dataList,data)
          this.busy=false
        }catch(e){
          this.busy=false
        }

      }
    }
  }
</script>
<style >
.hero-info-container{
  display:flex;
  flex-direction: column;
  overflow: hidden;
  align-items: center;
  place-content: center;
  grid-column: 1;
  grid-row: 1;
}
#card-container{
  display:flex;
  justify-content: space-around;
  margin-top: 10px;
  margin-bottom: 10px;
  width:60%
}
.hero-info-container .chart-container,.hero-info-container .input-group {
  width:60%;
}
.hero-info-container .card{
  width:100%;
}

.hero-info-container .card .card-header,.input-group-text{
  background-color:rgb(71, 169, 217);
  color:white; 
}
.hero-info-container .card-body{
  padding:0px;
}
.hero-info-container .card-text{
  text-align: center;
  color: rgb(100 100 100);
  font-size: 2vw;
}
.hero-info-container #line-chart{
  background-color: rgb(255 255 255);
  border-radius: 8px;
}
@media (max-width: 640px) {
  .hero-info-container .card .card-header, .input-group .input-group-text{
    font-size:2.3vw;
  }
  .card-text{
    text-align: center;
    color: rgb(100 100 100);
    font-size: 2.3vw;
  }
}
</style>