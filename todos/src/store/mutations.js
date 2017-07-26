//导出mutations
export default {
  //添加todo任务
  addTodo(state,{text}){
    state.todos.push({
      text,
      done :false
    });
  },
  //添加删除todo任务
  deleteTodo(state,todo){
    let idx = state.todos.findIndex( item => item == todo);
    if(idx!=-1){
      //表示找到对应的todo
      state.todos.splice(idx,1);
    }
  },
  //切换todo的状态
  toggleTodo(state,todo){
    let idx = state.todos.findIndex( item => item == todo);
    if(idx!=-1){
      //表示找到对应的todo
        state.todos[idx].done = !state.todos[idx].done;
    }
  },
  //切换全部的todo的状态
  toggleAll(state,done){
    state.todos.forEach(todo => todo.done = done);
  },
  //清除已完成的todos
  clear(state){
    let filtertodos = state.todos.filter(todo => !todo.done);
    return state.todos = filtertodos;
  },
  //修改visibility的状态
  setVisibility(state,visibility){
    state.visibility = visibility
  },
  //编辑todo
  updateTodo(state,{todo,text}){
    let idx = state.todos.findIndex( item => item == todo );//定义参数写成todo就坏掉了??
    if(idx != -1){
      state.todos[idx].text = text;
    }

  }
}
