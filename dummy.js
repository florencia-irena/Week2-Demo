$(document).ready( function() {
  prepareMenu();
  $list0.addClass('collapsed');
  $list0.children('ul').hide();
  $list1.addClass('collapsed');
  $list1.children('ul').hide();
  $list2.addClass('collapsed');
  $list2.children('ul').hide();
  $("#title").css('font-size', 0.031*($("#title").height()+$("#title").width()));
  //INSTRUCTIONS
  $("#instructions").css('font-size', 0.020*($("#instructions").height()+$("#instructions").width()));
  //URL BOX
  $("#url").css('font-size', 0.26*($("#url").height()+$("#url").width()));
  //URL INPUT
  $("#input-url").css('font-size', 0.040*($("#input-url").height()+0.5*$("#input-url").width()));
  //JSON INPUT
  $("#input-js").css('font-size', 0.015*($("#input-js").height()+$("#input-js").width()));
  //OUTPUT
  $("#output").css('font-size', 0.013*($("#output").height()+$("#output").width()));
  //LESSON BUTTONS
  $(".big-button").css('font-size', 0.027*(0.5*$("#buttons").height()+$("#buttons").width()));
  $(".lil-button").css('font-size', 0.023*(0.5*$("#buttons").height()+$("#buttons").width()));
  //SUBMIT AND CLEAR BUTTONS
  $("#submit-button").css('font-size', 0.18*($("#submit-button").height()+$("#submit-button").width()));
  $("#clear-button").css('font-size', 0.18*($("#clear-button").height()+$("#clear-button").width()));
  //PREV AND NEXT BUTTONS
  $("#prev-button").css('font-size', 0.18*($("#prev-button").height()+0.55*$("#prev-button").width()));
  $("#next-button").css('font-size', 0.18*($("#next-button").height()+0.55*$("#next-button").width())); 
});


function prepareMenu() {
  $list0 = $('#list0');
  $list1 = $('#list1');
  $list2 = $('#list2');

  $('#lesson0').click( function(event) {
    $list0.toggleClass('expanded');
    $list0.children('ul').toggle('medium');
    $list1.children('ul').hide('medium');
    $list2.children('ul').hide('medium');
      return false;
  })

  $('#lesson1').click( function(event) {
    $list1.toggleClass('expanded');
    $list1.children('ul').toggle('medium');
    $list0.children('ul').hide('medium');
    $list2.children('ul').hide('medium');
      return false;
  })

  $('#lesson2').click( function(event) {
    $list2.toggleClass('expanded');
    $list2.children('ul').toggle('medium');
    $list1.children('ul').hide('medium');
    $list0.children('ul').hide('medium');
      return false;
  })
}

$(window).resize(function() {
   //GME API TITLE
  $("#title").css('font-size', 0.031*($("#title").height()+$("#title").width()));
  //INSTRUCTIONS
  $("#instructions").css('font-size', 0.020*($("#instructions").height()+$("#instructions").width()));
  //URL BOX
  $("#url").css('font-size', 0.26*($("#url").height()+$("#url").width()));
  //URL INPUT
  $("#input-url").css('font-size', 0.040*($("#input-url").height()+0.5*$("#input-url").width()));
  //JSON INPUT
  $("#input-js").css('font-size', 0.015*($("#input-js").height()+$("#input-js").width()));
  //OUTPUT
  $("#output").css('font-size', 0.013*($("#output").height()+$("#output").width()));
  //LESSON BUTTONS
  $(".big-button").css('font-size', 0.027*(0.5*$("#buttons").height()+$("#buttons").width()));
  $(".lil-button").css('font-size', 0.023*(0.5*$("#buttons").height()+$("#buttons").width()));
  //SUBMIT AND CLEAR BUTTONS
  $("#submit-button").css('font-size', 0.18*($("#submit-button").height()+$("#submit-button").width()));
  $("#clear-button").css('font-size', 0.18*($("#clear-button").height()+$("#clear-button").width()));
  //PREV AND NEXT BUTTONS
  $("#prev-button").css('font-size', 0.18*($("#prev-button").height()+0.5*$("#prev-button").width()));
  $("#next-button").css('font-size', 0.18*($("#next-button").height()+0.5*$("#next-button").width())); 
});