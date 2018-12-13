import Vue from 'vue'
import App from './App.vue'
import router from './router'

import'mint-ui/lib/style.css'
Vue.config.productionTip = false

import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'


import {Button,Header,Swipe,SwipeItem} from "mint-ui"; 
Vue.component(Button.name,Button);
Vue.component(Header.name,Header);
Vue.component(Swipe.name,Swipe); 
Vue.component(SwipeItem.name,SwipeItem);

import VueResource from "vue-resource";
Vue.use(VueResource);

Vue.http.options.root = "http://127.0.0.1:3000/"
//Vue.http.options.emulateJSON=true

import Vuex from "vuex"
Vue.use(Vuex)
var store = new Vuex.Store({
  state:{count:0},
  mutations:{
    increment(state,c){
      state.count+=c
    },
    substract(state){
      state.count--
    }
  },
  getters:{
    optCount:function(state){
      return state.count;
    }
  }
});

new Vue({
  router,
  render: h => h(App),
  store
}).$mount('#app')
