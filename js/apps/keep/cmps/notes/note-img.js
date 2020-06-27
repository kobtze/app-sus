export default {
    props: ['note'],
    template: `
    <div class="text-center note-img">
        <img :src="note.info.url"/>
    </div>
    `,
    created() {
        console.log('note-img');
    }
}