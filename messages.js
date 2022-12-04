const tbody = document.querySelector(".table-body");
const edit = document.querySelector(".edit");
const URL = `https://melodic-toothbrush-production.up.railway.app/`
const token = localStorage.getItem("token")
var num = 1;
let mess;
messfunc();

async function messfunc(){
    res = await fetch(URL + `api/messages`,{
        method: "GET",
        headers: {"auth-token": token},
    })
    const data = await res.json();


    mess = data
    console.log(mess)

    mess.getMessage.forEach(message => {
    console.log(message._id)
    const tr = document.createElement("tr");
    const content = `<td>${num}</td>
    <td>${message.name.split(" ").slice(0,5).join(" ")}</td>
    <td>${message.email.split(" ").slice(0,5).join(" ")}</td>
    <td>${message.message.split(" ").slice(0,5).join(" ")}</td>`
tr.innerHTML = content;
tbody.appendChild(tr);
num = num + 1;
});
}