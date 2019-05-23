<template>
  <div>
    <h1>{{project.name}}</h1>
    <h2>{{project.summary}}</h2>
    <p v-if="article != null">{{article.content}}</p>
    <div v-if="article == null" class="loader"/>
  </div>
</template>

<script>
export default {
  props: ['project'],
  data: function() {
    return {
      article: null,
    }
  },
  created() {
    this.fetchArticle();
  },
  methods: {
    fetchArticle: async function() {
      let response = await fetch(this.project.articleUrl);
      let data = await response.json();
      this.article = data;
    }
  }
}
</script>

<style scoped>
.loader {
  border: 16px solid #f3f3f3; /* Light grey */
  border-top: 16px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
