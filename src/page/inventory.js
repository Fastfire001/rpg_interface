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
                <button class="btn btn-primary" @click="createTestItem">Ajouter un objet</button>
            </div>
    
            <div class="d-flex row">
                <div class="w-50">
                    <table class="inv-table mb-2">
                        <tr>
                            <td rowspan="1" class="w-25">bourse</td>
                            <td>{{ this.gold }}</td>
                        </tr>
                    </table>
                    
                    <table class="inv-table mb-2">
                        <tr>
                            <td rowspan="3" class="w-25">Ceinture</td>
                            <td><inventory-slot @select-slot="selectSlot" :item-slot="'belt1'" :item="this.belt1"/></td>
                        </tr>
                        <tr><td><inventory-slot @select-slot="selectSlot" :item-slot="'belt2'" :item="this.belt2"/></td></tr>
                        <tr><td><inventory-slot @select-slot="selectSlot" :item-slot="'belt3'" :item="this.belt3"/></td></tr>
                    </table>
        
                    <table class="inv-table mb-2">
                        <tr>
                            <td rowspan="3" class="w-25">Dos</td>
                            <td><inventory-slot @select-slot="selectSlot" :item-slot="'back1'" :item="this.back1"/></td>
                        </tr>
                        <tr><td><inventory-slot @select-slot="selectSlot" :item-slot="'back2'" :item="this.back2"/></td></tr>
                        <tr><td><inventory-slot @select-slot="selectSlot" :item-slot="'back3'" :item="this.back3"/></td></tr>
                    </table>
        
                    <table class="inv-table mb-2">
                        <tr>
                            <td rowspan="25" class="w-25">Sac à dos</td>
                            <td><inventory-slot @select-slot="selectSlot" :item-slot="'backpack1'" :item="this.backpack1"/></td>
                        </tr>
                        <tr><td><inventory-slot @select-slot="selectSlot" :item-slot="'backpack2'" :item="this.backpack2"/></td></tr>
                        <tr><td><inventory-slot @select-slot="selectSlot" :item-slot="'backpack3'" :item="this.backpack3"/></td></tr>
                        <tr><td><inventory-slot @select-slot="selectSlot" :item-slot="'backpack4'" :item="this.backpack4"/></td></tr>
                        <tr><td><inventory-slot @select-slot="selectSlot" :item-slot="'backpack5'" :item="this.backpack5"/></td></tr>
                        <tr><td><inventory-slot @select-slot="selectSlot" :item-slot="'backpack6'" :item="this.backpack6"/></td></tr>
                        <tr><td><inventory-slot @select-slot="selectSlot" :item-slot="'backpack7'" :item="this.backpack7"/></td></tr>
                        <tr><td><inventory-slot @select-slot="selectSlot" :item-slot="'backpack8'" :item="this.backpack8"/></td></tr>
                        <tr><td><inventory-slot @select-slot="selectSlot" :item-slot="'backpack9'" :item="this.backpack9"/></td></tr>
                        <tr><td><inventory-slot @select-slot="selectSlot" :item-slot="'backpack10'" :item="this.backpack10"/></td></tr>
                        <tr><td><inventory-slot @select-slot="selectSlot" :item-slot="'backpack11'" :item="this.backpack11"/></td></tr>
                        <tr><td><inventory-slot @select-slot="selectSlot" :item-slot="'backpack12'" :item="this.backpack12"/></td></tr>
                        <tr><td><inventory-slot @select-slot="selectSlot" :item-slot="'backpack13'" :item="this.backpack13"/></td></tr>
                        <tr><td><inventory-slot @select-slot="selectSlot" :item-slot="'backpack14'" :item="this.backpack14"/></td></tr>
                        <tr><td><inventory-slot @select-slot="selectSlot" :item-slot="'backpack15'" :item="this.backpack15"/></td></tr>
                    </table>
        
                    <table class="inv-table">
                        <tr>
                            <td rowspan="1" class="w-25">Harnais</td>
                            <td><inventory-slot @select-slot="selectSlot" :item-slot="'harness'" :item="this.harness"/></td>
                        </tr>
                    </table>
                </div>
                
                <div class="w-50 border-1 border">
                    test
                </div>
            </div>
        </div>
    `,

    computed: {
        ...Pinia.mapState(inventoryStore, [
            'selectedSlot',
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
            'setSelectedSlot',
            ...setGold,
            ...setBelt,
            ...setBack,
            ...setBackpack,
            ...setHarness,
        ]),

        createTestItem() {
            let item = itemService.createDefaultItem('test1')
            let item2 = itemService.createDefaultItem('test2')
            this.setGold(10)
            this.setBelt1(item)
            this.setBelt2(item2)
        },

        selectSlot(slot) {
            if (this.selectedSlot !== null) {
                let tmpItem = this[this.selectedSlot]
                this[this.getSetter(this.selectedSlot)](this[slot])
                this[this.getSetter(slot)](tmpItem)
                this.setSelectedSlot(null)
            } else {
                this.setSelectedSlot(slot)
            }
        },

        getSetter(string) {
            return 'set'+string.charAt(0).toUpperCase() + string.slice(1);
        }
    },
})

export default inventory
