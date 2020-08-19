<template>
  <div class="flex">
    <h1>Cool Blog</h1>
    <p>{{ email }}</p>
    <button v-on:click="logOut">Logout</button>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  name: "Header",
  data() {
    return {
      userId: "test",
      email: "",
      user: {}
    };
  },
  // created() {
  //   firebase.auth().onAuthStateChanged(user => {
  //     this.userId = user.uid;
  //     this.email = user.email;
  //     this.user = user;
  //   });
  // },
  methods: {
    logOut() {
      this.$router.push("/");
      firebase.auth().signOut();
    }
  }
};
</script>
