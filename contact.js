const contactForm = document.querySelector(".contactForm")
const name = document.querySelector(".name")
const email = document.querySelector(".email")
const message = document.querySelector(".message")
const URL = `https://melodic-toothbrush-production.up.railway.app/`;


contactForm.addEventListener("submit",async (e) => {
    e.preventDefault()
    mess = {
        name: name.value,
        email: email.value,
        message: message.value
    }
    const res = await fetch(URL + "api/messages",{
        method: "POST",
        headers: {"content-type": "application/json;charset=utf-8" },
        body: JSON.stringify(mess)
    });
    alert("message sent")
    console.log(name.value)
    window.location.reload();
});