import {myRouter} from './routes.js';

new Vue({
    el: '#App',
    router: myRouter,
    template: `
    <div>
        <header class="flex app-header">
            <img class="main-apps-btn" @click="showAppsModal" src="../email-img/appsLogo.PNG" alt=""/>
            <!-- <button class="main-apps-btn" @click="showAppsModal">🔁 </button> -->
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
