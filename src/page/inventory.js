import itemService from '/src/service/itemService.js'
import inventoryStore from "/src/store/inventoryStore.js";
import inventorySlot from "/src/component/inventorySlot.js";

const getGold = ['gold']
const getBelt = ['belt1', 'belt2', 'belt3']
const getBack = ['back1', 'back2', 'back3']
const getBackpack = [
    'backpack1', 'backpack2', 'backpack3', 'backpack4', 'backpack5', 'backpack6', 'backpack7',
    'backpack8', 'backpack9', 'backpack10', 'backpack11', 'backpack12', 'backpack13', 'backpack14',
    'backpack15'
]
const getHarness = ['harness']

const setGold = ['setGold']
const setBelt = ['setBelt1', 'setBelt2', 'setBelt3']
const setBack = ['setBack1', 'setBack2', 'setBack3']
const setBackpack = [
    'setBackpack1', 'setBackpack2', 'setBackpack3', 'setBackpack4', 'setBackpack5', 'setBackpack6', 'setBackpack7',
    'setBackpack8', 'setBackpack9', 'setBackpack10', 'setBackpack11', 'setBackpack12', 'setBackpack13', 'setBackpack14',
    'setBackpack15'
]
const setHarness = ['setHarness']

const inventory = Vue.defineComponent({
    name: 'inventory',

    components: {
        inventorySlot
    },

    template: `
        <div class="container">
        <h1 class="text-center">Inventaire</h1>
        <div class="mb-3">
            <button class="btn btn-primary" @click="test">Ajouter un objet</button>
        </div>

        <div class="d-flex flex-column">
            <table class="inv-table">
                <thead>
                <tr>
                    <td>Bourse</td>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>
                        {{ this.gold }}
                    </td>
                </tr>
                </tbody>
            </table>

            <table class="inv-table">
                <thead>
                <tr>
                    <td>Ceinture</td>
                </tr>
                </thead>
                <tbody>
                    <tr><td><inventory-slot :item="this.belt1"/></td></tr>
                    <tr><td><inventory-slot :item="this.belt2"/></td></tr>
                    <tr><td><inventory-slot :item="this.belt3"/></td></tr>
                </tbody>
            </table>

            <table class="inv-table">
                <thead>
                <tr>
                    <td>Dos</td>
                </tr>
                </thead>
                <tbody>
                <tr><td><inventory-slot :item="this.back1"/></td></tr>
                <tr><td><inventory-slot :item="this.back2"/></td></tr>
                <tr><td><inventory-slot :item="this.back3"/></td></tr>
                </tbody>
            </table>

            <table class="inv-table">
                <thead>
                <tr>
                    <td>Sac à dos</td>
                </tr>
                </thead>
                <tbody>
                <tr><td><inventory-slot :item="this.backpack1"/></td></tr>
                <tr><td><inventory-slot :item="this.backpack2"/></td></tr>
                <tr><td><inventory-slot :item="this.backpack3"/></td></tr>
                <tr><td><inventory-slot :item="this.backpack4"/></td></tr>
                <tr><td><inventory-slot :item="this.backpack5"/></td></tr>
                <tr><td><inventory-slot :item="this.backpack6"/></td></tr>
                <tr><td><inventory-slot :item="this.backpack7"/></td></tr>
                <tr><td><inventory-slot :item="this.backpack8"/></td></tr>
                <tr><td><inventory-slot :item="this.backpack9"/></td></tr>
                <tr><td><inventory-slot :item="this.backpack10"/></td></tr>
                <tr><td><inventory-slot :item="this.backpack11"/></td></tr>
                <tr><td><inventory-slot :item="this.backpack12"/></td></tr>
                <tr><td><inventory-slot :item="this.backpack13"/></td></tr>
                <tr><td><inventory-slot :item="this.backpack14"/></td></tr>
                <tr><td><inventory-slot :item="this.backpack15"/></td></tr>
                </tbody>
            </table>

            <table class="inv-table">
                <thead>
                <tr>
                    <td>Harnais</td>
                </tr>
                </thead>
                <tbody>
                <tr><td><inventory-slot :item="this.harness"/></td></tr>
                </tbody>
            </table>
        </div>

        </div>
    `,

    computed: {
        ...Pinia.mapState(inventoryStore, [
            ...getGold,
            ...getBelt,
            ...getBack,
            ...getBackpack,
            ...getHarness,
        ]),
    },

    data() {
        return {
        }
    },

    methods: {
        ...Pinia.mapActions(inventoryStore, [
            ...setGold,
            ...setBelt,
            ...setBack,
            ...setBackpack,
            ...setHarness,
        ]),

        test() {
            let item = itemService.createDefaultItem();
            this.setGold(10)
            this.setBelt1(item)
            this.setBelt2(item)
            console.log(
                this.gold,
                this.belt1,
                this.belt2,
            )
        },

    },

    created() {
        // this.test();
    }
})

export default inventory
