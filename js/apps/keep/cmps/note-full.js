import {eventBus} from '../services/eventbus-service.js';
import {keepService} from "../services/keep.service.js";

export default {
    props: ["note"],
    template: `
        <div class="k-note-full">
            <textarea class="k-note-full-text-input" @keyup.enter="save" v-model="noteTxt" />
            <button class="k-note-full-save" @click="save">Save</button>
            <button class="k-note-full-close" @click="hide">Close</button>
            <button class="k-note-full-delete" @click="deleteNote">Delete</button>
        </div>
        `,
    data() {
        return {
            noteTxt: ''
        }
    },
    created() {
        console.log('Full note, idx:', this.note);
        keepService.getNoteByIdx(this.note)
            .then(note => {
                this.noteTxt = note.info.txt;
                console.log('note:', note);
            })
    },
    methods: {
        hide() {
            eventBus.$emit('closeModal')
        },
        save() {
            keepService.updateNote(this.note, this.noteTxt);
            this.hide()
        },
        deleteNote() {
            keepService.deleteNote(this.note)
            this.hide()
        }
    }
}
