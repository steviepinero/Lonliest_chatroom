//create message
$(document).on('ready', function() {
  $(document).click(function(event) {
    $('#new-message-button').click(function(event) {
      var message = $('#new-message-body').val();
      console.log(message);
      
      $('<li class="message"><a class="delete" href="#">Delete</a><h3 class="author">Me</h3><p class="message-body">' + message +'</p><span class="timestamp">01:12</span></li>').appendTo('#conversation');
    });
});










//chuck norris joke
var api_url = "http://api.icndb.com/jokes/random"
$(document).click(function(event) {
$.get(api_url, function(data) {
  console.log(data.value.joke);
   $('#lonely').click(function(event) {

  $('.message').text(data.value.joke).appendTo($('#conversation'));
    });
  });
});
});
