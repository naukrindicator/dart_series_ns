/*auto display calculating*/
// Here we convert JSON to question_fetchect
var questions_list = JSON.stringify(questions);
const question_fetch = JSON.parse(questions_list);

var div_qn_btn = document.querySelectorAll('#currentsection button');
var div_sol_wrpper = document.querySelectorAll('#after fieldset');
if (div_qn_btn.length > question_fetch.length) { // Check if there are extra div elements
  for (let i = question_fetch.length; i < div_qn_btn.length; i++) {
    div_qn_btn[i].style.display = 'none'; // Hide the extra div elements
  }}
if (div_sol_wrpper.length > question_fetch.length) { // Check if there are extra div elements
  for (let ij = question_fetch.length; ij < div_sol_wrpper.length; ij++) {
    div_sol_wrpper[ij].style.display = 'none'; // Hide the extra div elements
 }}
/*auto display calculating*/
/*section and result section display control*/

/*section and result section display control*/

/*direct navigationing*/
const maximum_sections = total_scns;
const barishKeDivs = document.querySelectorAll('.barish-ke');
const barishKenDivs = document.querySelectorAll('.secttion-button');
let count_section = 0;

for (let noofscn = 0; noofscn < barishKeDivs.length; noofscn++) {
  const divIdsection = barishKeDivs[noofscn].getAttribute('id');
 const divIdsection1 = barishKenDivs[noofscn].getAttribute('id');
  const sectionNumber = parseInt(divIdsection.substring(divIdsection.lastIndexOf('-') + 1));
 const sectionNumber1 = parseInt(divIdsection1.substring(divIdsection1.lastIndexOf('-') + 1));
  if (sectionNumber === maximum_sections) {
    count_section = maximum_sections;
    break;
  }
}

for (let noofscn = 0; noofscn < barishKeDivs.length; noofscn++) {
  const divIdsection = barishKeDivs[noofscn].getAttribute('id');
  //const divIdsection1 = barishKenDivs[noofscn].getAttribute('id');
  const sectionNumber = parseInt(divIdsection.substring(divIdsection.lastIndexOf('-') + 1));
  //const sectionNumber1 = parseInt(divIdsection1.substring(divIdsection1.lastIndexOf('-') + 1));
  if (sectionNumber <= count_section) {
    barishKeDivs[noofscn].style.display = '';
    barishKenDivs[noofscn].style.display = '';
    
 } else {
    barishKeDivs[noofscn].style.display = 'none';
    barishKenDivs[noofscn].style.display = 'none';
    
  }
}

//resume popup
const popuptestBtn = document.getElementById('popuptest-btn');
const popuptestContainer = document.getElementById('popuptest-container');
const closePopuptestBtn = document.getElementById('close-popuptest-btn');
function resumepopupshow() {
  popuptestContainer.style.display = 'block';
};

function resumepopuphide() {
  popuptestContainer.style.display = 'none';
}
document.body.appendChild(popuptestContainer);
//resume popup

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
var secs2 = document.getElementById("secs2");
var secs3 = document.getElementById("secs3");
var secs4 = document.getElementById("secs4");
var secs5 = document.getElementById("secs5");
var secs6 = document.getElementById("secs6");
var secsbt1 = document.getElementById("sc1b-1");
var secsbt2 = document.getElementById("sc2b-2");
var secsbt3 = document.getElementById("sc3b-3");
var secsbt4 = document.getElementById("sc4b-4");
var secsbt5 = document.getElementById("sc5b-5");
var secsbt6 = document.getElementById("sc6b-6");
var total11 = document.getElementById("total11");
var total2 = document.getElementById("total2");
var total3 = document.getElementById("total3");
var total4 = document.getElementById("total4");
var total5 = document.getElementById("total5");
var total6 = document.getElementById("total6");
var totalall = document.getElementById("totalall");
secs1.innerHTML = section1; secsbt1.innerHTML = section1;
secs2.innerHTML = section2; secsbt2.innerHTML = section2;
secs3.innerHTML = section3; secsbt3.innerHTML = section3;
secs4.innerHTML = section4; secsbt4.innerHTML = section4;
secs5.innerHTML = section5; secsbt5.innerHTML = section5;
secs6.innerHTML = section6; secsbt6.innerHTML = section6;
var ans,ntans,notv,rev,mrev;
var notVisit,answered,visited,score,wq,j,ttx=question_fetch.length;
var notVisit2,correct2,wrong2,answered2,visited2,reviewed2,reviewedans2,notVisit3,correct3,wrong3,answered3,visited3,reviewed3,reviewedans3,notVisit4,correct4,wrong4,answered4,visited4,reviewed4,reviewedans4,notVisit5,answered5,correct5,wrong5,visited5,reviewed5,reviewedans5,notVisit6,correct6,wrong6,answered6,visited6reviewed6,reviewedans6,notVisit8,correct8,wrong8,answered8,visited8,reviewed8,reviewedans8;
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
//document.getElementById("english-part").innerHTML=section1;
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
  resumepopuphide();
  } else {
    // Pause the quiz
    quizPaused = true;
    document.getElementById("quiz-button").innerHTML = "Resume";
    clearInterval(timerIntervalt);
  resumepopupshow();
  }
}

