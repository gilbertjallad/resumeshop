console.log('\'Allo \'Allo!');



//jQuery: runs when the document is ready
	$(document).ready(function() {
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
if (nextIndex == 3) {
      lineChart();
   }
   if (nextIndex == 5) {
		
   }

   if (nextIndex == 1) {
   $('#opening').addClass('animated zoonIn');
}
   
}

	});
});

function lineChart(){

d3.select('#graph').selectAll('*').remove();

// set the dimensions and margins of the graph
var margin = {top: 200, right: 100, bottom: 50, left: 100},
    width = $(window).width() - margin.left - margin.right,
    height = $(window).height() - margin.top - margin.bottom;

// parse the date / time
var parseTime = d3.timeParse('%d-%b-%y');

// set the ranges
var x = d3.scaleTime().range([0, width]);
var y = d3.scaleLinear().range([height, 0]);

// define the line
var valueline = d3.line()
    .x(function(d) { return x(d.date); })
    .y(function(d) { return y(d.close); });

// append the svg obgect to the body of the page
// appends a 'group' element to 'svg'
// moves the 'group' element to the top left margin
var svg = d3.select('#graph').append('svg')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
  .append('g')
    .attr('transform',
          'translate(' + margin.left + ',' + margin.top + ')');

// Get the data
d3.csv('data.csv', function(error, data) {
  if (error) throw error;

  // format the data
  data.forEach(function(d) {
      d.date = parseTime(d.date);
      d.close = +d.close;
  });

  // Scale the range of the data
  x.domain(d3.extent(data, function(d) { return d.date; }));
  y.domain([0, d3.max(data, function(d) { return d.close; })]);

  // Add the valueline path.
  svg.append('path')
     .data([data])
     .attr('class', 'line')
     .attr('d', valueline)
     .transition()
	 .duration(10000)
	 .attr('opacity', 100);



  // Add the X Axis
  svg.append('g')
      .attr('transform', 'translate(0,' + height + ')')
      .call(d3.axisBottom(x));

  // Add the Y Axis
  svg.append('g')
      .call(d3.axisLeft(y));

});

	}

// D3 DONUT
var pie = new d3pie('pie', {
    header: {
      title: {
        text: 'My ecperience'
      },
      location: 'pie-center'
    },
    size: {
      pieInnerRadius: '80%'
    },
    data: {
      sortOrder: 'label-asc',
      content: [
        { label: 'Photography', value: 1 },
        { label: 'Management', value: 2 },
        { label: 'Sales', value: 7 },
        { label: 'Digital Video', value: 15 },
        { label: 'Graphic Design', value: 10 }
      ]
    }
  });

var pie2 = new d3pie('pie2', {
    data: {
      content: [
        { label: 'HTML', value: 3 },
        { label: 'CSS', value: 3 },
        { label: 'JAVASCRIPT', value: 1 },
        { label: 'jQuery', value: 2 },
        { label: 'ADOBE PREMIERE', value: 15 },
        { label: 'ADOBE ILLUSTRATOR', value: 10 },
        { label: 'ADOBE PHOTOSHOP', value: 10 },
        { label: 'ADOBE INDESIGN', value: 5 },
        { label: 'FRAMEWORKS', value: 4 }
      ]
    },
    tooltips: {
      enabled: true,
      type: 'placeholder',
      string: '{label}: {percentage}%',
      styles: {
        fadeInSpeed: 500,
        backgroundColor: '#00cc99',
        backgroundOpacity: 0.8,
        color: '#ffffcc',
        borderRadius: 4,
        font: 'verdana',
        fontSize: 20,
        padding: 20
      }
    }
  });


// Bar graph JS
setTimeout(function start (){
  
  $('.bar').each(function(i){  
    var $bar = $(this);
    $(this).append('<span class="count"></span>')
    setTimeout(function(){
      $bar.css('width', $bar.attr('data-percent'));      
    }, i*100);
  });

$('.count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).parent('.bar').attr('data-percent')
    }, {
        duration: 2000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now) +'%');
        }
    });
});

}, 500)
