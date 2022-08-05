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

    if ($('#sky').hasClass('day')) {
      $('#nightWave').addClass('invisible');
      $('#dayWave').removeClass('invisible');
    } else {
      $('#dayWave').addClass('invisible');
      $('#nightWave').removeClass('invisible');
    }

    if ($('#stars').hasClass('invisible')) {
      $('#stars').removeClass('invisible');
    } else {
      $('#stars').addClass('invisible');
    }

    if ($('#stars-2').hasClass('invisible')) {
      $('#stars-2').removeClass('invisible');
    } else {
      $('#stars-2').addClass('invisible');
    }

    if ($('#stars-3').hasClass('invisible')) {
      $('#stars-3').removeClass('invisible');
    } else {
      $('#stars-3').addClass('invisible');
    }

    if ($('#stars-4').hasClass('invisible')) {
      $('#stars-4').removeClass('invisible');
    } else {
      $('#stars-4').addClass('invisible');
    }

    if ($('#stars-5').hasClass('invisible')) {
      $('#stars-5').removeClass('invisible');
    } else {
      $('#stars-5').addClass('invisible');
    }

    if ($('#stars-6').hasClass('invisible')) {
      $('#stars-6').removeClass('invisible');
    } else {
      $('#stars-6').addClass('invisible');
    }

    if ($('#stars-7').hasClass('invisible')) {
      $('#stars-7').removeClass('invisible');
    } else {
      $('#stars-7').addClass('invisible');
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

