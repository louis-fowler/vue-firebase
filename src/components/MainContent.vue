<template>
  <div>
    <Form />
    <Display :message="message" />
  </div>
</template>

<script>
import Display from "./Display";
import Form from "./Form";
export default {
  name: "MainContent",

  data() {
    return {
      message: "hello there"
    };
  },

  components: {
    Display,
    Form
  }
};
</script>

<style lang="scss" scoped></style>
