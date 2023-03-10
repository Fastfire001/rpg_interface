import Item from '/src/dto/item.js'

const itemService = {

    localStorageKey: 'items',

    getAllItem() {
        let jsonItems = window.localStorage.getItem('items');

    },

    createDefaultItem(name = 'test') {
        return new Item(name, 'descr', 1, 2, 3, 4);
    }

}

export default itemService
