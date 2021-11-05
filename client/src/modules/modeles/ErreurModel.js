
export default class ErreurModel {
    #title;
    #messageErreur;

    constructor(title, messageErreur) {
        this.#title = title ?? "";
        this.#messageErreur = messageErreur ?? "";
    }

    get title() {
        return this.#title;
    }

    get messageErreur() {
        return this.#messageErreur;
    }
}