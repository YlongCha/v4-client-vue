<template>
  <div id="app">
    <SideBar id="side-bar"/>
    <router-view></router-view>
  </div>
</template>

<script>
import SideBar from './components/layout/side-bar'
  export default {
    name: 'app',
    components: {
      SideBar
    }
  }
</script>

<style lang="stylus">
* { padding: 0; margin: 0; }
html, body{
  min-height: 100% !important;
  height: 100%;
}
#app{
  height :100%
  display :grid;
  background-color:#f6f6f6;
}
#app #side-bar{
  z-index: 2;
  grid-column: 1;
  grid-row: 1;
  height: fit-content;
}
section{
  height: 100%;
  width: 100%;
  z-index: 1;
  align-items: center;
  justify-items:center;
}
</style>
