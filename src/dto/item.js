class Item {
    constructor(
        name,
        description = '',
        intel = 0,
        strength = 0,
        dexterity = 0
    ) {
        this.name = name
        this.description = description
        this.intel = intel
        this.strength = strength
        this.dexterity = dexterity
    }

    get name() {
        return this.name
    }

    set name(name) {
        this.name = name
        return this
    }
}

export default Item