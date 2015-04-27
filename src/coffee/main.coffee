windowWidth=0

init = () ->
	setScrollParams()
	checkParallax()
	setNav()

	$(window).on("debouncedresize", (event)->
		resized()
	 )

	return


resized = () ->
	if $(window).width() != windowWidth
		checkParallax()
		windowWidth = $(window).width()
	return


checkParallax = () ->
	if Modernizr.touch or Modernizr.mq('only screen and (max-width: 768px)')
        killParallax()
    else
    	setParallax()
    return
  

setParallax = () ->
	s = skrollr.init smoothScrolling: false, forceHeight: false
	return

killParallax = () ->
	skrollr.init().destroy()
	return

setScrollParams = () ->
	
	$("#feature-1 .feature-image .parallax-bg").attr("data-50-top", "transform:translate3d(0px, 0px, 0px)");
	$("#feature-1 .feature-image .parallax-bg").attr("data-top-bottom", "transform:translate3d(0px, 100px, 0px)");

	$("#feature-2 .feature-image .parallax-bg").attr("data-bottom-top", "transform:translate3d(0px, -200px, 0px)");
	$("#feature-2 .feature-image .parallax-bg").attr("data-top-bottom", "transform:translate3d(0px, 0px, 0px)");

	$("#feature-3 .feature-image .parallax-bg").attr("data-bottom-top", "transform:translate3d(0px, -200px, 0px)");
	$("#feature-3 .feature-image .parallax-bg").attr("data-top-bottom", "transform:translate3d(0px, 0px, 0px)");

	$("#feature-4 .feature-image .parallax-bg").attr("data-bottom-top", "transform:translate3d(0px, -200px, 0px)");
	$("#feature-4 .feature-image .parallax-bg").attr("data-top-bottom", "transform:translate3d(0px, 0px, 0px)");

	return
	
setNav = () ->

	$("#nav-about").click ->
		$("html,body").animate {scrollTop: $("#feature-1").offset().top}

	$("#nav-experience").click ->
		$("html,body").animate {scrollTop: $("#feature-2").offset().top}

	$("#nav-work").click ->
		$("html,body").animate {scrollTop: $("#feature-3").offset().top}

	$("#nav-contact").click ->
		$("html,body").animate {scrollTop: $("#feature-4").offset().top}
		
showNav = () ->
	$('header').stop(true, false)
	$('header').animate({top: "0"}, 250)

hideNav = () ->
	$('header').animate({top: "-50"}, 250)
	headerShowing = false


$(document).ready ->

	init()

	headerShowing = true

	lst = 0
	$(window).scroll (event)->
		st = $(this).scrollTop()
		
		if st > lst and st > 200
			if headerShowing
				hideNav()
				headerShowing = false
		else
			if !headerShowing
				showNav()
				headerShowing = true
		lst = st

		return

	# Set up the rolling text with the job titles

	i=0

	jobTitles = ['Designer', 'Developer', 'Producer', 'Creative Lead', 'Technical Lead', '3D Modeller', 'Video Editor']

	$('.text-roller').append("<div class='rolling-text rolling-text-1'>"+jobTitles[0]+"</div><div class='rolling-text rolling-text-2'></div>")

	setInterval ->
		$('.rolling-text-2').html(jobTitles[i++])
		if i >= jobTitles.length
			i=0
		$('.rolling-text-1').html(jobTitles[i])

		$('.rolling-text-1').css("top", "-=40")
		$('.rolling-text-1').animate({top: "0"}, 500)

		$('.rolling-text-2').css("top", "0")
		$('.rolling-text-2').animate({top: "40"}, 500)
	, 2000
