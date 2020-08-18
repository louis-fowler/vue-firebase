<template>
  <div>
    <Header />
    <Form />
    <Display :message="message" />
  </div>
</template>

<script>
import Header from "../components/Header";
import Display from "../components/Display";
import Form from "../components/Form";
export default {
  name: "MainContent",

  data() {
    return {
      message: "hello there"
    };
  },

  components: {
    Display,
    Form,
    Header
  }
};
</script>

<style lang="scss" scoped></style>
