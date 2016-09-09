$(document).ready(function(){
$('.tour').on('click','button',function(){

    var price = $(this).closest('.tour').data('discount');
    var add = $('<button class="vacation"> $'+price+' complete </button>');
    $(this).closest('.tour').append(add);
    $(this).remove();
});
$('#filter').on('click','.onsale-filter',function(){
    $('.highlight').removeClass('highlight');
    $('.tour').filter('.onsale').closest('div').addClass('highlight');
});
$('#filter').on('click','.expiring-filter',function(){
    $('.highlight').removeClass('highlight');
    $('.tour').filter('.ex').closest('div').addClass('highlight');
})



})