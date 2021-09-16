window.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.tabs__button').forEach(function(tabsButton) {
    tabsButton.addEventListener ('click', function(e) {
      const paths = e.currentTarget.dataset.path

      document.querySelectorAll('.tab-cont').forEach(function(tabCont) {
        tabCont.classList.remove('tab-cont-active')
      })

      document.querySelector(`[data-target="${paths}"]`).classList.add('tab-cont-active')

      $("#accordion").accordion("refresh")
    })
  })
})