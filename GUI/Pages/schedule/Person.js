class Person {
    constructor(name, icon, discordID, vip, bio, website = null){
        this.name = name;
        this.icon =  icon;
        this.discordID = discordID;
        this.vip = vip;
        this.bio = bio;
        this.website = website;     
    }

    save() {
        fs.writeFileSync("./data", JSON.stringify(this), 'utf8');
    }
}
