// import itemStore from "/src/store/inventoryStore.js";

const inventorySlot = Vue.defineComponent({
    name: 'inventory-slot',

    template: `
        <div>
            <p v-if="item && item.name">{{ test(item.name) }}</p>
            <p v-else>Vide</p>
        </div>
    `,

    props: [
        'item'
    ],

    data() {
        return {

        }
    },

    methods: {
        test(a) {
            console.log(a)
            return a
        }
    },

})

export default inventorySlot
