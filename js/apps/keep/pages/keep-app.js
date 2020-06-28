import {keepService} from '../services/keep.service.js';
import {eventBus} from '../services/eventbus-service.js';

import noteCreate from '../cmps/note-create.js';
import noteList from '../cmps/note-list.js';

export default {
    template: `
        <section class="keep-app">
        <header class="main-header">
        <img class="logo" src="./email-img/horse.svg" alt=""/><div class="logo-title">𝖆𝖕𝖕𝕾𝖚𝖘</div>
      <span class="hedar-button"></span>
    </header>
            <div v-if="editMode" class="k-screen"></div>
            <note-create :noteTypes="noteTypes" class="align-center"/>
            <note-list :notesToShow="notesToShow" :noteTypes="noteTypes"/>
        </section>
        `,
    data() {
        return {
            editMode: false,
            notesToShow: [],
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
                this.notesToShow = notes;
                console.log('Notes to show:', notes)
            })
        eventBus.$on('dimScreen', () => {
            console.log('screenDimmed');
            this.editMode = true
        })
        eventBus.$on('restoreScreen', () =>{
            console.log('screenRestored');
            this.editMode = false
        })
    },
    components: {
        noteList,
        noteCreate
    }
}