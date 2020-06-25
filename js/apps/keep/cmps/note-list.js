import notePreview from './note-preview.js';
import noteTextFull from './notes/note-txt-full.js';

export default {
    props: ['notes'],
    template: `
    <section>
    <ul class="clean-list flex wrap flex-start note-list">
        <note-text-full :note="currNote" v-show="isActivated" />
        <note-preview v-for="note in notes" @click="showModal" :note="note"/>      
    </ul>
    </section>
    `,
    data() {
        return {
            isActivated: false
        }
    },
    components: {
        notePreview,
        noteTextFull
    },
    methods: {
        showModal() {
            isActivated = true;
        },
        hideModal() {
            isActivated = false;
        }
    }
}