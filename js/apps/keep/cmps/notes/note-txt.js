export default {
    props: ['note'],
    template: `
    <div class="text-center note-txt">
    <!-- <pre>{{note}}</pre> -->
    {{note.info.txt}}
    </div>
    `,
    created() {
        console.log('note-txt');
    }
}