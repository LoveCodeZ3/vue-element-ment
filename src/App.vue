<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App',
  mounted() {
  }
}
</script>
<style lang="scss">
html,
body,
#app {
  height: 100%;
  overflow-x: hidden;

}
*{
  margin: 0;padding: 0;
}
.el-submenu__title{
  cursor: pointer !important;
}

</style>
