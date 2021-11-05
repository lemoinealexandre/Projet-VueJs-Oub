import ObjIsNull from "../ObjIsNull";

export default class Grade {
    #date;
    #grade;
    #score;


    constructor(date, grade, score) {
        this.#date = date;
        this.#grade = grade;
        this.#score = score;
    }


    get date() {
        return this.#date;
    }

    get grade() {
        return this.#grade;
    }

    get score() {
        return this.#score;
    }

    static convertToGrade(obj) {
        if (!ObjIsNull(obj)) {
            return new Grade(new Date(obj.date), obj.grade, obj.score);
        }
        return null;
    }

    static convertsToGrade(arr) {
        if (!ObjIsNull(arr)) {
            return arr.map(obj => this.convertToGrade(obj)).filter(grade => !ObjIsNull(grade));
        }
        return [];
    }
}
