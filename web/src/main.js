import Vue from 'vue'
import App from './App.vue'
import routerSetup from './router'

Vue.config.productionTip = false

let projects = [
  {
    name: 'You.Are.Transmission',
    baseUrl: 'you_are_transmission',
    summary: 'Game made for Global Game Jam 2018',
  },
  {
    name: 'Pixel Brush',
    baseUrl: 'pixel_brush',
    summary: '"Pixel art" digital artwork creation app',
  },
  {
    name: 'Graphical',
    baseUrl: 'graphical',
    summary: 'Graphing calculator app',
  },
];

new Vue({
  el: "#app",
  render: h => h(App),
  router: routerSetup(projects),
});
