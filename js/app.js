/* ===========================================================
 * fullPage.js 1.5
 *
 * https://github.com/alvarotrigo/fullPage.js
 * MIT licensed
 *
 * Copyright (C) 2013 alvarotrigo.com - A project by Alvaro Trigo
 *
 * ========================================================== */

$(document).ready(function() {
	$('#fullpage').fullpage({
    
    //Navigaton
    verticalCentered:true,
	css3:true,
    navigation: true,
    navigationTooltips: ['Youtube', 'Facebook', 'Instagram', 'Linkedin', 'Ads & Brand Awarness', 'Brand Image', 'Brand Videos', 'Logo', 'Animated Cartoon Videos', 'Contact'],
    showActiveTooltip: true,

    //Scrolling
    dragAndMove: true,
    verticalCentered: true,
	});

	//methods
    $.fn.fullpage.setAllowScrolling(false);
    
    $('.middle').on('click', function() {
        $.fn.fullpage.moveSectionDown();
    });
});
