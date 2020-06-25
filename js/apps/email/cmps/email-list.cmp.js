
  import emailPreviow from "../cmps/email-previow.cmp.js";
  import { emailService } from "../services/service.js";
export default {
    props: ["emails"],
    template: `
     
        <section>
        <email-previow  v-for="email in emails"
         @click.native="openEmailDesc(email.id)" :email="email"
         :class="{DarkGraybackGroundColor: email.isRead}"/>
        </section>
    `,
     methods: {
        openEmailDesc(emailId) {
                this.$router.push('/email/' + emailId)
                emailService.updateMail(emailId)
              },
    },
    components: {
        emailPreviow
    }
};