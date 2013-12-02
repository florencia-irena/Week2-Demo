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
var lesson0 = ("Introduction", "<<replace with blurb0>>", "lesson0-intro");
var lesson1 = ("GME API", "<<replace with blurb1>>", "lesson1-gmeapi");
var lesson2 = ("API Key", "<<replace with blurb2>>", "lesson2-apikey");
var lesson3 = ("Get Table", "<<replace with blurb3>>", "lesson3-gettable");
var lesson4 = ("List Features", "<<replace with blurb4>>", "lesson4-featureslist");
var lesson5 = ("Javascript", "<<replace with blurb5>>", "lesson5-javascript");
var lesson6 = ("Other Methods", "<<replace with blurb6>>", "lesson6-othermethods");


//The Lesson Array
var lessonArray = [lesson0, lesson1, lesson2, lesson3, lesson4, lesson5, lesson6];

//Finding objects with class "lesson"
var lessonsClass = document.getElementsByClassName("lesson");

//*****************THE GLOBAL FUNCTIONS**********************//
google.maps.event.addDomListener(window, 'load', function initialize(){
  //CREATING BUTTONS
  for (var i=0; i<lessonsClass.length; i++){
    makeButton(lessonsClass[i].id, i);
  }
  
  //create refresh button
  var button = document.getElementById("buttons");
  var newButton = document.createElement("input");
  newButton.type = "button";
  newButton.id = "refresh";
  newButton.value = "Refresh";
  newButton.onclick = function(){
    refresh();
  };
  button.appendChild(newButton);
  
  //button.innerHTML = button.innerHTML + "<input type=\"button\" id=\"refresh\" value=\"Refresh\" onclick=\"refresh()\"></input><br>";
  var buttonElement = document.getElementById("refresh");
  buttonStyle (buttonElement, lessonsClass.length);

  //Set the initial page to be introduction
  lessonArray[0].refresh();
});

function makeButton(string, i){
  var button = document.getElementById("buttons");
  var newButton = document.createElement("input");
  newButton.type = "button";
  newButton.id = string+"button";
  newButton.value = lessonArray[i].title;
  newButton.onclick = function(){
    lessonArray[i].update()
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
    var lesson = document.getElementById = lessonArray[i].divID;
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
  element.style.backgroundColor = 'white';
  element.style.color = 'black';
  element.style.fontSize = '18px';
  element.style.width = '400px';
  element.style.height = '400px';
  element.style.right = '400px';
  element.style.bottom = '0px';
}

function outputStyle(element, i) {
  element.style.backgroundColor = 'black';
  element.style.color = 'white';
  element.style.fontSize = '18px';
  element.style.width = '400px';
  element.style.height = '400px';
  element.style.right = '0px';
  element.style.bottom = '0px';
}
