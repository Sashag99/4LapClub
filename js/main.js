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
    alert("Cпасибо за вашу помощь ваше сообщение отправлено мне на почту ");
});
