import {myRouter} from './routes.js';

new Vue({
    el: '#App',
    router: myRouter,
    template: `
    <div>
        <header class="flex app-header">
        <i class="fas fa-th cursor-pointer main-apps-btn" @click="showAppsModal" ></i>
            <!-- <img class="main-apps-btn" @click="showAppsModal" src="../email-img/header-btn.PNG" alt=""/> -->
            <nav class="transfer-Apps flex space-between" v-show="showModal" @click="showAppsModal" >
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
          showModal:false
          }
      },
      methods: {
       
        showAppsModal(){
         this.showModal=!this.showModal
        },
    },
})
