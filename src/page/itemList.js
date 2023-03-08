import itemService from '/src/service/itemService.js'

const itemList = Vue.defineComponent({
    name: 'item-list',

    template: `
        <div>
            <h1>Item list</h1>
            <button @click="itemSr.createDefaultItem()"></button>
        </div>
    `,


    data() {
        return {
            itemSr: itemService
        }
    }

})

export default itemList
