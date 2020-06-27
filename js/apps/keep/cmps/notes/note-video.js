export default {
    props: ['note'],
    template: `
    <div class="text-center note-vid">
        <iframe width="210" height="120" :src="'https://www.youtube.com/embed/' + youTubeId" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    `,
    created() {
        // console.log('note-vid');
    },
    computed: {
        youTubeId() {
            var vidId = this.note.info.url.split('v=')[1];
            var ampersandPosition = vidId.indexOf('&');
            if(ampersandPosition != -1) {
              vidId = vidId.substring(0, ampersandPosition);
            }
            return vidId
        }
    }
}