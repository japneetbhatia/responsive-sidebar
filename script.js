let btn = document.querySelector("#button");
let sidebar = document.querySelector(".sidebar");
let searchBtn = document.querySelector(".sbx-search-alt");

btn.onclick = function() {
    sidebar.classList.toggle("active");
}

searchBtn.onclick = function() {
    sidebar.classList.toggle("active");
}