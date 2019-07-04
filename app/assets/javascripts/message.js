function buildHTML(message){
  var val = `<div class="message" data-message-id=${message.id}>
  <div class="upper-message">
    <div class="upper-message__user-name">
      ${message.user_name}
    </div>
    <div class="upper-message__date">
      ${message.date}
    </div>
  </div>
  <div class="lower-message">
    <p class="lower-message__content">
      ${message.content}
    </p>
  </div>
  <asset_path src=${message.image} >
</div>`

  if ( message.image ) {
    var html =
     val
     return html;
  } else {
    var html =
     val
     return html;
  };
}
$('.js-form').on('submit', function(){
e.preventDefault();
var formData = new FormData(this);
var url = $(this).attr('action')
$.ajax({
  url: url,
  type: "POST",
  data: formData,
  dataType: 'json',
  processData: false,
  contentType: false
})
 .done(function(data){
   var html = buildHTML(data);
   $('.messages').append(html);
   $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast');   
   $('form')[0].reset();
 })
  .fail(function(){
    alert('error');
  });
  return false;
});
