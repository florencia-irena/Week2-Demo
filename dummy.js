  $(document).ready( function() {
      resizeText()
  });

  function resizeText() {
    $urlHeight = $('#url').height();
    if($urlHeight < 30) {
      $('#url').css('font-size', 25)
    }
    if ($urlHeight >= 35) {
      $('#url').css('font-size', 30)
    }
  }