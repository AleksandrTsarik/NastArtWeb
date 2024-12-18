const buttonSelect = document.querySelector(".js-menu");
const video = document.querySelector(".preview__video video");
const fixComp = document.querySelector(".js-fix");
const previewBody = document.querySelector(".preview__body");

//---toggle burger
buttonSelect.addEventListener("click", function () {
  buttonSelect.classList.toggle("active");
});

//---click outside
document.addEventListener("click", function (event) {
  const clickInside = event.composedPath().includes(buttonSelect);
  if (!clickInside && !buttonSelect.contains(event.target)) {
    buttonSelect.classList.remove("active");
  }
});

//---скролл
let lastScrollTop = 0;
window.addEventListener("scroll", function () {
  let scrollTop = document.documentElement.scrollTop;
  let compHeight = fixComp.getBoundingClientRect().height;
  let compPositionTop = fixComp.getBoundingClientRect().y;
  let previewBodyBottom =
    previewBody.getBoundingClientRect().height +
    previewBody.getBoundingClientRect().y;
  let screenHeight = window.screen.height;
  let compSpacer = window.screen.width > 767 ? 70 : -100

  if (
    scrollTop > lastScrollTop &&
    compPositionTop < (screenHeight - compHeight) / 2
  ) {
    fixComp.classList.add("fix-block");
  }

  if (scrollTop < lastScrollTop && previewBodyBottom > compPositionTop + compSpacer) {
    fixComp.classList.remove("fix-block");
  }

  lastScrollTop = scrollTop;
});


window.onload = function(){
  document.getElementById("video").play()
}
