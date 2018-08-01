$(document).ready(() => {
    $('#searchForm').on('submit', (e) => {
        let searchText = $('#searchText').val();
        getMovies(searchText)
        e.preventDefault()
    })
})

function getMovies(searchText) {
    axios.get('http://www.omdbapi.com/?s=' + searchText + '&apikey=64c3a3b4')
        .then((response) => {
            console.log(response);
        })
        .catch((err) => {
            console.log(err);
        })
}

function getMovieById() {
    //
    axios.get('http://www.omdbapi.com/?i=' + "tt0372784" + '&apikey=64c3a3b4')
        .then((response) => {
            console.log(response);
        })
        .catch((err) => {
            console.log(err);
        })
}