$(document).ready(function(){
  $('.lowermenu__list a').on('click', function (e) {
    e.preventDefault();
    let href = $(this).attr('href')

    if ($(href).hasClass('active-lowermenu')) {
      $('.tabs-pane').removeClass('active-lowermenu')
      $('.lowermenu__item-icon').removeClass('lowermenu__item-icon-rotate')
    } else {
      $('.tabs-pane').removeClass('active-lowermenu')
      $(href).addClass('active-lowermenu')
      $('.lowermenu__item-icon').removeClass('lowermenu__item-icon-rotate')
      $(this).find('.lowermenu__item-icon').addClass('lowermenu__item-icon-rotate')
    }
  })

  $(document).on('click', function (e) { 
    let item = $('.lowermenu__item');
    if (!item.is(e.target) && item.has(e.target).length === 0) { 
      $('.tabs-pane').removeClass('active-lowermenu')
      $('.lowermenu__item-icon').removeClass('lowermenu__item-icon-rotate')
    } 
  })
})
