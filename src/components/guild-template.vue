<template>
  <section class="guild-template">
    <b-input-group>
      <b-input-group-text>길드 이름</b-input-group-text>
      <b-form-input v-model="inputValue" v-on:keyup.enter="enterInput"></b-form-input>
      <b-button variant="primary" :disabled="this.busyValue" v-on:click="$emit('change-value',clickBtn())">
        <b-spinner v-if="this.busyValue" small style="margin-bottom: 3px;"></b-spinner>검색
      </b-button>
    </b-input-group>
    <h2>{{guildName}}</h2>
    <b-card
      header="길드 순위">
      <b-card-text>{{guildRank}}</b-card-text>
    </b-card>
    <b-card
      header="평균투력 / 길드원수">
      <b-card-text>{{combatPower.toLocaleString('ko-KR')}} / {{cnt}}</b-card-text>
    </b-card>
    <b-list-group >
      <b-list-group-item 
      v-for="(hero,i) in this.heroList"
      :key="i">
        <b-card-body>
          <b-card-title>{{hero.f1}}</b-card-title>
          <b-card-sub-title class="mb-2">{{hero.f3}}</b-card-sub-title>
          <b-card-text>{{hero.f2}}</b-card-text>
        </b-card-body>
      </b-list-group-item>
    </b-list-group>
  </section>
</template>

<script>

  export default {
    name: 'guild-template',
    props:[
      'busy',
      'heroes',
      'guildName',
      'guildRank',
      'combatPower',
      'cnt'
    ],
    watch:{
      busy: function(newVal,oldVal){
        this.busyValue=newVal
      },
      heroes: function(newVal,oldVal){
        this.heroList.splice(this.heroList)

        Object.assign(this.heroList,newVal.map(item=>{
          return {
            f1:item.f1,
            f2:item.f2.toLocaleString('ko-KR'),
            f3:item.f3
          }
        }))
      }
    },
    data:function(){
      return{
        busyValue:false,
        heroList:[],
        inputValue:''
      }
    },
    methods:{
      clickBtn:function(){
        if(this.inputValue.length>0){
          return this.inputValue
        }
      },
      enterInput:function($event){
        this.$emit('change-value',$event.target.value)
      }
    }
  }
</script>
<style >
  .guild-template{
    height: 60%;
    width:40%;
    display:grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: auto 10% 20% 65%;
    align-items: center;
    justify-items: center;
  }
  .guild-template .input-group{
    width:90%;
    grid-column:1/3;
    grid-row:1
  }
  .guild-template h2{
    grid-column:1/3;
    grid-row:2
  }
  .guild-template .card{
    width:90%;
    padding:0px;
  }
  .guild-template .card-body, .card-text{
    text-align: center;
    color: rgb(100 100 100);
    font-size: 2vw;
    padding:0px;
  }
  .guild-template .list-group{
    margin-top: 10px;
    grid-column:1/3;
    grid-row:4;
    width: 100%;
    height:100%;
    max-height: inherit;
    overflow-y: scroll;
    overflow:auto;
  }
  .guild-template .card .card-header, .input-group .input-group-text{
    background-color:rgb(71, 169, 217);
    color:white; 
  }
  @media (max-width: 640px) {
    .guild-template .btn, .card .card-header, .input-group .input-group-text{
      font-size:2vw;
      padding:2px;
    }
    .card-text{
      text-align: center;
      color: rgb(100 100 100);
      font-size: 2.3vw;
    }
  }
</style>