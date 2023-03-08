import itemList from '/src/page/itemList.js'
import character from '/src/page/character.js'

const router = Vue.defineComponent({
    name: 'router',
    components: {
        itemList,
        character
    },

    template: `
        <div>
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
        </div>
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
