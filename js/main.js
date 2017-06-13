$('.feedback .open-close').on('click', function(){
  $('.feedback').toggleClass('active');
});
$( document ).ready(function() {
    console.log( "ready!" );
});
$('.Prices .open-close').on('click', function(){
  $('.Prices').toggleClass('active');
});
$('.submit').on('click', function(){
    alert("Спасибо за вашу помощь ваше сообщение отправлено и будет рассмотрено в течении 24 часов");
});
