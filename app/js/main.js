$(function () {
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
  $('.edit-kra').click(function () {
    $('.kra-table').addClass('edit-table');
    $('.exception-heading').toggleClass('edit-kra-heading');
    $('.kra-table input').prop("readonly", false);
    console.log($('.edit-table input'));
  })
  $('.edit-table input').focus(function () {
    alert('works')
    $(this).attr("placeholder", "");
  })

  // $('.edit-table input').each(function () {
  //   var currentElement = $(this);
  //   alert('works')
  // });


  var options = {
    series: [44, 55, 41, 17, 15],
    labels: ['Business', 'Income', 'Audit & Compliance', 'Npa & Recovery', 'Digital Banking'],
    chart: {
      type: 'donut',
    },
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200,
          height: 400
        },
        legend: {
          position: 'bottom'
        }
      }
    }],

    colors: ['#B41432', '#F7A029', '#452525', '#15734E', '#3BA34B'],
  };

  var chart = new ApexCharts(document.querySelector("#chart"), options);
  chart.render();
});