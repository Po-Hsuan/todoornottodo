$( document).ready(function(){
  $( ".upvote" ).click(function(e){
    console.log("upvote")
    console.log($(e.target))
    const postId=$(e.target)[0].dataset.id

    $.ajax({
      method:"GET",
      url:`/upvoting/${postId}`,
    })
    .done(function(response){
      console.log(response)
      $(`.card#${postId} > span.upvoteNum`)[0].innerText = response.upvotes
    })
  })
  $( ".downvote" ).click(function(e){
    console.log("downvote")
    const postId=$(e.target)[0].dataset.id
    console.log(postId)
    console.log($(e))
    console.log($(e.target))
    $.ajax({
      method:"GET",
      url:`/downvoting/${postId}`,
    })
    .done(function(response){
      console.log(response)
      $(`.card#${postId} > span.downvoteNum`)[0].innerText = response.downvote
    })
  })
})
