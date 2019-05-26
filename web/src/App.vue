<template>
  <div id="app">
    <div class="header">
      <Header/>
    </div>
    <div class="content">
      <div class="container">
        <router-view/>
      </div>
    </div>
    <div class="footer">
      <Footer/>
    </div>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
export default {
  name: 'app',
  components: {
    Header,
    Footer,
  }
}
</script>

<style>
html,
body {
  height: 100%;
  margin: 0;
}

#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-flow: column;
  height: 100%;
}

.header {
  flex: 0 1 auto;
}

.content {
  flex: 1 1 auto;
}

.footer {
  flex: 0 1 40px;
}
</style>
