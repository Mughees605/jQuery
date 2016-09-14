$(document).ready(function(){
$('.tour').on('click','button',function(){
var price = $(this).closest('.tour').data('discount');
var add = $('<button class="vacation">From $'+price+'</button>');
$(this).closest(".tour").append(add);
$(this).remove();
});
$('#filter').on('click','button',function(){
    $(".highlight").removeClass('highlight');
$('.tour').filter('.onsale').closest('div').addClass('highlight');

});
function myFunction(){
$(this).closest(".confirmation").find('.ticket').slideToggle();
};
$('.confirmation').on('click','button',myFunction)
$('.confirmation').on('mouseenter','p',myFunction);




});