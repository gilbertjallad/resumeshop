
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
css3: true,

onLeave: function(index, nextIndex, direction){
if (index == 2) {
   $('#firstCard').addClass('animated bounceInRight');
}
if (index == 3) {
   $('#firstCard').removeClass('animated bounceInRight bounceInLeft');
}
if (index == 4) {
   $('#firstCard').addClass('animated bounceInLeft');
}
if (index == 1) {
   $('#secondCard').addClass('animated bounceInRight');
}
if (index == 2) {
   $('#secondCard').removeClass('animated bounceInRight bounceInLeft');
}
if (index == 3) {
   $('#secondCard').addClass('animated bounceInLeft');
}
if (index == 1) {
   $('#thirdCard').addClass('animated bounceInRight');
}
if (index == 2) {
   $('#thirdCard').removeClass('animated bounceInRight bounceInLeft');
}
if (index == 3) {
   $('#thirdCard').addClass('animated bounceInLeft');
}
	}



	});
});

$(document).on('click', '#sidenav', '.drag-target', function(e) {
//in responsive mode?
      if($('.fp-responsive').length){

$('body').css('overflow', 'visible');

}

});


// carousel
$(document).ready(function(){
      $('.carousel').carousel();
    });

// videos

function cargarVideo(idframe, idvideo) {
document.getElementById(idframe).src = 'https://www.youtube.com/embed/' + idvideo + '?rel=0';
}