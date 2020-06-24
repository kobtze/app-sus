import {myRouter} from './routes.js';

new Vue({
    el: '#App',
    router: myRouter,
    template: `
    <div>
        <header class="flex align center space-between app-header">
            <h1>Miss Book</h1>
            <nav>
                <router-link to="/">Home</router-link> | 
                <router-link to="/email">Email</router-link> | 
                <router-link to="/keep">Keep</router-link> | 
            </nav>
        </header>

        <main>
            
            <router-view/>
        </main>

        <footer class="text-right">
            coffeerights 2020    
        </footer>  

    </div>
    `
})
