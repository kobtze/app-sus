
export default {
    template: `
    <section class="comp-container"  v-show="showModal">
      <header class="comp-header">
        <div class="comp-header-text">New Message</div>
        <!-- <button class="close-btn">x</button> -->
      </header>
      <input class="to" type="text" placeholder="  to:" />
      <input class="subject" type="text" placeholder="  subject" />
      <textarea class="main-text"></textarea>
      <footer class="comp-footer">
        <button class="send">Send</button>
        <img @click="showMassegeModal" class="delete" src="../email-img/trash.PNG" alt="">
      </footer>
    </section>
    `,
     data(){
      return {
        showModal:false
      }
        },
     methods: {
      showMassegeModal(){
       this.showModal=!this.showModal
      }
    }
}