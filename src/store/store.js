import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const storage = {
  fetch() {
    const arr = [];
    if(localStorage.length > 0) {
      for(let i = 0; i < localStorage.length; i++) {
        // JSON.parse(localStorage.getItem(localStorage.key(i)));
        arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))))
      }
    }
    return arr;
  }
};

export const store = new Vuex.Store({
  state: {
    todoItems: storage.fetch(),
  },
  mutations: {
    addOneItem(state, todoItem) {
      const obj = {completed: false, items: todoItem,};
      localStorage.setItem(todoItem, JSON.stringify(obj));
      state.todoItems.push(obj);
    },
    removeOneItem(state, todoItem) {
      localStorage.removeItem(todoItem.todoItem.items);
      state.todoItems.splice(todoItem.index, 1);
    },
    toggleCompleted(state, todoItem) {
      state.todoItems[todoItem.index].completed = !state.todoItems[todoItem.index].completed;
      localStorage.removeItem(todoItem.todoItem.items);
      localStorage.setItem(todoItem.todoItem.items, JSON.stringify(todoItem.todoItem));
    },
    clearAllItems(state) {
      localStorage.clear();
      state.todoItems = {};
    },
    checkAllItems(state) {
      for (let i = 0; i < localStorage.length; i++) {
        state.todoItems[i].completed = true;
        localStorage.removeItem(state.todoItems[i].items);
        localStorage.setItem(state.todoItems[i].items, JSON.stringify(state.todoItems[i]));
      }
    }
  }
});

// 질문: https://beomy.tistory.com/86