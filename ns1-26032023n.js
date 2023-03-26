
/*auto display calculating*/
// Here we convert JSON to question_fetchect

var questions_list = JSON.stringify(questions);
const question_fetch = JSON.parse(questions_list);

var div_qn_btn = document.querySelectorAll('#currentsection button');
var div_sol_wrpper = document.querySelectorAll('#after fieldset');
if (div_qn_btn.length > question_fetch.length) { // Check if there are extra div elements
  for (let i = question_fetch.length; i < div_qn_btn.length; i++) {
    div_qn_btn[i].style.display = 'none'; // Hide the extra div elements
    
  }
}
if (div_sol_wrpper.length > question_fetch.length) { // Check if there are extra div elements
  for (let ij = question_fetch.length; ij < div_sol_wrpper.length; ij++) {
    div_sol_wrpper[ij].style.display = 'none'; // Hide the extra div elements
    
  }
}
/*auto display calculating*/

/*direct navigationing*/
function shownavigationbtns(startIndex, endIndex) {
  for (let i = 0; i < div_qn_btn.length; i++) {
    if (i >= startIndex - 1 && i <= endIndex - 1) {
      divs[i].style.display = "block";
    } else {
      divs[i].style.display = "none";
    }
  }
}
/*direct navigationing*/
/*section coloring*/
function toggleActive(clickedButton,testsec_start) {
  // Remove "active" class from all buttons
  let allButtons = document.querySelectorAll(".secttion-button");
  allButtons.forEach(buttonp => {
    buttonp.classList.remove("active");
  });

  // Add "active" class to the clicked button
  clickedButton.classList.add("active");
  start(clickedButton,testsec_start);
}

/*offcanvas*/
var menuButton = document.querySelector('#menu-button');
var offcanvasMenu = document.querySelector('#offcanvas-menu');
var closeMenuButton = document.querySelector('#close-menu-button');

menuButton.addEventListener('click', function () {
  offcanvasMenu.classList.add('show');
  document.addEventListener('click', closeOffcanvasMenu);
});

closeMenuButton.addEventListener('click', function () {
  offcanvasMenu.classList.remove('show');
  document.removeEventListener('click', closeOffcanvasMenu);
});

function closeOffcanvasMenu(event) {
  if (!offcanvasMenu.contains(event.target) && event.target !== menuButton) {
    offcanvasMenu.classList.remove('show');
    document.removeEventListener('click', closeOffcanvasMenu);
  }
}
/*offcanvas*/
document.addEventListener("DOMContentLoaded", function() {
setTimeout(function(){
 document.getElementById("stbtn").innerHTML="Proceed";
  document.getElementById("please-wait-img").src="https://1.bp.blogspot.com/-JvU9dpiSBdw/YT21e7YUbUI/AAAAAAAAAG8/jKWuGx9DA1AZI7hLBYDcAHVH4NzkiiJCgCLcBGAsYHQ/s0/2930365.png";
  document.getElementById("please-wait-img").style.width="30%";
  document.getElementById("ins-wait-text").innerHTML='Your test is ready now.  Click on the "Proceed" button to start the test.';
  document.getElementById("stbtn").className="test-btn btn-success";
  }, 3000);
});

function startinstab() {
 setTimeout(function(){
 document.getElementById("login-real-test").style.display="none";
  document.getElementById("note_user").style.display="none";
  
  loadtest();}, 1000);
}

function gonext()
{
document.getElementById("instruction-rule-part-1st-page").style.display="none";
document.getElementById("instruction-rule-part-2nd-page").style.display="block";
window.scrollTo(0, 0);welcomeandinstructions();
}

function goprevious()
{
//document.getElementById("cand-img-name-container").style.cssFloat = "top";
document.getElementById("instruction-wrapper").style.display="block";
document.getElementById("instruction-rule-part-2nd-page").style.display="none";
document.getElementById("instruction-rule-part-1st-page").style.display="block";

}

function loadtest()
{
document.getElementById("instruction-rule-part-1st-page").style.display="block";
 document.getElementById("stbtn").style.display="none";
 document.getElementById("instruction-wrapper").style.display="block";
var ii;
document.getElementById("offcanvas-menu").style.display="";

 }

var MAX_TIME = ttpqns * question_fetch.length; //total time calculation for mocktest
  var practice_button_link = document.getElementById("practice-button-link");
var preparation_button_link = document.getElementById("preparation-button-link");
var view_explanation = document.getElementById("view_explanation");
var test_lang = document.getElementById("test_lang");
var test_number = document.getElementById("test_number");
var ex_name = document.getElementById("ex-name");
var sb_typo = document.getElementById("sb-typo");
var t_time = document.getElementById("t-time");
var t_mark = document.getElementById("t-mark");
var t_qn = document.getElementById("t-qn");
var n_mark = document.getElementById("n-mark");
var pr_qn_mark = document.getElementById("pr-qn-mark");
var atmpt_lmt = document.getElementById("atmpt-lmt");
var exam_test_subject = document.getElementById("exam_test_subject");
var positive_marks = document.getElementById("positive-marks");
var negative_marks = document.getElementById("negative-marks");
var secs1 = document.getElementById("secs1");
var secs5 = document.getElementById("secs5");
var secs6 = document.getElementById("secs6");
var ans,ntans,notv,rev,mrev;
var notVisit,answered,visited,score,wq,j,x=question_fetch.length;
var notVisit2,answered2,visited2,reviewed2,reviewedans2,notVisit3,answered3,visited3,reviewed3,reviewedans3,notVisit4,answered4,visited4,reviewed4,reviewedans4,notVisit5,answered5,visited5,reviewed5,reviewedans5,notVisit6,answered6,visited6reviewed6,reviewedans6,notVisit8,answered8,visited8,reviewed8,reviewedans8;
notVisit=0;answered=0;visited=0;reviewed=0;reviewedans=0;
notVisit2=0;answered2=0;visited2=0;reviewed2=0;reviewedans2=0;
notVisit3=0;answered3=0;visited3=0;reviewed3=0;reviewedans3=0;
notVisit4=0;answered4=0;visited4=0;reviewed4=0;reviewedans4=0;
notVisit5=0;answered5=0;visited5=0;reviewed5=0;reviewedans5=0;
notVisit6=0;answered6=0;visited6=0;reviewed6=0;reviewedans6=0;
notVisit8=0;answered8=0;visited8=0;reviewed8=0;reviewedans8=0;

  secs1.innerHTML = section1;
view_explanation.href=view_explanation_link;
document.getElementById("time_instructions").innerHTML=MAX_TIME/60;
ex_name.innerHTML= exam_name;
sb_typo.innerHTML= subject_name;

t_time.innerHTML=MAX_TIME/60 + " Minutes";
t_mark.innerHTML=question_fetch.length*Positive_number;
t_qn.innerHTML=question_fetch.length;
if(deductive_number==null){n_mark.innerHTML="No Mark Deducted for wrong QN.";negative_marks.innerHTML="00";}
if(deductive_number!=undefined){n_mark.innerHTML="-"+deductive_number+ "/QN.";negative_marks.innerHTML="-"+deductive_number+"";}
pr_qn_mark.innerHTML=  "+"+Positive_number + "/QN.";
atmpt_lmt.innerHTML= attemp_limitations;
test_lang.innerHTML=test_lang_avl;
if(test_lang_avl === "Hindi"){
document.getElementById("google_translate_element").style.display="none";
}

test_number.innerHTML=test_numbering;
document.getElementById("english-part").innerHTML=section1;
document.getElementById("view-all").innerHTML="View Solution";
//exam_test_subject.innerHTML=subject_name;
positive_marks.innerHTML="+" + Positive_number+".0";

let time = MAX_TIME; //second
let timerIntervalt;
let quizStarted = false;
let quizPaused = false;

function toggleQuiz() {
  if (!quizStarted) {
    // Start the quiz
    quizStarted = true;
    document.getElementById("quiz-button").innerHTML = "Pause";
    timerIntervalt = setInterval(updateTimer, 1000);
  } else if (quizPaused) {
    // Resume the quiz
    quizPaused = false;
    document.getElementById("quiz-button").innerHTML = "Pause";
    timerIntervalt = setInterval(updateTimer, 1000);
  } else {
    // Pause the quiz
    quizPaused = true;
    document.getElementById("quiz-button").innerHTML = "Resume";
    clearInterval(timerIntervalt);
  }
}

function updateTimer() {
  // Update the timer display
  let hours = Math.floor(time / 3600);
  let minutes = Math.floor((time % 3600) / 60);
  let seconds = time % 60;

  let timeString = hours + ":" + (minutes < 10 ? "0" : "") + minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  
  document.getElementById("timer").innerHTML = timeString;
  document.getElementById("test-time-left").innerHTML = timeString; 
  // Decrement the time
  time--;
  
  // Check if time is up
   if (time < 301) { // 5 minutes or less remaining
    document.getElementById("timer").style.Color = "red";
  }
   if (time <= 0) {
  clearInterval(timerIntervalt);
  quizStarted = false;
  submit();
  document.getElementById("timer").innerHTML = "Time's up!";
  }
}

function QuizTime (start, end){
let qt ='';
let timeDiff = end - start; //in ms
// strip the ms
timeDiff /= 1000;

// get seconds 
let  minutes = Math.round((timeDiff / 60));
let seconds = Math.round((timeDiff % 60));  
if (minutes > 0) {
if (minutes === 1) {
qt = qt + minutes + " min "
} else {
qt = qt + minutes + " min "
}

}
if (seconds > 0) {
qt = qt + seconds + " sec"
}

return qt;

}
var ibv=0;
var answerOptions = [];
var timer1=0;
var startTime = null ;
 var endTime ;  
