import {myRouter} from './routes.js';

new Vue({
    el: '#App',
    router: myRouter,
    template: `
    <div>
        <header class="flex app-header">
        <i class="fas fa-th cursor-pointer main-apps-btn" @click="showAppsModal" ></i>
            <!-- <img class="main-apps-btn" @click="showAppsModal" src="../email-img/header-btn.PNG" alt=""/> -->
            <nav class="transfer-Apps flex space-between" v-show="showModal">
                <router-link class="apps-btn" to="/">🏠</router-link>  
                <router-link class="apps-btn" to="/email">📧</router-link>  
                <router-link class="apps-btn" to="/keep">📝</router-link> 
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
