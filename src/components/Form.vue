<template>
  <div class="formContainer flex">
    <h3>Enter post here</h3>
    <form class="inputContainer flex">
      <p v-if="error" class="error">
        Please fill in text field
      </p>
      <textarea
        v-model="text"
        name=""
        id=""
        cols="30"
        rows="10"
        placeholder="text"
        required
      ></textarea>
      <button v-on:click="addPosts" type="submit">Post</button>
    </form>
  </div>
</template>

<script>
import { postRef } from "../api/firebase";

export default {
  name: "Form",

  data() {
    return {
      text: "",
      name: "",
      error: false
    };
  },

  mounted() {
    this.name = this.$store.getters.user.data.email;
  },

  methods: {
    addPosts: function(e) {
      e.preventDefault();
      this.error = false;
      let { text, name } = this;
      text === ""
        ? (this.error = true)
        : postRef.add({
            userId: this.$store.getters.user.data.uid,
            name,
            text,
            createdAt: Date.now()
          });
      this.text = "";
    }
  }
};
</script>