function updateTimer() {
  // Update the timer display
  let hours = Math.floor(time / 3600);
  let minutes = Math.floor((time % 3600) / 60);
  let seconds = time % 60;

  let timeString = "0"+hours + ":" + (minutes < 10 ? "0" : "") + minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  
  document.getElementById("timer").innerHTML = timeString;
  document.getElementById("test-time-left").innerHTML = timeString; 
  // Decrement the time
  time--;
  
  // Check if time is up
   if (time < 301) { // 5 minutes or less remaining
    document.getElementById("timer").classList.add("lesstimenow");
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

if(checkBox.checked==true){
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
if(input=="sec1"){
i=sec1_limit;ibv=i;
if (startTime === null) {  
 startTime = new Date();
 }
if(answerOptions[i]==undefined){
document.getElementById("ContactForm1_contact-form-email-message").value="Sir , Please recheck this Qn [" + (i+1)+"] " +question_fetch[i].gsx$question.$t+ "and Post link is "+ window.location.href+". Please check this Question.";
document.getElementById("qn-no-testp").innerHTML="<span id='test-question-number1'>"+(i+1)+"</span> ";
document.getElementById("test-questions").innerHTML="<span id='test-question-number'>"+(i+1)+"</span> "+question_fetch[i].gsx$question.$t;
document.getElementById("queims").src=question_fetch[i].gsx$qnimage.$t;
document.getElementById("opa").innerHTML=question_fetch[i].gsx$optiona.$t;
document.getElementById("opb").innerHTML=question_fetch[i].gsx$optionb.$t;
document.getElementById("opc").innerHTML=question_fetch[i].gsx$optionc.$t;
document.getElementById("opd").innerHTML=question_fetch[i].gsx$optiond.$t;
document.getElementById("q"+(i+1)).className="notAnswered";
//document.getElementById("ope").innerHTML=question_fetch[i].gsx$optione.$t;
}
else{
document.getElementById("ContactForm1_contact-form-email-message").value="Sir , Please recheck this Qn [" + (i+1) +"] " +question_fetch[i].gsx$question.$t+ "and Post link is "+ window.location.href+". Please check this Question.";
document.getElementById("qn-no-testp").innerHTML="<span id='test-question-number1'>"+(i+1)+"</span> ";
document.getElementById("test-questions").innerHTML="<span id='test-question-number'>"+(i+1)+"</span> "+question_fetch[i].gsx$question.$t;
document.getElementById("queims").src = question_fetch[i].gsx$qnimage.$t;
document.getElementById("opa").innerHTML=question_fetch[i].gsx$optiona.$t;
document.getElementById("opb").innerHTML=question_fetch[i].gsx$optionb.$t;
document.getElementById("opc").innerHTML=question_fetch[i].gsx$optionc.$t;
document.getElementById("opd").innerHTML=question_fetch[i].gsx$optiond.$t;
//document.getElementById("ope").innerHTML=question_fetch[i].gsx$optione.$t;
if(answerOptions[i]=="a"){
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
}}
var radios=document.getElementsByName("qu0");
if(radios[0].checked){
answerOptions[i]=radios[b].value;
document.getElementById("q1").className="answeredButton";
}}
if(input=="sec2"){
i=sec2_limit;ibv=i;
if(answerOptions[i]==undefined){
document.getElementById("ContactForm1_contact-form-email-message").value="Sir , Please recheck this Qn [" + (i+1)+"] " +question_fetch[i].gsx$question.$t+ "and Post link is "+ window.location.href+". Please check this Question.";
document.getElementById("qn-no-testp").innerHTML="<span id='test-question-number1'>"+(i+1)+"</span> ";
document.getElementById("test-questions").innerHTML="<span id='test-question-number'>"+(i+1)+"</span> "+question_fetch[i].gsx$question.$t;
document.getElementById("queims").src=question_fetch[i].gsx$qnimage.$t;
document.getElementById("opa").innerHTML=question_fetch[i].gsx$optiona.$t;
document.getElementById("opb").innerHTML=question_fetch[i].gsx$optionb.$t;
document.getElementById("opc").innerHTML=question_fetch[i].gsx$optionc.$t;
document.getElementById("opd").innerHTML=question_fetch[i].gsx$optiond.$t;
//document.getElementById("ope").innerHTML=question_fetch[i].gsx$optione.$t;
document.getElementById("q"+(i+1)).className="notAnswered";
}
else{
document.getElementById("ContactForm1_contact-form-email-message").value="Sir , Please recheck this Qn [" + (i+1) +"] " +question_fetch[i].gsx$question.$t+ "and Post link is "+ window.location.href+". Please check this Question.";
document.getElementById("qn-no-testp").innerHTML="<span id='test-question-number1'>"+(i+1)+"</span> ";
document.getElementById("test-questions").innerHTML="<span id='test-question-number'>"+(i+1)+"</span> "+question_fetch[i].gsx$question.$t;
document.getElementById("queims").src = question_fetch[i].gsx$qnimage.$t;
document.getElementById("opa").innerHTML=question_fetch[i].gsx$optiona.$t;
document.getElementById("opb").innerHTML=question_fetch[i].gsx$optionb.$t;
document.getElementById("opc").innerHTML=question_fetch[i].gsx$optionc.$t;
document.getElementById("opd").innerHTML=question_fetch[i].gsx$optiond.$t;
//document.getElementById("ope").innerHTML=question_fetch[i].gsx$optione.$t;
if(answerOptions[i]=="a"){
document.getElementById("r1").checked = true;
}
if(answerOptions[i]=="b"){
document.getElementById("r2").checked = true;
}
if(answerOptions[i]=="c"){
document.getElementById("r3").checked = true;
}
if(answerOptions[i]=="d"){
document.getElementById("r4").checked = true;
}
if(answerOptions[i]=="e"){
document.getElementById("r5").checked = true;
}}
var radios=document.getElementsByName("qu0");
if(radios[0].checked){
answerOptions[i]=radios[b].value;
document.getElementById("q1").className="answeredButton";
}}
if(input=="sec3"){
i=sec3_limit;ibv=i;
if(answerOptions[i]==undefined){
document.getElementById("ContactForm1_contact-form-email-message").value="Sir , Please recheck this Qn [" + (i+1)+"] " +question_fetch[i].gsx$question.$t+ "and Post link is "+ window.location.href+". Please check this Question.";
document.getElementById("qn-no-testp").innerHTML="<span id='test-question-number1'>"+(i+1)+"</span> ";
document.getElementById("test-questions").innerHTML="<span id='test-question-number'>"+(i+1)+"</span> "+question_fetch[i].gsx$question.$t;
document.getElementById("queims").src=question_fetch[i].gsx$qnimage.$t;
document.getElementById("opa").innerHTML=question_fetch[i].gsx$optiona.$t;
document.getElementById("opb").innerHTML=question_fetch[i].gsx$optionb.$t;
document.getElementById("opc").innerHTML=question_fetch[i].gsx$optionc.$t;
document.getElementById("opd").innerHTML=question_fetch[i].gsx$optiond.$t;
//document.getElementById("ope").innerHTML=question_fetch[i].gsx$optione.$t;
document.getElementById("q"+(i+1)).className="notAnswered";
}
else{
document.getElementById("ContactForm1_contact-form-email-message").value="Sir , Please recheck this Qn [" + (i+1) +"] " +question_fetch[i].gsx$question.$t+ "and Post link is "+ window.location.href+". Please check this Question.";
document.getElementById("qn-no-testp").innerHTML="<span id='test-question-number1'>"+(i+1)+"</span> ";
document.getElementById("test-questions").innerHTML="<span id='test-question-number'>"+(i+1)+"</span> "+question_fetch[i].gsx$question.$t;
document.getElementById("queims").src = question_fetch[i].gsx$qnimage.$t;
document.getElementById("opa").innerHTML=question_fetch[i].gsx$optiona.$t;
document.getElementById("opb").innerHTML=question_fetch[i].gsx$optionb.$t;
document.getElementById("opc").innerHTML=question_fetch[i].gsx$optionc.$t;
document.getElementById("opd").innerHTML=question_fetch[i].gsx$optiond.$t;
//document.getElementById("ope").innerHTML=question_fetch[i].gsx$optione.$t;
if(answerOptions[i]=="a"){
document.getElementById("r1").checked = true;
}
if(answerOptions[i]=="b"){
document.getElementById("r2").checked = true;
}
if(answerOptions[i]=="c"){
document.getElementById("r3").checked = true;
}
if(answerOptions[i]=="d"){
document.getElementById("r4").checked = true;
}
if(answerOptions[i]=="e"){
document.getElementById("r5").checked = true;
}}
var radios=document.getElementsByName("qu0");
if(radios[0].checked){
answerOptions[i]=radios[b].value;
document.getElementById("q1").className="answeredButton";
}}
if(input=="sec4"){
i=sec4_limit;ibv=i;
if(answerOptions[i]==undefined){
document.getElementById("ContactForm1_contact-form-email-message").value="Sir , Please recheck this Qn [" + (i+1)+"] " +question_fetch[i].gsx$question.$t+ "and Post link is "+ window.location.href+". Please check this Question.";
document.getElementById("qn-no-testp").innerHTML="<span id='test-question-number1'>"+(i+1)+"</span> ";
document.getElementById("test-questions").innerHTML="<span id='test-question-number'>"+(i+1)+"</span> "+question_fetch[i].gsx$question.$t;
document.getElementById("queims").src=question_fetch[i].gsx$qnimage.$t;
document.getElementById("opa").innerHTML=question_fetch[i].gsx$optiona.$t;
document.getElementById("opb").innerHTML=question_fetch[i].gsx$optionb.$t;
document.getElementById("opc").innerHTML=question_fetch[i].gsx$optionc.$t;
document.getElementById("opd").innerHTML=question_fetch[i].gsx$optiond.$t;
//document.getElementById("ope").innerHTML=question_fetch[i].gsx$optione.$t;
document.getElementById("q"+(i+1)).className="notAnswered";
}
else{
document.getElementById("ContactForm1_contact-form-email-message").value="Sir , Please recheck this Qn [" + (i+1) +"] " +question_fetch[i].gsx$question.$t+ "and Post link is "+ window.location.href+". Please check this Question.";
document.getElementById("qn-no-testp").innerHTML="<span id='test-question-number1'>"+(i+1)+"</span> ";
document.getElementById("test-questions").innerHTML="<span id='test-question-number'>"+(i+1)+"</span> "+question_fetch[i].gsx$question.$t;
document.getElementById("queims").src = question_fetch[i].gsx$qnimage.$t;
document.getElementById("opa").innerHTML=question_fetch[i].gsx$optiona.$t;
document.getElementById("opb").innerHTML=question_fetch[i].gsx$optionb.$t;
document.getElementById("opc").innerHTML=question_fetch[i].gsx$optionc.$t;
document.getElementById("opd").innerHTML=question_fetch[i].gsx$optiond.$t;
//document.getElementById("ope").innerHTML=question_fetch[i].gsx$optione.$t;
if(answerOptions[i]=="a"){
document.getElementById("r1").checked = true;
}
if(answerOptions[i]=="b"){
document.getElementById("r2").checked = true;
}
if(answerOptions[i]=="c"){
document.getElementById("r3").checked = true;
}
if(answerOptions[i]=="d"){
document.getElementById("r4").checked = true;
}
if(answerOptions[i]=="e"){
document.getElementById("r5").checked = true;
}}
var radios=document.getElementsByName("qu0");
if(radios[0].checked){
answerOptions[i]=radios[b].value;
document.getElementById("q1").className="answeredButton";
}}
if(input=="sec5"){
i=sec5_limit;ibv=i;
if(answerOptions[i]==undefined){
document.getElementById("ContactForm1_contact-form-email-message").value="Sir , Please recheck this Qn [" + (i+1)+"] " +question_fetch[i].gsx$question.$t+ "and Post link is "+ window.location.href+". Please check this Question.";
document.getElementById("qn-no-testp").innerHTML="<span id='test-question-number1'>"+(i+1)+"</span> ";
document.getElementById("test-questions").innerHTML="<span id='test-question-number'>"+(i+1)+"</span> "+question_fetch[i].gsx$question.$t;
document.getElementById("queims").src=question_fetch[i].gsx$qnimage.$t;
document.getElementById("opa").innerHTML=question_fetch[i].gsx$optiona.$t;
document.getElementById("opb").innerHTML=question_fetch[i].gsx$optionb.$t;
document.getElementById("opc").innerHTML=question_fetch[i].gsx$optionc.$t;
document.getElementById("opd").innerHTML=question_fetch[i].gsx$optiond.$t;
//document.getElementById("ope").innerHTML=question_fetch[i].gsx$optione.$t;
document.getElementById("q"+(i+1)).className="notAnswered";
}
else{
document.getElementById("ContactForm1_contact-form-email-message").value="Sir , Please recheck this Qn [" + (i+1) +"] " +question_fetch[i].gsx$question.$t+ "and Post link is "+ window.location.href+". Please check this Question.";
document.getElementById("qn-no-testp").innerHTML="<span id='test-question-number1'>"+(i+1)+"</span> ";
document.getElementById("test-questions").innerHTML="<span id='test-question-number'>"+(i+1)+"</span> "+question_fetch[i].gsx$question.$t;
document.getElementById("queims").src = question_fetch[i].gsx$qnimage.$t;
document.getElementById("opa").innerHTML=question_fetch[i].gsx$optiona.$t;
document.getElementById("opb").innerHTML=question_fetch[i].gsx$optionb.$t;
document.getElementById("opc").innerHTML=question_fetch[i].gsx$optionc.$t;
document.getElementById("opd").innerHTML=question_fetch[i].gsx$optiond.$t;
//document.getElementById("ope").innerHTML=question_fetch[i].gsx$optione.$t;
if(answerOptions[i]=="a"){
document.getElementById("r1").checked = true;
}
if(answerOptions[i]=="b"){
document.getElementById("r2").checked = true;
}
if(answerOptions[i]=="c"){
document.getElementById("r3").checked = true;
}
if(answerOptions[i]=="d"){
document.getElementById("r4").checked = true;
}
if(answerOptions[i]=="e"){
document.getElementById("r5").checked = true;
}}
var radios=document.getElementsByName("qu0");
if(radios[0].checked){
answerOptions[i]=radios[b].value;
document.getElementById("q1").className="answeredButton";
}}
if(input=="sec6"){
i=sec6_limit;ibv=i;
if(answerOptions[i]==undefined){
document.getElementById("ContactForm1_contact-form-email-message").value="Sir , Please recheck this Qn [" + (i+1)+"] " +question_fetch[i].gsx$question.$t+ "and Post link is "+ window.location.href+". Please check this Question.";
document.getElementById("qn-no-testp").innerHTML="<span id='test-question-number1'>"+(i+1)+"</span> ";
document.getElementById("test-questions").innerHTML="<span id='test-question-number'>"+(i+1)+"</span> "+question_fetch[i].gsx$question.$t;
document.getElementById("queims").src=question_fetch[i].gsx$qnimage.$t;
document.getElementById("opa").innerHTML=question_fetch[i].gsx$optiona.$t;
document.getElementById("opb").innerHTML=question_fetch[i].gsx$optionb.$t;
document.getElementById("opc").innerHTML=question_fetch[i].gsx$optionc.$t;
document.getElementById("opd").innerHTML=question_fetch[i].gsx$optiond.$t;
//document.getElementById("ope").innerHTML=question_fetch[i].gsx$optione.$t;
document.getElementById("q"+(i+1)).className="notAnswered";
}
else{
document.getElementById("ContactForm1_contact-form-email-message").value="Sir , Please recheck this Qn [" + (i+1) +"] " +question_fetch[i].gsx$question.$t+ "and Post link is "+ window.location.href+". Please check this Question.";
document.getElementById("qn-no-testp").innerHTML="<span id='test-question-number1'>"+(i+1)+"</span> ";
document.getElementById("test-questions").innerHTML="<span id='test-question-number'>"+(i+1)+"</span> "+question_fetch[i].gsx$question.$t;
document.getElementById("queims").src = question_fetch[i].gsx$qnimage.$t;
document.getElementById("opa").innerHTML=question_fetch[i].gsx$optiona.$t;
document.getElementById("opb").innerHTML=question_fetch[i].gsx$optionb.$t;
document.getElementById("opc").innerHTML=question_fetch[i].gsx$optionc.$t;
document.getElementById("opd").innerHTML=question_fetch[i].gsx$optiond.$t;
//document.getElementById("ope").innerHTML=question_fetch[i].gsx$optione.$t;
if(answerOptions[i]=="a"){
document.getElementById("r1").checked = true;
}
if(answerOptions[i]=="b"){
document.getElementById("r2").checked = true;
}
if(answerOptions[i]=="c"){
document.getElementById("r3").checked = true;
}
if(answerOptions[i]=="d"){
document.getElementById("r4").checked = true;
}
if(answerOptions[i]=="e"){
document.getElementById("r5").checked = true;
}}
var radios=document.getElementsByName("qu0");
if(radios[0].checked){
answerOptions[i]=radios[b].value;
document.getElementById("q1").className="answeredButton";
}}
count();
toggleFullScreen();
updateLanguage();
}
else{alert("Please accept terms and conditions before proceeding");}}

function viewQuestions(vari)
{
var i,j,temp; i=0;
document.getElementById("candidate-imagecontainer").style.display="none";
document.getElementById("pallate").style.display="block";
document.getElementById("currentsection").style.display="block";
document.getElementById("test-congrat-message").style.display="none";
document.getElementById("test-qn-btn-pallete").style.display="block";
if(vari=="allqn"){
j=0;temp=question_fetch.length;
document.getElementById("view-all").className="view-all-part-activated";
document.getElementById("viewquestions").style.display="block";
document.getElementById("viewquestions1").style.display="block";
document.getElementById("viewquestions2").style.display="block";
document.getElementById("viewquestions3").style.display="block";
document.getElementById("viewquestions4").style.display="block";
document.getElementById("viewquestions5").style.display="block";
}
while(j<temp){
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
}}
function clear(){
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

document.getElementById("ContactForm1_contact-form-email-message").value="Sir , Please recheck this Qn [" + (ibv+1) +"] " +question_fetch[ibv].gsx$question.$t+ "and Post link is "+ window.location.href+". Please check this Question.";
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
document.getElementById("ContactForm1_contact-form-email-message").value="Sir , Please recheck this Qn [" + (ibv+1) +"] " +question_fetch[ibv].gsx$question.$t+ "and Post link is "+ window.location.href+". Please check this Question.";
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
document.getElementById("test-qn-notvisit").innerHTML=notv;
updateLanguage();
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
document.getElementById("ContactForm1_contact-form-email-message").value="Sir , Please recheck this Qn [" + (ibv+1) +"] " +question_fetch[ibv].gsx$question.$t+ "and Post link is "+ window.location.href+". Please check this Question.";
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
else{
document.getElementById("ContactForm1_contact-form-email-message").value="Sir , Please recheck this Qn [" + (ibv+1) +"] " +question_fetch[ibv].gsx$question.$t+ "and Post link is "+ window.location.href+". Please check this Question.";
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
document.getElementById("ContactForm1_contact-form-email-message").value="Sir , Please recheck this Qn [" + (ibv+1) +"] " +question_fetch[ibv].gsx$question.$t+ "and Post link is "+ window.location.href+". Please check this Question.";
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
document.getElementById("ContactForm1_contact-form-email-message").value="Sir , Please recheck this Qn [" + (ibv+1) +"] " +question_fetch[ibv].gsx$question.$t+ "and Post link is "+ window.location.href+". Please check this Question.";
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
 {  }

count();
updateLanguage();
}


//function Previous

function pre()
{
//if(ibv>=question_fetch.length-1){ibv=question_fetch.length-1;alert("value"+ibv);}
if(ibv<question_fetch.length){
document.getElementById("next").disabled="";
document.getElementById("Prev").style.color="red";
updateLanguage();
}


if(ibv<2 ||ibv>question_fetch.length-1)
{
document.getElementById("Prev").style.color="#ccc";

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
document.getElementById("ContactForm1_contact-form-email-message").value="Sir , Please recheck this Qn [" + (ibv+1) +"] " +question_fetch[ibv].gsx$question.$t+ "and Post link is "+ window.location.href+". Please check this Question.";
document.getElementById("qn-no-testp").innerHTML="<span id='test-question-number1'>"+(ibv+1)+"</span> ";
document.getElementById("test-questions").innerHTML="<span id='test-question-number'>"+(ibv+1)+"</span> "+question_fetch[ibv].gsx$question.$t;
document.getElementById("queims").src=question_fetch[ibv].gsx$qnimage.$t;
document.getElementById("opa").innerHTML=question_fetch[ibv].gsx$optiona.$t;
document.getElementById("opb").innerHTML=question_fetch[ibv].gsx$optionb.$t;
document.getElementById("opc").innerHTML=question_fetch[ibv].gsx$optionc.$t;
document.getElementById("opd").innerHTML=question_fetch[ibv].gsx$optiond.$t;
//document.getElementById("ope").innerHTML=question_fetch[ibv].gsx$optione.$t;

if(document.getElementById("q"+(ibv+1)).className=="review" || document.getElementById("q"+(ibv+1)).className=="markReview"){}else{document.getElementById("q"+(ibv+1)).className="notAnswered";}
if(document.getElementById("q"+(ibv)).className=="review"){document.getElementById("q"+(ibv)).className="notAnswered";}
clear();
}
else
{
document.getElementById("ContactForm1_contact-form-email-message").value="Sir , Please recheck this Qn [" + (ibv+1) +"] " +question_fetch[ibv].gsx$question.$t+ "and Post link is "+ window.location.href+". Please check this Question.";
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
document.getElementById("ContactForm1_contact-form-email-message").value="Sir , Please recheck this Qn [" + (ibv+1) +"] " +question_fetch[ibv].gsx$question.$t+ "and Post link is "+ window.location.href+". Please check this Question.";
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
document.getElementById("ContactForm1_contact-form-email-message").value="Sir , Please recheck this Qn [" + (ibv+1) +"] " +question_fetch[ibv].gsx$question.$t+ "and Post link is "+ window.location.href+". Please check this Question.";
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
}}
count();
updateLanguage();
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
}}
if(document.getElementById("q"+(ibv+1)).className!="markReview")
{
document.getElementById("q"+(ibv+1)).className="review";
}
ibv++;
if(answerOptions[ibv]==undefined)
{
//alert("value:undefined next in ");
document.getElementById("ContactForm1_contact-form-email-message").value="Sir , Please recheck this Qn [" + (ibv+1) +"] " +question_fetch[ibv].gsx$question.$t+ "and Post link is "+ window.location.href+". Please check this Question.";
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
document.getElementById("ContactForm1_contact-form-email-message").value="Sir , Please recheck this Qn [" + (ibv+1) +"] " +question_fetch[ibv].gsx$question.$t+ "and Post link is "+ window.location.href+". Please check this Question.";
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
document.getElementById("ContactForm1_contact-form-email-message").value="Sir , Please recheck this Qn [" + (ibv+1) +"] " +question_fetch[ibv].gsx$question.$t+ "and Post link is "+ window.location.href+". Please check this Question.";
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
document.getElementById("ContactForm1_contact-form-email-message").value="Sir , Please recheck this Qn [" + (ibv+1) +"] " +question_fetch[ibv].gsx$question.$t+"and Post link is "+ window.location.href+". Please check this Question.";
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
 
 }
