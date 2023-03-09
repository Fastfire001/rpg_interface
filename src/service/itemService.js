import Item from '/src/dto/item.js'

const itemService = {

    localStorageKey: 'items',

    getAllItem() {
        let jsonItems = window.localStorage.getItem('items');

    },

    createDefaultItem() {
        return new Item('test', 'descr', 1, 2, 3, 4);
    }

}

export default itemService
