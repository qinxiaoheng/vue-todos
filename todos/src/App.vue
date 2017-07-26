<template>
  <div id="app">
    <section class="todoapp">
      <header class="header">
        <h1>todos</h1>
          <input type="text" @keyup.enter="addTodo($event)" placeholder="what need to be done?" class="new-todo">
      </header>
      <section class="main" style="">
        <input type="checkbox" class="toggle-all" :checked="allChecked" @click="toggleAll(!allChecked)">
          <ul class="todo-list">
            <todo v-for="todo in filteredTodo" :todo="todo"></todo>
          </ul>
        </section>
        <footer class="footer" style="">
          <span class="todo-count"><strong>{{remaining}}</strong> items left</span>
          <ul class="filters">
            <li><a href="" :class="{selected:visibility=='all'}" @click.prevent="setVisibility('all')">all</a></li>
            <li><a href="" :class="{selected:visibility=='active'}" @click.prevent="setVisibility('active')">active</a></li>
            <li><a href="" :class="{selected:visibility=='completed'}" @click.prevent="setVisibility('completed')">completed</a></li>
          </ul>
          <button class="clear-completed" v-show="todos.length > remaining" @click="clear">clear completed</button>
        </footer>
    </section>
  </div>
</template>

<script>
import './assets/todo-mvc.css'
import store from './store/index'
import {mapState,mapMutations,mapGetters} from 'vuex'
import Todo from './components/todo'

export default {
  name: 'app',
  store,
  computed : {
    ...mapState(['todos','visibility']),
    ...mapGetters(['allChecked','remaining','filteredTodo'])
  },
  components: {
    Todo,
  },
  methods : {
    addTodo(e){
      let text = e.target.value.trim();//获取在文本框中的内容
      if(text){
        this.$store.commit('addTodo',{text})
      }
      e.target.value="";
    },
    ...mapMutations([
      'toggleAll',
      'clear',
      'setVisibility'
    ])
  }
}
</script>

<style>

</style>
