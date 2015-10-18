$(document).ready(function(){
	$('.menuList').on('click', '.menuMother', function(){
		$(this).closest('.menuList').find('.menuThing').slideToggle();
	})
})