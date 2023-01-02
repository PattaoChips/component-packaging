<template>
  <div id="app">
    <div id="nav" class="font-size-25">
      <router-link to="/">Button组件</router-link> |
      <router-link to="/table">Table组件</router-link>|
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
@import "./styles/global.css";
#nav {
  padding: 20px;
  text-align: center;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
