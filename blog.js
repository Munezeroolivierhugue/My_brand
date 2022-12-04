const blog_container = document.querySelector(".blog-container");
let blogs;
const URL = `https://melodic-toothbrush-production.up.railway.app/`
blogfunc();

async function blogfunc(){


    res = await fetch(URL + `api/blogs`,{
        method: "GET",
        headers: {"content-type": "application/json;charset=utf-8" },
    })
    const data = await res.json();
    blogs = data
    console.log(blogs)

 blogs.BLOGS.forEach(blog => {
     const div = document.createElement("div");
    div.classList.add("blog-box");
    const content = `
    <div class="blog-img">
    <img src="${blog.Image}" alt="blog">
</div>

<div class="blog-text">
    <span> ...Web design</span>
    <a href="article.html?id=${blog._id}" class="blog-title">${blog.title}</a>
    <p>${blog.content}</p>
    <a href="article.html?id=${blog._id}">Load more</a>
</div>`
div.innerHTML = content;
blog_container.appendChild(div);
});
}
 

    
     
