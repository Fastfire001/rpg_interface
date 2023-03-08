// const useCounterStore = Pinia.defineStore('counter', {
//     state() {
//         return {
//             value: 0
//         }
//     },
//     actions: {
//         increment(state) {
//             this.value++
//         }
//     }
// })
//
import router from "/src/router.js";

//dto
import Item from '/src/dto/item.js'

//service
import itemService from '/src/service/itemService.js'

//store
import itemStore from "/src/store/itemStore.js";

//page
import itemList from "/src/page/itemList.js";
import character from '/src/page/character.js'

Vue.use(Pinia.PiniaVuePlugin)
new Vue({
    el: '#app',
    pinia: Pinia.createPinia(),
    components: {
        router
    }
})