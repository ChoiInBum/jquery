$(document).ready(function() {
  $('#show').click(function() {
    $('p').show('slow');
  });
  $('#hide').on('click', function() {
    $('p').hide('fast');
  });
  $('#slideup').click(function() {
    // 숫자는 1당 1ms를 의미하고
    // 1000ms = 1s(초)를 의미한다.
    $('p').slideUp(500);
  });
  $('#slidedown').on('click', function() {
    $('p').slideDown(1000);
  });
  $('#fadein').click(function() {
    $('p').fadeIn(1000, function() {
      console.log('fade in activated');
    });
  });
  $('#fadeout').on('click', function() {
    $('p').fadeOut(function() {
      console.log('slow');
    });
  });
  $('#toggle').click(function() {
    $('p').toggle('fast');
  });
  $('#slidetoggle').on('click', function() {
    $('p').slideToggle(1000);
  });
  $('#fadetoggle').click(function() {
    $('p').fadeToggle(1000, function() {
      console.log('fade Toggled');
    });
  });
});
