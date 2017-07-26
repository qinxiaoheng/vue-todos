<!-- 将app组件的li提取出来 -->
<template lang="html">
  <li class="todo" :class="{completed:todo.done,editing:editing}">
    <div class="view">
      <input type="checkbox" class="toggle" :checked="todo.done" @change="toggleTodo(todo)">
      <label @dblclick="editing=true">{{todo.text}}</label>
      <button class="destroy" @click="deleteTodo(todo)"></button>
    </div>
    <input type="text" class="edit"
      @keyup.enter="doneEdit"
      @blur="doneEdit"
      @keyup.esc="cancleEdit"
     :value="todo.text" v-focus="editing">
  </li>
</template>

<script>
import {mapMutations} from 'vuex';
export default {
  data(){
    return{
      editing : false,
    }
  },
  props : {
    todo : {
      type : Object,
      required : true
    }
  },
  methods : {
    ...mapMutations([
      'deleteTodo',
      'toggleTodo',
      'updateTodo'
    ]),
    //退出编辑
    cancleEdit(state){
        this.editing = false;
    },
    //编辑完成
    doneEdit(e){
        let text = e.target.value.trim();
        if(text){
          this.updateTodo({todo:this.todo,text});
        }else{
          this.deleteTodo(this.todo);
        }
        this.editing = false;
    },
  },
  directives : {
    focus(el,binding){
      //如果binding的值为true就获得焦点
      if(binding.value){
        el.focus();
      }
    }
  }

}
</script>

<style lang="css">
</style>