count();
updateLanguage();
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
document.getElementById("candidate-imagecontainer").style.display="none";
document.getElementById("pallate").style.display="none";
document.getElementById("currentsection").style.display="none";
document.getElementById("test-wrapper-container").style.display="none";
document.getElementById("after").style.display="block";
document.getElementById("afte_sbmit_container_block").style.display="block";
notVisit=0;answered=0;visited=0;reviewed=0;reviewedans=0;
notVisit2=0;correct2=0;wrong2=0;answered2=0;visited2=0;reviewed2=0;reviewedans2=0;
notVisit3=0;correct3=0;wrong3=0;answered3=0;visited3=0;reviewed3=0;reviewedans3=0;
notVisit4=0;correct4=0;wrong4=0;answered4=0;visited4=0;reviewed4=0;reviewedans4=0;
notVisit5=0;correct5=0;wrong5=0;answered5=0;visited5=0;reviewed5=0;reviewedans5=0;
notVisit6=0;correct6=0;wrong6=0;answered6=0;visited6=0;reviewed6=0;reviewedans6=0;
notVisit8=0;correct8=0;wrong8=0;answered8=0;visited8=0;reviewed8=0;reviewedans8=0;

setTimeout(() => {
 document.getElementById("test-congrat-message").style.display="none";
 }, 3000);

