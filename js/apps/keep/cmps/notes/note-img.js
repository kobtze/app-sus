export default {
    props: ['note'],
    template: `
    <div class="text-center note-txt">
    <!-- <pre>{{note}}</pre> -->
        <div style="background-image: url(https://images.unsplash.com/photo-1517079495967-03aed29f98b5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)">
        </div>

        <img src="https://images.unsplash.com/photo-1517079495967-03aed29f98b5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"/>
    </div>
    `,
    data(){
        return {
            
        }
    },
    created() {
        console.log('note-img');
    },
    computed: {
        bgcImageStyle() {
            var res = `background-image: url(${this.note.info.url})`
            return res
        }
    }
}