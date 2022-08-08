$(document).ready(function () {
  $('#orb').click(function () {

    if ($(this).hasClass('moon')) {
      $(this).removeClass('moon').addClass('sun');
    } else {
      $(this).removeClass('sun').addClass('moon');
    }

    if ($(this).hasClass('sun')) {
      $(this).addClass('sundown')
      $(this).removeClass('sunrise');
    } else {
      $(this).addClass('sunrise')
      $(this).removeClass('sundown');
    }

    if ($('#sky').hasClass('day')) {
      $('#sky').removeClass('day')
      $('#sky').addClass('night');
    } else {
      $('#sky').removeClass('night')
      $('#sky').addClass('day');
    }

    if ($('#sky').hasClass('day')) {
      $('#sky').addClass('dayToNight')
      $('#sky').removeClass('nightToDay');
    } else {
      $('#sky').addClass('nightToDay')
      $('#sky').removeClass('dayToNight');
    }

    if ($('#sky').hasClass('night')) {
      $('#stars').removeClass('star-1');
      $('#stars').addClass('star-day-1');
    } else {
      $('#stars').addClass('star-1');
      $('#stars').removeClass('star-day-1');
    }

    if ($('#sky').hasClass('night')) {
      $('#stars-2').removeClass('star-2');
      $('#stars-2').addClass('star-day-2');
    } else {
      $('#stars-2').addClass('star-2');
      $('#stars-2').removeClass('star-day-2');
    }

    if ($('#sky').hasClass('night')) {
      $('#stars-3').removeClass('star-3');
      $('#stars-3').addClass('star-day-3');
    } else {
      $('#stars-3').addClass('star-3');
      $('#stars-3').removeClass('star-day-3');
    }


    if ($('#sky').hasClass('night')) {
      $('#stars-4').removeClass('star-4');
      $('#stars-4').addClass('star-day-4');
    } else {
      $('#stars-4').addClass('star-3');
      $('#stars-4').removeClass('star-day-4');
    }


    if ($('#sky').hasClass('night')) {
      $('#stars-5').removeClass('star-5');
      $('#stars-5').addClass('star-day-5');
    } else {
      $('#stars-5').addClass('star-5');
      $('#stars-5').removeClass('star-day-5');
    }


    if ($('#sky').hasClass('night')) {
      $('#stars-6').removeClass('star-6');
      $('#stars-6').addClass('star-day-6');
    } else {
      $('#stars-6').addClass('star-6');
      $('#stars-6').removeClass('star-day-6');
    }

    if ($('#sky').hasClass('night')) {
      $('#stars-7').removeClass('star-7');
      $('#stars-7').addClass('star-day-7');
    } else {
      $('#stars-7').addClass('star-7');
      $('#stars-7').removeClass('star-day-7');
    }
  })

  $('#show').click(function () {
    $('.hide').removeClass('invisible')
    $('.show').addClass('invisible')
    $('#text').removeClass('invisible')
  })

  $('#hide').click(function () {
    $('.show').removeClass('invisible')
    $('.hide').addClass('invisible')
    $('#text').addClass('invisible')
  })

})

