const themeSelector = document.querySelector("#themeselect");

themeSelector.addEventListener("change", () => {
  console.log(themeSelector.value);
  const data = document.querySelector("body");
  data.setAttribute("data-theme", themeSelector.value);
});
