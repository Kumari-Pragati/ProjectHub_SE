
function openform() {
    document.getElementById("myform").style.display = "block";
}


function closeForm() {
    document.getElementById("myform").style.display = "none";
}



function showPopup() {
    closeForm();
    var popup = document.getElementById("popupMessage");
    popup.style.display = "block";
    setTimeout(function () { popup.style.display = "none"; }, 3000);
}

function closePopup() {
    var popup = document.getElementById("popupMessage");
    popup.style.display = "none";
}



document.addEventListener("DOMContentLoaded", function () {

    document.getElementById("expenseForm").addEventListener("submit", submitForm);
});


function submitForm(event) {
    console.log("hello world");
    event.preventDefault();
    var formData = new FormData(document.getElementById("expenseForm"));


    var xhr = new XMLHttpRequest();
    xhr.open("POST", "../project.php", true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {

                showPopup();
            } else {

                console.error("Form submission failed with status code: " + xhr.status);
            }
        }
    };
    xhr.send(formData);
}


