// Possible Email object class for the project

export class Email {
    constructor(receiver, sender) {
        this.receiver = receiver;
        this.sender = sender;
        this.date = new Date();
        this.phish = this.isReal();
        this.clues = [];
        this.source = this.determineSource();
    }
    
    get getSource() {
        return this.source;
    }

    get getPhish() {
        return this.phish;
    }

    get getClues() {
        return this.clues;
    }
    isReal(){
        // true == Email is real
        // false == Email is a Phish
        if(Math.floor(Math.random() * 2) == 1){
            return true;
        }
        else{
            return false;
        }
    }
    
    determineSource(){
        if (this.phish == false){
            var quest_num = Math.floor(Math.random() * 2);
            switch(quest_num){
                case 0:
                    return "./Phish_Emails/email_template.html";
                case 1:
                    return "./Phish_Emails/email_template2.html";
            }
        }
        else {
            var quest_num = Math.floor(Math.random() * 2) + 1; 
            // the "* #" portion will change as more real_emtail templates are added 
            switch(quest_num){
                case 1:
                    var Names = ["Woohoo", "Noodle", "InSee"];
                    var num = Math.floor(Math.random() * 3);
                    this.clues.push(Names[num]);
                    return "./Real_Emails/template" + quest_num + "/template" + quest_num +".html";
                case 2: 
                    var Names = ["Frozen", "Cheddar", "Embargo", "Safe"];
                    var num = Math.floor(Math.random() * 4);
                    this.clues.push(Names[num]);
                    return "./Real_Emails/template" + quest_num + "/template" + quest_num +".html";
                default:
                    return "default";
            }
        } 
    }
}