/* The following part of the code is taking the reference from https://www.youtube.com/watch?v=RsPWEmfOQdU */
const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("nav .container ul li");
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });

  navLi.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(current)) {
      li.classList.add("active");
    }
  });
});

// For floating card in right bottom corner
const WebCifarIcon = document.querySelector("#webCifar-icon");
const WebCifarEl = document.querySelector("#webCifar");
const close = WebCifarEl.querySelector(".close");

WebCifarIcon.addEventListener("click", () => {
  WebCifarEl.classList.add("active");
});
close.addEventListener("click", () => {
  WebCifarEl.classList.remove("active");
});

/* The following part of the code is taking the reference from https://stackoverflow.com/questions/68662850/datepicker-bootstrap-5*/
startDate.addEventListener('change',(e)=>{
  document.getElementById('startDateSelected').innerText = startDateVal
})

