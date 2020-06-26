import {eventBus} from '../services/eventbus-service.js';
import {keepService} from "../services/keep.service.js";

export default {
    props: ["note"],
    template: `
        <div class="k-note-full" @click="hide">
        <textarea class="k-note-full-text-input" v-model="noteTxt" />
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
        }
    }
}
