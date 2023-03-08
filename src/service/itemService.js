import Item from '/src/dto/item.js'

const itemService = {

    localStorageKey: 'items',

    getAllItem() {
        let jsonItems = window.localStorage.getItem('items');

    },

    createDefaultItem() {
        const item = new Item('test', 'descr', 1, 2, 3);
        console.log(item.name())
    }

}

export default itemService
