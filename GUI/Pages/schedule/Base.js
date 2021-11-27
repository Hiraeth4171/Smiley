class Base {
    constructor(options){
        this.id = options.id;                   // The id of the element
        this.title = options.title;             // The title of the element
        this.time = options.time;               // The time (in ms) at which the element starts
        this.catagory = options.category;       // The category and coloring it falls under
        this.description = options.description; // The description of it
        this.publicity = options.publicity      // Decides weather or not others can see this element(when interacting with the bot)
    }
}

module.exports = Base;