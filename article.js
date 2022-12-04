const blog_card = document.querySelector(".card");
let id = location.search.substring(1).replace("id=", "");
const section = document.querySelector(".post-header");
const section2 = document.querySelector(".post-content");
const comment_form = document.querySelector('.comment-form');
const name = document.querySelector(".name")
const comment = document.querySelector(".textarea")
const URL = `https://melodic-toothbrush-production.up.railway.app/`;
const comments = {
  name: name.value,
  comment: comment.value
}
let likecount = 0;
function like(){
    likefunc(id);
}

blogfunc(id);



async function blogfunc(id) {
  
  const res = await fetch(URL + `api/blogs/${id}`, {
    method: "GET",
    headers: { "content-type": "application/json;charset=utf-8" },
  });
  const blog = await res.json();
  console.log(blog.oneBlog);

  if (blog != null) {
       document.getElementById("header-title").innerHTML = blog.oneBlog.title;
       document.getElementById("img_src").src = blog.oneBlog.Image;
       document.getElementById("likes").innerHTML = blog.oneBlog.likes;
       document.getElementById("comments").innerHTML = blog.oneBlog.comments.length;
       document.getElementById("content").innerHTML = blog.oneBlog.content;
   }
}

async function likefunc(id){
        
            // liked.forEach(likedid => {
            //   if(likedid == id){
            //       unlikefunc(id);
            //   }
          // });
        const res = await fetch(URL + `api/blogs/${id}/likes`, {
        method: "POST",
        headers: { "content-type": "application/json;charset=utf-8" }, 
      });
      console.log(res.json())
      likecount = likecount+1;
      console.log(likecount)
      localStorage.setItem("liked", id)
      window.location.reload();
    }


async function unlikefunc(id){
  
  const res = await fetch(URL + `api/blogs/${id}/unlikes`, {
    method: "POST",
    headers: { "content-type": "application/json;charset=utf-8" }, 
  })
}

comment_form.addEventListener('submit',async (e) =>{
  e.preventDefault();
  try {
      const res = await fetch(URL + `api/comment/${id}`,{
          method: "POST",
          headers: {"content-type": "application/json;charset=utf-8" },
          body: JSON.stringify(comments)
      })
      alert("comment added")
      window.location.reload();
  } catch (error) {
      
  }
})

