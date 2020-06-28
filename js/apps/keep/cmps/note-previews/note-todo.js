export default {
  props: ["note"],
  template: `
    <div class="note-todos">
      <ul>
          <li v-for="(todo, idx) in note.info.list"
              class="clean-list">
              {{todo.txt}}
          </li>
      </ul>
    </div>
  `
};
