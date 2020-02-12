
var btn = $(".btn-menu");
var menu = $(".muser");
var sidebar = $(".sidebar");
var arch = $(".links");



btn.click(function(){

       menu.toggleClass("w100");
       
	});
menu.click(function(){
       menu.removeClass("w100");
	});


$('.slider_list').slick({
  dots: true,
  infinite: true,
  speed: 500,
   lazyLoad: 'ondemand',
});

$('#file-upload').change(function() {
    var filepath = this.value;
    var m = filepath.match(/([^\/\\]+)$/);
    var filename = m[1];
    $('#filename').html(filename);

});
$('#file-upload1').change(function() {
    var filepath = this.value;
    var m = filepath.match(/([^\/\\]+)$/);
    var filename = m[1];
    $('#filename1').html(filename);

});
$('#file-upload2').change(function() {
    var filepath = this.value;
    var m = filepath.match(/([^\/\\]+)$/);
    var filename = m[1];
    $('#filename2').html(filename);

});
$('#file-upload3').change(function() {
    var filepath = this.value;
    var m = filepath.match(/([^\/\\]+)$/);
    var filename = m[1];
    $('#filename3').html(filename);

});