<template>
  <div>
    <h1>{{project.name}}</h1>
    <h2>{{project.summary}}</h2>
  </div>
</template>

<script>
export default {
  props: ['project']
}
</script>
