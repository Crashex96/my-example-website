
$( function() {
var fs = $('h1').text();
var ss = 'LA BEVANDA CHE FRIZZA!';
$('h1').hover(function(){
    $(this).hide().text(ss).fadeIn("slow");
}, function() {
    $(this).hide().text(fs).fadeIn("slow");
});
});