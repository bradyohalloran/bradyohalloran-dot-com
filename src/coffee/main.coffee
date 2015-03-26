###
do ->
	alert "Hello!!!"
###

$(document).ready ->
	console.log('ready?')

	jobTitles = ['Designer', 'Developer', 'Producer', 'Creative Lead', 'Technical Lead']

	i=0

	$('#text-roller').append("<div id='rolling-text-1' class='rolling-text'>"+jobTitles[0]+"</div><div id='rolling-text-2' class='rolling-text'></div>")

	myInterval = setInterval ->
					$('#rolling-text-2').html(jobTitles[i++])
					if i >= jobTitles.length
						i=0
					$('#rolling-text-1').html(jobTitles[i])

					$('#rolling-text-1').css("top", "-=40")
					$('#rolling-text-1').animate({top: "0"}, 500)

					$('#rolling-text-2').css("top", "0")
					$('#rolling-text-2').animate({top: "40"}, 500)
				, 2000
