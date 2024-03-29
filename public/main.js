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
      $(`.card#${itemId} > div.img`)[0].innerHTML = `<img class="ostep" src="../image/o.png" height="50px" width="50px" data-id=${itemId}>`
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
      $(`.card#${itemId} > div.img`)[0].innerHTML = `<img class="xstep" src="../image/x.png" height="50px" width="50px" data-id=${itemId}>`
    })
  })
  $( ".xgoal" ).click(function(e){
    console.log("done")
    console.log($(e.target)[0].dataset.id)
    const goalId=$(e.target)[0].dataset.id

    $.ajax({
      method:"GET",
      url:`/donegoal/${goalId}`,
    })
    .done(function(response){
      console.log(response)
      $(`.card#${goalId} > div.img`)[0].innerHTML = `<img class="ogoal" src="../image/o.png" height="50px" width="50px" data-id=${goalId}>`
    })
  })
  $( ".ogoal" ).click(function(e){
    console.log("undone")
    console.log($(e.target)[0].dataset.id)
    const goalId=$(e.target)[0].dataset.id

    $.ajax({
      method:"GET",
      url:`/undonegoal/${goalId}`,
    })
    .done(function(response){
      console.log(response)
      $(`.card#${goalId} > div.img`)[0].innerHTML = `<img class="xgoal" src="../image/x.png" height="50px" width="50px" data-id=${goalId}>`
    })
  })
  $( ".delete" ).click(function(e){
    console.log("delete step")
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
  $( ".deletegoal" ).click(function(e){
    console.log("delete goal")
    console.log($(e.target)[0].dataset.id)
    const goalId=$(e.target)[0].dataset.id

    $.ajax({
      method:"GET",
      url:`/deletegoal/${goalId}`,
    })
    .done(function(response){
      console.log(response)
      $(`.card#${goalId}`)[0].innerHTML = ""
    })
  })
})
