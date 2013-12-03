//Javascript file for tutorial
//THE GLOBAL VARIABLES

//object to store lesson information
function Lesson(title, blurb, divID) {
  this.title = title;
  this.blurb = blurb;
  this.divID = divID;
  this.update = function() {};
}

//THE LESSONS
var lesson0 = new Lesson("Introduction", "<<replace with blurb0>>", "lesson0-intro");
lesson0.update = updateIntro;
var lesson1 = new Lesson("GME API", "The Google Maps Engine API (Application Programming Interface) is a RESTful API" +
  " where resources are represented as JavaScript Object Notation (JSON). This makes it simple for developers to create, share" +
  " and publish their own custom Google maps and develop applications for a number of platforms.<br> The interface allows" +
  " users to Create, Read, Upload, Update and Delete data from custom tables using simple HTTP requests.<br><br> As stated" +
  " in the introduction, this tutorial will focus on reading public data and customising the JSON resources.", "lesson1-gmeapi");
lesson1.update = updateGMEAPI;
var lesson2 = new Lesson("API Key", "For this tutorial you will need an API key in order to access the data. To obtain an API Key" +
", go to the <a href=https://cloud.google.com/console target='_blank'>Google Cloud Console</a>. Click on APIs & Auth and turn the Google Maps " +
"Engine API to ON.<br>Next, you will need to register your app as a Web Application through the Registered Apps tab. The API key" +
" can be found under the Server/Browser Key dropdown.<br><br>Once you have the key, paste it in the input box below.", "lesson2-apikey");
lesson2.update = updateAPIKey;
var lesson3 = new Lesson("Get Table", "<<replace with blurb3>>", "lesson3-gettable");
lesson3.update = updateIntro;
var lesson4 = new Lesson("List Features", "<<replace with blurb4>>", "lesson4-featureslist");
lesson4.update = updateIntro;
var lesson5 = new Lesson("Javascript", "So far, you have learned to generate a URL to request public data. Using JavaScript" +
" and jQuery you can create a function that will send this URL in a HTTP request and display the results. There are a few ways" +
" that this can be achieved, but this lesson will demonstrate using jQuery AJAX (Asynchronous JavaScript and XML) method.<br><br>" +
"Within a function, create a request structured in the following way:<br>" +
"jQuery.ajax({<br>" +
"&nbsp;&nbsp;url: &ltyour-url&gt,<br>" +
"&nbsp;&nbsp;dataType: 'json',<br>" +
"&nbsp;&nbsp;success: function(resource) {<br>" +
"&nbsp;&nbsp;&nbsp;&nbsp;//what will happen if the request is successful, e.g. display the JSON results<br>" +
"&nbsp;&nbsp;&nbsp;&nbsp;//NOTE: the two last parameters specify a nicer formatting for the output<br>" +
"&nbsp;&nbsp;&nbsp;&nbsp;console.log(JSON.stringify(resource, null, 4));<br>" +
"&nbsp;&nbsp;},<br>" +
"&nbsp;&nbsp;error: function(response) {<br>" +
"&nbsp;&nbsp;&nbsp;&nbsp;//what will happen if the request is unsuccessful, e.g. display error<br>" +
"&nbsp;&nbsp;&nbsp;&nbsp;console.log('Error: ', response.error.errors[0]);<br>" +
"&nbsp;&nbsp;}<br>" +
"});<br>" +
"Once you have the function created you will need to call it using:<br>" +
"jQuery(document).ready(functionName);", "lesson5-javascript");
lesson5.update = updateJavascript;
var lesson6 = new Lesson("Other Methods", "<<replace with blurb6>>", "lesson6-othermethods");
lesson6.update = updateIntro;


//The Lesson Array
var lessonArray = [lesson0, lesson1, lesson2, lesson3, lesson4, lesson5, lesson6];
var activeIndex = 0;
//The color array
var color = ['red', 'blue', 'purple'];

//Finding objects with class "lesson"
var lessonsClass = document.getElementsByClassName("lesson");

//*****************THE GLOBAL FUNCTIONS**********************//
google.maps.event.addDomListener(window, 'load', function initialize(){
  //CREATING BUTTONS
  for (var i=0; i<lessonsClass.length; i++){
    makeButton(lessonsClass[i].id, i);
  }
  createInputOutput();
  //set the initial page to be the introduction
  lessonArray[activeIndex].update();
});

function makeButton(string, i){
  var button = document.getElementById("buttons");
  var newButton = document.createElement("input");
  newButton.type = "button";
  newButton.id = string+"button";
  newButton.value = lessonArray[i].title;
  newButton.onclick = function(){
    lessonArray[i].update();
  };
  button.appendChild(newButton);
  button.appendChild(document.createElement("br"));
  var buttonElement = document.getElementById(string+"button");
  buttonStyle(buttonElement, i);
}

function buttonStyle(buttonProp, i){
  buttonProp.style.display = ' ';
  buttonProp.style.backgroundColor = 'yellow';
  buttonProp.style.width = '160px';
  buttonProp.style.height = '40px';
  buttonProp.style.fontSize = '20px';
  buttonProp.style.opacity = 0.8;
  buttonProp.style.fontWeight = 'bold';
  buttonProp.style.color = 'black';
  buttonProp.onmouseover = function(){  
    buttonProp.style.backgroundColor = color[i%color.length];
    buttonProp.style.color = 'white';
  }
  buttonProp.onmouseout = function(){
    buttonProp.style.backgroundColor = 'yellow';
    buttonProp.style.color = 'black';
  }
}


