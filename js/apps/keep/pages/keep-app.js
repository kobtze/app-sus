import {keepService} from '../services/keep.service.js';

import noteList from '../cmps/note-list.js'

export default {
    template: `
        <section class="keep-app">
            <h2>Keep App</h2>
            <note-list :notes="notes"/>
        </section>
        `,
    data() {
        return {
            notes: []
        }
    },
    created() {
        keepService.getNotes()
            .then(notes => {
                this.notes = notes;
                console.log(notes)
            })
        console.log('keep-app loaded')        
    },
    components: {
        noteList,
    }
}