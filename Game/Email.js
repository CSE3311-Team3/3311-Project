// Possible Email object class for the project

export class Email {
    constructor(receiver, sender) {
        this.receiver = receiver;
        this.sender = sender;
        this.date = new Date();
        this.phish = this.isPhish();
        this.source = this.determineSource();
    }
    
    get getSource() {
        return this.source;
    }

    isPhish(){
        //for testing purposes this function will only return false
        // coded out code will be the actual method
        return false;


        // if(Math.floor(Math.random() * 2) == 1){
        //     return true;
        // }
        // else{
        //     return false;
        // }
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
    }
}