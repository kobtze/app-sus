import {eventBus} from '../services/eventbus-service.js';

import noteTxt from './notes/note-txt.js';
import noteImg from './notes/note-img.js';
import noteTodo from './notes/note-todo.js';
// import noteVideo from './notes/note-video';

export default {
    props: ['note', 'idx', 'noteTypes'],
    template: `
        <li class="note-preview" @click="selectNote">
        <component :is="componentType" :note="note" />
        </li>
    `,
    data() {
        return {
            componentType: null
        }
    },
    components: {
        'noteTxt': noteTxt,
        'noteImg': noteImg,
        'noteTodo': noteTodo,
        // 'noteVideo': noteVideo
    },
    computed: {
        
    },
    created() {
        this.componentType = this.note.type
        console.log('componentType:', this.componentType);
    },
    methods: {
        selectNote() {
            // console.log('Note selected:', this.idx, this.note);
            eventBus.$emit('noteSelected', this.idx);
        }
    }
}