function start(but,input){
document.body.scrollTop = 0;
document.documentElement.scrollTop = 0;
var checkBox = document.getElementById("myCheck");

if(checkBox.checked==true)
  {

function QuizTime (start, end){
let qt ='';
let timeDiff = end - start; //in ms
// strip the ms
timeDiff /= 1000;

// get seconds 
let  minutes = Math.round((timeDiff / 60));
let seconds = Math.round((timeDiff % 60));  
if (minutes > 0) {
if (minutes === 1) {
qt = qt + minutes + " Minute "
} else {
qt = qt + minutes + " Minutes "
}

}
if (seconds > 0) {
qt = qt + seconds + " Seconds"
}

return qt;

}


var i=0;ibv=i;
var headeract = document.getElementById("test-section3");
/*btn scn displ*/
document.getElementById("currentsection").style.display="block";
document.getElementById("pallate").style.display="block";
document.getElementById("test-qn-btn-pallete").style.display="block";
document.getElementById("instruction-wrapper").style.display="none";
document.getElementById("test-restartq").style.display="none";
document.getElementById("viewquestions").style.display="none";
document.getElementById("test-wrapper-container").style.display="block";
document.getElementById("test-congrat-message").style.display="none";
document.getElementById("after").style.display="none";
document.getElementById("viewquestions").style.display="none";
//document.getElementById("start1").style.display="none";
//document.getElementById("instruction").style.display="none";


if(input=="sec1")
{i=0;ibv=i;
//alert("rrryh");
document.getElementById("english-part").innerHTML=section1;
document.getElementById("english-part").className="english-part-activated";
//document.getElementById("test-section3").className="test-section1 enabled selected";
//document.getElementById("test-section1").className="test-section1  enabled";
//document.getElementById("test-section2").className="test-section1  enabled";

//runQ(90);
if (startTime === null) {  
 startTime = new Date();
 }
if(answerOptions[i]==undefined)
{

document.getElementById("ContactForm1_contact-form-email-message").value="My confusion in this Qn [" + (i+1)+"] " +question_fetch[i].gsx$question.$t+ "and Post link is "+ window.location.href+". Please check this Question.";
document.getElementById("qn-no-testp").innerHTML="<span id='test-question-number1'>"+(i+1)+"</span> ";
document.getElementById("test-questions").innerHTML="<span id='test-question-number'>"+(i+1)+"</span> "+question_fetch[i].gsx$question.$t;
document.getElementById("queims").src=question_fetch[i].gsx$qnimage.$t;
document.getElementById("opa").innerHTML=question_fetch[i].gsx$optiona.$t;
document.getElementById("opb").innerHTML=question_fetch[i].gsx$optionb.$t;
document.getElementById("opc").innerHTML=question_fetch[i].gsx$optionc.$t;
document.getElementById("opd").innerHTML=question_fetch[i].gsx$optiond.$t;
//document.getElementById("ope").innerHTML=question_fetch[i].gsx$optione.$t;

//document.getElementById("q41").className="notAnswered";//
document.getElementById("q"+(i+1)).className="notAnswered";
}
else
{
document.getElementById("ContactForm1_contact-form-email-message").value="My confusion in this Qn [" + (i+1) +"] " +question_fetch[i].gsx$question.$t+ "and Post link is "+ window.location.href+". Please check this Question.";
document.getElementById("qn-no-testp").innerHTML="<span id='test-question-number1'>"+(i+1)+"</span> ";
document.getElementById("test-questions").innerHTML="<span id='test-question-number'>"+(i+1)+"</span> "+question_fetch[i].gsx$question.$t;
document.getElementById("queims").src = question_fetch[i].gsx$qnimage.$t;
document.getElementById("opa").innerHTML=question_fetch[i].gsx$optiona.$t;
document.getElementById("opb").innerHTML=question_fetch[i].gsx$optionb.$t;
document.getElementById("opc").innerHTML=question_fetch[i].gsx$optionc.$t;
document.getElementById("opd").innerHTML=question_fetch[i].gsx$optiond.$t;
//document.getElementById("ope").innerHTML=question_fetch[i].gsx$optione.$t;

if(answerOptions[i]=="a")
{
document.getElementById("r1").checked = true;

}

if(answerOptions[i]=="b")
{
document.getElementById("r2").checked = true;

}

if(answerOptions[i]=="c")
{
document.getElementById("r3").checked = true;

}
if(answerOptions[i]=="d")
{
document.getElementById("r4").checked = true;

}
if(answerOptions[i]=="e")
{
document.getElementById("r5").checked = true;

}
}
var radios=document.getElementsByName("qu0");
if(radios[0].checked)
{
//alert("radio");
answerOptions[i]=radios[b].value;
document.getElementById("q1").className="answeredButton";

}
}

if(input=="sec2")
{i=10;ibv=i;
//alert("rrryh");
document.getElementById("english-part").innerHTML=section1;
document.getElementById("english-part").className="english-part-activated";
//document.getElementById("test-section3").className="test-section1 enabled selected";
//document.getElementById("test-section1").className="test-section1  enabled";
//document.getElementById("test-section2").className="test-section1  enabled";

if(answerOptions[i]==undefined)
{

document.getElementById("ContactForm1_contact-form-email-message").value="My confusion in this Qn [" + (i+1)+"] " +question_fetch[i].gsx$question.$t+ "and Post link is "+ window.location.href+". Please check this Question.";
document.getElementById("qn-no-testp").innerHTML="<span id='test-question-number1'>"+(i+1)+"</span> ";
document.getElementById("test-questions").innerHTML="<span id='test-question-number'>"+(i+1)+"</span> "+question_fetch[i].gsx$question.$t;
document.getElementById("queims").src=question_fetch[i].gsx$qnimage.$t;
document.getElementById("opa").innerHTML=question_fetch[i].gsx$optiona.$t;
document.getElementById("opb").innerHTML=question_fetch[i].gsx$optionb.$t;
document.getElementById("opc").innerHTML=question_fetch[i].gsx$optionc.$t;
document.getElementById("opd").innerHTML=question_fetch[i].gsx$optiond.$t;
//document.getElementById("ope").innerHTML=question_fetch[i].gsx$optione.$t;

//document.getElementById("q41").className="notAnswered";//
document.getElementById("q"+(i+1)).className="notAnswered";
}
else
{
document.getElementById("ContactForm1_contact-form-email-message").value="My confusion in this Qn [" + (i+1) +"] " +question_fetch[i].gsx$question.$t+ "and Post link is "+ window.location.href+". Please check this Question.";
document.getElementById("qn-no-testp").innerHTML="<span id='test-question-number1'>"+(i+1)+"</span> ";
document.getElementById("test-questions").innerHTML="<span id='test-question-number'>"+(i+1)+"</span> "+question_fetch[i].gsx$question.$t;
document.getElementById("queims").src = question_fetch[i].gsx$qnimage.$t;
document.getElementById("opa").innerHTML=question_fetch[i].gsx$optiona.$t;
document.getElementById("opb").innerHTML=question_fetch[i].gsx$optionb.$t;
document.getElementById("opc").innerHTML=question_fetch[i].gsx$optionc.$t;
document.getElementById("opd").innerHTML=question_fetch[i].gsx$optiond.$t;
//document.getElementById("ope").innerHTML=question_fetch[i].gsx$optione.$t;

if(answerOptions[i]=="a")
{
document.getElementById("r1").checked = true;

}

if(answerOptions[i]=="b")
{
document.getElementById("r2").checked = true;

}

if(answerOptions[i]=="c")
{
document.getElementById("r3").checked = true;

}
if(answerOptions[i]=="d")
{
document.getElementById("r4").checked = true;

}
if(answerOptions[i]=="e")
{
document.getElementById("r5").checked = true;

}
}
var radios=document.getElementsByName("qu0");
if(radios[0].checked)
{
//alert("radio");
answerOptions[i]=radios[b].value;
document.getElementById("q1").className="answeredButton";

}
}


if(input=="sec3")
{i=10;ibv=i;
//alert("rrryh");
document.getElementById("english-part").innerHTML=section1;
document.getElementById("english-part").className="english-part-activated";
//document.getElementById("test-section3").className="test-section1 enabled selected";
//document.getElementById("test-section1").className="test-section1  enabled";
//document.getElementById("test-section2").className="test-section1  enabled";

if(answerOptions[i]==undefined)
{

document.getElementById("ContactForm1_contact-form-email-message").value="My confusion in this Qn [" + (i+1)+"] " +question_fetch[i].gsx$question.$t+ "and Post link is "+ window.location.href+". Please check this Question.";
document.getElementById("qn-no-testp").innerHTML="<span id='test-question-number1'>"+(i+1)+"</span> ";
document.getElementById("test-questions").innerHTML="<span id='test-question-number'>"+(i+1)+"</span> "+question_fetch[i].gsx$question.$t;
document.getElementById("queims").src=question_fetch[i].gsx$qnimage.$t;
document.getElementById("opa").innerHTML=question_fetch[i].gsx$optiona.$t;
document.getElementById("opb").innerHTML=question_fetch[i].gsx$optionb.$t;
document.getElementById("opc").innerHTML=question_fetch[i].gsx$optionc.$t;
document.getElementById("opd").innerHTML=question_fetch[i].gsx$optiond.$t;
//document.getElementById("ope").innerHTML=question_fetch[i].gsx$optione.$t;

//document.getElementById("q41").className="notAnswered";//
document.getElementById("q"+(i+1)).className="notAnswered";
}
else
{
document.getElementById("ContactForm1_contact-form-email-message").value="My confusion in this Qn [" + (i+1) +"] " +question_fetch[i].gsx$question.$t+ "and Post link is "+ window.location.href+". Please check this Question.";
document.getElementById("qn-no-testp").innerHTML="<span id='test-question-number1'>"+(i+1)+"</span> ";
document.getElementById("test-questions").innerHTML="<span id='test-question-number'>"+(i+1)+"</span> "+question_fetch[i].gsx$question.$t;
document.getElementById("queims").src = question_fetch[i].gsx$qnimage.$t;
document.getElementById("opa").innerHTML=question_fetch[i].gsx$optiona.$t;
document.getElementById("opb").innerHTML=question_fetch[i].gsx$optionb.$t;
document.getElementById("opc").innerHTML=question_fetch[i].gsx$optionc.$t;
document.getElementById("opd").innerHTML=question_fetch[i].gsx$optiond.$t;
//document.getElementById("ope").innerHTML=question_fetch[i].gsx$optione.$t;

if(answerOptions[i]=="a")
{
document.getElementById("r1").checked = true;

}

if(answerOptions[i]=="b")
{
document.getElementById("r2").checked = true;

}

if(answerOptions[i]=="c")
{
document.getElementById("r3").checked = true;

}
if(answerOptions[i]=="d")
{
document.getElementById("r4").checked = true;

}
if(answerOptions[i]=="e")
{
document.getElementById("r5").checked = true;

}
}
var radios=document.getElementsByName("qu0");
if(radios[0].checked)
{
//alert("radio");
answerOptions[i]=radios[b].value;
document.getElementById("q1").className="answeredButton";

}
}


if(input=="sec4")
{i=10;ibv=i;
//alert("rrryh");
document.getElementById("english-part").innerHTML=section1;
document.getElementById("english-part").className="english-part-activated";
//document.getElementById("test-section3").className="test-section1 enabled selected";
//document.getElementById("test-section1").className="test-section1  enabled";
//document.getElementById("test-section2").className="test-section1  enabled";

if(answerOptions[i]==undefined)
{

document.getElementById("ContactForm1_contact-form-email-message").value="My confusion in this Qn [" + (i+1)+"] " +question_fetch[i].gsx$question.$t+ "and Post link is "+ window.location.href+". Please check this Question.";
document.getElementById("qn-no-testp").innerHTML="<span id='test-question-number1'>"+(i+1)+"</span> ";
document.getElementById("test-questions").innerHTML="<span id='test-question-number'>"+(i+1)+"</span> "+question_fetch[i].gsx$question.$t;
document.getElementById("queims").src=question_fetch[i].gsx$qnimage.$t;
document.getElementById("opa").innerHTML=question_fetch[i].gsx$optiona.$t;
document.getElementById("opb").innerHTML=question_fetch[i].gsx$optionb.$t;
document.getElementById("opc").innerHTML=question_fetch[i].gsx$optionc.$t;
document.getElementById("opd").innerHTML=question_fetch[i].gsx$optiond.$t;
//document.getElementById("ope").innerHTML=question_fetch[i].gsx$optione.$t;

//document.getElementById("q41").className="notAnswered";//
document.getElementById("q"+(i+1)).className="notAnswered";
}
else
{
document.getElementById("ContactForm1_contact-form-email-message").value="My confusion in this Qn [" + (i+1) +"] " +question_fetch[i].gsx$question.$t+ "and Post link is "+ window.location.href+". Please check this Question.";
document.getElementById("qn-no-testp").innerHTML="<span id='test-question-number1'>"+(i+1)+"</span> ";
document.getElementById("test-questions").innerHTML="<span id='test-question-number'>"+(i+1)+"</span> "+question_fetch[i].gsx$question.$t;
document.getElementById("queims").src = question_fetch[i].gsx$qnimage.$t;
document.getElementById("opa").innerHTML=question_fetch[i].gsx$optiona.$t;
document.getElementById("opb").innerHTML=question_fetch[i].gsx$optionb.$t;
document.getElementById("opc").innerHTML=question_fetch[i].gsx$optionc.$t;
document.getElementById("opd").innerHTML=question_fetch[i].gsx$optiond.$t;
//document.getElementById("ope").innerHTML=question_fetch[i].gsx$optione.$t;

if(answerOptions[i]=="a")
{
document.getElementById("r1").checked = true;

}

if(answerOptions[i]=="b")
{
document.getElementById("r2").checked = true;

}

if(answerOptions[i]=="c")
{
document.getElementById("r3").checked = true;

}
if(answerOptions[i]=="d")
{
document.getElementById("r4").checked = true;

}
if(answerOptions[i]=="e")
{
document.getElementById("r5").checked = true;

}
}
var radios=document.getElementsByName("qu0");
if(radios[0].checked)
{
//alert("radio");
answerOptions[i]=radios[b].value;
document.getElementById("q1").className="answeredButton";

}
}


count();
toggleQuiz();
toggleFullScreen();
}
else
{alert("Please accept terms and conditions before proceeding");}


}





