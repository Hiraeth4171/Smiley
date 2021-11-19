class Event extends Base {
    constructor(title, time, category, description, publicity, duration, settings, people){
        super(title,time,category,description, publicity);
    }
}

module.exports = Event;