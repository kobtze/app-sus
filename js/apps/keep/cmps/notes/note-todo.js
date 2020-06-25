export default {
  props: ["note"],
  template: `
      <div class="text-center note-txt">
          {{note.info.label}}
      <ul>
          <li class="clean-list" v-for="(todo, idx) in todosToShow">
              {{idx}}
            {{todo.doneAt}}
            {{todo.txt}}
          </li>
      </ul>
      <!-- <pre>{{todosToShow}}</pre> -->
      </div>
      `,
  data() {
    return {
    //   todosToShow: [],
    };
  },
  created() {
    // console.log("To-dos:", todosToShow);
  },
  computed: {
    todosToShow() {
    //   const notes = this.note.info.todos;
      var todoList = this.note.info.todos.map((todo) => todo)
      return todoList
    },
  },
};