function viewQuestions(vari)
{
var i,j,temp; i=0;
document.getElementById("candidate-imagecontainer").style.display="none";
document.getElementById("pallate").style.display="block";
document.getElementById("currentsection").style.display="block";
document.getElementById("test-congrat-message").style.display="none";
document.getElementById("test-qn-btn-pallete").style.display="block";

if(vari=="allqn")
{
j=0;temp=question_fetch.length;
document.getElementById("view-all").className="view-all-part-activated";
document.getElementById("viewquestions").style.display="block";
document.getElementById("viewquestions1").style.display="block";
document.getElementById("viewquestions2").style.display="block";
document.getElementById("viewquestions3").style.display="block";
}
while(j<temp)
{
document.getElementById("q"+i+"opa").style.color="black";
document.getElementById("q"+i+"opa").style.fontWeight="normal";
document.getElementById("q"+i+"opb").style.color="black";
document.getElementById("q"+i+"opb").style.fontWeight="normal";
document.getElementById("q"+i+"opc").style.color="black";
document.getElementById("q"+i+"opc").style.fontWeight="normal";
document.getElementById("q"+i+"opd").style.color="black";
document.getElementById("q"+i+"opd").style.fontWeight="normal";
//document.getElementById("q"+i+"ope").style.color="black";
//document.getElementById("q"+i+"ope").style.fontWeight="normal";

//alert("Hai");
document.getElementById("que"+i).innerHTML="<span id='test-question-number'>"+(j+1)+"</span> "+question_fetch[j].gsx$question.$t;
if(question_fetch[j].gsx$qnimage.$t==""){document.getElementById("qnimages"+i+"ragini").style.display="none";}
document.getElementById("qnimages"+i+"ragini").innerHTML="<img id='"+"qnproperties'"+ "src='"+question_fetch[j].gsx$qnimage.$t+"'>";
document.getElementById("q"+i+"opa").innerHTML=question_fetch[j].gsx$optiona.$t;
document.getElementById("q"+i+"opb").innerHTML=question_fetch[j].gsx$optionb.$t;
document.getElementById("q"+i+"opc").innerHTML=question_fetch[j].gsx$optionc.$t;
document.getElementById("q"+i+"opd").innerHTML=question_fetch[j].gsx$optiond.$t;
document.getElementById("solution-border"+i+"sk").innerHTML=question_fetch[j].gsx$qnsolution.$t;
document.getElementById("ans-txt"+i+"sk").innerHTML="Correct answer is [" + question_fetch[j].gsx$answer.$t + "]";
//document.getElementById("q"+i+"ope").innerHTML=question_fetch[j].gsx$optione.$t;
//document.getElementById("q1opa").innerHTML="new";


if(answerOptions[j]==question_fetch[j].gsx$answer.$t && answerOptions[j]!=undefined && document.getElementById("q"+(j+1)).className=="answeredButton")
{document.getElementById("qstatus"+i).innerHTML="Correct";
document.getElementById("view-selected"+i+answerOptions[j]).checked = true;
document.getElementById("view-selected"+i+"a").disabled = true;
document.getElementById("view-selected"+i+"b").disabled = true;
document.getElementById("view-selected"+i+"c").disabled = true;
document.getElementById("view-selected"+i+"d").disabled = true;
document.getElementById("view-selected"+i+answerOptions[j]).disabled = false;
document.getElementById("qstatus"+i).style.display="block";
document.getElementById("qstatus"+i).style.color="#fff";
document.getElementById("qstatus"+i).className="question-legend correct";
document.getElementById("lbl"+answerOptions[j]+i).style.border = "1px solid #389B10";
document.getElementById("lbl"+answerOptions[j]+i).style.borderLeftWidth = "5px";
document.getElementById("lbl"+answerOptions[j]+i).style.backgroundColor = "#F4D4DA";
document.getElementById("q"+i+"op"+answerOptions[j]).style.color = "red";
document.getElementById("q"+i+"op"+answerOptions[j]).style.fontWeight = "bold";
//document.getElementById("r1").checked = true;
}
else if(answerOptions[j]==question_fetch[j].gsx$answer.$t && answerOptions[j]!=undefined && document.getElementById("q"+(j+1)).className=="markReview")
{document.getElementById("qstatus"+i).innerHTML="Reviewed,answered and Correct";
document.getElementById("view-selected"+i+answerOptions[j]).checked = true;
document.getElementById("view-selected"+i+"a").disabled = true;
document.getElementById("view-selected"+i+"b").disabled = true;
document.getElementById("view-selected"+i+"c").disabled = true;
document.getElementById("view-selected"+i+"d").disabled = true;
document.getElementById("view-selected"+i+answerOptions[j]).disabled = false;
document.getElementById("qstatus"+i).style.display="block";
document.getElementById("qstatus"+i).style.color="#fff";
document.getElementById("qstatus"+i).className="question-legend rvdc";
document.getElementById("lbl"+answerOptions[j]+i).style.border = "1px solid #389B10";
document.getElementById("lbl"+answerOptions[j]+i).style.borderLeftWidth = "5px";
document.getElementById("lbl"+answerOptions[j]+i).style.backgroundColor = "#F4D4DA";
document.getElementById("q"+i+"op"+answerOptions[j]).style.color = "red";
document.getElementById("q"+i+"op"+answerOptions[j]).style.fontWeight = "bold";
}
else if(answerOptions[j]!=question_fetch[j].gsx$answer.$t && answerOptions[j]!=undefined && document.getElementById("q"+(j+1)).className=="markReview")
 {
 document.getElementById("qstatus"+i).innerHTML="Reviewed,answered and Wrong";
 document.getElementById("view-selected"+i+answerOptions[j]).checked = true;
 document.getElementById("view-selected"+i+"a").disabled = true;
 document.getElementById("view-selected"+i+"b").disabled = true;
 document.getElementById("view-selected"+i+"c").disabled = true;
 document.getElementById("view-selected"+i+"d").disabled = true;
 document.getElementById("view-selected"+i+answerOptions[j]).disabled = false;
 document.getElementById("qstatus"+i).style.display="block";
 document.getElementById("qstatus"+i).style.color="#fff";
 document.getElementById("qstatus"+i).className="question-legend rvdw";
 document.getElementById("lbl"+answerOptions[j]+i).style.border = "1px solid red";
 document.getElementById("lbl"+answerOptions[j]+i).style.borderLeftWidth = "5px";
 document.getElementById("lbl"+answerOptions[j]+i).style.backgroundColor = "#F4D4DA";
 document.getElementById("q"+i+"op"+answerOptions[j]).style.color = "red";
 document.getElementById("q"+i+"op"+answerOptions[j]).style.fontWeight = "bold";
 
}
else if(answerOptions[j]!=question_fetch[j].gsx$answer.$t && answerOptions[j]!=undefined && document.getElementById("q"+(j+1)).className=="answeredButton")
{
document.getElementById("qstatus"+i).innerHTML="Wrong";
document.getElementById("view-selected"+i+answerOptions[j]).checked = true;
document.getElementById("view-selected"+i+"a").disabled = true;
document.getElementById("view-selected"+i+"b").disabled = true;
document.getElementById("view-selected"+i+"c").disabled = true;
document.getElementById("view-selected"+i+"d").disabled = true;
document.getElementById("view-selected"+i+answerOptions[j]).disabled = false;
document.getElementById("qstatus"+i).style.display="block";
document.getElementById("qstatus"+i).style.color="#fff";
document.getElementById("qstatus"+i).className="question-legend wrong";
document.getElementById("lbl"+answerOptions[j]+i).style.border = "1px solid red";
document.getElementById("lbl"+answerOptions[j]+i).style.borderLeftWidth = "5px";
document.getElementById("lbl"+answerOptions[j]+i).style.backgroundColor = "#F4D4DA";
document.getElementById("q"+i+"op"+answerOptions[j]).style.color = "red";
document.getElementById("q"+i+"op"+answerOptions[j]).style.fontWeight = "bold";
}
else if(answerOptions[j]==undefined && document.getElementById("q"+(j+1)).className=="review") {
document.getElementById("qstatus"+i).className="question-legend not";
document.getElementById("qstatus"+i).style.BackgroundColor="#ccc";
document.getElementById("qstatus"+i).innerHTML="Reviewed only"
 document.getElementById("qstatus"+i).className="question-legend rvd";
document.getElementById("qstatus"+i).style.display="block";
document.getElementById("qstatus"+i).style.color="#111";
document.getElementById("view-selected"+i+"a").disabled = true;
document.getElementById("view-selected"+i+"b").disabled = true;
document.getElementById("view-selected"+i+"c").disabled = true;
document.getElementById("view-selected"+i+"d").disabled = true;

}

else{
document.getElementById("qstatus"+i).className="question-legend not";
document.getElementById("qstatus"+i).style.BackgroundColor="#ccc";
document.getElementById("qstatus"+i).innerHTML="Not Attempted"
document.getElementById("qstatus"+i).style.display="block";
document.getElementById("qstatus"+i).style.color="#111";
document.getElementById("view-selected"+i+"a").disabled = true;
document.getElementById("view-selected"+i+"b").disabled = true;
document.getElementById("view-selected"+i+"c").disabled = true;
document.getElementById("view-selected"+i+"d").disabled = true;

}


if(question_fetch[j].gsx$answer.$t=="a") 
{
document.getElementById("lbla"+i).style.border = "1px solid #389B10";
document.getElementById("lbla"+i).style.backgroundColor = "#E1F4DE";
document.getElementById("q"+i+"opa").style.color = "#389B10";
document.getElementById("q"+i+"opa").style.fontWeight = "bold";

}
else if(question_fetch[j].gsx$answer.$t=="b") 
{
document.getElementById("lblb"+i).style.border = "1px solid #389B10";
document.getElementById("lblb"+i).style.backgroundColor = "#E1F4DE";
document.getElementById("q"+i+"opb").style.color = "#389B10";
document.getElementById("q"+i+"opb").style.fontWeight = "bold";
}
else if(question_fetch[j].gsx$answer.$t=="c") 
{
document.getElementById("lblc"+i).style.border = "1px solid #389B10";
document.getElementById("lblc"+i).style.backgroundColor = "#E1F4DE";
document.getElementById("q"+i+"opc").style.color = "#389B10";
document.getElementById("q"+i+"opc").style.fontWeight = "bold";
}
else if(question_fetch[j].gsx$answer.$t=="d") 
{
document.getElementById("lbld"+i).style.border = "1px solid #389B10";
document.getElementById("lbld"+i).style.backgroundColor = "#E1F4DE";
document.getElementById("q"+i+"opd").style.color = "green";
document.getElementById("q"+i+"opd").style.fontWeight = "bold";
}
else if(question_fetch[j].gsx$answer.$t=="e") 
{
//document.getElementById("lble"+i).style.border = "1px solid #389B10";
//document.getElementById("lble"+i).style.backgroundColor = "#E1F4DE";
//document.getElementById("q"+i+"ope").style.color = "green";
//document.getElementById("q"+i+"ope").style.fontWeight = "bold";

}

i++;
j++;

}


}



