const ratings = document.querySelectorAll(".rating");
const ratingsContainer = document.querySelector(".ratings-container");
const sendBtn = document.querySelector(".btn");
const panelEle = document.querySelector("#panel");

let selectedRating = "Satisfied";

ratingsContainer.addEventListener("click", (e) => {
  if (e.target.parentNode.classList.contains("rating")) {
    removeActive();
    e.target.parentNode.classList.add("active");
    selectedRating = e.target.nextElementSibling.innerHTML;
  }
});

// show the other popup
sendBtn.addEventListener("click", (e) => {
  panelEle.innerHTML = `
              <i class="fas fa-heart"></i> 
              <strong>Thank You!</strong>
              <br>
              <strong>Feedback: ${selectedRating}</strong>
              <p>We'll use your feedback to improve our customer support</p>
            `;
});

function removeActive() {
  for (let i = 0; i < ratings.length; i++) {
    ratings[i].classList.remove("active");
  }
}
