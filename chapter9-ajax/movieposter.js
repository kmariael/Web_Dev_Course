function fetchMovieFromApi() {
let title = $('#searchInput').val().trim()
let ajaxRequest = new XMLHttpRequest()
ajaxRequest.open("GET", `http://www.omdbapi.com/?t=${title}&apikey=8a41c6e0`, true)
ajaxRequest.timeout = 5000 
ajaxRequest.ontimeout = (e) => onApiError()
ajaxRequest.onreadystatechange = function(){
    if (ajaxRequest.readyState == 4) 
    {
        if (ajaxRequest.status === 200) {
            showPoster(JSON.parse(ajaxRequest.responseText));
        } else {
            onApiError()
        }
    }
 }

 ajaxRequest.send()
}

function showPoster(apiResponse){
    if (apiResponse.Response === 'True') {
        if (apiResponse.Poster) {
            $('#poster').attr('src', apiResponse.Poster);
        }
    } else if (apiResponse.Response === 'False') {
        $('#poster').attr('src',"");
        alert('Film not found')
    }
}

function onApiError(){
    alert('Connection failed');
}