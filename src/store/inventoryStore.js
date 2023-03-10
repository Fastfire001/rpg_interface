const inventoryStore = Pinia.defineStore('inventory', {
    state() {
        return {
            selectedSlot: null,

            gold: 0,
            belt1: null,
            belt2: null,
            belt3: null,
            back1: null,
            back2: null,
            back3: null,
            backpack1: null,
            backpack2: null,
            backpack3: null,
            backpack4: null,
            backpack5: null,
            backpack6: null,
            backpack7: null,
            backpack8: null,
            backpack9: null,
            backpack10: null,
            backpack11: null,
            backpack12: null,
            backpack13: null,
            backpack14: null,
            backpack15: null,
            harness: null,
        }
    },

    getters: {

    },

    actions: {
        setSelectedSlot(selectedSlot) {
            this.selectedSlot = selectedSlot
        },
        setGold(gold) {
            this.gold = gold
        },
        setBelt1(belt1) {
            this.belt1 = belt1
        },
        setBelt2(belt2) {
            this.belt2 = belt2
        },
        setBelt3(belt3) {
            this.belt3 = belt3
        },
        setBack1(back1) {
            this.back1 = back1
        },
        setBack2(back2) {
            this.back2 = back2
        },
        setBack3(back3) {
            this.back3 = back3
        },
        setBackpack1(backpack1) {
            this.backpack1 = backpack1
        },
        setBackpack2(backpack2) {
            this.backpack2 = backpack2
        },
        setBackpack3(backpack3) {
            this.backpack3 = backpack3
        },
        setBackpack4(backpack4) {
            this.backpack4 = backpack4
        },
        setBackpack5(backpack5) {
            this.backpack5 = backpack5
        },
        setBackpack6(backpack6) {
            this.backpack6 = backpack6
        },
        setBackpack7(backpack7) {
            this.backpack7 = backpack7
        },
        setBackpack8(backpack8) {
            this.backpack8 = backpack8
        },
        setBackpack9(backpack9) {
            this.backpack9 = backpack9
        },
        setBackpack10(backpack10) {
            this.backpack10 = backpack10
        },
        setBackpack11(backpack11) {
            this.backpack11 = backpack11
        },
        setBackpack12(backpack12) {
            this.backpack12 = backpack12
        },
        setBackpack13(backpack13) {
            this.backpack13 = backpack13
        },
        setBackpack14(backpack14) {
            this.backpack14 = backpack14
        },
        setBackpack15(backpack15) {
            this.backpack15 = backpack15
        },
        setHarness(harness) {
            this.harness = harness
        }
    }
});


const getGold = ['gold']
const getBelt = ['belt1', 'belt2', 'belt3']
const getBack = ['back1', 'back2', 'back3']
const getBackpack = [
    'backpack1', 'backpack2', 'backpack3', 'backpack4', 'backpack5', 'backpack6', 'backpack7',
    'backpack8', 'backpack9', 'backpack10', 'backpack11', 'backpack12', 'backpack13', 'backpack14',
    'backpack15'
]
const getHarness = ['harness']

const setGold = ['setGold']
const setBelt = ['setBelt1', 'setBelt2', 'setBelt3']
const setBack = ['setBack1', 'setBack2', 'setBack3']
const setBackpack = [
    'setBackpack1', 'setBackpack2', 'setBackpack3', 'setBackpack4', 'setBackpack5', 'setBackpack6', 'setBackpack7',
    'setBackpack8', 'setBackpack9', 'setBackpack10', 'setBackpack11', 'setBackpack12', 'setBackpack13', 'setBackpack14',
    'setBackpack15'
]
const setHarness = ['setHarness']

export { inventoryStore, getGold, getBelt, getBack, getBackpack, getHarness, setGold, setBelt, setBack, setBackpack, setHarness }
export default inventoryStore