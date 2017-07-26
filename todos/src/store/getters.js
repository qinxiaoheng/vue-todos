//通过每个todo的状态判定这个inputchecked的状态
export default {
  allChecked(state){
    return state.todos.every(todo => todo.done)
  },
  //统计未完成的todos
  remaining(state){
    return state.todos.filter(todo => !todo.done).length;
  },
  filteredTodo(state){
    switch (state.visibility) {
      case "all":
        return state.todos;
      case "active":
        return state.todos.filter(todo => !todo.done);
      case "completed":
        return state.todos.filter(todo => todo.done);
      default:
        break;
    }
  }
}
