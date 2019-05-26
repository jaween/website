<template>
  <div class="project">
    <b-row>
      <div class="col-lg-2"/>
      <b-col >
        <h3 class="title">{{project.name}}</h3>
        <b>{{data.date}}</b>
        <vue-simple-markdown
          v-if="data.article != null"
          :highlight="true"
          :source="data.article"
          class="text-left" 
        />
        <p v-if="error != null">{{error}}</p>
        <div v-if="data.article == null && error == null" class="loader"/>
        <div
          v-if="data.links != null"
          class="text-justify"
        >
          <b>Links</b>
          <div
            v-for="item in data.links"
            v-bind:key="item.text"
          >
            <a :href="item.url">{{item.text}}</a>
            </div>
        </div>
      </b-col>
      <div class="col-lg-2"/>
    </b-row>
  </div>
</template>

<script>
import Vue from 'vue'
import VueSimpleMarkdown from 'vue-simple-markdown'
import 'vue-simple-markdown/dist/vue-simple-markdown.css'
import jsYaml from 'js-yaml'

Vue.use(VueSimpleMarkdown)

export default {
  props: ['project'],
  data: function() {
    return {
      data: null,
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
        let yaml = await response.text();
        this.data = jsYaml.safeLoad(yaml);
      } catch (e) {
        this.error = "Failed to display content."
      }
    }
  }
}
</script>

<style scoped>
.project {
  margin-top: 1.2rem;
}

.title {
  margin-bottom: 1rem;
}

.vue-simple-markdown {
  
}

.markdown-body {
  margin-top: 0; 
}

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
