function prepareList() {
  $('#expList').find('li:has(ul)')
<<<<<<< HEAD
          .click( function(event) {
                  if (this == event.target) {
                          $(this).toggleClass('expanded');
                          $(this).children('ul').toggle('medium');
                  }
                  return false;
          })
          .addClass('collapsed')
          .children('ul').hide();
=======
  	.click( function(event) {
  		if (this == event.target) {
  			$(this).toggleClass('expanded');
  			$(this).children('ul').toggle('medium');
  		}
  		return false;
  	})
  	.addClass('collapsed')
  	.children('ul').hide();
>>>>>>> ae1c6233cf2c74ccf9abf0736faa75465ec0af6f

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
<<<<<<< HEAD
=======

>>>>>>> ae1c6233cf2c74ccf9abf0736faa75465ec0af6f