document.getElementById("test-congrat-message").style.display="block";
document.getElementById("test-qn-btn-pallete").style.display="none";
score=0;
wq=0;
for(j=0;j<ttx;j++){
if(answerOptions[j]!=undefined){
if(answerOptions[j]==question_fetch[j].gsx$answer.$t){score++;}
if(answerOptions[j]!=question_fetch[j].gsx$answer.$t){wq++;}}

if(document.getElementById("q"+(j+1)).className=="notVisited"){notVisit++; }
else if(document.getElementById("q"+(j+1)).className=="notAnswered"){visited++; }
else if(document.getElementById("q"+(j+1)).className=="answeredButton"){answered++; }
else if(document.getElementById("q"+(j+1)).className=="review"){reviewed++; }
else if(document.getElementById("q"+(j+1)).className=="markReview"){reviewedans++;}
totalall.innerHTML = notVisit + visited + answered + reviewed + reviewedans;
document.getElementById("correct").innerHTML=score;
document.getElementById("wrong").innerHTML=wq;

if(j>=sec1_limit && j < sec2_limit){
if(answerOptions[j]!=undefined){
if(answerOptions[j]==question_fetch[j].gsx$answer.$t){correct2++;}
if(answerOptions[j]!=question_fetch[j].gsx$answer.$t){wrong2++;}}
if(document.getElementById("q"+(j+1)).className=="notVisited"){notVisit2++;}
else if(document.getElementById("q"+(j+1)).className=="notAnswered"){visited2++;}
else if(document.getElementById("q"+(j+1)).className=="answeredButton"){answered2++;}
else if(document.getElementById("q"+(j+1)).className=="review"){reviewed2++;}
else if(document.getElementById("q"+(j+1)).className=="markReview"){reviewedans2++;}
total11.innerHTML = notVisit2 + visited2 + answered2 + reviewed2 + reviewedans2;
document.getElementById("correct2").innerHTML=correct2;
document.getElementById("wrong2").innerHTML=wrong2;}

if(j>=sec2_limit-1 && j<sec3_limit-1){
if(answerOptions[j]!=undefined){
if(answerOptions[j]==question_fetch[j].gsx$answer.$t){correct3++;}
if(answerOptions[j]!=question_fetch[j].gsx$answer.$t){wrong3++;}}
if(document.getElementById("q"+(j+1)).className=="notVisited"){notVisit3++;}
else if(document.getElementById("q"+(j+1)).className=="notAnswered"){visited3++;}
else if(document.getElementById("q"+(j+1)).className=="answeredButton"){answered3++;}
else if(document.getElementById("q"+(j+1)).className=="review"){reviewed3++;}
else if(document.getElementById("q"+(j+1)).className=="markReview"){reviewedans3++; }
total2.innerHTML = notVisit3 + visited3 + answered3 + reviewed3 + reviewedans3;
document.getElementById("correct3").innerHTML=correct3;
document.getElementById("wrong3").innerHTML=wrong3;}

if(j>=sec3_limit-1 && j<sec4_limit-1){
if(answerOptions[j]!=undefined){
if(answerOptions[j]==question_fetch[j].gsx$answer.$t){correct4++;}
if(answerOptions[j]!=question_fetch[j].gsx$answer.$t){wrong4++;}}
if(document.getElementById("q"+(j+1)).className=="notVisited"){notVisit4++;}
else if(document.getElementById("q"+(j+1)).className=="notAnswered"){visited4++;}
else if(document.getElementById("q"+(j+1)).className=="answeredButton"){answered4++;}
else if(document.getElementById("q"+(j+1)).className=="review"){reviewed4++;}
else if(document.getElementById("q"+(j+1)).className=="markReview"){reviewedans4++; }
total3.innerHTML = notVisit4 + visited4 + answered4 + reviewed4 + reviewedans4;
document.getElementById("correct4").innerHTML=correct4;
document.getElementById("wrong4").innerHTML=wrong4;}

if(j>=sec4_limit-1 && j<sec5_limit-1){
if(answerOptions[j]!=undefined){
if(answerOptions[j]==question_fetch[j].gsx$answer.$t){correct5++;}
if(answerOptions[j]!=question_fetch[j].gsx$answer.$t){wrong5++;}}
if(document.getElementById("q"+(j+1)).className=="notVisited"){notVisit5++;}
else if(document.getElementById("q"+(j+1)).className=="notAnswered"){visited5++;}
else if(document.getElementById("q"+(j+1)).className=="answeredButton"){answered5++;}
else if(document.getElementById("q"+(j+1)).className=="review"){reviewed5++;}
else if(document.getElementById("q"+(j+1)).className=="markReview"){reviewedans5++; }
total4.innerHTML = notVisit5 + visited5 + answered5 + reviewed5 + reviewedans5;
document.getElementById("correct5").innerHTML=correct5;
document.getElementById("wrong5").innerHTML=wrong5;}

if(j>=sec5_limit-1 && j<sec6_limit-1){
if(answerOptions[j]!=undefined){
if(answerOptions[j]==question_fetch[j].gsx$answer.$t){correct6++;}
if(answerOptions[j]!=question_fetch[j].gsx$answer.$t){wrong6++;}}
if(document.getElementById("q"+(j+1)).className=="notVisited"){notVisit6++;}
else if(document.getElementById("q"+(j+1)).className=="notAnswered"){visited6++;}
else if(document.getElementById("q"+(j+1)).className=="answeredButton"){answered6++;}
else if(document.getElementById("q"+(j+1)).className=="review"){reviewed6++;}
else if(document.getElementById("q"+(j+1)).className=="markReview"){reviewedans6++; }
total5.innerHTML = notVisit6 + visited6 + answered6 + reviewed6 + reviewedans6;
document.getElementById("correct6").innerHTML=correct6;
document.getElementById("wrong6").innerHTML=wrong6;}

if(j>=sec6_limit-1 && j<ttx-1){
if(answerOptions[j]!=undefined){
if(answerOptions[j]==question_fetch[j].gsx$answer.$t){correct8++;}
if(answerOptions[j]!=question_fetch[j].gsx$answer.$t){wrong8++;}}
if(document.getElementById("q"+(j+1)).className=="notVisited"){notVisit8++;}
else if(document.getElementById("q"+(j+1)).className=="notAnswered"){visited8++;}
else if(document.getElementById("q"+(j+1)).className=="answeredButton"){answered8++;}
else if(document.getElementById("q"+(j+1)).className=="review"){reviewed8++;}
else if(document.getElementById("q"+(j+1)).className=="markReview"){reviewedans8++; }
total6.innerHTML = notVisit8 + visited8 + answered8 + reviewed8 + reviewedans8;
document.getElementById("correct8").innerHTML=correct8;
document.getElementById("wrong8").innerHTML=wrong8;}
}


