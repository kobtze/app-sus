import {eventBus} from '../services/eventbus-service.js';

import notePreview from './note-preview.js';
import noteEdit from './note-edit.js';

export default {
    props: ['notesToShow', 'noteTypes'],
    template: `
    <section>
        <note-edit v-if="isEditMode" :note="noteToEdit"/>

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
            isEditMode: false,
            noteToEdit: null,
        }
    },
    components: {
        notePreview,
        noteEdit
    },
    created() {
        eventBus.$on('noteSelected', idx => {
            this.isEditMode = true;
            this.noteToEdit = idx;
        });
        eventBus.$on('closeModal', () => {
            this.isEditMode = false;
            this.noteToEdit = null;
            eventBus.$emit('restoreScreen');
        })
    }
}