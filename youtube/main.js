const link = document.querySelectorAll(".container nav ul li");
const filterBox = document.querySelector(".container nav ul");
const arrowIcons = document.querySelectorAll(".container nav .btn i");

// Dragging The Filter Box To Left And Right
let isDragging = false;
const dragging = (e) => {
  let scrollVal = Math.round(filterBox.scrollLeft);
  let maxScrollVal = filterBox.scrollWidth - filterBox.clientWidth;
  if(!isDragging) return;
  filterBox.classList.add("dragging");
  filterBox.scrollLeft -= e.movementX;
  arrowIcons[0].parentElement.style.display = -scrollVal == maxScrollVal ? "none" : "flex";
  arrowIcons[1].parentElement.style.display = -scrollVal == 0 ? "none" : "flex";
}
const dragStop = () => {
  isDragging = false;
  filterBox.classList.remove("dragging");
}
filterBox.addEventListener("mousedown", () => isDragging = true);
filterBox.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);

// Hide the Icon If There is No Tabs Left or Right To Scroll

const handleIcons = () => {
  let scrollVal = Math.round(filterBox.scrollLeft);
  let maxScrollVal = filterBox.scrollWidth - filterBox.clientWidth;
  // console.log(-scrollVal + " Scroll Value");
  // console.log(maxScrollVal + " Max Scroll Value");
  arrowIcons[0].parentElement.style.display = -scrollVal == maxScrollVal ? "none" : "flex";
  arrowIcons[1].parentElement.style.display = -scrollVal == 0 ? "none" : "flex";
}
//Activate an Element on Click
link.forEach(function (ele){
  ele.onclick = function (){
    link.forEach(function (ele){
      ele.classList.remove("active");
    })
    this.classList.add("active");
    };
  });

  // Arrow Icon .. ==> To Going Left And Right On Click
  arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
      filterBox.scrollLeft += icon.id === "left"? -350: 350;
      setTimeout(() => handleIcons(), 50);
    });
  });  