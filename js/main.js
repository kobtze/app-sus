import {eventBus} from './apps/keep/services/eventbus-service.js';
import {myRouter} from './routes.js';

new Vue({
    el: '#App',
    router: myRouter,
    template: `
        <div>
            <div v-if="isEditMode" class="k-screen-dimmed" @click="hide"></div>
            <header class="flex app-header">
                <i class="fas fa-th cursor-pointer apps-btn-main" @click="showAppsModal" ></i>
                <nav class="flex space-between nav-modal" v-show="showModal" @click="showAppsModal" >
                    <router-link class="apps-btn" to="/"><i class="fas fa-home"></i></router-link>  
                    <router-link class="apps-btn" to="/email"><i class="far fa-envelope"></i></router-link>  
                    <router-link class="apps-btn" to="/keep"><i class="far fa-sticky-note"></i></router-link> 
                </nav>
            </header>
            <main>
                <router-view/>
            </main>
        </div>
    `,
    data(){
        return {
          showModal: false,
          isEditMode: false,
          }
      },
      created() {
        eventBus.$on('dimScreen', () => {
            // console.log('screenDimmed');
            this.isEditMode = true
        })
        eventBus.$on('restoreScreen', () => {
            // console.log('screenRestored');
            this.isEditMode = false
        })
      },
      methods: {
        showAppsModal(){
         this.showModal = !this.showModal
        },
        hide() {
            eventBus.$emit('closeModal')
        },
    },
})
