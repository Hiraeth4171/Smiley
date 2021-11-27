class Event extends Base {
    constructor(options, duration, settings, people){
        super({ id: options.id, title: options.title, time: options.time, category: options.category, description: options.description, publicity: options.publicity });
        this.duration = duration;   // (Number) The duration of the event in ms 
        this.settings = settings;   // An object containing extra settings
        this.people = people;       // Array of people involved
    }

    static createJsonEvent(data) {
        Object.assign(this, data);
        return this;
    }
}

module.exports = Event;