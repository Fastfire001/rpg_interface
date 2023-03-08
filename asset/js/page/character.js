import { defineComponent } from '/dependencies/vuejs/vue@3.2.47.vue.esm-browser.js'
// import { mapState, mapActions } from '/dependencies/pinia/pinia.esm-browser.js';
// import { itemStore } from '/asset/js/store/itemStore.js'

const character = defineComponent({
    name: 'character',

    template: `
       <p>Character</p>
<!--       <button @click="incrementTest">{{ test }}</button>-->
    `,

    // computed: {
    //     ...mapState(itemStore, [
    //         'test'
    //     ]),
    //
    // },

    data() {
        return {

        }
    },

    // methods: {
    //     ...mapActions(itemStore, [
    //         'incrementTest'
    //     ]),
    // },

})

export default character