//sec1
document.getElementById("final-tabled-result").style.display="block";
document.getElementById("answered2").innerHTML=answered2;
document.getElementById("visited2").innerHTML=visited2;
document.getElementById("notvisited2").innerHTML=notVisit2;
document.getElementById("reviewed2").innerHTML=reviewed2;
document.getElementById("reviewedans2").innerHTML=reviewedans2;

//sec2
document.getElementById("answered3").innerHTML=answered3;
document.getElementById("visited3").innerHTML=visited3;
document.getElementById("notvisited3").innerHTML=notVisit3;
document.getElementById("reviewed3").innerHTML=reviewed3;
document.getElementById("reviewedans3").innerHTML=reviewedans3;

//sec3
document.getElementById("answered4").innerHTML=answered4;
document.getElementById("visited4").innerHTML=visited4;
document.getElementById("notvisited4").innerHTML=notVisit4;
document.getElementById("reviewed4").innerHTML=reviewed4;
document.getElementById("reviewedans4").innerHTML=reviewedans4;

//sec4
document.getElementById("answered5").innerHTML=answered5;
document.getElementById("visited5").innerHTML=visited5;
document.getElementById("notvisited5").innerHTML=notVisit5;
document.getElementById("reviewed5").innerHTML=reviewed5;
document.getElementById("reviewedans5").innerHTML=reviewedans5;

