var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
    modal.style.display = "block";

}



var error_msg;


var random_boolean = Math.floor((Math.random() * 2) + 1);

var error_msg;

if(random_boolean == 1){
    error_msg = "Успех!";

}
else {
    if(random_boolean == 2){
        error_msg = "Ошибка!";
    }
}
document.getElementById('error').innerHTML = error_msg;


window.onclick = function (event) {
    if (!event.target == modal) {
        modal.style.display = "none";

    }
}

span.onclick = function () {
    modal.style.display = "none";
    if(error_msg == "Успех!"){
        window.location.replace('index.html');
    }
}