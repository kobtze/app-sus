export default {
  props: ["email"],
  template: `
            <section class="email-massage">
            <span class="massage-left-span span-font">{{email.subject}}</span>
            <span class="span-font">{{email.body}}</span>
            <span class="massage-right-span span-font">{{email.sentAt}}</span>
            </section>
        `,
};
