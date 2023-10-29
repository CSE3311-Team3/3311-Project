// Possible Email object class for the project

export class Email {
	constructor(receiver, sender, phish_emails, real_emails) {
		this.receiver = receiver;
		this.sender = sender;
		this.date = new Date();
		this.phish = this.isReal(phish_emails, real_emails);
		this.clues = [];
		this.source = this.determineSource(phish_emails, real_emails);
		this.context;
		this.explanation;
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

	get getContext() {
		return this.context;
	}

	get getExplanation() {
		return this.explanation;
	}

	isReal(phish_emails, real_emails){
		// WILL NEED TO UPDATE NUMBERS AS NUMBER OF TEMPLATES CHANGE
		// true == Email is real
		// false == Email is a Phish
		if(Math.floor(Math.random() * 2) == 1 && phish_emails.length != 6){
			return true;
		}
		else if(Math.floor(Math.random() * 2) == 1 && phish_emails.length == 6){
			return false;
		}
		else if(Math.floor(Math.random() * 2) == 0 && real_emails.length != 7){
			return false;
		}
		else if(Math.floor(Math.random() * 2) == 0 && real_emails.length == 7){
			return true;
		}
		else {
            /* added this clause since sometimes, none of the if-conditions were being
            met which caused isReal() and getPhish() to return undefined. 
            we may have to redo the randomization a bit. */
			var rand_num = Math.floor(Math.random() * 1000);
			return (rand_num % 2 == 0);
		}
	}
    
	determineSource(phish_emails, real_emails){
		// console.log(this.phish);
		// console.log(phish_emails);
		// console.log(real_emails);
		if (this.phish == false){
			var quest_num = Math.floor(Math.random() * 6);
			while (phish_emails.find(o => o == quest_num)){
				quest_num += 1;
				if(quest_num == 6){
					quest_num = 0;
				}
			}
			//console.log(quest_num);
			switch(quest_num){
			case 0:
				phish_emails.push(quest_num);
				this.context = "Phish template 1 context";
				this.explanation = "Phish template 1 explanation";
				return "./Phish_Emails/template1/email_template.html";
			case 1:
				phish_emails.push(quest_num);
				this.context = "Phish template 2 context";
				this.explanation = "Phish template 2 explanation";
				return "./Phish_Emails/template2/email_template2.html";
			case 2:
				phish_emails.push(quest_num);
				this.context = "Phish template 3 context";
				this.explanation = "Phish template 3 explanation";
				return "./Phish_Emails/template3/email_template3.html";
			case 3:
				phish_emails.push(quest_num);
				this.context = "Phish template 4 context";
				this.explanation = "Phish template 4 explanation";
				return "./Phish_Emails/template4/email_template4.html";
			case 4:
				phish_emails.push(quest_num);
				this.context = "Phish template 5 context";
				this.explanation = "Phish template 5 explanation";
				return "./Phish_Emails/template5/email_template5.html";
			case 5:
				phish_emails.push(quest_num);
				this.context = "A company is emailing you about an opportunity to earn money through PayPal if you follow the directions provided in the links given.";
				this.explanation = "This is a phish email because the sender is telling you that you could possiby receive money through your PayPal account " 
                + "without explicitly letting you know the conditions required to receive that money. They have numerous links which they want you to first "
                + "click before getting more information about the supposed funds you could receive. Usually, when an unfamiliar sender wants you to click on a link to another "
                + "page before you can get a clear understanding of the content in their email, that page likely contains malware or may make data stored on your device vulnerable.";
				return "./Phish_Emails/template6/email_template6.html";
			default:
				return "default Phish";
			}
		}
		else {
			var quest_num = Math.floor(Math.random() * 7) + 1; 
			while (real_emails.find(o => o == quest_num)){
				quest_num += 1;
				if (quest_num == 8){
					quest_num = 0;
				}
			}
			//console.log(quest_num);
			// the "* #" portion will change as more real_emtail templates are added 
			switch(quest_num){
			case 1:
				real_emails.push(quest_num);
				// Arrays of possible Names to insert
				var Names = ["Overleaf", "Yahoo", "Outlook", "Google"];
				// Random Number to pick a name with
				var num = Math.floor(Math.random() * Names.length);
				// Push picked name into clues array
				this.clues.push(Names[num]);

				// Adding Context
				this.context = "You recently tried to login to " + this.clues[0] + " and quickly realized that you forgot your password."
                                    + "You started the process to reset your password 8 hours ago.";
				// Adding Explanation
				this.explanation = "Real template 1 explanation";

				//Return filepath for template
				return "./Real_Emails/template" + quest_num + "/template" + quest_num +".html";
			case 2: 
				real_emails.push(quest_num);
				var Names = ["Frost", "Bank of America", "Wells Fargo", "Chase"];
				var num = Math.floor(Math.random() * Names.length);
				this.clues.push(Names[num]);

				// Adding Context
				this.context = "You have an account from " + this.clues[0] + " and its the end of the monthly period.";
				// Adding Explanation
				this.explanation = "Real template 2 explanation";    
				return "./Real_Emails/template" + quest_num + "/template" + quest_num +".html";
			case 3:
				real_emails.push(quest_num);
				var UserNames = ["Michael", "Leo", "Jacki", "David", "Penny"];
				var serviceNames = ["Github", "DocuShare","PageWrite", "SnapEdit", "FileService"];
				var documentNames = ["ClassProject2", "ProjectCharter","CompanyBudget", "Presentation"];
				var num = Math.floor(Math.random() * UserNames.length);
				this.clues.push(UserNames[num]);
				num = Math.floor(Math.random() * serviceNames.length);
				this.clues.push(serviceNames[num]);
				num = Math.floor(Math.random() * documentNames.length);
				this.clues.push(documentNames[num]);

				// Adding Context
				this.context = "You were recently assigned on a team with " + this.clues[0] + " for an assignment. "
                                    + "The entire team decided to collaborate on the written documents through the " + this.clues[1] + " service.";
				// Adding Explanation
				this.explanation = "Real template 3 explanation";
				return "./Real_Emails/template" + quest_num + "/template" + quest_num +".html";
			case 4:
				real_emails.push(quest_num);
				// Adding Context
				this.context = "real template 4 context";
				// Adding Explanation
				this.explanation = "Real template 4 explanation";
				return "./Real_Emails/template4/email_template4.html"
			case 5:
				real_emails.push(quest_num);
				// Adding Context
				this.context = "real template 5 context"
				// Adding Explanation
				this.explanation = "Real template 5 explanation";
				return "./Real_Emails/template5/email_template5.html"
			case 6:
				real_emails.push(quest_num);
				// Adding Context
				this.context = "real template 6 context";
				// Adding Explanation
				this.explanation = "Real template 6 explanation";
				return "./Real_Emails/template6/email_template6.html"
			case 7:
				real_emails.push(quest_num);
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
                    
				// Adding Context
				this.context = "You have an email account with " + this.clues[0] + ", and they are letting you know of a new sign-in attempt on an unfamiliar device.";
				// Adding Explanation
				this.explanation = "This is a real email because the sender is using a legitimate email address for a reputable company, and the physical address shown on the bottom can be verified as well. "
                                    + "There are no misspellings or abnormal grammar usage, and the message conveyed is straight to the point. The link provided evidently leads to a page on the "
                                    + "company's website rather than a page on a website unrelated to the supposed sender.";
				return "./Real_Emails/template" + quest_num.toString() + "/template" + quest_num.toString() + ".html";
			default:
				return "default Real";
			}
		} 
	}
}