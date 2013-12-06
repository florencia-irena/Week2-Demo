  $(document).ready( function() {
    prepareMenu()
    /*
    $(window).resize(function() {
      $urlHeight = $('#url').height();
      $urlWidth = $('#url').width();
      if ($urlHeight*0.8 < $urlWidth*0.9) {
        $('#url').css('font-size', $urlHeight*0.8)
      } else {
        $('#url').css('font-size', $urlWidth*0.9)
      }
    });
  */
  });

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