<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  mounted() {
    // var html = document.getElementsByTagName("html")[0];
    // var oWidth = document.body.clientWidth || document.documentElement.clientWidth;
    // html.style.fontSize = oWidth / 1920 * 100 + "px";
    // console.log('rem:', html.style.fontSize);
  }
};
</script>

<style>
* {
  margin: 0px;
  padding: 0px;
}
html,
body {
  width: 100%;
  height: 100%;
}
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */

  width: 100%;
  height: 100%;
  /* overflow-x:hidden;
  overflow-y:auto; */
}
</style>
