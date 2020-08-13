<template>
  <div class="flex">
    <div class="post flex" v-for="(post, index) in posts" :key="index">
      <p>Username: {{ post.name }}</p>
      <p>{{ post.text }}</p>
      <p>{{ dateParse(post.createdAt) }}</p>
      <p v-on:click="deletePost(post.id)" class="error">remove</p>
    </div>
  </div>
</template>

<script>
import { postRef } from "../api/firebase";
export default {
  name: "Display",

  data() {
    return {
      posts: []
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

  firestore: {
    posts: postRef.orderBy("createdAt", "desc").limit(10)
  },

  computed: {
    console: () => console
  },

  props: ["message"]
};
</script>
