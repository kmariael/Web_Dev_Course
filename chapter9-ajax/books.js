$(document).ready(function(){
    fetchBooksFromXML();
})

function fetchBooksFromXML(){
    let ajaxRequqest = new XMLHttpRequest();
    ajaxRequqest.open('GET', 'books.xml', true);
    ajaxRequqest.send();

    ajaxRequqest.onreadystatechange = function(){
        if (ajaxRequqest.readyState == 4){
            if (ajaxRequqest.status == 200){
                handleResults(ajaxRequqest.responseXML);
            } else{
                alert('Error');
            }
        }
    }
}

function handleResults(response) {
    let booksList = response.getElementsByTagName("book")
    let output = "<tr><th>Title</th><th>Author</th></tr>"

    for (let book of booksList){
        output += "<tr><td>"
        + book.getElementsByTagName('title')[0].childNodes[0].nodeValue
        + "</td><td>"
        + book.getElementsByTagName('author')[0].childNodes[0].nodeValue
        + "</td></tr>"
    }

    $('.books-list').html(output);
}

