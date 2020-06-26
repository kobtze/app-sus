import { emailService } from "../services/service.js";
export default {
  props: ["email"],
  template: `
            <section class="email-massage" @mouseover="showIconsOnMessage">
            <button class="no-btn-decoration" v-show="showIcons" @click.stop="deleteEmail" >🗑️</button>
            <span class="massage-left-span span-font">{{email.subject}}</span>
            <span class="span-font">{{email.body}}</span>
            <span class="massage-right-span span-font">{{email.sentAt}}</span>
            </section>
        `,
        data(){
          return{
            showIcons:true
          }
        },

methods: {
  deleteEmail() {
    emailService.deleteEmail(this.email.id)
        },
        showIconsOnMessage(){
          // this.showIcons=!this.showIcons
        }
      },
}