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
            var quest_num = Math.floor(Math.random() * 3);
            switch(quest_num){
                case 0:
                    return "./Phish_Emails/email_template.html";
                case 1:
                    return "./Phish_Emails/email_template2.html";
                case 2:
                    return "./Phish_Emails/email_template3.html";
                default:
                    return "default Phish";
            }
        }
        else {
            var quest_num = Math.floor(Math.random() * 4) + 1; 
            // the "* #" portion will change as more real_emtail templates are added 
            switch(quest_num){
                case 1:
                    // Arrays of possible Names to insert
                    var Names = ["Woohoo", "Noodle", "InSee"];
                    // Random Number to pick a name with
                    var num = Math.floor(Math.random() * Names.length);
                    // Push picked name into clues array
                    this.clues.push(Names[num]);
                    //Return filepath for template
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
                    var company_names = ["Google","Yahoo","Microsoft","AOL"];
                    var email_names = ["gmail","yahoo","outlook","aol"];
                    var company_addresses = [
                        "1600 Amphitheatre Parkway, Mountain View, CA 94043, USA",
                        "701 1st Ave, Sunnyvale, CA 94089, USA",
                        "One Microsoft Way, Redmond, WA 98052, USA",
                        "770 Broadway, New York, NY 10003, USA"
                    ];
                    var receiver_names = ["jasondoe","johndoe","janedoe","joanadoe"];
                    var months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
                    var systems = ["Windows","Mac","Linux","Android","Apple iPhone"];
                    var meridiems = ["AM","PM"];
                    var times = ["12:20","1:45","2:50","3:15","4:32","5:56","6:07","7:11","8:48","9:10","10:28","11:59"];
                    var img_paths = ["images/google-logo.png","images/yahoo-logo.png","images/microsoft-logo.png","images/AOL-logo.jpeg"];
                    var num = Math.floor(Math.random() * company_names.length);
                    this.clues.push(company_names[num]);
                    this.clues.push(email_names[num]);
                    this.clues.push(company_addresses[num]);
                    this.clues.push(img_paths[num]);
                    num = Math.floor(Math.random() * receiver_names.length); 
                    this.clues.push(receiver_names[num]);
                    num = Math.floor(Math.random() * months.length); 
                    this.clues.push(months[num]);
                    num = Math.floor(Math.random() * times.length);
                    this.clues.push(times[num]);
                    num = Math.floor(Math.random() * systems.length);
                    this.clues.push(systems[num]);
                    num = Math.floor(Math.random() * meridiems.length);
                    this.clues.push(meridiems[num]);
                    var min = Math.ceil(2013);
                    var max = Math.floor(2024);
                    var year = Math.floor(Math.random() * (max-min) + min);
                    this.clues.push(year.toString());
                    min = Math.ceil(1);
                    if(months[num]==="Feb") {
                        if(year%4==0) {
                            max = Math.floor(30);
                        }
                        else {
                            max = Math.floor(29);
                        }
                    }
                    else if(months[num]==="Apr"
                            || months[num]==="Jun"
                            || months[num]==="Sep"
                            || months[num]==="Nov") {
                        max = Math.floor(31);
                    }
                    else {
                        max = Math.floor(32);
                    }
                    var day = Math.floor(Math.random() * (max-min) + min);
                    this.clues.push(day.toString());
                    
                    return "./Real_Emails/template" + quest_num.toString() + "/template" + quest_num.toString() + ".html";
                default:
                    return "default REal";
            }
        } 
    }
}