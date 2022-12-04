function loginfunc(e){
    event.preventDefault();
    
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    // var result = document.getElementById('result').value;

    var user = localStorage.getItem(email);
    var data = JSON.parse(user);
    alert(password);

    if(email == "olivierhugue@gmail.com" && password == "12345"){
        window.location.href="dashboard.html";
        alert("welcome ." + [email]);
    }
    else{
        result.innerHTML = "wrong input !!!";
    }
}