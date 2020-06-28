export default {
  props: ["note"],
  template: `
    <div class="note-txt"">
    {{note.info.txt}}
    </div>
    `,
  created() {
    // console.log("note-txt");
  }
}
