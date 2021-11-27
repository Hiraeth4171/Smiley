class Reminder extends Base {
    constructor(options, settings, people) {
        super({ id: options.id, title: options.title, time: options.time, category: options.category, description: options.description, publicity: options.publicity });
        this.settings = settings;
        this.people = people;
    }
}

module.exports = Reminder;