function clear()
{
//alert("CLEAR");
document.getElementById("r1").checked = false;
document.getElementById("r2").checked = false;
document.getElementById("r3").checked = false;
document.getElementById("r4").checked = false;
//document.getElementById("r5").checked = false;

//var ele = document.getElementsByName("qu0");
 // for(var c=0;i<ele.length;c++)
   //{  ele[c].checked = false;}
}

function navigateCurrentQuestion(button, ques)
{

ibv=ques;
if(answerOptions[ques]==undefined)
{
clear();

//("value: "+button);
document.getElementById("ContactForm1_contact-form-email-message").value="My confusion in this Qn [" + (ibv+1) +"] " +question_fetch[ibv].gsx$question.$t+ "and Post link is "+ window.location.href+". Please check this Question.";
document.getElementById("qn-no-testp").innerHTML="<span id='test-question-number1'>"+(ibv+1)+"</span> ";
document.getElementById("test-questions").innerHTML="<span id='test-question-number'>"+(ibv+1)+"</span> "+question_fetch[ibv].gsx$question.$t;
document.getElementById("queims").src=question_fetch[ibv].gsx$qnimage.$t;
document.getElementById("opa").innerHTML=question_fetch[ibv].gsx$optiona.$t;
document.getElementById("opb").innerHTML=question_fetch[ibv].gsx$optionb.$t;
document.getElementById("opc").innerHTML=question_fetch[ibv].gsx$optionc.$t;
document.getElementById("opd").innerHTML=question_fetch[ibv].gsx$optiond.$t;
//document.getElementById("ope").innerHTML=question_fetch[ibv].gsx$optione.$t;
if(button.className!="review"){
button.className="notAnswered";}
//var radios=document.getElementsByName("qu0");

}
else
{
//alert("value2: "+button);
document.getElementById("ContactForm1_contact-form-email-message").value="My confusion in this Qn [" + (ibv+1) +"] " +question_fetch[ibv].gsx$question.$t+ "and Post link is "+ window.location.href+". Please check this Question.";
document.getElementById("qn-no-testp").innerHTML="<span id='test-question-number1'>"+(ibv+1)+"</span> ";
document.getElementById("test-questions").innerHTML="<span id='test-question-number'>"+(ibv+1)+"</span> "+question_fetch[ibv].gsx$question.$t;
document.getElementById("queims").src=question_fetch[ibv].gsx$qnimage.$t;
document.getElementById("opa").innerHTML=question_fetch[ibv].gsx$optiona.$t;
document.getElementById("opb").innerHTML=question_fetch[ibv].gsx$optionb.$t;
document.getElementById("opc").innerHTML=question_fetch[ibv].gsx$optionc.$t;
document.getElementById("opd").innerHTML=question_fetch[ibv].gsx$optiond.$t;
//document.getElementById("ope").innerHTML=question_fetch[ibv].gsx$optione.$t;
//button.className="notAnswered";

if(answerOptions[ques]=="a")
{
document.getElementById("r1").checked = true;

}

if(answerOptions[ques]=="b")
{
document.getElementById("r2").checked = true;

}

if(answerOptions[ques]=="c")
{
document.getElementById("r3").checked = true;

}
if(answerOptions[ques]=="d")
{
document.getElementById("r4").checked = true;

}
if(answerOptions[ques]=="e")
{
document.getElementById("r5").checked = true;
}}count();}

