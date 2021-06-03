<template>
  <div id="app">
    <div class="nav">
      <router-link to="/"> <h1>CoffeeShop</h1></router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
@import "./assets/scss/all";

.nav {
  text-align: center;
  a {
    text-decoration: none;
    margin: 0 10px;
    font-size: 18px;
    letter-spacing: 2px;
  }
}
</style>
