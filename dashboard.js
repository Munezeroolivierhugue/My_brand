const tbody = document.querySelector(".table-body");
const edit = document.querySelector(".edit");
const URL = `https://melodic-toothbrush-production.up.railway.app/`;
const token = localStorage.getItem("token");
let blogs;
// let id;
var num = 1;
blogfunc();

async function blogfunc() {
  res = await fetch(URL + `api/blogs`, {
    method: "GET",
    headers: { "content-type": "application/json;charset=utf-8" },
  });
  const data = await res.json();
  blogs = data;
  console.log(blogs);

  blogs.BLOGS.forEach((blog) => {
    console.log(blog._id);
    const tr = document.createElement("tr");
    const content = `<td>${num}</td>
    <td>${blog.title.split(" ").slice(0, 5).join(" ")}</td>
    <td>${blog.content.split(" ").slice(0, 5).join(" ")}</td>
    <td><img src="${blog.Image}" alt="img"></td>
    <td>Web Design</td>
    <td>
        <a href="edit.html?id=${
          blog._id
        }"><button class="edit"> <i class="fa-solid fa-pen-to-square"></i> </button></a>
        <button> <i class="fa-solid fa-trash" onclick="deleteblog('${blog._id}')"></i> </button>
    </td>`;
    // id = blog._id;
    tr.innerHTML = content;
    tbody.appendChild(tr);
    num = num + 1;
  });
}
// function deletes(id) {
//   deleteblog(id);
// }
async function deleteblog(id) {
  const response = await fetch(URL + `api/blogs/${id}`, {
    method: "DELETE",
    headers: { "auth-token": token },
  });
  const data = await response.json();
  console.log(data);

  alert("blog deleted successfully");
  window.location.reload();
}
