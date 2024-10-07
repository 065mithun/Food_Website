"use strict";
document.querySelectorAll(".bxs-heart").forEach((e) => {
  e.addEventListener("click", (e) => {
    console.log(e.target.parentElement.parentElement);
  });
});
