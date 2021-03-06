
// SERVICES:
import {keepService} from '../services/keep.service.js';

// CMPS:
import noteCreate from '../cmps/note-create.js';
import notesList from '../cmps/notes-list.js';

export default {
    components: {
        notesList,
        noteCreate
    },
    template: `
        <section class="keep-app">
            <header class="main-header">
                <div class="flex align-center"> <img class="logo" src="./email-img/horse.svg" alt=""/> <div class="logo-title">𝖆𝖕𝖕𝕾𝖚𝖘</div></div>
                <span class="hedar-button"></span>
            </header>

            <note-create :noteTypes="noteTypes" class="align-center"/>
            <notes-list :notesToShow="notesToShow" :noteTypes="noteTypes"/>
        </section>
        `,
    data() {
        return {
            notesToShow: [],
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
                this.notesToShow = notes;
                console.log('Notes to show:', notes)
            })
    }
}