function clear(){
  for (var i=0; i<lessonArray.length; i++){
    if(lessonArray[i].title === document.title){
      break;
    }
  }
  $("#output"+i).empty();
}

//BLOCKING ALL DIVS AUTOMATICALLY
function hideAll() {
  for (var i=0; i<lessonsClass.length; i++){
    document.getElementById(lessonsClass[i].id).style.display = "none";
  }
}

//Should be called initially to dynamically create divs for each lesson
function createInputOutput() {
  for (var i = 0; i < lessonArray.length; i++) {
    var lesson = document.getElementById(lessonArray[i].divID);
    //add the text area
    var newInput = document.createElement("textarea");
    newInput.class = "text-input";
    newInput.id = "input" + i;
    lesson.appendChild(newInput);
    //add the output area
    var newOutput = document.createElement("div");
    newOutput.class = "text-output"
    newOutput.id = "output" + i;
    lesson.appendChild(newOutput);
    //create the divs of input output explanation
    var inputExp = document.createElement("div");
    inputExp.id = "input-explanation" + i;
    lesson.appendChild(inputExp);
    var outputExp = document.createElement("div");
    outputExp.id = "output-explanation" + i;
    lesson.appendChild(outputExp);

    //style the areas
    var inputElement = document.getElementById("input" + i);
    inputStyle(inputElement, i);
    var outputElement = document.getElementById("output" + i);
    outputStyle(outputElement, i)
    var inputExpElement = document.getElementById("input-explanation" + i);
    inputExpElement.innerHTML = "Please type your input below. Press enter to submit the input.";
    inputExplanationStyle(inputExpElement, i);
    var outputExpElement = document.getElementById("output-explanation" + i);
    outputExpElement.innerHTML = "Output";
    outputExplanationStyle(outputExpElement, i);
  }
}

function inputStyle(element, i) {
  element.style.position = 'absolute';
  element.style.backgroundColor = 'white';
  element.style.color = 'black';
  element.style.fontSize = '18px';
  element.style.width = '822px';
  element.style.height = '57%'; /* 517px */
  element.style.left = '180px';
  element.style.top = '475px';
  element.style.resize = 'none';
  element.style.border = '2px solid black'
}

function outputStyle(element, i) {
  element.style.position = 'absolute';
  element.style.backgroundColor = 'black';
  element.style.color = 'white';
  element.style.fontSize = '18px';
  element.style.width = '822px';
  element.style.height = '57%'; /* 515px */
  element.style.left = '1009px';
  element.style.top = '475px';
  element.style.border = '5px solid black'
}

function inputExplanationStyle(element, i){
  element.style.position = 'absolute';
  element.style.backgroundColor = 'yellow';
  element.style.color = 'black';
  element.style.fontSize = '20px';
  element.style.width = '822px';
  element.style.height = '3.3%'; /* 35px */
  element.style.left = '180px';
  element.style.top = '430px';
  element.style.border = '5px solid red'
  element.style.opacity = 0.7;
}

function outputExplanationStyle(element, i){
  element.style.position = 'absolute';
  element.style.backgroundColor = 'yellow';
  element.style.color = 'black';
  element.style.fontSize = '20px';
  element.style.width = '822px';
  element.style.height = '3.3%'; /* 35px */
  element.style.left = '1009px';
  element.style.top = '430px';
  element.style.border = '5px solid red'
  element.style.opacity = 0.7;
}

//*****************THE INTRO FUNCTIONS**********************//
function updateIntro() {
  activeIndex = 0;
  document.title = lessonArray[activeIndex].title;
  document.getElementById(lessonArray[activeIndex].divID).style.display = "block";
  document.getElementById("instructions").innerHTML = lessonArray[activeIndex].blurb;
}

//*****************THE GME API FUNCTIONS**********************//
function updateGMEAPI() {
  activeIndex = 1;
  document.title = lessonArray[activeIndex].title;
  document.getElementById(lessonArray[activeIndex].divID).style.display = "block";
  document.getElementById("instructions").innerHTML = lessonArray[activeIndex].blurb;
}

//*****************THE API Key FUNCTIONS**********************//
function updateAPIKey() {
  activeIndex = 2;
  document.title = lessonArray[activeIndex].title;
  document.getElementById(lessonArray[activeIndex].divID).style.display = "block";
  document.getElementById("instructions").innerHTML = lessonArray[activeIndex].blurb;
}

//*****************THE Get Table FUNCTIONS**********************//
//*****************THE List Features FUNCTIONS**********************//
//*****************THE Javascript FUNCTIONS**********************//
function updateJavascript() {
  activeIndex = 5;
  document.title = lessonArray[activeIndex].title;
  document.getElementById(lessonArray[activeIndex].divID).style.display = "block";
  document.getElementById("instructions").innerHTML = lessonArray[activeIndex].blurb;
}

//*****************THE Other Methods FUNCTIONS**********************//