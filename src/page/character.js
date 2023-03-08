import itemStore from "/src/store/itemStore.js";

const character = Vue.defineComponent({
    name: 'character',

    template: `
        <div>
            <p>Character</p>
            <button @click="incrementTest">{{ test }}</button>
        </div>
    `,

    computed: {
        ...Pinia.mapState(itemStore, [
            'test'
        ]),
    },

    data() {
        return {

        }
    },

    methods: {
        ...Pinia.mapActions(itemStore, [
            'incrementTest'
        ]),
    },

})

export default character
