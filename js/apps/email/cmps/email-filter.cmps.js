export default {
    template: `
        <section class="serch-and-filtterd">
            <div class="filter-mail">
            <i class="fas fa-search"></i>
                <input class="serch" type="text" placeholder="Search mail" v-model="filterBy.byName" @input="filter"/>
                <select class="filttered-emails">
                <option class="mail-option" @click="" value="">All</option>
                <option class="mail-option" @click="changeToRead" value="">Read</option>
                <option class="mail-option" @click="changeToUnRead" value="">Unread</option>
            </select>
            </div>
           
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