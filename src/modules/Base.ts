import { v4 as uuid } from 'uuid'

//Global properties for every entity
class Base {

    id: string;
    created_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuid()
        }
    }
}

export { Base }