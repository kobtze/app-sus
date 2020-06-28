import { emailService } from "../services/service.js";
export default {
  props: ["email"],
  template: `
            <div class="email-massage" @mouseover="showIconsOnMessage" >
            <i class="fas fa-trash" @click.stop="deleteEmail"></i>
             <img v-if="email.isStarred" class="star-icon" @click.stop="addStar" src="./email-img/star.svg" alt=""/>
             <img v-else class="star-icon" @click.stop="addStar" src="./email-img/emptyStar.svg" alt=""/>
             <span class="massage-left-span span-font">{{email.subject}}</span>
            <span class="massage-body span-font">{{email.body}}</span>
            <span class="massage-right-span span-font">{{email.sentAt}}</span>
</div>
        `,
       
        
   methods: {
    deleteEmail() {
      emailService.deleteEmail(this.email.id)
        },
        addStar() {
          emailService.addStar(this.email.id)
            },

        isInbox(emailStatus){
          if(this.email.kindOf===emailStatus) return true
          else return false
         },

        showIconsOnMessage(){
          // this.showIcons=!this.showIcons
        }
      },
}