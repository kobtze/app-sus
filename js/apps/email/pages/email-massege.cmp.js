import { emailService } from "../services/service.js";

export default {
    template: `
    <form class="comp-container"  v-show="showModal">
      <header class="comp-header">
        <div class="comp-header-text">New Message</div>
      </header>
      <input class="to" type="text" placeholder="  to:"  v-model="body"/>
      <input class="subject" type="text" placeholder="  subject" v-model="subject" />
      <textarea class="main-text" v-model="emailContent"></textarea>
      <footer class="comp-footer">
        <button  @click="addNewEmail();showMassegeModal()" class="send">Send</button>
        <img @click="showMassegeModal" class="delete" src="../email-img/trash.PNG" alt="">
      </footer>
</form>
    `,
     data(){
      return {
        showModal:false,
        emailContent:"",
        body:"",
        subject:"",
      }
        },
     methods: {
      showMassegeModal(){
       this.showModal=!this.showModal
      },
        addNewEmail(){
          emailService.addEmail(this.subject,this.body,this.emailContent)
        }
    }
}