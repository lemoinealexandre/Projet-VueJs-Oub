import ObjIsNull from "../ObjIsNull";
import Grade from "./Grade";
import Adresse from "./Adresse";

export default class Restaurant {

    #id;
    #name;
    #cuisine;
    #arrondissement;
    #grades;
    #adresse;
    #restaurant_id;

    constructor(id, name, cuisine, arrondissement, grades, adresse, restaurant_id) {
        this.#id = id;
        this.#name = name;
        this.#cuisine = cuisine;
        this.#arrondissement = arrondissement;
        this.#grades = grades;
        this.#adresse = adresse;
        this.#restaurant_id = restaurant_id;
    }

    get id() {
        return this.#id;
    }

    get name() {
        return this.#name;
    }

    get cuisine() {
        return this.#cuisine;
    }

    get arrondissement() {
        return this.#arrondissement;
    }

    get grades() {
        return this.#grades;
    }

    get adresse() {
        return this.#adresse;
    }

    get restaurant_id() {
        return this.#restaurant_id;
    }

    static convertToRestaurant(obj) {
        if (!ObjIsNull(obj)) {
            const restau = new Restaurant(
                obj.id ?? obj._id,
                obj.name,
                obj.cuisine,
                obj.borough,
                Grade.convertsToGrade(obj.grades),
                Adresse.convertToAdresse(obj.address),
                obj.restaurant_id
            );
            return restau;
        }
        return null;
    }

    static convertsToRestaurant(arr) {
        if (!ObjIsNull(arr) && arr instanceof Array) {
            return arr.map((obj) => this.convertToRestaurant(obj)).filter(restau => !ObjIsNull(restau));
        }
        return [];
    }
}
