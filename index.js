let allUsers = JSON.parse(localStorage.getItem("allUsers"))
if (allUsers == null) {
    allUsers = []
}
function Submit() {
    let user = {
        UserName: document.getElementById("userName").value,
        Password: document.getElementById("password").value,
        Message: document.getElementById("message").value,
    }
    allUsers.push(user);
    localStorage.setItem("allUsers", JSON.stringify(allUsers));
    // alert("Welcome, Successfully Login. ")
    window.location.href = "index1.html"
    
    clearForm();
}
function clearForm() {
    document.getElementById("userName").value = "";
    document.getElementById("password").value = "";
    document.getElementById("message").value = "";
}
function Validation() {
    document.querySelector("p").style.display = "block";
    let inputvalue = document.getElementById("userName").value;
    let Code = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/

    if (Code.test(inputvalue)) {
        document.querySelector("p").style.display = "none";
    } else if (inputvalue.length == 0) {
        document.querySelector("p").style.display = "none"
    } else {
        document.querySelector("p").style.display = "block"
    }
}
function validatePassword() {
    document.querySelector("h5").style.display = "block";
    let inputvalue = document.getElementById("password").value;
    let Code = /[`~!@#\$%\^&\*\(\)\-_\{\}\=\+'"\>\.\,\?<\/\|\\\:;\]\[]/
    if (Code.test(inputvalue)) {
        document.querySelector("h5").style.display = "none";
    } else if (inputvalue.length > 8) {
        document.querySelector("h5").style.display = "none"
    } else {
        document.querySelector("h5").style.display = "block"
    }
}