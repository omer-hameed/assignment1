"use strict";

async function fetchComments() {
  await fetch("https://jsonplaceholder.typicode.com/comments/")
    .then((response) => response.json())
    .then((comments) => {
      console.log(comments);
      const filterComments = comments.filter((comment) => comment.name);
      let text = "";
      const resultComments = filterComments.forEach((item) => {
        const markup = `<th>${item.id}</th>`;
        document.querySelector("tr").insertAdjacentHTML("beforebegin", markup);
        const commId = `<th>${item.name}</th>`;
        document.querySelector("tr").insertAdjacentHTML("beforeend", commId);
        const commBody = `<th>${item.body}</th>`;
        document.querySelector("tr").insertAdjacentHTML("beforeend", commBody);
      });

      return resultComments;
    })
    .catch((error) => {
      console.log("Error fetching posts", error);
    });
}
fetchComments();
