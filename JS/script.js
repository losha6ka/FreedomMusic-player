jQuery(($) => {
	// menu
	const menu = $(".bside__menu1");
	const menuBtn = $(".bside__button1");
	$(document).mouseup(function (e) {
		if (e.target.className === "bside__button1") {
			menuBtn.addClass("is-active");
			menu.stop().slideDown();
		} else if (e.target.className === "bside__button1 is-active") {
			menuBtn.removeClass("is-active");
			menu.stop().slideUp();
		} else if ((menu.has(e.target).length === 0) && (menuBtn.has(e.target).length === 0)) {
			// if ($(window).width() < 768) {
			menuBtn.removeClass("is-active");
			menu.stop().slideUp();
			// }
		}
	});
	const menutwo = $(".bside__menu2");
	const menutwoBtn = $(".bside__button2");
	$(document).mouseup(function (e) {
		if (e.target.className === "bside__button2") {
			menutwoBtn.addClass("is-active");
			menutwo.stop().slideDown();
		} else if (e.target.className === "bside__button2 is-active") {
			menutwoBtn.removeClass("is-active");
			menutwo.stop().slideUp();
		} else if ((menutwo.has(e.target).length === 0) && (menutwoBtn.has(e.target).length === 0)) {
			// if ($(window).width() < 768) {
			menutwoBtn.removeClass("is-active");
			menutwo.stop().slideUp();
			// }
		}
	});
	const menuthree = $(".bside__menu3");
	const menuthreeBtn = $(".bside__button3");
	$(document).mouseup(function (e) {
		if (e.target.className === "bside__button3") {
			menuthreeBtn.addClass("is-active");
			menuthree.stop().slideDown();
		} else if (e.target.className === "bside__button3 is-active") {
			menuthreeBtn.removeClass("is-active");
			menuthree.stop().slideUp();
		} else if ((menuthree.has(e.target).length === 0) && (menuthreeBtn.has(e.target).length === 0)) {
			// if ($(window).width() < 768) {
			menuthreeBtn.removeClass("is-active");
			menuthree.stop().slideUp();
			// }
		}
	});
	const menufour = $(".bside__menu4");
	const menufourBtn = $(".bside__button4");
	$(document).mouseup(function (e) {
		if (e.target.className === "bside__button4") {
			menufourBtn.addClass("is-active");
			menufour.stop().slideDown();
		} else if (e.target.className === "bside__button4 is-active") {
			menufourBtn.removeClass("is-active");
			menufour.stop().slideUp();
		} else if ((menufour.has(e.target).length === 0) && (menufourBtn.has(e.target).length === 0)) {
			// if ($(window).width() < 768) {
			menufourBtn.removeClass("is-active");
			menufour.stop().slideUp();
			// }
		}
	});
	const menufive = $(".bside__menu5");
	const menufiveBtn = $(".bside__button5");
	$(document).mouseup(function (e) {
		if (e.target.className === "bside__button5") {
			menufiveBtn.addClass("is-active");
			menufive.stop().slideDown();
		} else if (e.target.className === "bside__button5 is-active") {
			menufiveBtn.removeClass("is-active");
			menufive.stop().slideUp();
		} else if ((menufive.has(e.target).length === 0) && (menufiveBtn.has(e.target).length === 0)) {
			// if ($(window).width() < 768) {
			menufiveBtn.removeClass("is-active");
			menufive.stop().slideUp();
			// }
		}
	});
	const menusix = $(".bside__menu6");
	const menusixBtn = $(".bside__button6");
	$(document).mouseup(function (e) {
		if (e.target.className === "bside__button6") {
			menusixBtn.addClass("is-active");
			menusix.stop().slideDown();
		} else if (e.target.className === "bside__button6 is-active") {
			menusixBtn.removeClass("is-active");
			menusix.stop().slideUp();
		} else if ((menusix.has(e.target).length === 0) && (menusixBtn.has(e.target).length === 0)) {
			// if ($(window).width() < 768) {
			menusixBtn.removeClass("is-active");
			menusix.stop().slideUp();
			// }
		}
	});
});
var header = $('.header'),
	scrollPrev = 0;

$(window).scroll(function () {
	var scrolled = $(window).scrollTop();

	if (scrolled > 50 && scrolled > scrollPrev) {
		header.addClass('out');
	} else {
		header.removeClass('out');
	}
	scrollPrev = scrolled;
});
$(window).scroll(function () {
	var top = $(document).scrollTop();
	if (top < 50) $(".header").removeClass('fixed');
	else $(".header").addClass('fixed');
});
