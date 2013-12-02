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

function clear();