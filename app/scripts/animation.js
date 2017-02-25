
//jQuery: runs when the document is ready
	$(document).ready(function() {
	//gives us our sidenav with click to close, check Materialize documentation for more options
	$('#sidenav-toggle').sideNav({
	closeOnClick: true
		});


	//settings for fullpage.js
$('#fullpage').fullpage({

menu: '#nav',
anchors: ['a', 'b', 'c', 'd', 'e'],
normalScrollElements: '#nav',
paddingTop: 0,
paddingBottom: 0,
responsiveWidth: 640,
css3: true

	});
});