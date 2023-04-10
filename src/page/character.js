import { characterStore } from "/src/store/characterStore.js";

const equipment = Vue.defineComponent({
    name: 'character',

    components: {
    },

    template: `
        <div class="container">
            <h1 class="text-center">Personnage</h1>
            <div class="text-center">
                <input type="text" v-model="this.tmpName" @input="saveName">
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
            // ici malgrès la copie de la valeur, this.tmpName ne change pas de valeur avec le v-model
            console.log(this.tmpName);
            this.setName(this.tmpName)
        },

    },

    created() {
        // ici on copie la valeur et non pas la référence (normalement)
        this.tmpName = this.name.split('').join('');
    },

})

export default equipment
