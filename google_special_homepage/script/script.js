let url = "https://www.google.com/search?q=";
const searchInput = document.querySelector(".search_input");
const seacrhBtn = document.querySelector(".search_btn");

seacrhBtn.addEventListener("click", () => {
  if (searchInput.value != "") {
    url += searchInput.value;
    window.open(url, "_blank");
    searchInput.value = "";
  }
});
