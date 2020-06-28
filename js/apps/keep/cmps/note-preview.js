import {eventBus} from '../services/eventbus-service.js';

import noteTxt from './notes/note-txt.js';
import noteImg from './notes/note-img.js';
import noteVid from './notes/note-video.js';
import noteAud from './notes/note-audio.js';
import noteTodo from './notes/note-todo.js';

export default {
    props: ['note', 'idx', 'noteTypes'],
    template: `
        <li class="masonry-note-item note-preview" @click="selectNote">
        <component  :is="note.type"
                    :note="note" />
        </li>
    `,
    components: {
        'noteTxt': noteTxt,
        'noteImg': noteImg,
        'noteVid': noteVid,
        'noteAud': noteAud,
        'noteTodo': noteTodo,
    },
    methods: {
        selectNote() {
            // console.log('Note selected:', this.idx, this.note);
            eventBus.$emit('noteSelected', this.idx);
            eventBus.$emit('dimScreen', this.idx);
        }
    }
}