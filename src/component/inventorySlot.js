// import itemStore from "/src/store/inventoryStore.js";

const inventorySlot = Vue.defineComponent({
    name: 'inventory-slot',

    template: `
        <div @click="emitSelectSlot">
            <p v-if="item && item.name">{{ item.name }}</p>
            <p v-else>Vide</p>
        </div>
    `,

    props: [
        'item',
        'itemSlot'
    ],

    data() {
        return {

        }
    },

    methods: {
        emitSelectSlot() {
            this.$emit('select-slot', this.itemSlot)
        },
    },

})

export default inventorySlot
