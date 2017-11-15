
export default class Wine {

    id = 0;
    name;
    year;
    appelation;
    imageUrl;

    constructor(id, name, year, appelation, imageUrl) {
        this.id = id;
        this.name = name;
        this.year = year;
        this.appelation = appelation;
        this.imageUrl = imageUrl;
    }

}
