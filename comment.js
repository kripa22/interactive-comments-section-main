$(document).ready(function(){



});

$(document).on('click', '#btn-post' , function() { 
    var data = $('#post-data').val();
    var html= ` <div class="comment_card cont-box">
        <div class="comment-box">
          <div class="comment-count">
            <div class="up-vote"><img src="./images/icon-plus.svg" alt="plus"/></div>
            <div class="vote-count">5</div>
            <div class="down-vote"><img src="./images/icon-minus.svg" alt="plus"/></div>
             <!-- this section will only be displayed in mobile    -->
             <p class="btn-delete-mb"><img src="./images/icon-delete.svg"/> Delete</p>
             <p class="btn-edit-mb"><img src="./images/icon-edit.svg"/> Edit</p> 

          </div>

          <div class="comment-display-box">
              <div class="user-profile-div">
              <p class="ag-left"><img class="user-img" src="./images/avatars/image-juliusomo.png" alt=""/> <span class="user-name">juliusomo <button class="btn-you">You</button></span>  <span class="post-time">1 second ago</span></p>
              <p class="btn-delete delete"><img src="./images/icon-delete.svg"/> Delete</p>
              <p class="btn-edit edit"><img src="./images/icon-edit.svg"/> Edit</p>    
              
                
              
              </div>
              <div class="comment-text">
                <p>
                ${data}
                </p>  
              </div>
          </div>

        </div>
  </div>`;
  var length= $('.cont-box').length;
  $('.cont-box').eq(length-1).after(html);
  $('#post-data').val('');

}) ;



//Edit the post Here
$(document).on('click', '.edit' , function() {
    var ineditmode =  $(this).closest('.comment-box').find('.comment-text .update-post').length;
    if(!ineditmode){
        var comment = $.trim($(this).closest('.comment-box').find('.comment-text p').html());
        var element =  $(this).closest('.comment-box').find('.comment-text');
        var update = '<button>Update</button>'
        var input =`<textarea class="textarea-mb-up" id="post-data"placeholder="Add a comment...">${comment}</textarea><button class="update-post">Update</button>`;
        element.html(input);
    }

});

//Update the post here
$(document).on('click', '.update-post' , function() {
    var comment = $.trim($(this).closest('.comment-box').find('#post-data').val());
    var element =  $(this).closest('.comment-box').find('.comment-text');
    element.html('<p>' + comment + '</p>');

});



$(document).on('click', '.delete' , function() {
    if(confirm('Are you sure you want to delete this. this will temporary remove the comment')){
        $(this).closest('.comment-box').remove();
    }
   
});

$(document).on('click', '.reply-btn' , function() {

  var children_count = $(this).closest('.comment_card').find('.children-comment').length;
  
    
    var replyhtml = `<div class="comment_card">
    <div class="comment-box cp-box">
     <img class="user-img user-img-mb" src="./images/avatars/image-juliusomo.png"/>
     <textarea class="textarea-mb post-textarea" id="post-data"placeholder="Add a comment..."></textarea>
     <button class="btn btn-mb" id="post-reply-btn">Reply</button>
    </div>
  </div>`;

  if(children_count){
   $(this).closest('.comment_card').find('.children-comment:last-child').append(replyhtml);
  }else{
    $(this).closest('.comment-box').after(replyhtml);
  }
  

   
});



$(document).on('click', '#post-reply-btn' , function() {

    var comment = $.trim($(this).closest('.comment_card').find('#post-data').val());
    //var children_comment = $(this).closest('.comment_card').find('.children-comment').length

    var children_comment = $(this).closest('.cont-box').find('#all_replies').length
    var replyComment=`


        <div class="comment_card cont-box">
            <div class="comment-box">
              <div class="comment-count">
                <div class="up-vote"><img src="./images/icon-plus.svg" alt="plus"/></div>
                <div class="vote-count">6</div>
                <div class="down-vote"><img src="./images/icon-minus.svg" alt="plus"/></div>
                 <!-- this section will only be displayed in mobile    -->
                 <p class="btn-delete-mb delete"><img src="./images/icon-delete.svg"/> Delete</p>
                 <p class="btn-edit-mb edit"><img src="./images/icon-edit.svg"/> Edit</p> 
        
              </div>
        
              <div class="comment-display-box">
                  <div class="user-profile-div">
                  <p class="ag-left"><img class="user-img" src="./images/avatars/image-juliusomo.png" alt=""/> <span class="user-name">juliusomo <button class="btn-you">You</button></span>  <span class="post-time">1 second ago</span></p>
                  <p class="btn-delete delete"><img src="./images/icon-delete.svg"/> Delete</p>
                  <p class="btn-edit edit"><img src="./images/icon-edit.svg"/> Edit</p>    
              </div>
                  <div class="comment-text">
                    <p>${comment}</p>  
                  </div>
              </div>
        
            </div>
          </div>


    </div>

  `;

  
   if(children_comment){
     $(this).closest('.cont-box').find('.children-comment').append(replyComment); 
   }else{
    $(this).closest('.comment-box').after(replyComment);
    $(this).closest('.comment-box').remove();
  
   }
  
   $(this).closest('.comment_card').remove();
 
});


$(document).on('click','.up-vote', function(){

  var count = parseInt($(this).closest('.comment-box').find('.vote-count').text());
  count++;
  $(this).closest('.comment-box').find('.vote-count').text(count);

});

$(document).on('click','.down-vote', function(){
    var count = parseInt($(this).closest('.comment-box').find('.vote-count').text());
    if(count>0){
      count--;
      $(this).closest('.comment-box').find('.vote-count').text(count);
    }

});
