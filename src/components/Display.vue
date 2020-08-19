<template>
  <div>
    <div class="flex" v-if="loaded">
      <div class="post flex" v-for="post in posts" :key="post.id">
        <p>By: {{ post.name }}</p>
        <p>{{ post.text }}</p>
        <p>{{ dateParse(post.createdAt) }}</p>
        <p
          v-if="post.userId === userId"
          v-on:click="deletePost(post.id, post.userId)"
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
      userId: localStorage.getItem("id")
    };
  },

  methods: {
    dateParse: date => {
      return new Date(date).toLocaleString();
    },
    deletePost: (id, userId) => {
      userId === localStorage.getItem("id")
        ? postRef.doc(id).delete()
        : alert("nice try");
    }
  },

  mounted() {
    this.$bind("posts", postRef).then(() => (this.loaded = true));
  },

  computed: {
    console: () => console
  },

  props: ["message"]
};
</script>
