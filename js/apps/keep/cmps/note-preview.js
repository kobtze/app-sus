import {eventBus} from '../services/eventbus-service.js';

import noteTxt from './note-previews/note-txt.js';
import noteImg from './note-previews/note-img.js';
import noteVid from './note-previews/note-video.js';
import noteAud from './note-previews/note-audio.js';
import noteTodo from './note-previews/note-todo.js';

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