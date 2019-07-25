"use strict";

function greetUser()
{
    let userName = document.getElementById("name").value;
    alert("Hello " + userName);
}

btn.onclick = greetUser();

