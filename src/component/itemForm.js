import {
    characterStore, getBelt, getBack, getBackpack, getHarness, getGold, setGold, setBelt, setBack, setBackpack, setHarness
} from "/src/store/characterStore.js";
import Item from '/src/dto/item.js'

const itemForm = Vue.defineComponent({
    name: 'item-form',

    template: `
        <div>
            <form>
                <label for="name">Nom</label>
                <input type="text" id="name" class="form-control" v-model="item.name">
                
                <br>
                
                <label for="description">Description</label>
                <textarea id="description" rows="2" class="form-control" v-model="item.description"></textarea>
                
                <br>
                
                <label for="intel">Intelligence</label>
                <input type="number" id="intel" class="form-control" v-model="item.intel">
                
                <br>
                
                <label for="strength">Force</label>
                <input type="number" id="strength" class="form-control" v-model="item.strength">
                
                <br>
                
                <label for="dexterity">Dextérité</label>
                <input type="number" id="dexterity" class="form-control" v-model="item.dexterity">
                
                <br>
                
                <label for="charisma">Charisme</label>
                <input type="number" id="charisma" class="form-control" v-model="item.charisma">
                
                <br>
                
                <label for="stamina">Endurance</label>
                <input type="number" id="stamina" class="form-control" v-model="item.stamina">
                
                <div class="btn btn-primary mt-3" @click="close">Valider</div>
            </form>
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
        ]),

        item() {
            if (this[this.selectedSlot] == null) {
                return new Item('A définir');
            }
            return this[this.selectedSlot];
        },
    },

    data() {
        return {

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
        ]),

        close() {
            this[this.getSetter(this.selectedSlot)](this.item)
            this.setSelectedSlot(null)
        },

        getSetter(string) {
            return 'set'+string.charAt(0).toUpperCase() + string.slice(1);
        }
    }
})

export default itemForm
