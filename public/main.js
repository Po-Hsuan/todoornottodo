$( document).ready(function(){
  $( ".xstep" ).click(function(e){
    console.log("done")
    console.log($(e.target)[0].dataset.id)
    const itemId=$(e.target)[0].dataset.id

    $.ajax({
      method:"GET",
      url:`/done/${itemId}`,
    })
    .done(function(response){
      console.log(response)
      $(`.card#${itemId} > .xstep`)[0].innerHTML = `img(src="../image/o.png" height="50px" width="50px" data-id=val._id).ostep`
    })
  })
  $( ".ostep" ).click(function(e){
    console.log("undone")
    console.log($(e.target)[0].dataset.id)
    const itemId=$(e.target)[0].dataset.id

    $.ajax({
      method:"GET",
      url:`/undone/${itemId}`,
    })
    .done(function(response){
      console.log(response)
      $(`.card#${itemId} > .ostep`)[0].innerHTML = `img(src="../image/x.png" height="50px" width="50px" data-id=val._id).xstep`
    })
  })
  $( ".delete" ).click(function(e){
    console.log("delete")
    console.log($(e.target)[0].dataset.id)
    const itemId=$(e.target)[0].dataset.id

    $.ajax({
      method:"GET",
      url:`/delete/${itemId}`,
    })
    .done(function(response){
      console.log(response)
      $(`.card#${itemId}`)[0].innerHTML = ""
    })
  })
})
