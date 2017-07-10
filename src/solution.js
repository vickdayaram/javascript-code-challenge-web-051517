/*

I have the jquery solution working at this point. I took it out of the
html file so I can work on refactoring with classes.

I also have the class version working but I did not follow the directions exactly.
I read the directions towards the end, and I felt like I did not have much time to
refactor in the way that was described in the lab.

*/

$(document).ready(function() {
  // your code here!
  commentListener()
  filterListener()
})


function commentListener() {
  $('form#note-form').on('submit', function(event) {
    event.preventDefault()
    let comment = $('input#comment').val()
    $('#comments-list').append(`<li> ${comment} </li>`)
    $('input#comment').val("")
  })
}

function filterListener() {
  $('form#search-form').on('submit', function(event) {
    event.preventDefault()
    let searchTerm = $('#filter').val()
    let comments = $('#comments-list')
    commentsInfo = comments[0].children
    search = []
    for (let i = 0; i < commentsInfo.length; i++) {
      if (commentsInfo[i].innerText === searchTerm) {
        search.push(commentsInfo[i])
      }
    }
    $('#comments-list').empty()
    search.forEach(function(result) {
      $('#comments-list').append(result)
    })
  })
}
