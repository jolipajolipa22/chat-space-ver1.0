$(function() {
  var search_list = $(".user-search-result");
 
  
  function appendUser(user){
    var html = `<div class="chat-group-user clearfix">
                  <p class="chat-group-user__name">${user.name}</p>
                  <a class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${user.id}" data-user-name="${user.name}">追加</a>
                </div>`
    search_list.append(html);
  }
 
  
  function appendNewUser(id, name){
    var html = `<div class='chat-group-user clearfix js-chat-member' id='chat-group-user-${id} data-id=${id} '>
                  <input name='group[user_ids][]' type='hidden' value='${id}'>
                  <p class='chat-group-user__name'>${name}</p>
                  <a class='user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn'>削除</a>
                </div>`
    return html;
  }

  function appendErrMsgToHTML(user) {
    var html = `<div class='chat-group-user clearfix'>${ user }</div>`
     $(".user-search-result").empty();
    search_list.append(html);
  }

  $(".chat-group-form__input").on("keyup", function() {
    $(".chat-group-form__input").empty();
    $(".chat-group-user").empty();
    var input = $(this).val();
    
    $.ajax({
      type: 'GET',
      url: '/users',
      data: { keyword: input },
      dataType: 'json'
    })
　  
    .done(function(users){
      
       $(".chat-group-form__input").empty();
      if(users.length !== 0){
        users.forEach(function(user){
          appendUser(user);
        });
      }
      else {
        appendErrMsgToHTML("一致するユーザーが見つかりません");
      }
    })
    .fail(function(){
      alert("ユーザー検索に失敗しました");
    })
  });

  
  $(".user-search-result").on("click",".chat-group-user__btn--add", function() {
    var id = $(this).attr("data-user-id");
    var name = $(this).attr("data-user-name");
    var addNewUser = appendNewUser(id, name);
    $('.chat-group-users').append(addNewUser);
    $(this).parent('.chat-group-user').remove();
  });
  
  $(".chat-group-users").on("click",".user-search-remove", function() {
  $(this).parent().remove();
  });

});

