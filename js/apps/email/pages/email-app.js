import footerApp from "../cmps/footer.cmp.js";
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
      <span class="hedar-button"></span>
    </header>
    <main class="main-container">
    <div class="side-container">
        <button class="compose" @click.stop="showMassegeModal">+ Compose</button>
        <button @click.stop="setFolder('inbox')" class="inbox-btn">📥 inbox</button>
        <button @click.stop="setFolder('starred')" class="inbox-btn">🌟 starred</button>
        <button @click.stop="setFolder('sent')" class="inbox-btn">📩 sent mail</button>
        <button class="inbox-btn">➿ Draft</button>
    </div>
    <section class="mail-flow ">
    <email-list :emails="emailsToShow"></email-list> 
    </section>
</main>
<email-massege v-show="showModal"/>
<footer-app/>
</main>
        `,
  data() {
    return {
      emails: [],
      folderToShow: "inbox",
      filterBy: null,
      showModal: false,
    };
  },
  computed: {
    emailsToShow() {
      const filterBy = this.filterBy;
      if (!filterBy) {
        if (this.folderToShow === "starred")
          return this.emails.filter((email) => email.isStarred === true);
        if (this.folderToShow === "sent")
          return this.emails.filter((email) => email.isSent === true);
        return this.emails.filter(
          (email) => email.folder === this.folderToShow
        );
      } else {
        var filteredEmails;
        if (this.folderToShow === "starred") {
          filteredEmails = this.emails.filter(
            (email) => email.isStarred === true
          );
          return filteredEmails.filter((email) => {
            if (
              email.subject
                .toLowerCase()
                .includes(filterBy.byName.toLowerCase()) ||
              email.body.toLowerCase().includes(filterBy.byName.toLowerCase())
            )
              return email;
          });
        } else if (this.folderToShow === "sent") {
          filteredEmails = this.emails.filter((email) => email.isSent === true);
          return filteredEmails.filter((email) => {
            if (
              email.subject
                .toLowerCase()
                .includes(filterBy.byName.toLowerCase()) ||
              email.body.toLowerCase().includes(filterBy.byName.toLowerCase())
            )
              return email;
          });
        } else {
          filteredEmails = this.emails.filter(
            (email) => email.folder === this.folderToShow
          );
          return filteredEmails.filter((email) => {
            if (
              email.subject
                .toLowerCase()
                .includes(filterBy.byName.toLowerCase()) ||
              email.body.toLowerCase().includes(filterBy.byName.toLowerCase())
            )
              return email;
          });
        }
      }
    },
  },

  methods: {
    setFilter(filterBy) {
      this.filterBy = filterBy;
      console.log("filter:", this.filterBy);
    },
    showMassegeModal() {
      this.showModal = !this.showModal;
    },
    setFolder(folder) {
      this.folderToShow = folder;
    },
  },
  created() {
    // console.log("email-app loaded");
    this.emails = emailService.getEmails();
  },
  components: {
    footerApp,
    emailFilter,
    emailList,
    emailMassege,
  },
};
