// import itemStore from "/src/store/inventoryStore.js";

const character = Vue.defineComponent({
    name: 'character',

    template: `
        <div>
            <h1>Character</h1>
<!--            <button @click="incrementTest">{{ test }}</button>-->
        </div>
    `,

    // computed: {
        // ...Pinia.mapState(itemStore, [
        //     'test'
        // ]),
    // },

    data() {
        return {

        }
    },

    // methods: {
    //     ...Pinia.mapActions(itemStore, [
    //         'incrementTest'
    //     ]),
    // },

})

export default character
