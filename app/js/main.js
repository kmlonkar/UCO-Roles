$(function () {
  $('#datepicker1').datepicker();
  $('#datepicker2').datepicker();
  $('#datepicker3').datepicker();
  $('#datepicker4').datepicker();
  $('#datepicker5').datepicker();
  $('#datepicker6').datepicker();
  // $('.date').datepicker();
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
    // console.log($('.edit-table input'));
  })
  $('.accordion-button').click(function () {
    $(this).parent('.accordion-header').parent('.accordion-item').toggleClass('accordion-item-open');
  })

  $(".flagged-reasons .textarea").hide();
  $(".flagged-reasons input[id=other]").click(function () {
    if ($(this).is(":checked")) {
      $(".flagged-reasons .textarea").show(300);
    } else {
      $(".flagged-reasons .textarea").hide(200);
    }
  });

  var options = {
    chart: {
      height: '300px',
      type: "donut",

    },
    stroke: {
      width: 0
    },
    dataLabels: {
      enabled: false
    },
    legend: {
      position: 'bottom',
      horizontalAlign: 'left',
      fontSize: '11px',
      fontFamily: 'Lato-Regular, sans-serif',
      fontWeight: 400,

      labels: {
        show: true,
      },

      markers: {
        width: 17,
        height: 17,
        radius: 4,
      },
      itemMargin: {
        horizontal: 5,
        vertical: 5
      },
      onItemClick: {
        toggleDataSeries: true
      },
      onItemHover: {
        highlightDataSeries: true
      },
    },
    plotOptions: {
      pie: {
        expandOnClick: true,
        customScale: 1,
        donut: {
          size: '80%',
          labels: {
            show: true,
            name: {
              show: false,
            },
            value: {
              show: true,
              fontSize: '35px',
              fontWeight: 'bold',
              color: undefined,
              offsetY: +10,
              offsetX: +5,

            },
            total: {
              show: true,
              //  label: 'Total',
              showAlways: true,
              color: '#ffa500',
              formatter: function (w) {
                return w.globals.seriesTotals.reduce((a, b) => {
                  return a + b
                }, 0)
              }
            }
          }
        }
      }
    },


    series: [18, 13, 16, 8, 15],
    labels: ['Business', 'Income', 'Audit & Compliance', 'Npa & Recovery', 'Digital Banking'],
    colors: ['#B41432', '#F7A029', '#452525', '#15734E', '#3BA34B'],
  };
  if (document.querySelector("#chart")) {
    var chart = new ApexCharts(document.querySelector("#chart"), options);
    chart.render();

  }
});
