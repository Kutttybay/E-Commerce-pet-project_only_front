document.addEventListener('DOMContentLoaded', () => {
  const bar = document.getElementById('bar');
  const nav = document.getElementById('navbar');
  const close = document.getElementById('close');

  if (bar && nav) {
    bar.addEventListener('click', (e) => {
      e.preventDefault();               // <-- важно для <a href="#">
      nav.classList.toggle('active');
      console.log('toggled .active:', nav.classList.contains('active'));
    });
  }
  if (close) {
    close.addEventListener('click', () => {
      nav.classList.remove('active')
    })
  }
});


const mainImg = document.getElementById("main-img");
const smallImg = document.getElementsByClassName("small-img");

smallImg[0].onclick = () => {
  mainImg.src = smallImg[0].src;
}
smallImg[1].onclick = () => {
  mainImg.src = smallImg[1].src;
}
smallImg[2].onclick = () => {
  mainImg.src = smallImg[2].src;
}
smallImg[3].onclick = () => {
  mainImg.src = smallImg[3].src;
}
