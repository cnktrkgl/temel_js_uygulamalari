// const btn = document.getElementById("btn");
// const body = document.body;

// btn.addEventListener("click", () => {
//   body.classList.toggle("dark_theme");
// });

const btn = document.getElementById("btn");
let theme = "light";

btn.addEventListener("click", () => {
  if (theme === "light") {
    document.documentElement.classList.add("dark_theme");
    theme = "dark";
    btn.textContent = "Açık";
  } else if (theme === "dark") {
    document.documentElement.classList.remove("dark_theme");
    theme = "light";
    btn.textContent = "Koyu";
  }
});
