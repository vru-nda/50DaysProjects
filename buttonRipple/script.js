const btns = document.querySelectorAll('.ripple');

btns.forEach((btn) => {
  btn.addEventListener('click', function (e) {
    //get click position on button
    const x = e.clientX;
    const y = e.clientY;

    //get button position
    const btnTop = e.target.offsetTop;
    const btnLeft = e.target.offsetLeft;

    // calculate the click in button position
    const Xinside = x - btnLeft;
    const Yinside = y - btnTop;

    //add span (hover) effect
    const circle = document.createElement('span');
    circle.classList.add('circle');
    circle.style.position = 'absolute';
    circle.style.top = Yinside + 'px';
    circle.style.left = Xinside + 'px';

    this.appendChild(circle);
    setTimeout(() => circle.remove(), 500);
  });
});
