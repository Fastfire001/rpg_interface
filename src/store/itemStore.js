
const itemStore = Pinia.defineStore('item', {
    state() {
        return {
            test: 1
        }
    },

    getters: {
        getTest(state) {
            return state.test;
        }
    },

    actions: {
        incrementTest() {
            this.test = this.test + 1;
        }
    }
});

export default itemStore