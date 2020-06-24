import notePreview from './note-preview.js';

export default {
    props: ['notes'],
    template: `
    <ul class="clean-list flex wrap flex-start note-list">
        <note-preview v-for="note in notes" :note="note"/>
    </ul>
    `,
    components: {
        notePreview
    }
}