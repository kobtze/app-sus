export default {
  props: ["note"],
  template: `
      <div class="k-note-txt-full" @click="hide">
          note-text-full
      <input type="textare" v-model="note" />
      </div>
      `,
  created() {
      console.log('note:', this.note);
  },
  methods: {
    hide() {
      console.log("hide");
    },
  },
};
