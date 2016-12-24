$(function() {

	//	回到顶部

	$(".scroll").click(function(event) {
		event.preventDefault();
		$('html,body').animate({
			scrollTop: $(this.hash).offset().top
		}, 1000);
	});
	$(document).scroll(function() {
		var $up = $(document).scrollTop();
		var $scrtop = $(window).scrollTop();
		if($up >400) {
			$('#top').css("transform", "scale(1)");
		} else {
			$('#top').css("transform", "scale(0)");
		}
	})


	//滚屏
	$(function() {
		$('#nav').onePageNav();
	});
})