class Base {
    constructor(title, time, category, description, publicity){
        this.title = title;             // The title of the element
        this.time = time;               // The time (in ms) at which the element starts
        this.catagory = category;       // The category and coloring it falls under
        this.description = description; // The description of it
        this.publicity = publicity
    }
}

module.exports = Base;