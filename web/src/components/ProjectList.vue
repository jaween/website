<template>
  <div class="project-list">
    <div
      v-for="project in projects"
      v-bind:key="project.baseUrl"
    >
      <router-link :to="{ path: project.route, params: project }">
        <b-card
          :title="project.name"
          :sub-title="project.summary"
          :img-src="project.thumbnail"
          tag="article"
        />
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ['projects'],
}
</script>

<style>
.project-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

.card {
  float: left;
  text-align: center;
  width: 20rem;
  margin-left: 0.6rem;
  margin-right: 0.6rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
}

.card-img {
}
</style>
