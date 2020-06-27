import { emailService } from "../services/service.js";
import emailPreviow from "../cmps/email-previow.cmp.js";
export default {
  template: `
  <main class="all-m email-details" v-if="email">
   <div class="main-email-m">
   <h1 class="subject-mail">{{email.subject}}</h1>
   <p></p>
   <h3 class="emailContent-text">{{email.emailContent}}</h3>
   <button class='btn-close' @click="close"> Go back </button>
   </div>
       </main>
    `,

  data() {
    return {
      email: null,
    };
  },
  components: {
    emailPreviow
  },
  methods: {
    close() {
      this.$router.push("/email");
    },
  },
  created() {
    const { emailId } = this.$route.params;
    emailService.getById(emailId).then((email) => {
        console.log(email); 
      this.email = email;
    });

  },
};

