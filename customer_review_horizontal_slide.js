let scrollContainer = document.querySelector(".hrs6-img-cont");
let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");

/*scrolling with mouse wheel code.
 not working with scroll behaviour set to smooth in css*/

// scrollContainer.addEventListener("wheel", (evt) => {
//     evt.preventDefault();
//     scrollContainer.scrollLeft += evt.deltaY;
//     scrollContainer.style.scrollContainer = "auto";
// });

nextBtn.addEventListener("click", () =>{
    scrollContainer.scrollLeft += 1140;
});

backBtn.addEventListener("click", () =>{
    scrollContainer.scrollLeft -= 1140;
});

