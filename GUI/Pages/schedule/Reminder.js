class Reminder extends Base {
    constructor(title, time, category, description, publicity, settings, people){
        super(title,time,category,description, publicity);
    }
}

module.exports = Reminder;