export default {
    template: `
        <section class="serch-and-filtterd">
            <input class="serch" type="text" placeholder="🔍 search mail" v-model="filterBy.byName" @input="filter"/>
            <select class="filttered-emails">
                <option value="">All</option>
                <option value="">Read</option>
                <option value="">Unread</option>
            </select>
        </section>
    `,
    data() {
        return {
            filterBy: {
                byName: '',
            }
        }
    },
    methods: {
        filter() {
            this.$emit('filter', this.filterBy);
        },
    }
}