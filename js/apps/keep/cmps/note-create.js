import { keepService } from "../services/keep.service.js";

export default {
  props: ['noteTypes'],
  template: `
    <section class="flex space-between k-new-note">
      <input class="k-new-note-input" :type="fieldType" v-model="txt" v-on:keyup.enter="submit"
				:placeholder="placeholder" ref="newNoteEl"/>
        
      <div class="flex">
				<template v-for="(noteType, idx) in noteTypes">
					<i :class="setSelectedType(idx, noteType.icon)" @click="updateSelectedType(idx)"></i> 
				</template>
			</div>

    </section>
    `,
  data() {
    return {
      newNote: keepService.getNoteTemplate(),
      txt: '',
    };
  },
  computed: {
    fieldType() {
			return this.noteTypes[this.newNote.type].field;
		},
		placeholder() {
			return this.noteTypes[this.newNote.type].placeholder;
		}
	},
  methods: {
    submit() {
      keepService.saveNote(this.newNote.type, this.txt);
      this.txt = ''
    },
    setSelectedType(noteType, noteIcon) {
			return (this.newNote.type === noteType)
				? noteIcon + ' fa-lg selected'
				: noteIcon + ' fa-lg';
    },
    updateSelectedType(noteType) {
      this.newNote.type = noteType;
			this.$refs.newNoteEl.focus();
      console.log('Type updated:', noteType);
    },
  },
};
