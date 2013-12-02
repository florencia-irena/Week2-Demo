//Javascript file for tutorial
//THE GLOBAL VARIABLES

//object to store lesson information
function Lesson(title, blurb, divID) {
  this.title = title;
  this.blurb = blurb;
  this.divID = divID;
  this.update = function() {};
}

//TODO: Create Lesson Variables for all seven lessons
var lesson0 = new Lesson("Introduction", "replace with blurb0", "lesson0-intro");
lesson0.update = updateIntro;
var lesson1 = new Lesson("GME API", "The Google Maps Engine API (Application Programming Interface) is a RESTful API where resources are represented as JavaScript Object Notation (JSON) making it simple for developers to create, share and publish their own custom Google maps and develop applications for a number of platforms. <br><br>
The interface allows users to Create, Read, Upload, Update and Delete data from custom tables using simple HTTP requests.<br><br>
As stated in the introduction, this tutorial will focus on reading public data and customising the JSON resources.", "lesson1-gmeapi");
lesson1.update = updateIntro;
var lesson2 = new Lesson("API Key", "For this tutorial you will need an API key in order to access the data. To obtain an API Key, go to the <a href=https://cloud.google.com/console>Google Cloud Console</a>. Click on APIs & Auth and turn the Google Maps Engine API to ON.
<br>Next, you will need to register your app as a Web Application through the Registered Apps tab. The API key can be found under the Server/Browser Key dropdown.", "lesson2-apikey");
lesson2.update = updateIntro;
var lesson3 = new Lesson("Get Table", "replace with blurb3", "lesson3-gettable");
lesson3.update = updateIntro;
var lesson4 = new Lesson("List Features", "replace with blurb4", "lesson4-featureslist");
lesson4.update = updateIntro;
var lesson5 = new Lesson("Javascript", "replace with blurb5", "lesson5-javascript");
lesson5.update = updateIntro;
var lesson6 = new Lesson("Other Methods", "replace with blurb6", "lesson6-othermethods");
lesson6.update = updateIntro;


//The Lesson Array
var lessonArray = [lesson0, lesson1, lesson2, lesson3, lesson4, lesson5, lesson6];


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
  lessonArray[0].update();
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
  buttonProp.style.width = '150px';
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
    //style the areas
    var inputElement = document.getElementById("input" + i);
    inputStyle(inputElement, i);
    var outputElement = document.getElementById("output" + i);
    outputStyle(outputElement, i)
  }
}

function inputStyle(element, i) {
  element.style.position = 'absolute';
  element.style.backgroundColor = 'white';
  element.style.color = 'black';
  element.style.fontSize = '18px';
  element.style.width = '400px';
  element.style.height = '400px';
  element.style.right = '400px';
  element.style.left = '200px';
  element.style.bottom = '0px';
  element.style.resize = 'none';
}

function outputStyle(element, i) {
  element.style.position = 'absolute';
  element.style.backgroundColor = 'black';
  element.style.color = 'white';
  element.style.fontSize = '18px';
  element.style.width = '400px';
  element.style.height = '400px';
  element.style.right = '0px';
  element.style.left = '600px';
  element.style.bottom = '0px';
}

function updateIntro() {
  document.title = lessonArray[0].title;
  document.getElementById(lessonArray[0].divID).style.display = "block";
  document.getElementById("instructions").innerHTML = lessonArray[0].blurb;
}