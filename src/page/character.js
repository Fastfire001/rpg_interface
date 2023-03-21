// import itemStore from "/src/store/inventoryStore.js";

const character = Vue.defineComponent({
    name: 'character',

    template: `
        <div class="container">
            <h1 class="text-center">Personnage</h1>
            <div class="row text-center">
                <div class="col">
                </div>
                <div class="col">
                    <table class="inv-table">
                        <tr>
                            <td class="w-25">Tête</td>
                            <td>Tête</td>
                        </tr>
                        <tr>
                            <td class="w-25">Visage</td>
                            <td>Visage</td>
                        </tr>
                        <tr>
                            <td class="w-25">Cou</td>
                            <td>Cou</td>
                        </tr>
                        <tr>
                            <td class="w-25">Torse</td>
                            <td>Torse</td>
                        </tr>
                        <tr>
                            <td class="w-25">Epaule gauche</td>
                            <td>Epaule gauche</td>
                        </tr>
                        <tr>
                            <td class="w-25">Epaule droite</td>
                            <td>Epaule droite</td>
                        </tr>
                        <tr>
                            <td class="w-25">Main gauche</td>
                            <td>Main gauche</td>
                        </tr>
                        <tr>
                            <td class="w-25">Main droite</td>
                            <td>Main droite</td>
                        </tr>
                        <tr>
                            <td class="w-25">Bague 1</td>
                            <td>Bague 1</td>
                        </tr>
                        <tr>
                            <td class="w-25">Bague 2</td>
                            <td>Bague 2</td>
                        </tr>
                        <tr>
                            <td class="w-25">Bague 3</td>
                            <td>Bague 3</td>
                        </tr>
                        <tr>
                            <td class="w-25">Ceinture</td>
                            <td>Ceinture</td>
                        </tr>
                        <tr>
                            <td class="w-25">Jambes</td>
                            <td>Jambes</td>
                        </tr>
                        <tr>
                            <td class="w-25">Pieds</td>
                            <td>Pieds</td>
                        </tr>
                    </table>
                </div>
                <div class="col">
                </div>
            </div>
        </div>
    `,

    // computed: {
        // ...Pinia.mapState(itemStore, [
        //     'test'
        // ]),
    // },

    data() {
        return {

        }
    },

    // methods: {
    //     ...Pinia.mapActions(itemStore, [
    //         'incrementTest'
    //     ]),
    // },

})

export default character
