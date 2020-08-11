<template>
  <div class="app flex">
    <Header />
    <MainContent />
  </div>
</template>

<script>
import Header from "./components/Header";
import MainContent from "./components/MainContent";
export default {
  name: "App",
  components: {
    Header,
    MainContent
  }
};
</script>

<style lang="scss">
@import "./styles/style.scss";
</style>
