import inventorySlot from "/src/component/inventorySlot.js";
import { characterStore, getGold, getBelt, getBack, getBackpack, getHarness, setGold, setBelt, setBack, setBackpack,
    setHarness, getCharacter, setCharacter } from "/src/store/characterStore.js";
import itemForm from "/src/component/itemForm.js";

const equipment = Vue.defineComponent({
    name: 'equipment',

    components: {
        inventorySlot,
        itemForm
    },

    template: `
        <div class="container">
            <h1 class="text-center">Equipement</h1>
            <div class="d-flex row">
                <div class="w-50">
                    <table class="inv-table">
                        <tr>
                            <td class="w-25">Tête</td>
                            <td><inventory-slot @select-slot="selectSlot" :item-slot="'head'" :item="this.head"/></td>
                        </tr>
                        <tr>
                            <td class="w-25">Visage</td>
                            <td><inventory-slot @select-slot="selectSlot" :item-slot="'face'" :item="this.face"/></td>
                        </tr>
                        <tr>
                            <td class="w-25">Cou</td>
                            <td><inventory-slot @select-slot="selectSlot" :item-slot="'neck'" :item="this.neck"/></td>
                        </tr>
                        <tr>
                            <td class="w-25">Torse</td>
                            <td><inventory-slot @select-slot="selectSlot" :item-slot="'chest'" :item="this.chest"/></td>
                        </tr>
                        <tr>
                            <td class="w-25">Epaule gauche</td>
                            <td><inventory-slot @select-slot="selectSlot" :item-slot="'leftShoulder'" :item="this.leftShoulder"/></td>
                        </tr>
                        <tr>
                            <td class="w-25">Epaule droite</td>
                            <td><inventory-slot @select-slot="selectSlot" :item-slot="'rightShoulder'" :item="this.rightShoulder"/></td>
                        </tr>
                        <tr>
                            <td class="w-25">Main gauche</td>
                            <td><inventory-slot @select-slot="selectSlot" :item-slot="'leftHand'" :item="this.leftHand"/></td>
                        </tr>
                        <tr>
                            <td class="w-25">Main droite</td>
                            <td><inventory-slot @select-slot="selectSlot" :item-slot="'rightHand'" :item="this.rightHand"/></td>
                        </tr>
                        <tr>
                            <td class="w-25">Bague 1</td>
                            <td><inventory-slot @select-slot="selectSlot" :item-slot="'ring1'" :item="this.ring1"/></td>
                        </tr>
                        <tr>
                            <td class="w-25">Bague 2</td>
                            <td><inventory-slot @select-slot="selectSlot" :item-slot="'ring2'" :item="this.ring2"/></td>
                        </tr>
                        <tr>
                            <td class="w-25">Bague 3</td>
                            <td><inventory-slot @select-slot="selectSlot" :item-slot="'ring3'" :item="this.ring3"/></td>
                        </tr>
                        <tr>
                            <td class="w-25">Ceinture</td>
                            <td><inventory-slot @select-slot="selectSlot" :item-slot="'belt'" :item="this.belt"/></td>
                        </tr>
                        <tr>
                            <td class="w-25">Jambes</td>
                            <td><inventory-slot @select-slot="selectSlot" :item-slot="'legs'" :item="this.legs"/></td>
                        </tr>
                        <tr>
                            <td class="w-25">Pieds</td>
                            <td><inventory-slot @select-slot="selectSlot" :item-slot="'feet'" :item="this.feet"/></td>
                        </tr>
                    </table>

                    <item-form v-if="this.selectedSlot !== null" />
                </div>
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
                </div>
            </div>
        </div>
    `,

    computed: {
        ...Pinia.mapState(characterStore, [
            'selectedSlot',
            ...getGold,
            ...getBelt,
            ...getBack,
            ...getBackpack,
            ...getHarness,
            ...getCharacter,
        ]),
    },

    data() {
        return {
            dataGold: 0,
        }
    },

    methods: {
        ...Pinia.mapActions(characterStore, [
            'setSelectedSlot',
            ...setGold,
            ...setBelt,
            ...setBack,
            ...setBackpack,
            ...setHarness,
            ...setCharacter,
        ]),

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
        },
    },

    created() {
        this.dataGold = this.gold;
    },

})

export default equipment