function count()
{
var totalqn = question_fetch.length;

ans=0;ntans=0;notv=0;rev=0;mrev=0;
for(i=0;i<totalqn;i++)
{
if(document.getElementById("q"+(i+1)).className=="notAnswered")
{
ntans++;
}
else if(document.getElementById("q"+(i+1)).className=="answeredButton")
{
ans++;
}
else if(document.getElementById("q"+(i+1)).className=="notVisited")
{
notv++;
}
else if(document.getElementById("q"+(i+1)).className=="review")
{
rev++;
}
else if(document.getElementById("q"+(i+1)).className=="markReview")
{
mrev++;
}
}
document.getElementById("answered_count").innerHTML=ans;
document.getElementById("unanswered_count").innerHTML=ntans;
document.getElementById("notvisited_count").innerHTML=notv;
document.getElementById("bookmarked_count").innerHTML=rev;
document.getElementById("ans_bookmarked_count").innerHTML=mrev;


document.getElementById("test-qn-attempted").innerHTML=ans;
document.getElementById("test-qn-unattempted").innerHTML=ntans;
document.getElementById("test-qn-review").innerHTML=rev;
document.getElementById("test-qn-markreview").innerHTML=mrev;




}





function saveNext()
{
if(ibv>-1){
document.getElementById("Prev").disabled="";
document.getElementById("Prev").style.color="red";

}
if(ibv>question_fetch.length-1)
{//alert("value"+i);
ibv=question_fetch.length-1;
document.getElementById("next").disabled="true";    
  autosubmitpop();  
    }

if(answerOptions[ibv]==undefined||answerOptions[ibv]!=undefined)
{
var b,a=document.getElementsByName("qu0").length;
var radios=document.getElementsByName("qu0");
for(b=0;b<a;b++)
{
if(radios[b].checked)
{
//alert("radio" +radios[b].value);
answerOptions[ibv]=radios[b].value;
document.getElementById("q"+(ibv+1)).className="answeredButton";
}
}


ibv++;
if(answerOptions[ibv]==undefined)
{
//alert("value:intest-qn-btn-nv-side undefine "+i);
document.getElementById("ContactForm1_contact-form-email-message").value="My confusion in this Qn [" + (ibv+1) +"] " +question_fetch[ibv].gsx$question.$t+ "and Post link is "+ window.location.href+". Please check this Question.";
document.getElementById("qn-no-testp").innerHTML="<span id='test-question-number1'>"+(ibv+1)+"</span> ";
document.getElementById("test-questions").innerHTML="<span id='test-question-number'>"+(ibv+1)+"</span> "+question_fetch[ibv].gsx$question.$t;
document.getElementById("queims").src=question_fetch[ibv].gsx$qnimage.$t;
document.getElementById("opa").innerHTML=question_fetch[ibv].gsx$optiona.$t;
document.getElementById("opb").innerHTML=question_fetch[ibv].gsx$optionb.$t;
document.getElementById("opc").innerHTML=question_fetch[ibv].gsx$optionc.$t;
document.getElementById("opd").innerHTML=question_fetch[ibv].gsx$optiond.$t;
//document.getElementById("ope").innerHTML=question_fetch[ibv].gsx$optione.$t;

if(document.getElementById("q"+(ibv+1)).className=="review" || document.getElementById("q"+(ibv+1)).className=="markReview"){}else{

document.getElementById("q"+(ibv+1)).className="notAnswered";}
if(document.getElementById("q"+(ibv)).className=="review")
{
document.getElementById("q"+(ibv)).className="notAnswered";
}

clear();
}
else
{
document.getElementById("ContactForm1_contact-form-email-message").value="My confusion in this Qn [" + (ibv+1) +"] " +question_fetch[ibv].gsx$question.$t+ "and Post link is "+ window.location.href+". Please check this Question.";
document.getElementById("qn-no-testp").innerHTML="<span id='test-question-number1'>"+(ibv+1)+"</span> ";
document.getElementById("test-questions").innerHTML="<span id='test-question-number'>"+(ibv+1)+"</span> "+question_fetch[ibv].gsx$question.$t;
document.getElementById("queims").src=question_fetch[ibv].gsx$qnimage.$t;
document.getElementById("opa").innerHTML=question_fetch[ibv].gsx$optiona.$t;
document.getElementById("opb").innerHTML=question_fetch[ibv].gsx$optionb.$t;
document.getElementById("opc").innerHTML=question_fetch[ibv].gsx$optionc.$t;
document.getElementById("opd").innerHTML=question_fetch[ibv].gsx$optiond.$t;

//document.getElementById("ope").innerHTML=question_fetch[ibv].gsx$optione.$t;
if(answerOptions[ibv]=="a")
{
document.getElementById("r1").checked = true;

}
if(answerOptions[ibv]=="b")
{
document.getElementById("r2").checked = true;

}

if(answerOptions[ibv]=="c")
{
document.getElementById("r3").checked = true;

}
if(answerOptions[ibv]=="d")
{
document.getElementById("r4").checked = true;

}
if(answerOptions[ibv]=="e")
{
document.getElementById("r5").checked = true;

}
//document.getElementById("q"+(ibv+1)).className="answeredButton";

}

//i++;

}
else if(answerOptions[ibv+1]==undefined)
{

ibv++;
//alert("value:ibv+1undefine "+i);
document.getElementById("ContactForm1_contact-form-email-message").value="My confusion in this Qn [" + (ibv+1) +"] " +question_fetch[ibv].gsx$question.$t+ "and Post link is "+ window.location.href+". Please check this Question.";
document.getElementById("qn-no-testp").innerHTML="<span id='test-question-number1'>"+(ibv+1)+"</span> ";
document.getElementById("test-questions").innerHTML="<span id='test-question-number'>"+(ibv+1)+"</span> "+question_fetch[ibv].gsx$question.$t;
document.getElementById("queims").src=question_fetch[ibv].gsx$qnimage.$t;
document.getElementById("opa").innerHTML=question_fetch[ibv].gsx$optiona.$t;
document.getElementById("opb").innerHTML=question_fetch[ibv].gsx$optionb.$t;
document.getElementById("opc").innerHTML=question_fetch[ibv].gsx$optionc.$t;
document.getElementById("opd").innerHTML=question_fetch[ibv].gsx$optiond.$t;
//document.getElementById("ope").innerHTML=question_fetch[ibv].gsx$optione.$t;
if(document.getElementById("q"+(ibv+1)).className=="review" || document.getElementById("q"+(ibv+1)).className=="markReview"){}else{
document.getElementById("q"+(ibv+1)).className="notAnswered";}

if(document.getElementById("q"+(ibv)).className=="markReview")
{
document.getElementById("q"+(ibv)).className="answeredButton";
}

//i++;
clear();

}



else
{
ibv++;
//alert("else"+ibv);
document.getElementById("ContactForm1_contact-form-email-message").value="My confusion in this Qn [" + (ibv+1) +"] " +question_fetch[ibv].gsx$question.$t+ "and Post link is "+ window.location.href+". Please check this Question.";
document.getElementById("qn-no-testp").innerHTML="<span id='test-question-number1'>"+(ibv+1)+"</span> ";
document.getElementById("test-questions").innerHTML="<span id='test-question-number'>"+(ibv+1)+"</span> "+question_fetch[ibv].gsx$question.$t;
document.getElementById("queims").src=question_fetch[ibv].gsx$qnimage.$t;
document.getElementById("opa").innerHTML=question_fetch[ibv].gsx$optiona.$t;
document.getElementById("opb").innerHTML=question_fetch[ibv].gsx$optionb.$t;
document.getElementById("opc").innerHTML=question_fetch[ibv].gsx$optionc.$t;
document.getElementById("opd").innerHTML=question_fetch[ibv].gsx$optiond.$t;
//document.getElementById("ope").innerHTML=question_fetch[ibv].gsx$optione.$t;
//document.getElementById("q"+(ibv+1)).className="notAnswered";
document.getElementById("q"+(ibv)).className="answeredButton";

if(answerOptions[ques]=="b")
{
document.getElementById("r2").checked = true;

}

if(answerOptions[ques]=="c")
{
document.getElementById("r3").checked = true;

}
if(answerOptions[ques]=="d")
{
document.getElementById("r4").checked = true;

}
if(answerOptions[ibv]=="e")
{
document.getElementById("r5").checked = true;

}
//alert("else1");


 }
 
 //change section show during navigate qn
if(ibv>0&&ibv<100)
 {
document.getElementById("english-part").className="english-part-activated";
 
 }

count();

}


//function Previous

