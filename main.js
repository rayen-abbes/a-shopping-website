function submit_login(){
    var error = false
    username=document.getElementById("userid").value;
    if (username.indexOf('@') === -1){
        alert("Invalid username, doesn't contain @")
        error = true;
    }
    password=document.getElementById("password").value;
    if (password.length < 8){
        alert("Password must at least be 8 characters long");
        error = true
    }


    if (!error){
        window.location = ./index2.html("index2.html")
    }
}

