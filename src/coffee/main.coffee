###
do ->
	alert "Hello!!!"
###



init = () ->
	console.log('do the things')
	setScrolling()
	return

setScrolling = () ->



	
	$("#feature-1 .feature-image").attr("data-anchor-target", "#feature-1 .feature-copy");
	$("#feature-1 .feature-image").attr("data-400-top", "transform:translate3d(0px, 0px, 0px)");
	$("#feature-1 .feature-image").attr("data-top", "transform:translate3d(0px, -150px, 0px)");






	s = skrollr.init smoothScrolling: false


	return
	

$(document).ready ->

	init()

	headerShowing = true

	waypoint = $('#feature-1').waypoint handler:(direction)->
		if direction == 'up'

		else




		return

	lst = 0
	$(window).scroll (event)->
		st = $(this).scrollTop()
		
		if st > lst and st > 200
			if headerShowing
				$('header').animate({top: "-50"}, 250)
				headerShowing = false
		else
			if !headerShowing
				$('header').stop(true, false)
				$('header').animate({top: "0"}, 250)
				headerShowing = true
		lst = st


			
		return



	# Set up the rolling text with the job titles

	i=0

	jobTitles = ['Designer', 'Developer', 'Producer', 'Creative Lead', 'Technical Lead']

	$('#text-roller').append("<div id='rolling-text-1' class='rolling-text'>"+jobTitles[0]+"</div><div id='rolling-text-2' class='rolling-text'></div>")

	setInterval ->
		$('#rolling-text-2').html(jobTitles[i++])
		if i >= jobTitles.length
			i=0
		$('#rolling-text-1').html(jobTitles[i])

		$('#rolling-text-1').css("top", "-=40")
		$('#rolling-text-1').animate({top: "0"}, 500)

		$('#rolling-text-2').css("top", "0")
		$('#rolling-text-2').animate({top: "40"}, 500)
	, 2000
