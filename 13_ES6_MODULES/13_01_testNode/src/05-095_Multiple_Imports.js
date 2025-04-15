export const multipleGretting = () => {

    return 'Hey, this a function imported by using the multiple imports "* as"'

}

export function prettyPrice(gross, extender) {

    return `Price Prettyfied: ${Math.floor(gross)} + ${extender}`

}

export class Users {

    constructor(name, rol){
        
        this.name = name;
        this.rol = rol;
    }

    printUsers() {

        return `The user ${this.name} has ${this.rol} rol `
        
    }

}

export class UserPass extends Users {
    
    constructor(name, rol, pass) {

        super(name, rol);
        this.pass = pass;

    }

    printPass() {

        return `INFO UPDATE: The password for the user ${this.name} with rol "${this.rol}" is:  ${this.pass}`

    }
}


