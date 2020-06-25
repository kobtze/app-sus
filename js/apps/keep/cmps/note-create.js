import { keepService } from "../services/keep.service.js";

export default {
  template: `
    <section class="k-new-note">
        <input class="k-new-note-input" type="text" v-model="txt" v-on:keyup.enter="submit" placeholder="Take a note..."/>
    </section>
    `,
  data() {
    return {
      txt: '',
    };
  },
  methods: {
    submit() {
      keepService.saveNote(this.txt);
      this.txt = ''
    },
  },
};
