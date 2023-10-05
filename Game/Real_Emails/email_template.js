var TestQuestions;

window.addEventListener('load', () => {
  document.getElementById("check_activity_link").innerHTML = "blachdfadf";
  document.getElementById("check_activity_link").setAttribute("hoverText","Testing?")
  console.log(TestQuestions);
}) 

function change_iframeContent() {
  if(TestQuestions[QuestionNumber - 1].getPhish == true){
      const if_doc = document.getElementById("email_temp").contentWindow.document;
      if_doc.getElementById('check_activity_link').innerHTML("Bankai????");        
  }
}