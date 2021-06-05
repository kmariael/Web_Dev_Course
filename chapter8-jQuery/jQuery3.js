/* $(document).ready(function(){
    showHello();
})

function showHello(){
    $('#helloBtn').click(function(){
        $('#helloText').text('Hello World!');
    })
} */

$(document).ready(function(){
    showFullName();
})

function showFullName(){
    $('#btn').click(function(){
       alert($('#fname').val() + ' ' + $('#lname').val())
    })
}