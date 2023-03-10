import inventoryStore from "/src/store/inventoryStore.js";

const inventorySlot = Vue.defineComponent({
    name: 'inventory-slot',

    template: `
        <div @click="emitSelectSlot" :class="{
            border: isSelected,
            'border-1': isSelected,
            'border-danger': isSelected,
        }">
            <p v-if="item && item.name">{{ item.name }}</p>
            <p v-else>Vide</p>
        </div>
    `,

    props: [
        'item',
        'itemSlot'
    ],

    computed: {
        ...Pinia.mapState(inventoryStore, [
            'selectedSlot',
        ]),

        isSelected() {
            return this.selectedSlot === this.itemSlot
        },
    },

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
