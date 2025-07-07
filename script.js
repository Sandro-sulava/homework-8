const cancelBtn = document.querySelector("#cancelBtn");
const popup = document.querySelector("#popup");

cancelBtn.addEventListener("click", function () {
  popup.classList.add("hidden");
});
