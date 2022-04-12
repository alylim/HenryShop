﻿window.onload = function () {
    
    let adding = document.getElementsByClassName("btn-outline-success");
    let minus = document.getElementsByClassName("btn-outline-danger")
    let remove = document.getElementsByClassName("btn-danger")


    for (let i = 0; i < adding.length; i++) {
        adding[i].addEventListener('click', Addclick);
    }

    for (let i = 0; i < adding.length; i++) {
        minus[i].addEventListener('click', Minusclick);
    }

    for (let i = 0; i < adding.length; i++) {
        remove[i].addEventListener('click', Removeclick);
    }

    function Addclick(event) {
        PlusToCart(event.target.value);
    }

    function Minusclick(event) {
        MinusFromCart(event.target.value);
    }

    function Removeclick(event) {
        RemoveFromCart1(event.target.value);
    }
}





function PlusToCart(id) {
    let xhr = new XMLHttpRequest();

    xhr.open("POST", "/CheckOut/PlusToCart");

    xhr.setRequestHeader("Content-Type", "application/json; charset=utf8");

    xhr.onreadystatechange = function () {
        if (this.readyState == XMLHttpRequest.DONE) {
            if (this.status == 200) {
                // convert server's JSON string to a JavaScript object
                let data = JSON.parse(this.responseText);


                if (data.status == "success") {
                    window.location.reload(true);
                }
            }
        }
    }

    let req = { "Id": id }

    xhr.send(JSON.stringify(req));
}

function MinusFromCart(id) {
    let xhr = new XMLHttpRequest();

    xhr.open("POST", "/CheckOut/MinusFromCart");

    xhr.setRequestHeader("Content-Type", "application/json; charset=utf8");

    xhr.onreadystatechange = function () {
        if (this.readyState == XMLHttpRequest.DONE) {
            if (this.status == 200) {
                let data = JSON.parse(this.responseText);


                if (data.status == "success") {
                    window.location.reload(true);
                }
            }
        }
    }

    let req = { "Id": id }

    xhr.send(JSON.stringify(req));
}


function RemoveFromCart1(id) {
    let xhr = new XMLHttpRequest();

    xhr.open("POST", "/CheckOut/RemoveFromCart1");

    xhr.setRequestHeader("Content-Type", "application/json; charset=utf8");

    xhr.onreadystatechange = function () {
        if (this.readyState == XMLHttpRequest.DONE) {
            if (this.status == 200) {
                let data = JSON.parse(this.responseText);


                if (data.status == "success") {
                    window.location.reload(true);
                }
            }
        }
    }

    let req = { "Id": id }

    xhr.send(JSON.stringify(req));
}