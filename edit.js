const article_form = document.querySelector('.comment-form');
const title = document.querySelector('.title');
const image = document.querySelector('.image');
const date = document.querySelector('.date');
const textarea = document.querySelector('.textarea');
let imagesrc = document.querySelector('.imagesrc')
const token = localStorage.getItem("token")
const URL = `https://melodic-toothbrush-production.up.railway.app/`

let id = location.search.substring(1).replace("id=","");
console.log(id);
singleblog(id)

async function singleblog(id){
  
        const res = await fetch(URL + `api/blogs/${id}`, {
          method: "GET",
          headers: { "content-type": "application/json;charset=utf-8" },
        });
        const blog = await res.json();
        console.log(blog.oneBlog);
        title.value = blog.oneBlog.title;
        textarea.value = blog.oneBlog.content;

}


article_form.addEventListener('submit',async (e)=>{
    e.preventDefault();

   
    let formData = new FormData();
         formData.append('title', title.value);
         formData.append('Image', image.files[0]);
         formData.append('content', textarea.value);

    const res = await fetch(URL + `api/blogs/${id}`, {
      method: "PATCH",
      headers: { "auth-token": token },
      body: formData
    });
    alert("blog updated")
    const data = await res.json()
    console.log(res)
    console.log(data)
    window.location.reload();
});
// }