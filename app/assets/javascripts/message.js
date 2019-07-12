$(function () {
    function buildHTML(message) {

    var img ="";
        if (message.image){
        var img = `<img src = ${message.image} class: "lower-message_image">`
        }
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
    console.log('event OK')
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
      .done(function (data) {
        console.log(data)
        var html = buildHTML(data);
        // $('.messages').append(html);
        // $('.messages').animate({ scrollTop: $('.messages')[0].scrollHeight }, 'fast'); 
        // $('form')[0].reset();
      $('.messages').append(html)
      $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight},'fasts')
      $('.submit').prop("disabled", false)
      $('#message_content').val("");
      $('#message_image').val("");
      })
      .fail(function () {
        alert('error');
      })
      .always(() => {
        $(".form__submit").removeAttr("disabled");
        });
    // return false;
    // })
  });

  //自動更新
  var reloadMessages = function () {
  if (window.location.href.match(/\/groups\/\d+\/messages/)) {
    var last_message_id = $('.message:last').data("message-id");
    console.log('aaaaaa');

    $.ajax({
      url: "api/messages",
      type: "GET",
      dataType: "json",
      data: { last_id: last_message_id }
    })
      .done(function (messages) {
        var insertHTML = '';//追加するHTMLの入れ物を作る
        messages.forEach(function (message) {//配列messagesの中身一つ一つを取り出し、HTMLに変換したものを入れ物に足し合わせる
          insertHTML = buildHTML(message); //メッセージが入ったHTMLを取得
          $('.messages').append(insertHTML);//メッセージを追加
        })
        $('.messages').animate({ scrollTop: $('.messages')[0].scrollHeight }, 'fast');//最新のメッセージが一番下に表示されようにスクロールする。
      })
      .fail(function () {
        alert('自動更新に失敗しました');//ダメだったらアラートを出す
      });
      
    }
   };
    setInterval(reloadMessages, 5000);//5000ミリ秒ごとにreloadMessagesという関数を実行し自動更新を行う。

});
