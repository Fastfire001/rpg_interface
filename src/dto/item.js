class Item {
    constructor(
        name,
        description = '',
        intel = 0,
        strength = 0,
        dexterity = 0,
        charisma = 0,
        stamina = 0
    ) {
        this.name = name
        this.description = description
        this.intel = intel
        this.strength = strength
        this.dexterity = dexterity
        this.charisma = charisma
        this.stamina = stamina
    }
}

export default Item