function pre()
{
//if(ibv>=question_fetch.length-1){ibv=question_fetch.length-1;alert("value"+ibv);}
if(ibv<question_fetch.length){
document.getElementById("next").disabled="";
document.getElementById("Prev").style.color="red";

}


if(ibv<2 ||ibv>question_fetch.length-1)
{
document.getElementById("Prev").style.color="#ccc";

//alert("value"+ibv);
}

if(answerOptions[ibv]==undefined)
{
var b,a=document.getElementsByName("qu0").length;
var radios=document.getElementsByName("qu0");
for(b=0;b<a;b++)
{
if(radios[b].checked)
{
//alert("radio" +radios[b].value);
answerOptions[ibv]=radios[b].value;
if(document.getElementById("q"+(ibv+1)).className=="markReview")
{
document.getElementById("q"+(ibv+1)).className="review";
}
else 
{
document.getElementById("q"+(ibv+1)).className="answeredButton";
}
}
}


ibv--;
if(answerOptions[ibv]==undefined)
{
//alert("value:inside undefine "+i);
document.getElementById("ContactForm1_contact-form-email-message").value="My confusion in this Qn [" + (ibv+1) +"] " +question_fetch[ibv].gsx$question.$t+ "and Post link is "+ window.location.href+". Please check this Question.";
document.getElementById("qn-no-testp").innerHTML="<span id='test-question-number1'>"+(ibv+1)+"</span> ";
document.getElementById("test-questions").innerHTML="<span id='test-question-number'>"+(ibv+1)+"</span> "+question_fetch[ibv].gsx$question.$t;
document.getElementById("queims").src=question_fetch[ibv].gsx$qnimage.$t;
document.getElementById("opa").innerHTML=question_fetch[ibv].gsx$optiona.$t;
document.getElementById("opb").innerHTML=question_fetch[ibv].gsx$optionb.$t;
document.getElementById("opc").innerHTML=question_fetch[ibv].gsx$optionc.$t;
document.getElementById("opd").innerHTML=question_fetch[ibv].gsx$optiond.$t;
//document.getElementById("ope").innerHTML=question_fetch[ibv].gsx$optione.$t;

if(document.getElementById("q"+(ibv+1)).className=="review" || document.getElementById("q"+(ibv+1)).className=="markReview"){}else{

document.getElementById("q"+(ibv+1)).className="notAnswered";}
if(document.getElementById("q"+(ibv)).className=="review")
{
document.getElementById("q"+(ibv)).className="notAnswered";
}

clear();
}
else
{
document.getElementById("ContactForm1_contact-form-email-message").value="My confusion in this Qn [" + (ibv+1) +"] " +question_fetch[ibv].gsx$question.$t+ "and Post link is "+ window.location.href+". Please check this Question.";
document.getElementById("qn-no-testp").innerHTML="<span id='test-question-number1'>"+(ibv+1)+"</span> ";
document.getElementById("test-questions").innerHTML="<span id='test-question-number'>"+(ibv+1)+"</span> "+question_fetch[ibv].gsx$question.$t;
document.getElementById("queims").src=question_fetch[ibv].gsx$qnimage.$t;
document.getElementById("opa").innerHTML=question_fetch[ibv].gsx$optiona.$t;
document.getElementById("opb").innerHTML=question_fetch[ibv].gsx$optionb.$t;
document.getElementById("opc").innerHTML=question_fetch[ibv].gsx$optionc.$t;
document.getElementById("opd").innerHTML=question_fetch[ibv].gsx$optiond.$t;

//document.getElementById("ope").innerHTML=question_fetch[ibv].gsx$optione.$t;
if(answerOptions[ibv]=="a")
{
document.getElementById("r1").checked = true;

}
if(answerOptions[ibv]=="b")
{
document.getElementById("r2").checked = true;

}

if(answerOptions[ibv]=="c")
{
document.getElementById("r3").checked = true;

}
if(answerOptions[ibv]=="d")
{
document.getElementById("r4").checked = true;

}
if(answerOptions[ibv]=="e")
{
document.getElementById("r5").checked = true;

}
//document.getElementById("q"+(ibv+1)).className="answeredButton";

}

//i++;

}
else if(answerOptions[ibv-1]==undefined)
{

ibv--;
//alert("value:ibv+1undefine "+i);
document.getElementById("ContactForm1_contact-form-email-message").value="My confusion in this Qn [" + (ibv+1) +"] " +question_fetch[ibv].gsx$question.$t+ "and Post link is "+ window.location.href+". Please check this Question.";
document.getElementById("qn-no-testp").innerHTML="<span id='test-question-number1'>"+(ibv+1)+"</span> ";
document.getElementById("test-questions").innerHTML="<span id='test-question-number'>"+(ibv+1)+"</span> "+question_fetch[ibv].gsx$question.$t;
document.getElementById("queims").src=question_fetch[ibv].gsx$qnimage.$t;
document.getElementById("opa").innerHTML=question_fetch[ibv].gsx$optiona.$t;
document.getElementById("opb").innerHTML=question_fetch[ibv].gsx$optionb.$t;
document.getElementById("opc").innerHTML=question_fetch[ibv].gsx$optionc.$t;
document.getElementById("opd").innerHTML=question_fetch[ibv].gsx$optiond.$t;
//document.getElementById("ope").innerHTML=question_fetch[ibv].gsx$optione.$t;
/*if(document.getElementById("q"+(ibv+1)).className=="review" || document.getElementById("q"+(ibv+1)).className=="markReview"){}else{
document.getElementById("q"+(ibv+1)).className="notAnswered";}

if(document.getElementById("q"+(ibv)).className=="markReview")
{
document.getElementById("q"+(ibv)).className="answeredButton";
}*/

//i++;
clear();

}



else
{
ibv--;
//alert("else"+ibv);
document.getElementById("ContactForm1_contact-form-email-message").value="My confusion in this Qn [" + (ibv+1) +"] " +question_fetch[ibv].gsx$question.$t+ "and Post link is "+ window.location.href+". Please check this Question.";
document.getElementById("qn-no-testp").innerHTML="<span id='test-question-number1'>"+(ibv+1)+"</span> ";
document.getElementById("test-questions").innerHTML="<span id='test-question-number'>"+(ibv+1)+"</span> "+question_fetch[ibv].gsx$question.$t;
document.getElementById("queims").src=question_fetch[ibv].gsx$qnimage.$t;
document.getElementById("opa").innerHTML=question_fetch[ibv].gsx$optiona.$t;
document.getElementById("opb").innerHTML=question_fetch[ibv].gsx$optionb.$t;
document.getElementById("opc").innerHTML=question_fetch[ibv].gsx$optionc.$t;
document.getElementById("opd").innerHTML=question_fetch[ibv].gsx$optiond.$t;
//document.getElementById("ope").innerHTML=question_fetch[ibv].gsx$optione.$t;
//document.getElementById("q"+(ibv+1)).className="notAnswered";
//document.getElementById("q"+(ibv)).className="answeredButton";

//alert("else"+ibv);
//alert("s"+document.getElementById("q"+(ibv+2)).className);

if(document.getElementById("q"+(ibv+2)).className=="markReview")
{
//alert("else hhh"+ibv);

document.getElementById("q"+(ibv+2)).className="markReview";

}

else if(document.getElementById("q"+(ibv+2)).className=="notAnswered")
{
document.getElementById("q"+(ibv+2)).className="answeredButton";
}



if(answerOptions[ibv]=="b")
{
document.getElementById("r2").checked = true;

}

if(answerOptions[ibv]=="c")
{
document.getElementById("r3").checked = true;

}
if(answerOptions[ibv]=="d")
{
document.getElementById("r4").checked = true;

}
if(answerOptions[ibv]=="e")
{
document.getElementById("r5").checked = true;

}
//alert("else1");


}
//change section show during navigate qn
if(ibv>0&&ibv<100)
 {
 document.getElementById("showctrp").innerHTML=section1;
 document.getElementById("english-part").className="english-part-activated";
 
 }

count();

}

