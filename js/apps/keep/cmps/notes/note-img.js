export default {
    props: ['note'],
    template: `
    <div class="text-center note-img">
        <img class="note-img-img" v-bind:src="imageUrl"/>
    </div>
    `,
    created() {
        // console.log('note-img');
    },
    computed: {
        imageUrl() {
            return this.note.info.url
        }
    }
}