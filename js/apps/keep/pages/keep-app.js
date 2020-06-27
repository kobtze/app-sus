import {keepService} from '../services/keep.service.js';
import noteCreate from '../cmps/note-create.js';
import noteList from '../cmps/note-list.js';

export default {
    template: `
        <section class="keep-app">
        <header class="main-header">
      <img class="logo" src="./email-img/logo.png" alt=""/>
    <img class="hedar-button" src="./email-img/header-btn.png" alt=""/>
    </header>
            <note-create :noteTypes="noteTypes" class="align-center"/>
            <note-list :noteTypes="noteTypes" :notes="notes"/>
        </section>
        `,
    data() {
        return {
            notes: [],
            isActivated: true,
            currNote: null,
            noteTypes: {
				noteTxt: { field: 'text', icon: 'fas fa-font', placeholder: 'Take a note...' },
				noteImg: { field: 'url', icon: 'far fa-image', placeholder: 'Enter image URL...' },
				noteVid: { field: 'url', icon: 'fab fa-youtube', placeholder: 'Enter video URL...' },
				noteAud: { field: 'url', icon: 'fas fa-volume-up', placeholder: 'Enter audio URL...' },
				noteTodo: { field: 'text', icon: 'fas fa-list', placeholder: 'Enter comma separated list...' },
			}
        }
    },
    created() {
        keepService.getNotes()
            .then(notes => {
                this.notes = notes;
                console.log('KeepApp loaded, Got initial notes:', notes)
            })
    },
    components: {
        noteList,
        noteCreate
    }
}