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
            let movies = response.data.Search;
            console.log("peliculas", movies);

            let output = "";

            $.each(movies, (index, movie) => {
                output += `
                <div class="col-md-3">
                <div class="well text-center">
                <img src="${movie.Poster}">
                <h5>${movie.Title}<h5/>
                <a onclick="movieSelected('${movie.imdbID}')" class="btn btn-primary" href="#">Detalles</a>
                </div>
                </div>
                `
            })

            $('#movies').html(output)
        })
        .catch((err) => {
            console.log(err);
        })
}

function movieSelected(id) {
    sessionStorage.setItem('movieId', id);
    window.location = 'movie.html';
    return false;
}

function getMovie() {
    let movieID = sessionStorage.getItem('movieId');
    console.log("id", movieID);

    axios.get('http://www.omdbapi.com/?i=' + movieID + '&apikey=64c3a3b4')
        .then((response) => {
            console.log(response);

            let movie = response.data;
            console.log("peliculas", movie);

            let output = "";


            output += `
            <div class="col-md-6">
            <div class="well text-center">
            <img src="${movie.Poster}">
            <h5>${movie.Title}<h5/>
            <a href="index.html" class="btn btn-secondary" href="#">Volver</a>
            </div>
            </div>
            `


            $('#movie').html(output)
        })
        .catch((err) => {
            console.log(err);
        })


}