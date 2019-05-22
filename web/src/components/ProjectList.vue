<template>
  <div>
    <ul>
      <li v-for="project in projects" v-bind:key="project">
        <router-link :to="{ path: '/projects/' + project.url, params: project }">
          {{project.name}}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['projects'],
}
</script>

