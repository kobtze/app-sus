import {eventBus} from '../services/eventbus-service.js';
import {keepService} from "../services/keep.service.js";

export default {
    props: ["note"],
    template: `
        <div class="k-note-full">
            <textarea class="k-note-full-text-input" @keyup.enter="save" v-model="noteTxt" />
            <i class="far fa-save" @click="save"></i>
            <i class="far fa-trash-alt" @click="deleteNote"></i>
            <i class="fas fa-thumbtack" @click="pin"></i>
            <i class="fas fa-palette" @click="changeBgcolor"></i>
            <i class="far fa-window-close" @click="hide"></i>
        </div>
        `,
    data() {
        return {
            noteTxt: ''
        }
    },
    created() {
        // console.log('Full note, idx:', this.note);
        keepService.getNoteByIdx(this.note)
            .then(note => {
                switch (note.type) {
                    case 'noteTxt':
                        this.noteTxt = note.info.txt;
                        break;
                    case 'noteImg':
                    case 'noteVid':
                    case 'noteAud':
                        this.noteTxt = note.info.url;
                        break;
                    case 'noteTodo':
                        this.noteTxt = note.info.list.map(list => list.txt).join(',');
                        break;
                    }
                console.log('noteRendered:', this.noteTxt);
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
        },
        pin() {
            console.log('clicked pin');
            this.hide()
        },
        changeBgcolor() {
            console.log('clicked bgcolor');
        }
    }
}
