import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations';
import getters from './getters';

Vue.use(Vuex);


//定义store
const state = {
  todos : [
    {text : 'vue.js' , done : false},
    {text : 'node' , done : false},
    {text : 'es6' , done : true}
  ],
  visibility : 'all',
}


//导出store
export default new Vuex.Store({
  state,
  mutations,
  getters,
})
