const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkBoxes);

checkBoxes();

function checkBoxes() {
 //set the trigger point on screen size
  const trigger = (window.innerHeight / 5) * 4;

  boxes.forEach((box) => {
    //get the point where the box top edge is
    const boxTop = box.getBoundingClientRect().top;
    
    //Check if box has reached to trigger point
    if (boxTop < trigger) {
      box.classList.add('show');
    } else {
      box.classList.remove('show');
    }
  });
}
