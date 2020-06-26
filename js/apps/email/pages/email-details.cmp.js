import { emailService } from "../services/service.js";
import emailPreviow from "../cmps/email-previow.cmp.js";
export default {
  template: `
  <section class="email-details text-center"  v-if="email">
  <pre class="text-center" v-for="line in email.emailContent">
    {{line}}
  </pre>
        <button class='close' @click="close"> Go back </button>
        </section>

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

