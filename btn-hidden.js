window.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.btn-events').addEventListener ('click', function() {
      document.querySelector('.card-list-2').classList.toggle('events-is-active')
      document.querySelector('.btn-events').classList.add('btn-events-is-hidden')
    })
})