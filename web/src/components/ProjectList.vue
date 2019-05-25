<template>
  <div>
    <div v-for="project in projects" v-bind:key="project.baseUrl">
      <router-link :to="{ path: project.route, params: project }">
        <div class="thumbnail">
          <img :src="project.thumbnail" alt=""/>
          <div class="thumbnail-overlay">
            <span class="thumbnail-text">{{project.name}}</span>
          </div>
        </div>
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
.thumbnail {
  position: relative;
  display: inline-block;
	margin: 40px;
	width: 424px;
	height: 265px;
	box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.3);
  border-radius: 4px;
	overflow: hidden;
	margin-bottom: 20px;
}

.thumbnail img {
  display: block;
	width: 100%;
	height: 100%;
	object-fit: cover;
}

.thumbnail-overlay {
	position: absolute;
  bottom: 0;
	width: 100%;
	height: 75px;
	background-color: grey;
	background-position: bottom;
	background-repeat: repeat-x;
}

.thumbnail-text {
  position: absolute;
  bottom: 0;
	width: 100%;
	padding-bottom: 10px;
  font-size: x-large;
  color: white;
	text-align: center;
}
</style>

