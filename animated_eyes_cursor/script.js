document.addEventListener("DOMContentLoaded", function() {
  document.querySelector("body").addEventListener("mousemove", eyeball);
});

function eyeball(event) {
  const eyes = document.querySelectorAll(".eyes");
  eyes.forEach(function (eye) {
    let x = eye.getBoundingClientRect().left + eye.clientWidth / 2;
    let y = eye.getBoundingClientRect().top + eye.clientHeight / 2;
    let radian = Math.atan2(event.pageY - y, event.pageX - x);
    let rotate = radian * (180 / Math.PI) + -1 + 270;
    eye.style.transform = "rotate(" + rotate + "deg)";
  });
}

document.addEventListener('DOMContentLoaded', function() {
  const cookieCursor = document.createElement('div');
  cookieCursor.classList.add('cookie-cursor');
  document.body.appendChild(cookieCursor);

  document.addEventListener('mousemove', function(event) {
    cookieCursor.style.left = event.pageX + 'px';
    cookieCursor.style.top = event.pageY + 'px';
  });
});
