import itemService from '/src/service/itemService.js'
import { inventoryStore, getGold, getBelt, getBack, getBackpack, getHarness, setGold, setBelt, setBack, setBackpack, setHarness } from "/src/store/inventoryStore.js";
import inventorySlot from "/src/component/inventorySlot.js";
import itemForm from "/src/component/itemForm.js";

const inventory = Vue.defineComponent({
    name: 'inventory',

    components: {
        inventorySlot,
        itemForm,
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
                            <td rowspan="1" class="w-25">Bourse</td>
                            <td class="text-center">
                                <input type="number" class="form-control w-50 d-inline" v-model="dataGold">
                                <button class="btn-primary btn" @click.prevent="saveGold">Enregistrer</button>
                            </td>
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
                    <item-form v-if="this.selectedSlot !== null" />
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
            dataGold: 0
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
        },

        saveGold() {
            this.setGold(this.dataGold)
        }
    },

    created() {
        this.dataGold = this.gold;
    }
})

export default inventory
