import Vue from 'vue'
import App from './App.vue'
import routerSetup from './router'

Vue.config.productionTip = false

let projects = [
  {
    name: 'You.Are.Transmission',
    url: 'you-are-trasmission',
    summary: 'Game made for Global Game Jam 2018',
  },
  {
    name: 'Pixel Brush',
    url: 'pixel-brush',
    summary: '"Pixel art" digital artwork creation app',
  },
  {
    name: 'Graphical',
    url: 'graphical',
    summary: 'Graphing calculator app',
  },
];

new Vue({
  el: "#app",
  render: h => h(App),
  router: routerSetup(projects),
});
