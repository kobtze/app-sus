export default {
    props: ['note'],
    template: `
    <div class="text-center note-aud">
        <audio controls>
				<source :src="note.info.url" />
		</audio>
    </div>
    `,
    created() {
        console.log('note-aud');
    }
}