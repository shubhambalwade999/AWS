function handleMouseOver() {
    let a = document.getElementById("id2");
    a.innerHTML = "Happy Independence Day";
    a.style.fontSize = "50px";
    a.style.background = "linear-gradient(orange, white, green)";
}

function handleMouseOut() {
    let a = document.getElementById("id2");
    a.innerHTML = "hello world";
    a.style.background = "royalblue";
    a.style.fontSize = "60px";
}
