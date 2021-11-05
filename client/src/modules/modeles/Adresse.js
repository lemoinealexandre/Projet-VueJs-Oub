import ObjIsNull from "../ObjIsNull";

export default class Adresse {

    #building;
    #street;
    #zipcode;
    #coord;

    constructor(building, street, zipcode, coord) {
        this.#building = building;
        this.#street = street;
        this.#zipcode = zipcode;
        this.#coord = coord;
    }

    get building() {
        return this.#building;
    }

    get street() {
        return this.#street;
    }

    get zipcode() {
        return this.#zipcode;
    }

    get coord() {
        return this.#coord;
    }

    static convertToAdresse(obj) {
        if (!ObjIsNull(obj)) {
            return new Adresse(obj.building, obj.street, obj.zipcode, obj.coord);
        }
        return null;
    }

    static convertsToAdresse(arr) {
        if (!ObjIsNull(arr) && arr instanceof Array) {
            return arr.map(obj => this.convertToAdresse(obj)).filter(adr => !ObjIsNull(adr));
        }
        return [];
    }
}