function markforReview()
{
 if(ibv>-1){
 document.getElementById("Prev").disabled="";
 document.getElementById("Prev").style.color="red";
 
 }
 
 
 if(ibv>question_fetch.length-1)
{//alert("value"+i);
ibv=question_fetch.length-1;
    }
    
    
if(answerOptions[ibv]==undefined||answerOptions[ibv]!=undefined)
{
var b,a=document.getElementsByName("qu0").length;
var radios=document.getElementsByName("qu0");
for(b=0;b<a;b++)
{
if(radios[b].checked)
{
answerOptions[ibv]=radios[b].value;
document.getElementById("q"+(ibv+1)).className="markReview";
}

}

if(document.getElementById("q"+(ibv+1)).className!="markReview")
{
document.getElementById("q"+(ibv+1)).className="review";
}




ibv++;
if(answerOptions[ibv]==undefined)
{
//alert("value:undefined next in ");
document.getElementById("ContactForm1_contact-form-email-message").value="My confusion in this Qn [" + (ibv+1) +"] " +question_fetch[ibv].gsx$question.$t+ "and Post link is "+ window.location.href+". Please check this Question.";
document.getElementById("qn-no-testp").innerHTML="<span id='test-question-number1'>"+(ibv+1)+"</span> ";
document.getElementById("test-questions").innerHTML="<span id='test-question-number'>"+(ibv+1)+"</span> "+question_fetch[ibv].gsx$question.$t;
document.getElementById("queims").src=question_fetch[ibv].gsx$qnimage.$t;
document.getElementById("opa").innerHTML=question_fetch[ibv].gsx$optiona.$t;
document.getElementById("opb").innerHTML=question_fetch[ibv].gsx$optionb.$t;
document.getElementById("opc").innerHTML=question_fetch[ibv].gsx$optionc.$t;
document.getElementById("opd").innerHTML=question_fetch[ibv].gsx$optiond.$t;
//document.getElementById("ope").innerHTML=question_fetch[ibv].gsx$optione.$t;

if(document.getElementById("q"+(ibv+1)).className=="review")
{
}
else{
document.getElementById("q"+(ibv+1)).className="notAnswered";}
clear();
}
else
{
//alert("value:defined next in ");
document.getElementById("ContactForm1_contact-form-email-message").value="My confusion in this Qn [" + (ibv+1) +"] " +question_fetch[ibv].gsx$question.$t+ "and Post link is "+ window.location.href+". Please check this Question.";
document.getElementById("qn-no-testp").innerHTML="<span id='test-question-number1'>"+(ibv+1)+"</span> ";
document.getElementById("test-questions").innerHTML="<span id='test-question-number'>"+(ibv+1)+"</span> "+question_fetch[ibv].gsx$question.$t;
document.getElementById("queims").src=question_fetch[ibv].gsx$qnimage.$t;
document.getElementById("opa").innerHTML=question_fetch[ibv].gsx$optiona.$t;
document.getElementById("opb").innerHTML=question_fetch[ibv].gsx$optionb.$t;
document.getElementById("opc").innerHTML=question_fetch[ibv].gsx$optionc.$t;
document.getElementById("opd").innerHTML=question_fetch[ibv].gsx$optiond.$t;
//document.getElementById("ope").innerHTML=question_fetch[ibv].gsx$optione.$t;
if(answerOptions[ibv]=="a")
{
document.getElementById("r1").checked = true;

}
if(answerOptions[ibv]=="b")
{
document.getElementById("r2").checked = true;

}

if(answerOptions[ibv]=="c")
{
document.getElementById("r3").checked = true;

}
if(answerOptions[ibv]=="d")
{
document.getElementById("r4").checked = true;

}
if(answerOptions[ibv]=="e")
{
document.getElementById("r5").checked = true;

}

}

//i++;

}
else if(answerOptions[ibv+1]==undefined)
{

ibv++;
//alert("value:undefined next out ");
document.getElementById("ContactForm1_contact-form-email-message").value="My confusion in this Qn [" + (ibv+1) +"] " +question_fetch[ibv].gsx$question.$t+ "and Post link is "+ window.location.href+". Please check this Question.";
document.getElementById("qn-no-testp").innerHTML="<span id='test-question-number1'>"+(ibv+1)+"</span> ";
document.getElementById("test-questions").innerHTML="<span id='test-question-number'>"+(ibv+1)+"</span> "+question_fetch[ibv].gsx$question.$t;
document.getElementById("queims").src=question_fetch[ibv].gsx$qnimage.$t;
document.getElementById("opa").innerHTML=question_fetch[ibv].gsx$optiona.$t;
document.getElementById("opb").innerHTML=question_fetch[ibv].gsx$optionb.$t;
document.getElementById("opc").innerHTML=question_fetch[ibv].gsx$optionc.$t;
document.getElementById("opd").innerHTML=question_fetch[ibv].gsx$optiond.$t;
//document.getElementById("ope").innerHTML=question_fetch[ibv].gsx$optione.$t;
document.getElementById("q"+(ibv)).className="markReview";

if(document.getElementById("q"+(ibv+1)).className=="review" || document.getElementById("q"+(ibv+1)).className=="markReview"){
}else{document.getElementById("q"+(ibv+1)).className="notAnswered";}
//i++;
clear();

}



else
{
ibv++;
//alert("value:defined next ");
document.getElementById("ContactForm1_contact-form-email-message").value="My confusion in this Qn [" + (ibv+1) +"] " +question_fetch[ibv].gsx$question.$t+"and Post link is "+ window.location.href+". Please check this Question.";
document.getElementById("qn-no-testp").innerHTML="<span id='test-question-number1'>"+(ibv+1)+"</span> ";
document.getElementById("test-questions").innerHTML="<span id='test-question-number'>"+(ibv+1)+"</span> "+question_fetch[ibv].gsx$question.$t;
document.getElementById("queims").src=question_fetch[ibv].gsx$qnimage.$t;
document.getElementById("opa").innerHTML=question_fetch[ibv].gsx$optiona.$t;
document.getElementById("opb").innerHTML=question_fetch[ibv].gsx$optionb.$t;
document.getElementById("opc").innerHTML=question_fetch[ibv].gsx$optionc.$t;
document.getElementById("opd").innerHTML=question_fetch[ibv].gsx$optiond.$t;
//document.getElementById("ope").innerHTML=question_fetch[ibv].gsx$optione.$t;
document.getElementById("q"+(ibv)).className="markReview";


if(answerOptions[ques]=="b")
{
document.getElementById("r2").checked = true;

}

if(answerOptions[ques]=="c")
{
document.getElementById("r3").checked = true;

}
if(answerOptions[ques]=="d")
{
document.getElementById("r4").checked = true;

}
if(answerOptions[ibv]=="e")
{
document.getElementById("r5").checked = true;
}}
//change section show during navigate qn
if(ibv>0&&ibv<100)
 {
document.getElementById("english-part").className="english-part-activated";
 
 }
count();
}
 function clearResponse()
{
if(ibv>question_fetch.length-1)
{//alert("value"+i);
ibv=question_fetch.length-1;
    }
answerOptions[ibv]=undefined;
clear();
//alert("value2:"+i);
document.getElementById("q"+(ibv+1)).className="notAnswered";
count();
}
function autosubmitpop(){
  var r = confirm('Press "OK" If You want to Submit this test because you reached Last Question. OR You can submit test through view Palette.');
  if (r == true) {
  submit();
  } else {
  document.getElementById("menu-toggle").checked = true;
  }
 }
function submit()
{
createrp();
endTime = new Date();
document.getElementById("taken_time").innerHTML=QuizTime(startTime, endTime);

//document.getElementById("test-qn-btn-nv-side").style.display="none";
document.getElementById("candidate-imagecontainer").style.display="none";
document.getElementById("pallate").style.display="none";
document.getElementById("currentsection").style.display="none";
document.getElementById("test-wrapper-container").style.display="none";
document.getElementById("after").style.display="block";
document.getElementById("afte_sbmit_container_block").style.display="block";

setTimeout(() => {
 document.getElementById("test-congrat-message").style.display="none";
 }, 3000);

document.getElementById("test-congrat-message").style.display="block";
document.getElementById("test-qn-btn-pallete").style.display="none";

//alert("legnth:" +x);
score=0;
wq=0;
for(j=0;j<x;j++)
{
//alert("Your Score1:" +answerOptions[j]);
//alert("Your Score1:"+question_fetch[j].gsx$answer.$t);

if(answerOptions[j]!=undefined)
{//alert(" in if");
if(answerOptions[j]==question_fetch[j].gsx$answer.$t){score++;}
if(answerOptions[j]!=question_fetch[j].gsx$answer.$t){wq++;}



}
if(document.getElementById("q"+(j+1)).className=="notVisited")
{notVisit++; 
//alert("not visited");
}
//alert("Yo:" +score);
else if(document.getElementById("q"+(j+1)).className=="notAnswered")
{
visited++; 
//alert("not answered");

}
else if(document.getElementById("q"+(j+1)).className=="answeredButton")
{answered++; 
//alert("answered");

}
else if(document.getElementById("q"+(j+1)).className=="review")
{reviewed++; 
//alert("answered");

}
else if(document.getElementById("q"+(j+1)).className=="markReview")
{reviewedans++;
//alert("answered");

}
//scetion wise scores vist,not vist etc


if(j>=0&&j<question_fetch.length)
{
if(document.getElementById("q"+(j+1)).className=="notVisited")
{notVisit2++;
//alert("not visited");
}
else if(document.getElementById("q"+(j+1)).className=="notAnswered")
{
visited2++;
//alert("not answered");

}
else if(document.getElementById("q"+(j+1)).className=="answeredButton")
{answered2++;
//alert("answered");

 }

 else if(document.getElementById("q"+(j+1)).className=="review")
 {reviewed2++;
 //alert("answered");
 
 }
 else if(document.getElementById("q"+(j+1)).className=="markReview")
 {reviewedans2++;
 //alert("answered");
 
 }}}
//alert("Your Score:" +score);
var txmrk=score*Positive_number;
var tx2mrk=wq*deductive_number;
var txmrkp= txmrk - tx2mrk;
document.getElementById("test-wrapper-container").style.display="none";
document.getElementById("test-restartq").style.display="block";
document.querySelector(".total-correct").innerHTML=score + ' Qns.';
document.querySelector(".total-wrong").innerHTML=wq + ' Qns.';
document.querySelector(".total-questions").innerHTML=x + ' Qns.';
document.querySelector(".total-attempt").innerHTML=score+wq + ' Qns.';
document.querySelector("#test_name").innerHTML=exam_name;
document.querySelector("#test_sb_name").innerHTML=subject_name;

document.querySelector(".accuracy-percentage").innerHTML=((score/x)*100).toFixed(2) +"%";
var acrlvl = (score/x)*100+"%";
document.querySelector(".testcontainer .progress .bar.two").style.width=acrlvl;
if(percentage<=0){document.querySelector(".testcard-one .testcontainer .progress .bar.one").style.width=0 +"%";}



if(deductive_number!=undefined){
var percnt=((txmrk/(x*Positive_number))*100);
document.getElementById("score").innerHTML=txmrk - tx2mrk;
document.getElementById("tscore").innerHTML=x*Positive_number;
document.getElementById("percentage").innerHTML=((txmrkp/(x*Positive_number))*100).toFixed(2)+'%';
document.querySelector(".progress-percentage").innerHTML=((txmrkp/(x*Positive_number))*100).toFixed(2)+'%';
document.querySelector(".testcard-one .testcontainer .progress .bar.three").style.width=((txmrkp/(x*Positive_number))*100).toFixed(2)+'%';
document.querySelector(".testcard-one .testcontainer .progress .bar.one").style.width=((txmrkp/(x*Positive_number))*100).toFixed(2) +"%";
}


if(deductive_number==null){
document.getElementById("score").innerHTML=score*Positive_number;
document.getElementById("tscore").innerHTML=x*Positive_number;
document.getElementById("percentage").innerHTML=((txmrk/(x*Positive_number))*100).toFixed(2)+'%';
document.querySelector(".progress-percentage").innerHTML=((txmrk/(x*Positive_number))*100).toFixed(2)+'%';
document.querySelector(".testcard-one .testcontainer .progress .bar.three").style.width=((txmrk/(x*Positive_number))*100).toFixed(2)+'%';
document.querySelector(".testcard-one .testcontainer .progress .bar.one").style.width=((txmrk/(x*Positive_number))*100).toFixed(2)+"%";

}

if(score>=x/4){
document.getElementById("practice-button-link").href=practice_button_link;
document.getElementById("practice-button-link").innerHTML="Practice More";
document.querySelector(".grade-percentage").innerHTML="D";
document.querySelector(".progress-percentage").style.BackgroundColor="green";
}
else if(score>=x/3){
document.getElementById("practice-button-link").href=practice_button_link;
document.getElementById("practice-button-link").innerHTML="Practice More";
document.querySelector(".grade-percentage").innerHTML="C";
document.querySelector(".progress-percentage").style.BackgroundColor="green";
}
else if(score>=x/2){
document.getElementById("practice-button-link").href=preparation_button_link;
document.getElementById("practice-button-link").innerHTML="Prepare More";
document.querySelector(".grade-percentage").innerHTML="B";
document.querySelector(".progress-percentage").style.BackgroundColor="green";
}
else if(score>=x/1.33){
document.getElementById("practice-button-link").href=preparation_button_link;
document.getElementById("practice-button-link").innerHTML="Prepare More";
document.querySelector(".progress-percentage").style.BackgroundColor="green";
document.querySelector(".grade-percentage").innerHTML="A";
}
else if(score<=x/5){
document.getElementById("practice-button-link").href=practice_button_link;
document.getElementById("practice-button-link").innerHTML="Practice More";
document.querySelector(".righttestcontainer").style.BackgroundColor="green";
document.querySelector(".grade-percentage").innerHTML="Fail";
}

document.getElementById("final-tabled-result").style.display="block";
document.getElementById("answered2").innerHTML=answered2;
document.getElementById("visited2").innerHTML=visited2;
document.getElementById("notvisited2").innerHTML=notVisit2;
document.getElementById("reviewed2").innerHTML=reviewed2;
document.getElementById("reviewedans2").innerHTML=reviewedans2;

document.getElementById("answered7").innerHTML=answered;
document.getElementById("visited7").innerHTML=visited;
document.getElementById("notvisited7").innerHTML=notVisit;
document.getElementById("reviewed7").innerHTML=reviewed;
document.getElementById("reviewedans7").innerHTML=reviewedans;



}
</script>
<script type="text/javascript" charset="utf-8">
   const FaqContainer = document.querySelectorAll(".test-solution-title");

