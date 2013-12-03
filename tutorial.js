//Javascript file for tutorial
//THE GLOBAL VARIABLES

//global window size variables used in dynamic sizing
var winWidth = $(window).width();
var winHeight = $(window).height();

//object to store lesson information
function Lesson(title, blurb, divID) {
  this.title = title;
  this.blurb = blurb;
  this.divID = divID;
  this.update = function() {};
}



//THE LESSONS
var lesson0 = new Lesson("Introduction", "Welcome to Google Maps API tutorial. <br> In this tutorial, we will teach you how to read public data from a Google map project."+
                        "<br>To begin the tutorial, you can click the tutorial menu on the left. Enjoy!", "lesson0-intro");
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
var lesson3 = new Lesson("Get Table", "The GME API stores data in tables with the columns representing attributes and each row " +
  "representing a data entry. The attributes each have a name and a type which indicates what form the data takes (string, number etc.)." +
  " Once a table is created, you can view the names of all attributes and their types (known as a <b>schema</b>) using the 'Get Table'" +
  " read operation.<br><br>As stated, accessing data occurs through HTTP requests. The GME API allows you to use URLs to access public data." +
  " All requests use the same base URL: <br><i>https://www.googleapis.com/mapsengine/v1</i>.<br><br>To specify a 'Get Table' request, add <i>/tables/{tableID}</i>" +
  " followed by two compulsory parameters, <i>/?version=published&key={APIkey}</i>.<br>The API key is the one you created in the previous lesson.<br><br>" +
  "Why don't you give this a try? type the URL into the input box below, using the tableID: 15474835347274181123-16143158689603361093 and submit.", "lesson3-gettable");
lesson3.update = updateGetTable;
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
var lesson6 = new Lesson("Other Methods", "Besides directly typing the URL into the browser or using Javascript, you can access the public data by using 'curL'." +
	                     "<br>cURL is a command-line tool that can be used to make HTTP requests. Simply type into your console/terminal:" +
	                     "<br>curl \"<em>your URL</em>\"" +
	                     "<br><br>For example, the command line that you typed in your console/terminal should look like this: " +
	                     "<br>curl \"https://www.googleapis.com/mapsengine/v1/tables/01512215508764088245-12798225287603138914/features?version=published&key=AIzaSyAllwffSbT4nwGqtUOvt7oshqSHowuTwN0\""+
                         "<br><br>You can try to put your command line in the white box below and see what data will be read and displayed in your console. Try it!:)", "lesson6-othermethods");

lesson6.update = updateOtherMethods;



//The Lesson Array
var lessonArray = [lesson0, lesson1, lesson2, lesson3, lesson4, lesson5, lesson6];

//Active index
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
  //dynamically changing the divs

  document.getElementById('instructions').style.width = winWidth - 240 + 'px';
  console.log('window height: ' + $( window ).height());
  console.log('document height: ' + $(document).height());
  console.log('window width: ' + $( window ).width());
  console.log('document width: ' + $(document).width());

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

/*
function clear(){
  for (var i=0; i<lessonArray.length; i++){
    if(lessonArray[i].title === document.title){
      break;
    }
  }
  $("#output"+i).empty();
}
*/
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
  element.style.width = (winWidth - 180)/2 - 4 + 'px';
  element.style.height = winHeight - ((winHeight * 34 / 100) + 103) + 'px';
  element.style.left = '180px';
  element.style.top = (winHeight * 34 / 100) + 100 + 'px'
  element.style.resize = 'none';
  element.style.border = '2px solid black'
  element.style.overflowY = 'scroll';
}

function outputStyle(element, i) {
  element.style.position = 'absolute';
  element.style.backgroundColor = 'black';
  element.style.color = 'white';
  element.style.fontSize = '18px';

  element.style.width = (winWidth - 180)/2 - 10 + 'px';
  element.style.height = winHeight - ((winHeight * 34 / 100) + 105) + 'px';
  element.style.left = 180 + (winWidth - 180)/2 - 4 + 'px';
  element.style.top = (winHeight * 34 / 100) + 100 + 'px'
  element.style.border = '5px solid black'
  element.style.overflowY = 'scroll';
}

function inputExplanationStyle(element, i){
  element.style.position = 'absolute';
  element.style.backgroundColor = 'yellow';
  element.style.color = 'black';
  element.style.fontSize = '20px';
  element.style.width = (winWidth - 200)/2 + 'px';
  element.style.left = '180px';
  element.style.top = (winHeight * 34 / 100) + 55 + 'px';
  element.style.height = '35px'
  element.style.border = '5px solid red'
  element.style.fontWeight = 'bold';
  element.style.opacity = 0.7;
  element.style.overflowY = 'scroll';
}

