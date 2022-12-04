const form = document.querySelector('.form');
const email = document.querySelector('.user');
const password = document.querySelector('.pass');
const URL = `https://melodic-toothbrush-production.up.railway.app/`


form.addEventListener('submit',(e) => {
    e.preventDefault();
    // console.log(form)
    // if(email == "olivierhugue" && password == "12345")
    // {
    //     window.location.href= "dashboard.html"
    // }
    const User = {
        email: email.value,
        password: password.value
    }
console.log(User)
    loginfunc(User)

})
async function loginfunc(User){
    try {
        const res = await fetch(URL + "api/auth/login",{
            method: "POST",
            headers: {"content-type": "application/json;charset=utf-8" },
            body: JSON.stringify(User)
        });
        const data = await res.json()
        alert("welcome")
        console.log(data)
        if(data.token){
            localStorage.setItem("token",data.token)
            window.location.href= "dashboard.html"
        }
        else{
            alert("user is not here")
        }
        // console.log(User)
    } catch (error) {
        console.log(error);
    }
};