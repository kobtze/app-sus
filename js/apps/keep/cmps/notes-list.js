import {eventBus} from '../services/eventbus-service.js';

import notePreview from './note-preview.js';
import noteEdit from './note-edit.js';

export default {
    props: ['notesToShow', 'noteTypes'],
    template: `
    <section>
        <note-edit v-if="!!noteToEdit" :note="noteToEdit"/>

        <ul class="note-list masonry">
            <note-preview   v-for="(note, idx) in notesToShow"
                            :note="note"
                            :idx="idx"
                            :noteTypes="noteTypes"/>
        </ul>
    </section>
    `,
    data() {
        return {
            noteToEdit: null
        }
    },
    components: {
        notePreview,
        noteEdit
    },
    created() {
        eventBus.$on('noteSelected', idx => {
            this.noteToEdit = ''+idx;
        });
        eventBus.$on('closeModal', () => {
            this.noteToEdit= null;
            eventBus.$emit('restoreScreen');
        })
    }
}