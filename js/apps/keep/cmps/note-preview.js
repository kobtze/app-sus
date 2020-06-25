import noteTxt from './notes/note-txt.js';
import noteImg from './notes/note-img.js';
// import noteTodo from './notes/note-todo.js';
// import noteVideo from './notes/note-video';

export default {
    props: ['note'],
    template: `
        <li class="note-preview">
        <component  is="noteTxt" :note="note"></component>
        </li>
    `,
    components: {
        'noteTxt': noteTxt,
        'noteImg': noteImg,
        // 'noteTodo': noteTodo,
        // 'noteVideo': noteVideo
    }
}