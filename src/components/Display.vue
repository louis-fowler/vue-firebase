<template>
  <div>
    <div class="flex" v-if="loaded">
      <div class="post flex" v-for="post in posts" :key="post.id">
        <p>By: {{ post.name }}</p>
        <p>{{ post.text }}</p>
        <p>{{ dateParse(post.createdAt) }}</p>
        <p
          v-if="post.userId === userId"
          v-on:click="deletePost(post.id)"
          class="error"
        >
          remove
        </p>
      </div>
    </div>
    <div v-else><p>Loading...</p></div>
  </div>
</template>

<script>
import { postRef } from "../api/firebase";
export default {
  name: "Display",

  data() {
    return {
      posts: [],
      loaded: false,
      userId: ""
    };
  },

  methods: {
    dateParse: date => {
      return new Date(date).toLocaleString();
    },
    deletePost: id => {
      postRef.doc(id).delete();
    }
  },

  mounted() {
    this.$bind("posts", postRef).then(() => (this.loaded = true));
    this.userId = localStorage.getItem("id");
  },

  computed: {
    console: () => console
  },

  props: ["message"]
};
</script>
