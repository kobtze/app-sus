
import footerApp from '../cmps/footer.cmp.js'
import { emailService } from "../services/service.js";
import emailFilter from "../cmps/email-filter.cmps.js";
import emailList from "../cmps/email-list.cmp.js";
import emailMassege from "../pages/email-massege.cmp.js";

export default {
  template: `
       <main class="all">
       <header class="main-header">
      <img class="logo" src="./email-img/logo.png" alt=""/>
      <email-filter @filter="setFilter"/>
    <img class="hedar-button" src="./email-img/header-btn.png" alt=""/>
    </header>
    <main class="main-container">
    <div class="side-container">
        <button class="compose" @click="showMassegeModal">+ Compose</button>
        <button class="inbox-btn">📥 inbox</button>
        <button class="side-bar-btn">⭐ starred</button>
        <button class="side-bar-btn">📩 sent mail</button>
        <button class="side-bar-btn">➿ Draft</button>
    </div>
    <section class="mail-flow ">
    <email-list :emails="emailsToShow"></email-list> 
    </section>
</main>
<email-massege v-show="showModal"/>
<footer-app/>
</main>
        `,
        data(){
          return {
            emails:[],
            filterBy: null,
            showModal:false
            }
        },
        computed: {
          emailsToShow() {
              const filterBy = this.filterBy;
              if (!filterBy) return this.emails;
              var filteredEmails = this.emails.filter((email) => {
                  if ((email.subject.toLowerCase().includes(filterBy.byName.toLowerCase()))||(email.body.toLowerCase().includes(filterBy.byName.toLowerCase()))) return email; 
              });
              if(filterBy.read){
                filteredEmails= filteredEmails.map(email=>{
                  return (email.isRead)
                }) 
              }
              if(filterBy.unRead){
                filteredEmails= filteredEmails.map(email=>{
                  return (email.isRead===false)
                })
              }
              return filteredEmails
          },
      },

        methods: {
          setFilter(filterBy) {
              this.filterBy = filterBy;
              console.log('filter:',this.filterBy);
          },
          showMassegeModal(){
           this.showModal=!this.showModal
          },
      },
  created() {
    console.log("email-app loaded");
    this.emails= emailService.getEmails()
  },
  components: {
    footerApp,
    emailFilter,
    emailList,
    emailMassege
}
};


