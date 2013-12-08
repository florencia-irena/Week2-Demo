var lessonArray = [$('#list0'), $('#list1'), $('#list2')]

  $(document).ready( function() {
    prepareMenu()
    $list0.addClass('collapsed');
    $list0.children('ul').hide();
    $list1.addClass('collapsed');
    $list1.children('ul').hide();
    $list2.addClass('collapsed');
    $list2.children('ul').hide();
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
          if (this == event.target) {
            $list1.toggleClass('expanded');
            $list1.children('ul').toggle('medium');
          }
        $list0.children('ul').hide('medium');
        $list2.children('ul').hide('medium');
          return false;
      })

      $('#lesson2').click( function(event) {
          if (this == event.target) {
            $list2.toggleClass('expanded');
            $list2.children('ul').toggle('medium');
          }
        $list1.children('ul').hide('medium');
        $list0.children('ul').hide('medium');
          return false;
      })

  };

  /*    $('#expList').find('li:has(ul)')
      .click( function(event) {
        if (this == event.target) {
          $(this).toggleClass('expanded');
          $(this).children('ul').toggle('medium');
        }
        return false;
      })*/