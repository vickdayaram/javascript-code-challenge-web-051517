$(document).ready(function() {
  // your code here!
  let list = new CommentList
  commentListener(list)
  filterListener(list)
})


function commentListener(list) {
  $('form#note-form').on('submit', function(event) {
    event.preventDefault()
    let text = $('input#comment').val()
    let comment = new Comment(text)
    list.addComment(comment)
    list.render()
    $('input#comment').val("")
  })
}

function filterListener(list) {
  $('form#search-form').on('submit', function(event) {
    event.preventDefault()
    let searchTerm = $('#filter').val()
    list.filterSearch(searchTerm)
  })
}
