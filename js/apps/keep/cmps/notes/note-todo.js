export default {
  props: ["note"],
  template: `
    <div class="note-todos">
      <ul>
          <li v-for="(todo, idx) in note.info.list"
              class="clean-list"
              :class="statusClass(todo.completed)"
              @click.stop="updateStatus(idx)">
              {{todo.txt}}
          </li>
      </ul>
    </div>
  `,
  methods: {
    statusClass(status) {
      return status ? "completed" : "";
    },
    updateStatus(listIdx) {
      console.log("change status");
      // eventBus.$emit(EVENT_LIST_NOTE_STATUS_CHANGED, this.note.id, listIdx);
    },
  },
};
