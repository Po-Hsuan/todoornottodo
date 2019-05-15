$( document).ready(function(){
  $( ".opng" ).click(function(e){
    console.log("done")
    console.log($(e.target))
    const itemId=$(e.target)[0].dataset.id
    $.ajax({
      method:"GET",
      url:`/done/${itemId}`,
    })
    .done(function(response){
      console.log(response)
      $(`.card#${itemId} > `)[0].innerText = response.upvotes
    })
  })
  $( ".xpng" ).click(function(e){
    console.log("undone")
    const itemId=$(e.target)[0].dataset.id
    console.log(itemId)
    $.ajax({
      method:"GET",
      url:`/undone/${itemId}`,
    })
    .done(function(response){
      console.log(response)
      $(`.card#${itemId} > `)[0].innerText = response.downvote
    })
  })
})
