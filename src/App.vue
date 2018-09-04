<template>
  <div id="app">
    <MHeader/>
    <Tab/>
    <router-view/>
  </div>
</template>

<script>
import MHeader from 'components/m-header/m-header'
import Tab from 'components/tab/tab'
export default {
  name: 'App',
  components:{
    MHeader,
    Tab
  }
}
</script>

<style>
#app {
 
  /*margin-top: 60px;*/
}
</style>
