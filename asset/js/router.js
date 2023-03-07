import {defineComponent} from './vue@3.2.47.vue.esm-browser.js'
import itemList from './page/itemList.js'
import character from './page/character.js'

let router = defineComponent({
    name: 'router',
    components: {
        itemList,
        character
    },

    template: `
        <form>
            <ul>
                <li v-for="menu in menus">
                    <label :for="menu.component">{{ menu.name }}</label>
                    <input type="radio" name="select-menu" :id="menu.component" :checked="menu.default" :value="menu.component" v-model="value">
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
