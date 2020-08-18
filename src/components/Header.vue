<template>
  <div class="flex">
    <h1>Cool Blo</h1>
    <p>{{ email }}</p>
    <button>Logout</button>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  name: "Header",
  data() {
    return {
      userId: "",
      email: "",
      user: {}
    };
  },
  created() {
    this.user = firebase.auth().currentUser;
    if (this.user) {
      this.email = this.user.email;
      this.userId = this.user.uid;
    }
  }
};
</script>