//sec5
document.getElementById("answered6").innerHTML=answered6;
document.getElementById("visited6").innerHTML=visited6;
document.getElementById("notvisited6").innerHTML=notVisit6;
document.getElementById("reviewed6").innerHTML=reviewed6;
document.getElementById("reviewedans6").innerHTML=reviewedans6;

//sec6
document.getElementById("answered8").innerHTML=answered8;
document.getElementById("visited8").innerHTML=visited8;
document.getElementById("notvisited8").innerHTML=notVisit8;
document.getElementById("reviewed8").innerHTML=reviewed8;
document.getElementById("reviewedans8").innerHTML=reviewedans8;

//total
document.getElementById("answered").innerHTML=answered;
document.getElementById("visited").innerHTML=visited;
document.getElementById("notvisited").innerHTML=notVisit;
document.getElementById("reviewed").innerHTML=reviewed;
document.getElementById("reviewedans").innerHTML=reviewedans;

var txmrk=score*Positive_number;
var tx2mrk=wq*deductive_number;
var txmrkp= txmrk - tx2mrk;
document.getElementById("test-wrapper-container").style.display="none";
document.getElementById("test-restartq").style.display="block";
document.querySelector(".total-correct").innerHTML=score + ' Qns.';
document.querySelector(".total-wrong").innerHTML=wq + ' Qns.';
document.querySelector(".total-questions").innerHTML=ttx + ' Qns.';
document.querySelector(".total-attempt").innerHTML=score+wq + ' Qns.';
document.querySelector("#test_name").innerHTML=exam_name;
document.querySelector("#test_sb_name").innerHTML=subject_name;

