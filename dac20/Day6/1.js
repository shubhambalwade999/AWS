let likeCounter = 0;

function like() {
    let a = document.getElementById("likeId");
    likeCounter++;
    a.innerHTML = "Like " + likeCounter;
}

function comment() {

    let input = document.getElementById("inputId").value;
    let newcopy = document.getElementById("refComment").cloneNode(true);
    newcopy.removeAttribute("id");
    newcopy.style.visibility = "visible";
    newcopy.children[0].innerHTML = input;

    let commentBox = document.getElementById("commentBox");
    commentBox.insertBefore(newcopy, commentBox.firstChild);
    document.getElementById("inputId").value = "";

}

function deleteComment(delbtn) {
    alert("Are you sure You Want to Delete");
    delbtn.parentElement.remove();
}
