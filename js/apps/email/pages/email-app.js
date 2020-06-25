import appHeader from '../cmps/header.cmp.js'
import footerApp from '../cmps/footer.cmp.js'
import { emailService } from "../services/service.js";
export default {
  template: `
       <main class="all">
       <app-header/>
    <main class="main-container">
    <div class="side-container">
        <button class="compose">+ compose</button>
        <button class="inbox-btn">📥 inbox</button>
        <button class="side-bar-btn">⭐ starred</button>
        <button class="side-bar-btn">📩 sent mail</button>
        <button class="side-bar-btn">➿ Draft</button>
    </div>
    <section class="mail-flow ">
    <div v-for="email in emails" class="email-massage" @click="">
    <span class="massage-left-span span-font">{{email.subject}}</span>
    <span class="span-font">{{email.body}}</span>
    <span class="massage-right-span span-font">{{email.sentAt}}</span>
  </div>
    </section>
</main>
<footer-app/>
</main>
        `,
        data(){
          return {
            emails:null
            }
        },
  created() {
    console.log("email-app loaded");
    this.emails= emailService.getEmails()
  },
  components: {
    appHeader,
    footerApp,
}
};


