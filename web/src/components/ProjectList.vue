<template>
  <div>
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
          class="mb-4 h-100"
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
.card {
  float: left;
  min-width: 15rem;
  max-width: 22rem;
  min-height: 20rem;
  max-height: 20rem;
  width: 25rem;
}

.card-img {
  width: 300px;
  height: 200px;
  object-fit: cover;
}
</style>
