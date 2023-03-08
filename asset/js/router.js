import {defineComponent} from '/dependencies/vuejs/vue@3.2.47.vue.esm-browser.js'
import itemList from '/asset/js/page/itemList.js'
import character from '/asset/js/page/character.js'

const router = defineComponent({
    name: 'router',
    components: {
        itemList,
        character
    },

    template: `
        <form>
            <ul class="d-flex flex-row justify-content-evenly">
                <li class="list-unstyled" v-for="menu in menus">
                    <label class="btn btn-primary" :for="menu.component">{{ menu.name }}</label>
                    <input type="radio" name="select-menu" class="d-none" 
                           :id="menu.component" :checked="menu.default" :value="menu.component" v-model="value">
                </li>
            </ul>
        </form>
        
        <component :is="value"/>
    `,

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
                    component: 'item-List',
                    name: 'Object',
                    default: false
                },
            ]
        }
    },
    })

export default router
