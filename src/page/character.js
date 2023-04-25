import { characterStore } from "/src/store/characterStore.js";

const equipment = Vue.defineComponent({
    name: 'character',

    components: {
    },

    template: `
        <div class="container">
            <h1 class="text-center">Personnage</h1>
            <div class="text-center">
                <input class="fs-2 w-100" type="text" v-model="tmpName" @input="saveName">
                <br>
                <textarea class="fs-4 w-50 border border-1" v-model="tmpDescription" @input="saveDescription">
                </textarea>
            </div>
            <div class="d-flex row">
                <div class="w-50">
                </div>
                <div class="w-50">

                </div>
            </div>
        </div>
    `,

    computed: {
        ...Pinia.mapState(characterStore, [
            'name',
            'description',
        ]),
    },

    data() {
        return {
            tmpName: null,
            tmpDescription: null,
        }
    },

    methods: {
        ...Pinia.mapActions(characterStore, [
            'setName',
            'setDescription',
        ]),

        saveName() {
            this.setName(this.tmpName)
        },

        saveDescription() {
            this.setDescription(this.tmpDescription)
        }

    },

    created() {
        this.tmpName = this.name
        this.tmpDescription = this.description
    },

})

export default equipment
