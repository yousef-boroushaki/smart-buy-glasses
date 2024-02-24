let readMore = document.querySelector(".read-more"),
  readLess = document.querySelector(".read-less"),
  extraSiteDesc = document.querySelector(".extra-site-desc"),
  backDrop = document.querySelector(".backdrop"),
  advertise = document.querySelector(".advertise-content"),
  closeAdd = document.querySelector(".close-add");

readMore.addEventListener("click", () => {
  readMore.style.display = "none";
  extraSiteDesc.style.display = "block";
});
readLess.addEventListener("click", () => {
  readMore.style.display = "block";
  extraSiteDesc.style.display = "none";
});

// function showAdd() {
//   advertise.style.display = "flex";
//   backDrop.style.display = "block";
//   document.body.style.overflow = "hidden";
// }
// setTimeout(showAdd, 10000);

closeAdd.addEventListener("click", () => {
  advertise.style.display = "none";
  backDrop.style.display = "none";
  document.body.style.overflow = "auto";
});
