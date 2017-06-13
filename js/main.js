$('.feedback .open-close').on('click', function(){
  $('.feedback').toggleClass('active');
});
$('.Prices .open-close').on('click', function(){
  $('.Prices').toggleClass('active');
});
$('.Prices-2 .open-close').on('click', function(){
  $('.Prices-2').toggleClass('active');
});
$('.submit').on('click', function(){
    alert("Спасибо за вашу помощь ваше сообщение отправлено и будет рассмотрено в течении 24 часов");
});