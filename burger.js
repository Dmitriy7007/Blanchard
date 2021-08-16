window.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#burger').addEventListener('click', function() {
    document.querySelector('.hamburger-menu').classList.toggle('is-active')
  })
})