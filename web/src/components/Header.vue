var Header = {
<template>
<div class="header">
  <div class="container-fluid">
    <router-link :to="{ path: '/' }">
      <h4>Jaween Ediriweera</h4>
    </router-link>
    <div>
      <p>
        Software Developer from Australia.
        <br/>
        This is an exhibit of some of my projects.
      </p>
    </div>
  </div>
</div>
</template>

<style scoped>
.header{
  background-color: #FAFAFA;
  border-bottom: 1px solid #E0E0E0;
  padding-top: 2rem;
  padding-bottom: 1rem;
  text-align: center;
}
</style>
}