document.getElementById("list").addEventListener("click", (e) => {
  if (e.target.nodeName === "LI") {
    console.log(e.target.textContent);
  }
});
