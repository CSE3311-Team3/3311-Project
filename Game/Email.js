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
            var quest_num = Math.floor(Math.random() * 5);
            switch(quest_num){
                case 0:
                    return "./Phish_Emails/template1/email_template.html";
                case 1:
                    return "./Phish_Emails/template2/email_template2.html";
                case 2:
                    return "./Phish_Emails/template3/email_template3.html";
                case 3:
                    return "./Phish_Emails/template4/email_template4.html";
                case 4:
                    return "./Phish_Emails/template5/email_template5.html";
                default:
                    return "default Phish";
            }
        }
        else {
            var quest_num = Math.floor(Math.random() * 6) + 1; 
            // the "* #" portion will change as more real_emtail templates are added 
            switch(quest_num){
                case 1:
                    var Names = ["Woohoo", "Noodle", "InSee"];
                    var num = Math.floor(Math.random() * Names.length);
                    this.clues.push(Names[num]);
                    return "./Real_Emails/template" + quest_num + "/template" + quest_num +".html";
                case 2: 
                    var Names = ["Frozen", "Cheddar", "Embargo", "Safe"];
                    var num = Math.floor(Math.random() * Names.length);
                    this.clues.push(Names[num]);
                    return "./Real_Emails/template" + quest_num + "/template" + quest_num +".html";
                case 3:
                    var UserNames = ["Michael", "Leo", "Jacki", "David", "Penny"];
                    var serviceNames = ["BitTub", "DocuShare","PageWrite", "SnapEdit", "FileService"];
                    var documentNames = ["TaxReturns", "ProjectCharter","CoporateBudget", "Presentation"];
                    var num = Math.floor(Math.random() * UserNames.length);
                    this.clues.push(UserNames[num]);
                    num = Math.floor(Math.random() * serviceNames.length);
                    this.clues.push(serviceNames[num]);
                    num = Math.floor(Math.random() * documentNames.length);
                    this.clues.push(documentNames[num]);
                    return "./Real_Emails/template" + quest_num + "/template" + quest_num +".html";
                case 4:
                    return "./Real_Emails/template4/email_template4.html"
                case 5:
                    return "./Real_Emails/template5/email_template5.html"
                case 6:
                    return "./Real_Emails/template6/email_template6.html"
                default:
                    return "default Real";
            }
        } 
    }
}