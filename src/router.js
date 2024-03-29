import inventory from '/src/page/inventory.js'
import equipment from '/src/page/equipment.js'
import character from '/src/page/character.js';
import {characterStore} from "/src/store/characterStore.js";

const router = Vue.defineComponent({
    name: 'router',
    components: {
        inventory,
        equipment,
        character
    },

    template: `
        <div>
            <form>
                <ul class="d-flex flex-row justify-content-evenly">
                    <li class="list-unstyled" v-for="menu in menus">
                        <label class="btn btn-primary" :for="menu.component">{{ menu.name }}</label>
                        <input type="radio" name="select-menu" class="d-none" @click="resetSelectedSlot"
                               :id="menu.component" :checked="menu.default" :value="menu.component" v-model="value">
                    </li>
                </ul>
            </form>

            <component :is="value"/>
        </div>
    `,

    computed: {
        ...Pinia.mapState(characterStore, [
            'selectedSlot',
        ]),
    },

    data() {
        return {
            value: 'character',
            menus: [
                {
                    component: 'character',
                    name: 'Personnage',
                    default: true
                },
                {
                    component: 'equipment',
                    name: 'Equipement',
                    default: false
                },
                // {
                //     component: 'inventory',
                //     name: 'Inventaire',
                //     default: false
                // },
            ]
        }
    },

    methods: {
        ...Pinia.mapActions(characterStore, [
            'setSelectedSlot',
        ]),

        resetSelectedSlot() {
            this.setSelectedSlot(null)
        }
    },
})

export default router
