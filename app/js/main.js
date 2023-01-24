$(function(){
  $('#datepicker1').datepicker();
  $('#datepicker2').datepicker();
  $('.date').datepicker();
  $('#date-2').datepicker({
    format: "dd-M-yy"
  });
  $('.search-input').focus(function () {
    $('.search-options').addClass('search-options--open');
    $('.search-results').addClass('search-results--open');
    
  })
   $('.search-input').blur(function () {
     $('.search-options').removeClass('search-options--open');
     $('.search-results').removeClass('search-results--open');

   })
  $('.navbar-toggler').click(function () {
    $('.sidebar').toggleClass('sidebar-mobile sidebar-mobile--open');
  })
  $('.dropdown').mouseenter(function () {
    $('.dropdown > .dropdown-menu').addClass('dropdown-menu--open');
  });
  $('.dropdown').mouseleave(function () {
    $('.dropdown > .dropdown-menu.dropdown-menu--open').removeClass('dropdown-menu--open');
  });

});
$(document).ready(function () {
  $('.js-example-basic-single').select2();
});