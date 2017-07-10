class CommentList {

  constructor() {
    this.list = []
  }

  addComment(comment) {
    this.list.push(comment)
  }

  render() {
    $('#comments-list').empty()
    this.list.forEach(function(comment) {
      $('#comments-list').append(`<li> ${comment.text} </li>`)
    })
  }

  filterSearch(searchTerm) {
    let search = this.list.filter(function(comment) {
      return comment.text === searchTerm
    })
    $('#comments-list').empty()
    search.forEach(function(result) {
      $('#comments-list').append(`<li> ${result.text} </li>`)
    })
  }
}
