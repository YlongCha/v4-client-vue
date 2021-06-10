<template>
  <section class="guild-info-container">
    <Guildtemplate
    class="left-guild-info"
     v-on:change-value="changeInputValue($event,'left')"
     :heroes="this.leftHeroList"
     :guildName="this.leftGuildName"
     :guildRank="this.leftGuildRank"
     :combatPower="this.leftCombatPower"
     :cnt="this.leftCnt"
     :busy="this.leftBusy"/>
     
    <Guildtemplate v-on:change-value="changeInputValue($event,'right')"
     :heroes="this.rightHeroList"
     :guildName="this.rightGuildName"
     :guildRank="this.rightGuildRank"
     :combatPower="this.rightCombatPower"
     :cnt="this.rightCnt"
     :busy="this.rightBusy"/>
  </section>
</template>

<script>
import Guildtemplate from '../components/guild-template.vue'
  export default {
    name: 'guild-info',
    components: {
      Guildtemplate
    },
    data:function(){
      return{
        leftHeroList:[],
        leftGuildName:"-",
        leftGuildRank:"-",
        leftCombatPower:"-",
        leftCnt:"-",
        leftBusy:false,
        rightHeroList:[],
        rightGuildName:"-",
        rightGuildRank:"-",
        rightCombatPower:"-",
        rightCnt:"-",
        rightBusy:false
      }
    },
    methods:{
      changeInputValue:async function(value,template){
        try{
        if(value.length>0){
          if(template==='left'){
            this.leftBusy=true
          }else if(template==='right'){
            this.rightBusy=true
          }
          const response = await this.$http.get(`http://192.168.1.15:4000/guild/${value}`)
          var info = response.data[0]

          if(template==='left'){
            this.leftHeroList = info.character_names;
            this.leftCombatPower=info.avg_power
            this.leftCnt=info.cnt
            this.leftGuildName=info.guild_name;
            this.leftGuildRank=info.guild_rank;
            this.leftBusy=false
          }else if(template==='right'){
            this.rightHeroList = info.character_names
            this.rightCombatPower=info.avg_power
            this.rightCnt=info.cnt
            this.rightGuildName=info.guild_name;
            this.rightGuildRank=info.guild_rank;
            this.rightBusy=false
          }
        }
        }catch(e){
          if(template==='left'){
            this.leftBusy=false
          }else if(template==='right'){
            this.rightBusy=false
          }
        }
      }
    }
  }
</script>
<style >
.left-guild-info{
  border-right-style: dashed;
}
.guild-info-container{
  display:flex;
  flex-direction: row;
  overflow: hidden;
  align-items: center;
  place-content: center;
  grid-column: 1;
  grid-row: 1;
}
</style>