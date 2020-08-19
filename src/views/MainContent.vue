<template>
  <div>
    <Header />
    <Form />
    <Display />
  </div>
</template>

<script>
import firebase from "firebase";
import Header from "../components/Header";
import Display from "../components/Display";
import Form from "../components/Form";
export default {
  name: "MainContent",

  data() {
    return {};
  },

  mounted() {
    firebase.auth().onAuthStateChanged(user => {
      localStorage.setItem("email", user.email);
      localStorage.setItem("id", user.uid);
    });
  },

  components: {
    Display,
    Form,
    Header
  }
};
</script>

<style lang="scss" scoped></style>
