function prepareList() {
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
  $('#button0').click( function(event) {
      if (this == event.target) {
        $list.toggleClass('expanded');
        $list.children('ul').toggle('medium');
      }
      return false;
  })
};
 
  $(document).ready( function() {
      prepareList()
  });
