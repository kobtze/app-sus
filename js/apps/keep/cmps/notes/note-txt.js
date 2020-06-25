export default {
  props: ["note"],
  template: `
    <div class="note-txt" @click="noteDetails">
    {{note.info.txt}}
    </div>
    `,
  created() {
    // console.log("note-txt");
  },
  methods: {
      noteDetails() {
          console.log('Note Details loading...');
      }
  }
}
