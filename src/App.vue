<template>
  <div class="app flex">
    <router-link to="/test1"></router-link>
    <router-link to="/test2"></router-link>
    <router-view></router-view>
    <!-- <Header />
    <MainContent /> -->
  </div>
</template>

<script>
// import Header from "./components/Header";
// import MainContent from "./components/MainContent";
export default {
  name: "App"
  // components: {
  //   Header,
  //   MainContent
  // }
};
</script>

<style lang="scss">
@import "./styles/style.scss";
</style>
