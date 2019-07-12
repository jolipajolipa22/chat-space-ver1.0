$(function () {
    function buildHTML(message) {

      　var img = message.image ? `<img src=${ message.image }>` : "";
    
        var html = `<div class=" message data-message-id="${message.id}">
                      <div class= "message__box__username">
                        <h4>${message.user_name}</h4>
                      </div>
                      <div class= "message__box__time">
                        <p>${message.created_at}</p>
                      </div>
                      　 <div class= "message__box__content">
                      <p>${message.content}</p>
                          ${img}
                      </div>
                    </div>`
        return html;
  }


    $('#new_message').on('submit', function (e) {
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
      .done(function (data) {
        
      var html = buildHTML(data);
      $('.messages').append(html)
      $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight},'fasts')
      $('.submit').prop("disabled", false)
      // $('#message_content').val("");
      // $('#message_image').val("");
      $('#new_message.new_message')[0].reset
      })
      .fail(function () {
        alert('error');
      })
      .always(() => {
        $(".form__submit").removeAttr("disabled");
        });
  });
  
  
  var reloadMessages = function () {
  if (window.location.href.match(/\/groups\/\d+\/messages/)) {
    var last_message_id = $('.message:last').data("message-id");

    $.ajax({
      url: "api/messages",
      type: "GET",
      dataType: "json",
      data: { last_id: last_message_id }
    })
      .done(function (messages) {
        var insertHTML = '';
        messages.forEach(function (message) {
          insertHTML = buildHTML(message); 
          $('.messages').append(insertHTML);
        })
        $('.messages').animate({ scrollTop: $('.messages')[0].scrollHeight }, 'fast');
      })
      .fail(function () {
        alert('自動更新に失敗しました');
      }); 
    }
   };
    setInterval(reloadMessages, 5000);
  //  } else {
  // clearInterval(repeat);


});
