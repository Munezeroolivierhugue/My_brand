const article_form = document.querySelector('.comment-form');
const title = document.querySelector('.title');
const image = document.querySelector('.image');
const textarea = document.querySelector('.textarea')
const token = localStorage.getItem("token")
const URL = `https://melodic-toothbrush-production.up.railway.app/`

let id = 0;

article_form.addEventListener('submit',async (e)=>{
    e.preventDefault();
    id = id + 1;
    let formData = new FormData();
         formData.append('title', title.value);
         formData.append('Image', image.files[0]);
         formData.append('content', textarea.value);

    const res = await fetch(URL + `api/blogs`, {
      method: "POST",
      headers: { "auth-token": token },
      body: formData
    });
    alert("blog created")
    console.log(formData)
    console.log(token)
    window.location.reload();
})


