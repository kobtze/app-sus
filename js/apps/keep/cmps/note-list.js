import {eventBus} from '../services/eventbus-service.js';

import notePreview from './note-preview.js';
import noteFull from './note-full.js';

export default {
    props: ['notesToShow', 'noteTypes'],
    template: `
    <section>
    <ul class="clean-list flex wrap flex-start note-list">
        <note-full v-if="isModalActive" :note="currNote"/>
        <note-preview   v-for="(note, idx) in notesToShow"
                        :note="note"
                        :idx="idx"
                        :noteTypes="noteTypes"/>
    </ul>
    </section>
    `,
    data() {
        return {
            isModalActive: false,
            currNote: null
        }
    },
    components: {
        notePreview,
        noteFull
    },
    created() {
        eventBus.$on('noteSelected', idx => {
            this.isModalActive = true;
            this.currNote = idx;
            console.log('Note selected:',this.currNote, this.notes[this.currNote]);
        });
        eventBus.$on('closeModal', () => {
            this.isModalActive = false;
            this.currNote = null;
            console.log('Modal closed', this.isModalActive, this.currNote);
        })
    }
}