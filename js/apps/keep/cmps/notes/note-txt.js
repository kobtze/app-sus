export default {
    props: ['note'],
    template: `
    <div class="text-center note-txt">
    <!-- <pre>{{note}}</pre> -->
    {{note.info.txt}}
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ullam consequatur omnis alias voluptatum delectus error, ut reiciendis provident ea. Voluptatum deleniti cum eaque eos necessitatibus! Dolorem exercitationem quis ex.
    </div>
    `,
    created() {
        console.log('note-txt');
    }
}