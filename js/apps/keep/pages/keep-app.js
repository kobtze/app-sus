import {keepService} from '../services/keep.service.js';
import noteCreate from '../cmps/note-create.js';
import noteList from '../cmps/note-list.js';

export default {
    template: `
        <section class="keep-app">
            <h2>Keep App</h2>
            <note-create class="align-center"/>
            <note-list :notes="notes"/>
            <!-- <note-text-full :note="currNote" v-show="isActivated" /> -->
        </section>
        `,
    data() {
        return {
            notes: [],
            isActivated: true,
            currNote: null
        }
    },
    created() {
        keepService.getNotes()
            .then(notes => {
                this.notes = notes;
                console.log('Notes:', notes)
            })
        console.log('KeepApp loaded')        
    },
    components: {
        noteList,
        noteCreate
    }
}