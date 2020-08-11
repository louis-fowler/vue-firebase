<template>
  <div>
    <Form />
    <Display />
  </div>
</template>

<script>
import Display from "./Display";
import Form from "./Form";
export default {
  name: "MainContent",

  components: {
    Display,
    Form
  }
};
</script>

<style lang="scss" scoped></style>
