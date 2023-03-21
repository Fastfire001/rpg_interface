import router from "/src/router.js";

//dto
import Item from '/src/dto/item.js'

//service
import itemService from '/src/service/itemService.js'

//store
import characterStore from "/src/store/characterStore.js";

//page
import inventory from "/src/page/inventory.js";
import character from '/src/page/character.js'

//component
import inventorySlot from "/src/component/inventorySlot.js";
import itemForm from "/src/component/itemForm.js";

Vue.use(Pinia.PiniaVuePlugin)
new Vue({
    el: '#app',
    pinia: Pinia.createPinia(),
    components: {
        router
    }
})