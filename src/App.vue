<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
@import "assets/scss/style.scss";
html {
  height: 100%;
  body {
    height: 100%;
    ul {
      list-style-type: none;
    }
  }
}
#app {
  height: 100%;
  color: #2c3e50;
}
</style>
