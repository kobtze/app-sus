import noteTxt from './notes/note-txt.js';
import noteImg from './notes/note-img.js';
import noteTodo from './notes/note-todo.js';
// import noteVideo from './notes/note-video';

export default {
    props: ['note'],
    template: `
        <li class="note-preview">
        <component :is="componentType" :note="note" @click="noteDetails"></component>
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
        noteType() {
            return this.note.type
        }
    },
    created() {
        this.componentType = this.note.type
        // console.log(this.componentType);
        
    },
    methods: {
        noteDetails() {
            console.log('Note Details loading...');
        }
    }
}