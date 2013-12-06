function prepareMenu() {
  $('#expList').find('li:has(ul)')
    .click( function(event) {
      if (this == event.target) {
        $(this).toggleClass('expanded');
        $(this).children('ul').toggle('medium');
      }
      return false;
    })
    .addClass('collapsed')
    .children('ul').hide();

    $list = $('#list0');
    $('#lesson0').click( function(event) {
        if (this == event.target) {
          $list.toggleClass('expanded');
          $list.children('ul').toggle('medium');
        }
        return false;
    })
};


$(document).ready(function() {
  prepareMenu();
  //GME API TITLE
  $("#title").css('font-size', 0.031*($("#title").height()+$("#title").width()));
  //INSTRUCTIONS
  $("#instructions").css('font-size', 0.021*($("#instructions").height()+$("#instructions").width()));
  //URL BOX
  $("#url").css('font-size', 0.26*($("#url").height()+$("#url").width()));
  //URL INPUT
  $("#input-url").css('font-size', 0.040*($("#input-url").height()+0.5*$("#input-url").width()));
  //JSON INPUT
  $("#input-js").css('font-size', 0.015*($("#input-js").height()+$("#input-js").width()));
  //OUTPUT
  $("#output").css('font-size', 0.013*($("#output").height()+$("#output").width()));
  //LESSON BUTTONS
  $(".big-button").css('font-size', 0.028*(0.5*$("#buttons").height()+$("#buttons").width()));
  $(".lil-button").css('font-size', 0.023*(0.5*$("#buttons").height()+$("#buttons").width()));
  //SUBMIT AND CLEAR BUTTONS
  $("#submit-button").css('font-size', 0.18*($("#submit-button").height()+$("#submit-button").width()));
  $("#clear-button").css('font-size', 0.18*($("#clear-button").height()+$("#submit-button").width()));
});

$(window).resize(function() {
   //GME API TITLE
  $("#title").css('font-size', 0.031*($("#title").height()+$("#title").width()));
  //INSTRUCTIONS
  $("#instructions").css('font-size', 0.021*($("#instructions").height()+$("#instructions").width()));
  //URL BOX
  $("#url").css('font-size', 0.26*($("#url").height()+$("#url").width()));
  //URL INPUT
  $("#input-url").css('font-size', 0.040*($("#input-url").height()+0.5*$("#input-url").width()));
  //JSON INPUT
  $("#input-js").css('font-size', 0.015*($("#input-js").height()+$("#input-js").width()));
  //OUTPUT
  $("#output").css('font-size', 0.013*($("#output").height()+$("#output").width()));
  //LESSON BUTTONS
  $(".big-button").css('font-size', 0.028*(0.5*$("#buttons").height()+$("#buttons").width()));
  $(".lil-button").css('font-size', 0.023*(0.5*$("#buttons").height()+$("#buttons").width()));
  //SUBMIT AND CLEAR BUTTONS
  $("#submit-button").css('font-size', 0.18*($("#submit-button").height()+$("#submit-button").width()));
  $("#clear-button").css('font-size', 0.18*($("#clear-button").height()+$("#submit-button").width()));
});
