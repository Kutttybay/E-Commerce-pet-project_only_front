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
