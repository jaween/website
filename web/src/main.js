import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import routerSetup from './router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


Vue.use(BootstrapVue);

Vue.config.productionTip = false

let projects = [
  {
    name: 'Catapult Airways',
    baseUrl: 'catapult_airways',
    summary: 'Game for Global Game Jam 2019',
  },
  {
    name: 'You.Are.Transmission',
    baseUrl: 'you_are_transmission',
    summary: 'Game for Global Game Jam 2018',
  },
  {
    name: 'Pixel Brush',
    baseUrl: 'pixel_brush',
    summary: 'Pixel art digital artwork creation app',
  },
  {
    name: 'Submarine Game',
    baseUrl: 'submarine_game',
    summary: 'Game for Global Game Jam 2017',
  },
  {
    name: 'YouTube internship',
    baseUrl: 'google_internship_2',
    summary: 'Fan engagement in Community',
  },
  {
    name: 'Rhythm Heaven VR',
    baseUrl: 'rhythm_heaven_vr',
    summary: 'Virtual reality music game',
  },
  {
    name: 'Raise The Sun',
    baseUrl: 'raise_the_sun',
    summary: 'Game for Global Game Jam 2016',
  },
  {
    name: 'Google internship',
    baseUrl: 'google_internship_1',
    summary: 'Port of SDL for Mojo/Fuchsia',
  },
  {
    name: 'Scene reconstruction',
    baseUrl: 'scene_reconstruction',
    summary: 'Stereo video SLAM (KinectFusion)',
  },
  {
    name: 'Graphical',
    baseUrl: 'graphical',
    summary: 'Graphing calculator app',
  },
  {
    name: 'Math \'n Splat',
    baseUrl: 'math_n_splat',
    summary: 'Educational game for kids',
  },
  {
    name: 'Quack \'n Splat',
    baseUrl: 'quack_n_splat',
    summary: 'Game made in primary school',
  },
];

new Vue({
  el: "#app",
  render: h => h(App),
  router: routerSetup(projects),
});