document.querySelector(".accuracy-percentage").innerHTML=((score/ttx)*100).toFixed(2) +"%";
var acrlvl = (score/ttx)*100+"%";
document.querySelector(".testcontainer .progress .bar.two").style.width=acrlvl;
if(percentage<=0){document.querySelector(".testcard-one .testcontainer .progress .bar.one").style.width=0 +"%";}

if(deductive_number!=undefined){
var percnt=((txmrk/(ttx*Positive_number))*100);
document.getElementById("score").innerHTML=txmrk - tx2mrk;
document.getElementById("tscore").innerHTML=ttx*Positive_number;
document.getElementById("percentage").innerHTML=((txmrkp/(ttx*Positive_number))*100).toFixed(2)+'%';
document.querySelector(".progress-percentage").innerHTML=((txmrkp/(ttx*Positive_number))*100).toFixed(2)+'%';
document.querySelector(".testcard-one .testcontainer .progress .bar.three").style.width=((txmrkp/(ttx*Positive_number))*100).toFixed(2)+'%';
document.querySelector(".testcard-one .testcontainer .progress .bar.one").style.width=((txmrkp/(ttx*Positive_number))*100).toFixed(2) +"%";
}
if(deductive_number==null){
document.getElementById("score").innerHTML=score*Positive_number;
document.getElementById("tscore").innerHTML=ttx*Positive_number;
document.getElementById("percentage").innerHTML=((txmrk/(ttx*Positive_number))*100).toFixed(2)+'%';
document.querySelector(".progress-percentage").innerHTML=((txmrk/(ttx*Positive_number))*100).toFixed(2)+'%';
document.querySelector(".testcard-one .testcontainer .progress .bar.three").style.width=((txmrk/(ttx*Positive_number))*100).toFixed(2)+'%';
document.querySelector(".testcard-one .testcontainer .progress .bar.one").style.width=((txmrk/(ttx*Positive_number))*100).toFixed(2)+"%";

}

