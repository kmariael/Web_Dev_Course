function showText(){
    let xhr = new XMLHttpRequest();

    xhr.open("GET", "kasap.txt", true);

    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                document.querySelector(".text").innerHTML = xhr.responseText;
            }
            else {
                alert('error in response status');
            }
        }
        
    }
    xhr.send();
}