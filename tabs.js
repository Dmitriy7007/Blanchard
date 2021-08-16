window.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.tabs__btn').forEach(function(tabsBtn) {

    tabsBtn.addEventListener ('click', function(event) {

      document.querySelectorAll('.tabs__btn').forEach(function(e) {
        e.classList.remove('section-catalog-link-outline')
      }) 

      tabsBtn.classList.add('section-catalog-link-outline')

      const path = event.currentTarget.dataset.path

      document.querySelectorAll('.tab-content').forEach(function(tabContent) {
        tabContent.classList.remove('tab-content-active')
      })

      document.querySelector(`[data-target="${path}"]`).classList.add('tab-content-active')

      $("#accordion").accordion("refresh")
    })
  })
})