if(score>=ttx/4){
document.getElementById("practice-button-link").href=practice_button_link;
document.getElementById("practice-button-link").innerHTML="Practice More";
document.querySelector(".grade-percentage").innerHTML="D";
document.querySelector(".grade-percentage").classList.add("grade-d");
}
else if(score>=ttx/3){
document.getElementById("practice-button-link").href=practice_button_link;
document.getElementById("practice-button-link").innerHTML="Practice More";
document.querySelector(".grade-percentage").innerHTML="C";
document.querySelector(".grade-percentage").classList.add("grade-c");
}
else if(score>=ttx/2){
document.getElementById("practice-button-link").href=preparation_button_link;
document.getElementById("practice-button-link").innerHTML="Prepare More";
document.querySelector(".grade-percentage").innerHTML="B";
document.querySelector(".grade-percentage").classList.add("grade-b");
}
else if(score>=ttx/1.33){
document.getElementById("practice-button-link").href=preparation_button_link;
document.getElementById("practice-button-link").innerHTML="Prepare More";
document.querySelector(".grade-percentage").classList.add("grade-a");
document.querySelector(".grade-percentage").innerHTML="A";
}
else if(score<=ttx/5){
document.getElementById("practice-button-link").href=practice_button_link;
document.getElementById("practice-button-link").innerHTML="Practice More";
document.querySelector(".grade-percentage").classList.add("grade-fail");
document.querySelector(".grade-percentage").innerHTML="Fail";
}
}
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
var html;	
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
			    html = "<div align='center' id='test-confirm-box'><img style='border:none;' src='https://1.bp.blogspot.com/--zLAu1T1avE/YT2FpRCjUkI/AAAAAAAAAG0/ymkxbJ_IAJQZ6UCbxnVo8fqvXPs8DM1YgCLcBGAsYHQ/s0/IMG_20210912_101310.jpg' valign='middle' id='submit-time-logo' align='center'><h2  id='confirm-header'></h2><br><div class='uvp-list'><ul><li><span class='test-data-title'>Time Left : </span><span id='test-time-left' class='test-data-get'>---</span></li><li><span class='test-data-title'>Not visited : </span><span id='test-qn-notvisit' class='test-data-get'>---</span></li><li><span class='test-data-title'>Attempted : </span><span  id='test-qn-attempted' class='test-data-get'>---</span></li><li><span class='test-data-title'>Unattempted : </span><span  id='test-qn-unattempted' class='test-data-get'>---</span></li><li><span class='test-data-title'>Reviewed : </span><span id='test-qn-review'  class='test-data-get'>---</span></li><li><span class='test-data-title'>Review & Answer : </span><span id='test-qn-markreview' class='test-data-get'>---</span></li></ul></div>";
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
			}, 500);
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
				}, 500);
				
			}, false);
			
			
			self.instance.querySelector( "#confirm-cancel" ).
			addEventListener( "click", function() {
				self.hide( self.instance );
				setTimeout(function() {
					self.params.cancel();
				}, 500);
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
 document.getElementById("ContactForm1_contact-form-email-message").value="Sir , Please recheck this Qn [" + (ibv+1) +"] " +question_fetch[ibv].gsx$question.$t+ "and Post link is "+ window.location.href+". Please check this Question.";
 document.getElementById("qn-no-testp").innerHTML="<span id='test-question-number1'>"+(ibv+1)+"</span> ";
 document.getElementById("test-questions").innerHTML="<span id='test-question-number'>"+(ibv+1)+"</span> "+question_fetch[ibv].gsx$question.$t;
 document.getElementById("queims").src=question_fetch[ibv].gsx$qnimage.$t;
 document.getElementById("opa").innerHTML=question_fetch[ibv].gsx$optiona.$t;
 document.getElementById("opb").innerHTML=question_fetch[ibv].gsx$optionb.$t;
 document.getElementById("opc").innerHTML=question_fetch[ibv].gsx$optionc.$t;
 document.getElementById("opd").innerHTML=question_fetch[ibv].gsx$optiond.$t;
 updateLanguage();
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