function outputExplanationStyle(element, i){
  element.style.position = 'absolute';
  element.style.backgroundColor = 'yellow';
  element.style.color = 'black';
  element.style.fontSize = '20px';
  element.style.width = (winWidth - 200)/2 + 'px';
  element.style.height =  '35px'
  element.style.left = 190 + (winWidth - 200)/2 + 'px';
  element.style.top = (winHeight * 34 / 100) + 55 + 'px';
  element.style.border = '5px solid red'
  element.style.fontWeight = 'bold';
  element.style.opacity = 0.7;
  element.style.overflowY = 'scroll';
}


//*****************THE INTRO FUNCTIONS**********************//
function updateIntro() {
  activeIndex = 0;
  hideAll();
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
function updateGetTable() {
  activeIndex = 3;
  document.title = lessonArray[activeIndex].title;
  document.getElementById(lessonArray[activeIndex].divID).style.display = "block";
  document.getElementById("instructions").innerHTML = lessonArray[activeIndex].blurb;
}
//*****************THE List Features FUNCTIONS**********************//
//*****************THE Javascript FUNCTIONS**********************//
function updateJavascript() {
  activeIndex = 5;
  document.title = lessonArray[activeIndex].title;
  document.getElementById(lessonArray[activeIndex].divID).style.display = "block";
  document.getElementById("instructions").innerHTML = lessonArray[activeIndex].blurb;
}

//*****************THE Other Methods FUNCTIONS**********************//
function updateOtherMethods(){
  activeIndex = 6;
  hideAll();
  document.title = lessonArray[activeIndex].title;
  document.getElementById(lessonArray[activeIndex].divID).style.display = "block";
  document.getElementById("instructions").innerHTML = lessonArray[activeIndex].blurb;
  var inputBox = $("#input" + activeIndex);
 
  inputBox.keypress(function(e){
    if(e.keyCode == 13) {
      //console.log($inputBox);
      //console.log(document.getElementById("#input" + activeIndex));
      executeCurlInput();
    }
  });
}

function executeCurlInput(){
  
  var string = document.getElementById("input" + activeIndex).value;
  for (var i = 0; i<string.length; i++){
    if(string[i]!== ' '){
      break;
    }
  }

  //the user has to type curl
  if (string.length<=(i+3) ||string[i]!== 'c' || string[i+1]!=='u' || string[i+2]!=='r' || string[i+3]!=='l'){
    alert("You entered wrong command-line. See the tutorial again.");
  } else {
    i = i+4;
    //there should be space after the curl
    if (string.length == i || string[i]!== ' ') {
      alert("You entered wrong command-line. See the tutorial again.");
    } else {
      i = i+1;
      for (; i<string.length; i++){
        if(string[i]!== ' '){
          break;
        }
      }
      //there should be " after the curl command, and there should be something after that
      if(string.length == i || string.length == i+1 || string[i]!== '\"'){
        alert("You entered wrong command-line. See the tutorial again.");
      } else {
        var address="";
        address += string[i];
        i = i+1;
        for(; i<string.length; i++){
          address += string[i];
          if(string[i] == '\"' || string[i] == ' '){
            break;
          }
        }
        //if not closing the "
        if (string[i] !== '\"'){
          alert("You entered wrong command-line. See the tutorial again.");
        } else {
          //var addressString = address.join("");
          getFeaturesCurl(address);
        }
      }
    }
  }
}

function getFeaturesCurl(addressString){
  var $data = $("#output" + activeIndex);
  var data = document.getElementById("output" + activeIndex);
  data.style.whiteSpace = 'pre';
  //clear the table first
  var address = "https://www.googleapis.com/mapsengine/v1/tables/01512215508764088245-12798225287603138914/features?version=published&key=AIzaSyAllwffSbT4nwGqtUOvt7oshqSHowuTwN0";
  //console.log("abc"+ addressString + "abc");
  $data.empty();
  jQuery.ajax({
    'url': address,
    //url: "https://www.googleapis.com/mapsengine/v1/tables/01512215508764088245-12798225287603138914/features?version=published&key=AIzaSyAllwffSbT4nwGqtUOvt7oshqSHowuTwN0",
    dataType: 'json',
    success: function(resource) {
      var resourceString = JSON.stringify(resource, null, 2);
      console.log("yes!");
      $data.append("\n");
      $data.append(resourceString);
      $data.append("\n");
    },
    error: function(response) {
      /*
      response = JSON.parse(response.responseText);
      var errorMess = response.error.errors[0];
      if (errorMess.reason === "authError") {
        $data.append("\nYour authorization token is invalid. \nPlease check that the table can be viewed by general public\n\n");
      } else if (errorMess.reason === "invalid") {
        var field = errorMess.location;
        $data.append("\nInvalid value in the \""+field+"\" field.\nCheck whether you've given the right tableId\n\n");
      } else {
        $data.append("\nThe data cannot be processed. See the details below for the information regarding the error:\n\n");
      }
      var responseString = JSON.stringify(errorMess, null, 2);
      $data.append(responseString);
      $data.append("\n");
      */
      console.log("no!");
    }
  });
}