FaqContainer.forEach(FaqQuestion => {
 FaqQuestion.addEventListener("click", event => {
   
   //Uncomment in case you only want to allow for the display of only one collapsed item at a time!
   
   const ActiveFaqQuestion = document.querySelector(".test-solution-title.active");
    if(ActiveFaqQuestion && ActiveFaqQuestion!==FaqQuestion) {
      //ActiveFaqQuestion.classList.toggle("active");
      //ActiveFaqQuestion.nextElementSibling.style.maxHeight = 0;
    }

   FaqQuestion.classList.toggle("active");
   const FaqAnswerContainer = FaqQuestion.nextElementSibling;
   if(FaqQuestion.classList.contains("active")) {
     FaqAnswerContainer.style.maxHeight = FaqAnswerContainer.scrollHeight + "px";
   }
   else {
     FaqAnswerContainer.style.maxHeight = 0;
   }
   
 });
});
   
(function() {
	
	function ConfirmBox( element, params ) {
		this.element = element;
		this.params = params || {};
		this.params.ok = params.ok || function() {};
		this.params.cancel = params.cancel || function() {};
		
		this.init();
	}
	
	ConfirmBox.prototype = {
		init: function() {
			this.instance = null;
			this.create();
			this.layout();
			this.actions();
		},
		create: function() {
		  if( document.querySelector( "#test-confirm-wrapp" ) === null ) {
			var wrapper = document.createElement( "div" );
				wrapper.id = "test-confirm-wrapp";
			var html = "<div align='center' id='test-confirm-box'><img style='border:none;' src='https://1.bp.blogspot.com/--zLAu1T1avE/YT2FpRCjUkI/AAAAAAAAAG0/ymkxbJ_IAJQZ6UCbxnVo8fqvXPs8DM1YgCLcBGAsYHQ/s0/IMG_20210912_101310.jpg' valign='middle' id='submit-time-logo' align='center'><h2  id='confirm-header'></h2><br><div class='uvp-list'><ul><li><span class='test-data-title'>Time Left : </span><span id='test-time-left' class='test-data-get'>---</span></li><li><span class='test-data-title'>Attempted : </span><span  id='test-qn-attempted' class='test-data-get'>---</span></li><li><span class='test-data-title'>Unattempted : </span><span  id='test-qn-unattempted' class='test-data-get'>---</span></li><li><span class='test-data-title'>Reviewed : </span><span id='test-qn-review'  class='test-data-get'>---</span></li><li><span class='test-data-title'>Answered & Review : </span><span id='test-qn-markreview' class='test-data-get'>---</span></li></ul></div>";
				html += "<div id='test-confirm-buttons'><div id='test-confirm-output'></div><br><button class='test-btn btn-success' style='background:#389B10;' onclick='submit()' id='confirm-ok'>SUBMIT</button><button class='test-btn btn-danger' style='background:red;' type='button' id='confirm-cancel'>Cancel</button></div>";
				html += "</div>";
				
				wrapper.innerHTML = html;
				document.body.appendChild( wrapper );
		  }
		  
		  this.instance = document.querySelector( "#test-confirm-wrapp" );
		},
		layout: function() {
			var wrapper = this.instance;
			var winHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
			
			wrapper.style.height = winHeight + "px";	
		},
		show: function( element ) {
			element.style.display = "block";
			element.style.opacity = 1;
		},
		hide: function( element ) {
			element.style.opacity = 0;
			setTimeout(function() {
				element.style.display = "none";
			}, 1000);
		},
		actions: function() {
			var self = this;
			self.element.addEventListener( "click", function() {
				self.instance.querySelector( "#confirm-header" ).innerHTML = self.element.dataset.question;
				self.show( self.instance );
			}, false);
			
			self.instance.querySelector( "#confirm-ok" ).
			addEventListener( "click", function() {
				self.hide( self.instance );
				setTimeout(function() {
					self.params.ok();
				}, 1000);
				
			}, false);
			
			
			self.instance.querySelector( "#confirm-cancel" ).
			addEventListener( "click", function() {
				self.hide( self.instance );
				setTimeout(function() {
					self.params.cancel();
				}, 1000);
			}, false);
		}
	};
	
	document.addEventListener( "DOMContentLoaded", function() {
		var confirm = document.querySelector( "#test-submit-by-user" );
		var confirm1 = document.querySelector( "#test-submit-by-user2" );
		var testconfirmoutput = document.querySelector( "#test-confirm-output" );
		var confBox = new ConfirmBox( confirm, {
			ok: function() {
				//testconfirmoutput.innerHTML = "OK";
			},
			cancel: function() {
				//testconfirmoutput.innerHTML = "Cancel";
			}
			
		});
		var confBox = new ConfirmBox( confirm1, {
		ok: function() {
		//testconfirmoutput.innerHTML = "OK";
		},
		cancel: function() {
		//testconfirmoutput.innerHTML = "Cancel";
		}
		
		});
	});
	
})();

// Get the modal
var modal_report = document.getElementById("myModal");

// Get the button that opens the modal
var btn_report = document.getElementById("report_qn");

// Get the <span> element that closes the modal
var span_report = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn_report.onclick = function() {
  modal_report.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span_report.onclick = function() {
  modal_report.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal_report) {
    modal_report.style.display = "none";
  }
}
 function welcomeandinstructions(){
 if (! localStorage.noFirstVisit) {
 console.log('first time');
 alert('Your welcome in TestCopy.IN test series. \r\nIf you want to jump to any Question or submit this test etc. Please click "View Palette" Button.\r\n [This popup show only if you are visiting For first time.] ')
 localStorage.noFirstVisit = "1";
 }
 
 //document.getElementById('restore').onclick = function () {
 //localStorage.noFirstVisit = "";
 //document.getElementById('restore').innerHTML = "DO NOT FORGET TO RUN AGAIN THE PAGE";};
 }
 function hide_show(show,hide){
 document.getElementById(show).style.display="block";
  document.getElementById(hide).style.display="none";
 }
 function nvqn(button, ques){
 ibv = ques
 document.getElementById("ContactForm1_contact-form-email-message").value="My confusion in this Qn [" + (ibv+1) +"] " +question_fetch[ibv].gsx$question.$t+ "and Post link is "+ window.location.href+". Please check this Question.";
 document.getElementById("qn-no-testp").innerHTML="<span id='test-question-number1'>"+(ibv+1)+"</span> ";
 document.getElementById("test-questions").innerHTML="<span id='test-question-number'>"+(ibv+1)+"</span> "+question_fetch[ibv].gsx$question.$t;
 document.getElementById("queims").src=question_fetch[ibv].gsx$qnimage.$t;
 document.getElementById("opa").innerHTML=question_fetch[ibv].gsx$optiona.$t;
 document.getElementById("opb").innerHTML=question_fetch[ibv].gsx$optionb.$t;
 document.getElementById("opc").innerHTML=question_fetch[ibv].gsx$optionc.$t;
 document.getElementById("opd").innerHTML=question_fetch[ibv].gsx$optiond.$t;
 
 }
var output_qn_paper = "";
 for (var i = 0; i < question_fetch.length; i++) {
 output_qn_paper += "<div onclick='nvqn(this,"+i+")'"+" style='display:block;border:1px solid #111;padding:3px 5px;margin:5px;text-align:left;'><span id='test-question-number1'>"+(i+1)+"</span>"+ question_fetch[i].gsx$question.$t + "</div>";
 }
 
 document.getElementById("my_paper").innerHTML = output_qn_paper;

function createrp() {
  event.preventDefault();
  const input1a = Number(ans);
  const input2a = Number(ntans);
  const input3a = Number(notv);
  const input4a = Number(rev);
  const input5a = Number(mrev);

  // create data array for chart
  const data = [input1a, input2a, input3a, input4a, input5a];
  // create chart
  const ctx = document.getElementById('myChart').getContext('2d');
  const myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Answered', 'Not Answered', 'Not visited' , 'Reviewed' , 'Answered and Reviewed'],
      datasets: [
        {
          label: 'Data',
          data: data,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(54, 168, 50, 0.2)',
          'rgba(52, 50, 168, 0.2)',
          'rgba(168, 139, 50, 0.2)',
          
          
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(54, 168, 50, 1)',
          'rgba(52, 50, 168, 1)',
          'rgba(168, 139, 50, 1)'
          ],
          borderWidth: 1
        }
      ]
    },
    options: {
      scales: {
        y: {
          beginAtZero: false
        }
      }
    }
  });
}
