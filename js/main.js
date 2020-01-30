window.onload = function(){ document.getElementById("loading").style.display = "none" }
new WOW().init();
$(document).ready(function() {
$(".nav-toggle").click(function() {
	$(this).toggleClass("active");
	$(".nav-main").toggleClass("open");
	$("body").toggleClass("nav_open");
	
});
$(window).on('scroll', function (event) {
    var scrollValue = $(window).scrollTop();
    if (scrollValue > 120) {
        $('#header').addClass('affix');
    } else{
        $('#header').removeClass('affix');
    }
});
if((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i)) || (navigator.userAgent.match(/iPad/i))) {
    $(".intervent_list ul li").click(function(){
        //we just need to attach a click event listener to provoke iPhone/iPod/iPad's hover event
        //strange
    });
	$(".partenaires_con ul li").click(function(){
        //we just need to attach a click event listener to provoke iPhone/iPod/iPad's hover event
        //strange
    });
}
});