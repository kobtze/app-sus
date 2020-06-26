export default {
    template: `
        <section class="serch-and-filtterd">
            <input class="serch" type="text" placeholder="🔍 search mail" v-model="filterBy.byName" @input="filter"/>
            <select class="filttered-emails">
                <option @click="" value="">All</option>
                <option @click="changeToRead" value="">Read</option>
                <option @click="changeToUnRead" value="">Unread</option>
            </select>
        </section>
    `,
    data() {
        return {
            filterBy: {
                byName: '',
                read:false,
                unRead: false
            }
        }
    },
    methods: {
        filter() {
            this.$emit('filter', this.filterBy);
        },
        changeToRead(){
            this.read=true
        },
        changeToUnRead(){
            this.unRead=true
           
        }
    }
}