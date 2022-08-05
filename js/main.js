$(document).ready(function () {
  $('#orb').click(function () {
    if ($(this).hasClass('sun')) {
      $(this).removeClass('sun').addClass('moon');
    } else {
      $(this).removeClass('moon').addClass('sun');
    }
    if ($('#sky').hasClass('day')) {
      $('#sky').removeClass('day').addClass('night');
    } else {
      $('#sky').removeClass('night').addClass('day');
    }
    if ($('#cloud1').hasClass('invisible')) {
      $('#cloud1').removeClass('invisible');
    } else {
      $('#cloud1').addClass('invisible');
    }
    if ($('#cloud2').hasClass('invisible')) {
      $('#cloud2').removeClass('invisible');
    } else {
      $('#cloud2').addClass('invisible');
    }
    if ($('#cloud3').hasClass('invisible')) {
      $('#cloud3').removeClass('invisible');
    } else {
      $('#cloud3').addClass('invisible');
    }
    if ($('#moon-spot1').hasClass('visible')) {
      $('#moon-spot1').removeClass('visible');
    } else {
      $('#moon-spot1').addClass('visible');
    }
    if ($('#moon-spot2').hasClass('visible')) {
      $('#moon-spot2').removeClass('visible');
    } else {
      $('#moon-spot2').addClass('visible');
    }
    if ($('#moon-spot3').hasClass('visible')) {
      $('#moon-spot3').removeClass('visible');
    } else {
      $('#moon-spot3').addClass('visible');
    }
  })
})

