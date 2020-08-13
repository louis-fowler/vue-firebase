<template>
  <div class="formContainer flex">
    <h3>Enter post here</h3>
    <form class="inputContainer flex">
      <p v-if="error" class="error">
        Please fill in both the name and index fields
      </p>
      <input v-model="newPost.name" type="text" placeholder="name" required />
      <textarea
        v-model="newPost.text"
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
      newPost: {
        name: "",
        text: ""
      },
      error: false
    };
  },

  methods: {
    addPosts: function(e) {
      e.preventDefault();
      this.error = false;
      let { name, text } = this.newPost;
      name === "" || text === ""
        ? (this.error = true)
        : postRef.add({ name, text, createdAt: Date.now() });
      this.newPost.name = "";
      this.newPost.text = "";
    }
  }
};
</script>
