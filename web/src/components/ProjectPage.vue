<template>
  <div>
    <h1>{{project.name}}</h1>
    <vue-simple-markdown :highlight="true" v-if="article != null" :source="article"></vue-simple-markdown>
    <p v-if="metadataError != null">{{metadataError}}</p>
    <p v-if="error != null">{{error}}</p>
    <div v-if="article == null && error == null" class="loader"/>
  </div>
</template>

<script>
import Vue from 'vue'
import VueSimpleMarkdown from 'vue-simple-markdown'
import 'vue-simple-markdown/dist/vue-simple-markdown.css'
import yaml from 'js-yaml'

Vue.use(VueSimpleMarkdown)

export default {
  props: ['project'],
  data: function() {
    return {
      date: null,
      downloads: null,
      videos: null,
      screenshots: null,
      article: null,
      error: null,
    }
  },
  created() {
    this.fetchArticle();
  },
  methods: {
    fetchArticle: async function() {
      var response = null;
      try {
        response = await fetch(this.project.articleUrl);
      } catch (e) {
        this.error = "Failed to get content."
        return;
      }

      try {
        let data = await response.text();
        this.article = yaml.safeLoad(data).article;
      } catch (e) {
        this.error = "Failed to display content."
      }
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

. {
  color: #00CC00;
}

</style>
