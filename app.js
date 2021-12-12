let exit_btn = document.querySelector(".exit_btn");
const openbtn = document.querySelector(".open_btn");
const modal_bg = document.querySelector(".modal_bg");

let ms = document.querySelector(".header");
let err = "error no email";
let sign = "sign up here";

const sub = document.querySelector(".subscribe_btn");

openbtn.addEventListener("click", function () {
  modal_bg.classList.add("show");
});

exit_btn.addEventListener("click", function () {
  modal_bg.classList.remove("show");
  ms.innerHTML = sign;
});

sub.addEventListener("click", function () {
  let email = document.querySelector(".email").value;

  if (email == "") {
    modal_bg.classList.add("show");
    ms.innerHTML = err;
  } else {
    modal_bg.classList.remove("show");
  }
});
