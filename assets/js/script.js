jQuery(document).ready(function(){

	"use strict";
	
	/* ==========================================================================
    Loader
    ========================================================================== */
    function hideLoader() {
        jQuery('#loader').css({display: 'none'});
    }
    hideLoader();


    /* ==========================================================================
    Spinner
    ========================================================================== */
    jQuery('.spinner-loader').animate({
        opacity: 0
    }, 2000);
    jQuery('.spinner-loader').hide(2500);
	
//parallax section
	$('.parallaxBg').parallax("50%", 0.4);
	$('.parallaxBg-2').parallax("50%", 0.4);
	$('.parallaxBg-3').parallax("50%", 0.4);
	$('.parallaxBg-4').parallax("50%", 0.4);
	$('.parallaxBg-5').parallax("50%", 0.4);
	$('.parallaxBg-6').parallax("50%", 0.4);
	$('.parallaxBg-7').parallax("50%", 0.4);

/*** Cart Scrollbar  ***/
	(function($){
		$(window).load(function(){
			$("#content_2").mCustomScrollbar({
				scrollInertia:550,
				horizontalScroll:true,
				mouseWheelPixels:116,
				scrollButtons:{
					enable:true,
					scrollType:"pixels",
					scrollAmount:116
				},
				callbacks:{
					onScroll:function(){ snapScrollbar(); }
				}
			});
			/* toggle buttons scroll type */
			var content=$("#content_2");
			$("a[rel='toggle-buttons-scroll-type']").html("<code>scrollType: \""+content.data("scrollButtons_scrollType")+"\"</code>");
			$("a[rel='toggle-buttons-scroll-type']").click(function(e){
				e.preventDefault();
				var scrollType;
				if(content.data("scrollButtons_scrollType")==="pixels"){
					scrollType="continuous";
				}else{
					scrollType="pixels";
				}
				content.data({"scrollButtons_scrollType":scrollType}).mCustomScrollbar("update");
				$(this).html("<code>scrollType: \""+content.data("scrollButtons_scrollType")+"\"</code>");
			});
			/* snap scrollbar fn */
			var snapTo=[];
			$("#content_2 .images_container img").each(function(){
				var $this=$(this),thisX=$this.position().left;
				snapTo.push(thisX);
			});
			function snapScrollbar(){
				var posX=$("#content_2 .mCSB_container").position().left,closestX=findClosest(Math.abs(posX),snapTo);
				$("#content_2").mCustomScrollbar("scrollTo",closestX,{scrollInertia:350,callbacks:false});
			}
			function findClosest(num,arr){
				var curr=arr[0];
				var diff=Math.abs(num-curr);
				for(var val=0; val<arr.length; val++){
					var newdiff=Math.abs(num-arr[val]);
					if(newdiff<diff){
						diff=newdiff;
						curr=arr[val];
					}
				}
				return curr;
			}
		});
	})(jQuery);


	/*** FIXED Menu APPEARS ON SCROLL DOWN ***/	
	$(window).scroll(function() {    
	var scroll = $(window).scrollTop();
	if (scroll >= 50) {
	$("#menu-sec").addClass("sticky");
	}
	else{
	$("#menu-sec").removeClass("sticky");
	$("#menu-sec").addClass("");
	}
	});	
	
	/*** FIXED Menu APPEARS ON SCROLL DOWN ***/	
	$(window).scroll(function() {    
	var scroll = $(window).scrollTop();
	if (scroll >= 50) {
	$(".toogle-cart-sec").addClass("sticky");
	}
	else{
	$(".toogle-cart-sec").removeClass("sticky");
	$(".toogle-cart-sec").addClass("");
	}
	});	
	
	
	/*** Login Dropdown  ***/
	$(".log-in-sec > a").click( function(){
	$(".login-form").slideToggle();
	$(".login-form").toggleClass('animated bounceInDown');
	});
	
	/*** Cart Bar  ***/
	$(".toogle-cart-sec > .container > a").click( function(){
	$(".toogle-cart-sec").toggleClass('open');
	});	
	
	/*** Toll Free Banner ***/
	$(".toll-free-sec > a").click( function(){
	$(".toll-free-banner").slideToggle();
	$(".toll-free-banner").toggleClass('');
	});
	
	
	$(".toll-free-sec > a").click(function(){ 
		$(this).toggleClass('active');
	});
	
	
	/*** Responsive Menu  ***/
	$(".open-menu").click( function(){
	$(".business1-menu").slideToggle();
	$(".business1-menu").toggleClass('responsive-menu');
	});	
	
	/*** Responsive Menu  ***/
	$(".open-menu").click( function(){
	$(".business2-menu").slideToggle();
	$(".business2-menu").toggleClass('responsive-menu');
	});		
	
	/** Business Menu 1 **/
	(function($) {
	var $window = $(window),
	$html = $('.business1-menu');

	$window.resize(function resize() {
	if ($window.width() < 980) {
	return $html.addClass('ponka');
	}

	$html.removeClass('ponka');
	}).trigger('resize');
	})(jQuery);
	
	/** Business Menu 2 **/	
	(function($) {
	var $window = $(window),
	$html = $('.business2-menu');

	$window.resize(function resize() {
	if ($window.width() < 980) {
	return $html.addClass('ponka');
	}

	$html.removeClass('ponka');
	}).trigger('resize');
	})(jQuery);
	
	
	/*** Responsive Menu 1  ***/
	var dropdowns = $('.ponka > ul > li > ul');
	$(".ponka > ul > li > a").click( function(){
	$(dropdowns).slideUp();
	$(this).parent().find(dropdowns).slideDown();
	});
	var dropdowns2 = $('.ponka > ul > li > ul > li > ul');
	$(".ponka > ul > li > ul > li a").click( function(){
	$(dropdowns2).slideUp();
	$(this).parent().find(dropdowns2).slideDown();
	});

	$(function() {
	$('#toggle-widget .content').hide();
	$('#toggle-widget h2:first').addClass('active').next().slideDown('slow');
	$('#toggle-widget h2').click(function() {
	if($(this).next().is(':hidden')) {
	$('#toggle-widget h2').removeClass('active').next().slideUp('slow');
	$(this).toggleClass('active').next().slideDown('fast');
	}
	});
	});
	
	
	/*** Responsive Menu 2  ***/
	var dropdowns3 = $('.ponka > ul > li > ul');
	$(".ponka > ul > li > a").click( function(){
	$(dropdowns3).slideUp();
	$(this).parent().find(dropdowns3).slideDown();
	});
	var dropdowns4 = $('.ponka > ul > li > ul > li > ul');
	$(".ponka > ul > li > ul > li a").click( function(){
	$(dropdowns4).slideUp();
	$(this).parent().find(dropdowns4).slideDown();
	});
	
	/*** Cart Delete ***/
	$('.toogle-cart-box > ul > li > a > i.fa-trash-o').click(function() {
		$(this).parent().parent().parent().parent().slideUp();
	});
	
	/*** Boxed Layout  ***/
	$(".boxed-style").click( function(){
		$(".theme-layout").addClass("boxed");
		$("body").addClass('bg10');
	});
	
	var current = 1; //keeps track of the current div
	var height = $('.roles').height(); //the height of the roles div
	var numberDivs = $('.roles').children().length; //the number of children of the roles div
	var first = $('.roles div:nth-child(1)'); //the first div nested in roles div
	setInterval(function() {
	var number = current * -height;
	first.css('margin-top', number + 'px');
	if (current === numberDivs) {
	first.css('margin-top', '0px');
	current = 1;
	} else current++;
	}, 2000);
	
	$(".full-width").click( function(){
	$(".theme-layout").removeClass("boxed");
	$("body").removeClass('bg1');
	$("body").removeClass('bg2');
	$("body").removeClass('bg3');
	$("body").removeClass('bg4');
	$("body").removeClass('bg5');
	});

	$(".bg1").click( function(){
		$("body").addClass('bg1');
		$("body").removeClass('bg2');
		$("body").removeClass('bg3');
		$("body").removeClass('bg4');
		$("body").removeClass('bg5');
		$("body").removeClass('bg6');
		$("body").removeClass('bg7');
		$("body").removeClass('bg8');
		$("body").removeClass('bg9');
		$("body").removeClass('bg10');
	});

	$(".bg2").click( function(){
		$("body").removeClass('bg1');
		$("body").addClass('bg2');
		$("body").removeClass('bg3');
		$("body").removeClass('bg4');
		$("body").removeClass('bg5');
		$("body").removeClass('bg6');
		$("body").removeClass('bg7');
		$("body").removeClass('bg8');
		$("body").removeClass('bg9');
		$("body").removeClass('bg10');
	});

	$(".bg3").click( function(){
		$("body").removeClass('bg1');
		$("body").removeClass('bg2');
		$("body").addClass('bg3');
		$("body").removeClass('bg4');
		$("body").removeClass('bg5');
		$("body").removeClass('bg6');
		$("body").removeClass('bg7');
		$("body").removeClass('bg8');
		$("body").removeClass('bg9');
		$("body").removeClass('bg10');
	});

	$(".bg4").click( function(){
		$("body").removeClass('bg1');
		$("body").removeClass('bg2');
		$("body").removeClass('bg3');
		$("body").addClass('bg4');
		$("body").removeClass('bg5');
		$("body").removeClass('bg6');
		$("body").removeClass('bg7');
		$("body").removeClass('bg8');
		$("body").removeClass('bg9');
		$("body").removeClass('bg10');
	});

	$(".bg5").click( function(){
		$("body").removeClass('bg1');
		$("body").removeClass('bg2');
		$("body").removeClass('bg3');
		$("body").removeClass('bg4');
		$("body").addClass('bg5');
		$("body").removeClass('bg6');
		$("body").removeClass('bg7');
		$("body").removeClass('bg8');
		$("body").removeClass('bg9');
		$("body").removeClass('bg10');
	});	
	
	$(".bg6").click( function(){
		$("body").removeClass('bg1');
		$("body").removeClass('bg2');
		$("body").removeClass('bg3');
		$("body").removeClass('bg4');
		$("body").removeClass('bg5');
		$("body").addClass('bg6');
		$("body").removeClass('bg7');
		$("body").removeClass('bg8');
		$("body").removeClass('bg9');
		$("body").removeClass('bg10');
	});	
	
	$(".bg7").click( function(){
		$("body").removeClass('bg1');
		$("body").removeClass('bg2');
		$("body").removeClass('bg3');
		$("body").removeClass('bg4');
		$("body").removeClass('bg5');
		$("body").removeClass('bg6');
		$("body").addClass('bg7');
		$("body").removeClass('bg8');
		$("body").removeClass('bg9');
		$("body").removeClass('bg10');
	});	
	
	$(".bg8").click( function(){
		$("body").removeClass('bg1');
		$("body").removeClass('bg2');
		$("body").removeClass('bg3');
		$("body").removeClass('bg4');
		$("body").removeClass('bg5');
		$("body").removeClass('bg6');
		$("body").removeClass('bg7');
		$("body").addClass('bg8');
		$("body").removeClass('bg9');
		$("body").removeClass('bg10');
	});	
	
	$(".bg9").click( function(){
		$("body").removeClass('bg1');
		$("body").removeClass('bg2');
		$("body").removeClass('bg3');
		$("body").removeClass('bg4');
		$("body").removeClass('bg5');
		$("body").removeClass('bg6');
		$("body").removeClass('bg7');
		$("body").removeClass('bg8');
		$("body").addClass('bg9');
		$("body").removeClass('bg10');
	});	
	
	$(".bg10").click( function(){
		$("body").removeClass('bg1');
		$("body").removeClass('bg2');
		$("body").removeClass('bg3');
		$("body").removeClass('bg4');
		$("body").removeClass('bg5');
		$("body").removeClass('bg6');
		$("body").removeClass('bg7');
		$("body").removeClass('bg8');
		$("body").removeClass('bg9');
		$("body").addClass('bg10');
	});	
	
	
	// Tabs
	if (jQuery('.shortcode_tabs').size() > 0) {
		jQuery('.shortcode_tabs').each(function(index) {
			// GET ALL HEADERS
			var i = 1;
			jQuery(this).find('.shortcode_tab_item_title').each(function(index) {
				jQuery(this).addClass('it'+i); jQuery(this).attr('whatopen', 'body'+i);
				jQuery(this).addClass('head'+i);
				jQuery(this).parents('.shortcode_tabs').find('.all_heads_cont').append(this);
				i++;
			});
		
			// GET ALL BODY
			var i = 1;
			jQuery(this).find('.shortcode_tab_item_body').each(function(index) {
				jQuery(this).addClass('body'+i);
				jQuery(this).addClass('it'+i);
				jQuery(this).parents('.shortcode_tabs').find('.all_body_cont').append(this);
				i++;
			});
		
			// OPEN ON START
			jQuery(this).find('.expand_yes').addClass('active');
			var whatopenOnStart = jQuery(this).find('.expand_yes').attr('whatopen');
			jQuery(this).find('.'+whatopenOnStart).fadeIn();
			jQuery(this).find('.'+whatopenOnStart).addClass('active');
		});
		
		jQuery(document).on('click', '.shortcode_tab_item_title', function(){
			jQuery(this).parents('.shortcode_tabs').find('.shortcode_tab_item_body').removeClass('active');
			jQuery(this).parents('.shortcode_tabs').find('.shortcode_tab_item_title').removeClass('active');
			var whatopen = jQuery(this).attr('whatopen');
			jQuery(this).parents('div.shortcode_tabs').find('.shortcode_tab_item_body').hide();
			jQuery(this).parents('.shortcode_tabs').find('.'+whatopen).fadeIn();
			jQuery(this).parents('.shortcode_tabs').find('.'+whatopen).addClass('active');
			jQuery(this).addClass('active');
		});
		
		// For Tabs Type3
		if (jQuery('.shortcode_tabs').hasClass("type3")) {
			jQuery('.shortcode_tabs.type3').each(function() {
				var tab_item_count = jQuery(this).find(".shortcode_tab_item_title").length; 
				var tab_item_w = Math.floor(jQuery(this).width()/tab_item_count); 
				jQuery(this).find(".shortcode_tab_item_title").css({'width': tab_item_w + 'px'});
			});					
		}	
	}
	
	
	 $("#testimonials-carousel").owlCarousel({
        singleItem: true,
        autoPlay: true,
        navigation: true,
        navigationText: [, ]
    });
	
	
	// Animated Skills
$(function() {
	
    
    var $section = $('#animated-skills').appear(function() {
    
    function loadDaBars() {
        var bar = $('.progress-bar');
			$(function(){
			  $(bar).each(function(){
			    bar_width = $(this).attr('aria-valuenow');
			    $(this).width(bar_width + '%');
			  });
			});
    }

    	loadDaBars();
    });
    
});

var bar = $('.value-bar');
$(function(){
  $(bar).each(function(){
    bar_width = $(this).attr('aria-valuenow');
    $(this).width(bar_width + '%');
  });
});
	
	//Flex Slider Presentation
	// Presentation Carousel
			jQuery('.presentation .flexslider').flexslider({
				animation: "fade",
				controlNav: "thumbnails",
				directionNav: false,
				slideshowSpeed: 7000, 
				animationSpeed: 1000
			});	
			
			//Revolution Slider
			   jQuery('.tp-banner').show().revolution(
            {
                delay: 7000,
                startwidth: 1170,
                startheight: 550,
                onHoverStop: "on", // Stop Banner Timer at Hover on Slide on/off
                thumbWidth: 100, // Thumb With and Height and Amount (only if navigation Tyope set to thumb !)
                thumbHeight: 50,
                thumbAmount: 3,
                hideThumbs: 0,
                navigationType: "none", // bullet, thumb, none
                navigationArrows: "solo", // nexttobullets, solo (old name verticalcentered), none
                navigationStyle: "round-old", // round,square,navbar,round-old,square-old,navbar-old, or any from the list in the docu (choose between 50+ different item), custom
                navigationHAlign: "center", // Vertical Align top,center,bottom
                navigationVAlign: "bottom", // Horizontal Align left,center,right
                navigationHOffset: 0,
                navigationVOffset: 20,
                soloArrowLeftHalign: "left",
				hideArrowsOnMobile:"on",
                soloArrowLeftValign: "center",
                soloArrowLeftHOffset: 20,
                soloArrowLeftVOffset: 0,
                soloArrowRightHalign: "right",
                soloArrowRightValign: "center",
                soloArrowRightHOffset: 20,
                soloArrowRightVOffset: 0,
                touchenabled: "on", // Enable Swipe Function : on/off
                stopAtSlide: -1, // Stop Timer if Slide "x" has been Reached. If stopAfterLoops set to 0, then it stops already in the first Loop at slide X which defined. -1 means do not stop at any slide. stopAfterLoops has no sinn in this case.
                stopAfterLoops: -1, // Stop Timer if All slides has been played "x" times. IT will stop at THe slide which is defined via stopAtSlide:x, if set to -1 slide never stop automatic
                hideCaptionAtLimit: 0, // It Defines if a caption should be shown under a Screen Resolution ( Basod on The Width of Browser)
                hideAllCaptionAtLilmit: 0, // Hide all The Captions if Width of Browser is less then this value
                hideSliderAtLimit: 0, // Hide the whole slider, and stop also functions if Width of Browser is less than this value
                fullWidth: "on",
                shadow: 0
            });
			
			// Login Popup
	if (jQuery('.login_popup').size() > 0) {
		jQuery('.login_popup').on('show.bs.modal', function (e) {
			jQuery('html').addClass('no_scroll');
		});
		jQuery('.login_popup').on('hide.bs.modal', function (e) {
			jQuery('html').removeClass('no_scroll');
		});	
	}
	
	// Header Cart Info
	if (jQuery('.cart_wrap').size() > 0) {
		jQuery('.view_cart_btn').addClass('has_items');		
		jQuery('.remove_products').on("click", function(){
			jQuery('.view_cart_btn').removeClass('has_items');
			jQuery('.cart_wrap').hide();
			jQuery('.cart_submenu, .widget_cart').append('<p class="empty">No products in the cart.</p>');		
		});		
	}
	
	// Tooltip 
	$('[data-rel="tooltip"]').tooltip();
	
// WOW Scroll Spy
	var wow = new WOW({
		mobile: false
	});
	wow.init();	
			
			
					
});
