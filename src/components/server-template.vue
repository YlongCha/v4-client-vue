<template>
  <div class="server-template">
    <b-form-select v-model="selectedValue" :options="options"></b-form-select>
    <server-chart :serverData="dataSets"/>
  </div>
</template>

<script>
import ServerChart from './charts/server-chart.vue'
export default {
  name: 'server-template',
  components:{
    ServerChart
  },
  props:['options','dataSets'],
  data(){
    return{
      selectedValue:''
    }
  },
  watch:{
    selectedValue:function(newVal,oldVal){
      this.$emit('change-select',newVal)
    },
    dataSets:function(newVal,oldVal){
      console.log('dataSetChange',newVal,oldVal)
    }
  },
}
</script>
<style>
.server-template{
  display: flex;
  flex-direction: column;
}
.custom-select{
  width:40%;
  align-self: center;
}
  @media (max-width: 640px) {
    .server-template{
      width:70vw;
    }
  }
</style>