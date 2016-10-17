$(document).ready(function() {

	// animation
	$(".animated").each(function(){
		$(this).bind('inview', function (event, visible) {
			var $this = $(this),
				$animation = ( $this.data("animation") !== undefined ) ? $this.data("animation") : "slideUp";
			$delay = ( $this.data("delay") !== undefined ) ? $this.data("delay") : 100;
			if (visible == true) {
				setTimeout(function() { $this.addClass($animation);	},$delay);
			}else{
				setTimeout(function() { $this.removeClass($animation); },$delay);
			}
		});
	});

	// OWL Carousel Configuration

	$(".charts_carousel").owlCarousel({
		loop:true,
		margin:10,
		nav:true,
		items:3,
		responsive : {
			// breakpoint from 0 up
			0 : {
				items : 1,
			},
			// breakpoint from 480 up
			480 : {
				items :2,
			},
			// breakpoint from 768 up
			768 : {
				items : 3,
			}
		}



	});


	// change calendar view
	var view, cal_height;
	$('.calendar_events').next('ul').find('a').click(function (){

		var $this = $(this);
		var text = $this.text();
		$this.parents('.dropdown').find('.calendar_events h3').text(text)

		if ($this.hasClass('weekly_view')) {


			$('.event_calendar').fullCalendar( 'changeView', 'basicWeek' )
			$('.event_calendar').fullCalendar('option', 'height', 180);
		}

		else if ($this.hasClass('daily_view')){

			$('.event_calendar').fullCalendar( 'changeView', 'agendaDay' )
			$('.event_calendar').fullCalendar('option', 'height', 500);
			//$('.fc-other-month').html('');

			var view = $('.event_calendar').fullCalendar('getView');
			//alert("The start day is " + view.intervalStart);
		}



	})



	// full calendar configuration

var events_list=[
	{
		title: 'All Day Event',
		start: '2016-10-02',
		end: '2016-10-5',
		className:'event_type_1'
	},
	{
		title: 'Long Event',
		start: '2016-09-07',
		end: '2016-09-10',
		className:'event_type_2'
	},
	{
		id: 999,
		title: 'Repeating Event',
		start: '2016-09-09T16:00:00',
		className:'event_type_3'

	},
	{
		id: 999,
		title: 'Repeating Event',
		start: '2016-09-16T16:00:00',
		className:'event_type_4 oneday'
	},
	{
		title: 'Conference',
		start: '2019-09-11',
		end: '2016-09-13',
		className:'event_type_5',
		editable:true
	},
	{
		title: 'Meeting',
		start: '2016-09-12T10:30:00',
		end: '2016-09-12T12:30:00',
		className:'event_type_6'
	},
	{
		title: 'Lunch',
		start: '2016-09-12T12:00:00',
			end: '2016-09-12T13:30:00',
		className:'event_type_7'
	},
	{
		title: 'Meeting',
		start: '2016-09-12T14:30:00',
		className:'event_type_3'
	},
	{
		title: 'Happy Hour',
		start: '2016-09-12T17:30:00',
		className:'event_type_2'
	},
	{
		title: 'Dinner',
		start: '2016-09-12T20:00:00',
		className:'event_type_6'
	},
	{
		title: 'Birthday Party',
		start: '2016-09-13T07:00:00',
		className:'event_type_1'
	},
	{
		title: 'Click for Google',
		url: 'http://google.com/',
		start: '2016-09-28T07:00:00',
			end: '2016-09-28T12:30:00',
		className:'event_type_6'
	},
	{
		title: 'sdsds dsd sd',
		start: '2016-09-28T10:00:00',
			end: '2016-09-28T14:30:00',
		className:'event_type_7'
	}
]




	$('.event_calendar').fullCalendar({
		header: {
			left: '',
			center: 'title',
			right: ''
		},
		weekMode:'fixed',
		allDaySlot: true,
		columnFormat: {
			month: 'ddd',
			week: 'ddd d/M',
			day: 'dddd d/M'
		},
		/*defaultDate: '2016-06-21',*/
		views: {
			week: { // name of view
				titleFormat: 'YYYY, MM, DD',
				height: 180,
				columnFormat: 'ddd M/D'

				// other view-specific options here
			},
			month: { // name of view
				height: 500,
				// other view-specific options here
			}
		},
		defaultView: 'basicWeek',
		editable: true,
		height: 180,
		columnFormat: 'ddd',
		eventLimit: true, // allow "more" link when too many events
		events: events_list,
	});

	// Custom events calendar buttons
	$('.event_calendar_buttons a').click(function (){
		if ($(this).hasClass('event_prev')){
			$('.event_calendar').fullCalendar('prev');
		}
		else {
			$('.event_calendar').fullCalendar('next');
		}
		return false
	})



	// timeline calendar configuration


	$('.timeline_calendar').fullCalendar({
		header: {
			left: ' ',
			center: '',
			right: ''
		},
		weekMode:'fixed',
		fixedWeekCount:false,
		allDaySlot: false,
		columnFormat: {
			month: 'ddd',
			week: 'ddd d/M',
			day: 'dddd d/M'
		},
		/*defaultDate: '2016-06-21',*/
		views: {
			week: { // name of view
				titleFormat: 'YYYY, MM, DD',
				height: 180,
				columnFormat: 'ddd M/D'

				// other view-specific options here
			},
			month: { // name of view
				height: 500,
				// other view-specific options here
			}
		},
		defaultView: 'month',
		editable: true,
		height: 180,
		columnFormat: 'dd',
		eventLimit: true, // allow "more" link when too many events
		events: events_list,
	});
// popover function
	$("body").popover({
		selector: '[data-toggle=popover]',
		trigger:'focus'

	})

	// Load more global function
	function LoadMore(count,item,more) {
		list_count = $(item).size();
		items = count;
		$(item + ':lt(' + items + ')').slideDown();
		$(more).click(function () {
			console.log("more clicked")
			items = (items + count <= list_count) ? items + count : list_count;
			$(item + ':lt(' + items + ')').slideDown('fast');


		});
	}

	LoadMore(5,'.inbox_item','')

// inbox component functions
	var inbox_count = $('.inbox_item').size();
	$('.inbox_count').text(inbox_count);

	$('.inbox_item .actions_btns > .btn-inbox-actions.done').each(function() {
		$(this).click(function () {
			var $this = $(this)
			$this.parents('.inbox_item').find('.request_status').fadeIn()
				.removeClass('alert-error')
				.addClass('alert-success')
				.find('span')
				.text('Request is accepted');

			$this.parents('.inbox_item').find('.request_status').find('i').removeClass('fa-times').addClass('fa-check')
			inbox_count = inbox_count - 1;
			$this.parents().find('.inbox_count').text(inbox_count);

			if (inbox_count == 0) {
				$this.parents().find('.no-results').fadeIn();
			}

			setTimeout(function () {
				$this.parents('.inbox_item').find('.request_status').fadeOut();

				$this.parents('.inbox_item').fadeOut(400, function () {
					$(this).remove();

				});
				LoadMore(6, '.inbox_item', $this);


			}, 3000);
		})
	});

	$('.inbox_item .actions_btns > .btn-inbox-actions.error').each(function(){
		$(this).click(function (){
			var $this= $(this)
			$this.parents('.inbox_item').find('.request_status').fadeIn()
				.removeClass('alert-success')
				.addClass('alert-danger')
				.find('span')
				.text('Request is deleted');

			$this.parents('.inbox_item').find('.request_status').find('i').removeClass('fa-check').addClass('fa-times')

			inbox_count = inbox_count -1 ;
			$this.parents().find('.inbox_count').text(inbox_count);

			if(inbox_count == 0){
				$this.parents().find('.no-results').fadeIn();
			}

			setTimeout(function() {
				$this.parents('.inbox_item').find('.request_status').fadeOut();

				$this.parents('.inbox_item').fadeOut(400, function (){
					$(this).remove();

				});
				LoadMore(6,'.inbox_item',$this);




			},3000);
		})


	})

	// adding values to progress bar  progressbars
	$(".progress").each(function(){
		$(this).bind('inview', function (event, visible) {
			var $this = $(this), $progressbar= $this.find('.progress-bar'),$progressval=$progressbar.attr('aria-valuenow'),$progressmaxval=$progressbar.attr('aria-valuemax'),$progressavg=($progressval / $progressmaxval)*100,bg_color;

			if (visible == true) {
				setTimeout(function() {
					/*if ($progressavg >= 0 && $progressavg < 50 ){
					 bg_color = '#da447e';


					 }
					 else if ($progressavg >= 50 && $progressavg < 70 ) {
					 bg_color = '#ffd60c';


					 }
					 else if ($progressavg >= 70  ){
					 bg_color = '#02db4b';
					 }
					 */

					if($this.hasClass('progress-bar-vertical')){
						$progressbar.css({'height':$progressavg+'%'/*, 'background-color':bg_color*/})
					}
					else{
						$progressbar.css({'width':$progressavg+'%'/*, 'background-color':bg_color*/})

					}
				},400);

			}


		});
	});



	// favorite remove btn


	$('.fav_item .actions_btns > .btn-inbox-actions.error').click(function (){
		var $this= $(this)
		$this.parents('.fav_item').find('.request_status').fadeIn()
			.removeClass('alert-success')
			.addClass('alert-danger')
			.find('span')
			.text('Favorite is deleted');
		$this.parents('.fav_item').find('.request_status').find('i').removeClass('fa-check').addClass('fa-times');


		setTimeout(function() {
			$this.parents('.fav_item').find('.request_status').fadeOut();

			$this.parents('.fav_item').fadeOut(400, function (){
				$(this).remove();

			});





		},3000);


	})

	// reminder done button
	$('.reminder_item .actions_btns > .btn-inbox-actions.done').click(function (){
		var $this= $(this)
		$this.parents('.reminder_item')
			.addClass('stroke');

		$this.hide()
	})

	// add skill button

	$('.add_skill').click(function (){
		$(this).parents().find('.input-append').slideToggle();
		return false;
	})




// Punctuality value colors change based on the value
	var Punctuality_val_new = parseInt($(".Punctuality_percent").text());
	var minPunctualityVal =$(".Punctuality_percent").data('minbalance');
	var maxPunctualityVal =$(".Punctuality_percent").data('maxbalance');

	if (Punctuality_val_new >= 0 && Punctuality_val_new < minPunctualityVal ){
		$(".Punctuality_percent").addClass('error')
	}
	else if (Punctuality_val_new >= minPunctualityVal && Punctuality_val_new < maxPunctualityVal ) {
		$(".Punctuality_percent").addClass('warning')

	}
	else if (Punctuality_val_new >= maxPunctualityVal  ){
		$(".Punctuality_percent").addClass('success')
	}


	// endorsement system functions

	$('.more_endorsement').css('opacity', '0');
	$(".add_endorsement").each(function(index,ele){
		ele = $(this);
		var last_endorser_img = ele.parents(".endorsement_item").find('.skill_people ul li').last().find('img').attr('src');
		var endorsement_li= ele.parents(".endorsement_item").find('.skill_people ul').data('endorsers');
		var endrosement_no = endorsement_li;

		if(endorsement_li > 5){
			endrosement_no =  endrosement_no - 5
			ele.parents(".endorsement_item").find('.more_endorsement').css('opacity','1');
		}
		ele.parents(".endorsement_item").find('.endorsement_count').text(endrosement_no);

		$(this).click(function (){
			var endorser_img = "images/user_defualt_img.jpg";
			var endorse_img;

			// Add endorsement
			if(!ele.hasClass('endorsed')){

				ele.addClass('endorsed');
				ele.find('span').text('Endorse');
				endorse_img = '<li><img src="'+endorser_img+'"/></li>';


				if(endorsement_li > 5){
					ele.parents(".endorsement_item").find('.skill_people ul li').last().remove();
					ele.parents(".endorsement_item").find('.skill_people ul').prepend(endorse_img);
				}
				else{
					ele.parents(".endorsement_item").find('.skill_people ul').prepend(endorse_img);
				}
				endrosement_no ++

			}
			// Remove Endorement
			else{
				ele.removeClass('endorsed');
				ele.find('span').text('Remove Endorsement');
				ele.parents(".endorsement_item").find('.skill_people ul li').first().remove();
				endorse_img = '<li><img src="'+last_endorser_img+'"/></li>';

				if(endorsement_li >5){

					ele.parents(".endorsement_item").find('.skill_people ul').append(endorse_img);
				}

				endrosement_no --
			}

			ele.parents(".endorsement_item").find('.endorsement_count').text(endrosement_no);

			return false;
		})

	})

// Copy the skills and endorsement div to the skills popup
	/*$('.view_allskills').click(function (){
		$(this).parent().next('.endorsement').clone().appendTo('.skills_modal .modal-body');
		$('.skills_modal').modal('show')
		createEndorsment ();
		return false;

	})
	*/

	// change hover button text
	$(".add_endorsement").hover(function (){

		if($(this).hasClass('endorsed')){
			$(this).find('span').text('Remove Endorsement');
		}
		else{
			$(this).find('span').text('Endorse');
		}
	})


// change vacation icon based on the vacation type
	var vacationtype =  $('.widget_status.vacation').data('type');
	var icon =  $('.widget_status.vacation').find('i');

		if (vacationtype == "type_1"){
			icon.addClass('fa-plane')
		}
		else if (vacationtype == "type_2"){
			icon.addClass('fa-camera-retro')
		}
		else if (vacationtype == "type_3"){
			icon.addClass('fa-heartbeat')
		}
		else if (vacationtype == "type_4"){
			icon.addClass('fa-bicycle')
		}



	generate_datatable ('.data_table');

	var editor; // use a global for the submit and return data rendering in the examples

	$(document).ready(function() {
		editor = new $.fn.dataTable.Editor( {
			"ajax": "staff.json",
			"table": ".data_table",
			"fields": [ {
				"label": "First name:",
				"name": "first_name"
			}, {
				"label": "Last name:",
				"name": "last_name"
			}, {
				"label": "Position:",
				"name": "position"
			}, {
				"label": "Office:",
				"name": "office"
			}, {
				"label": "Extension:",
				"name": "extn"
			}, {
				"label": "Start date:",
				"name": "start_date",
				"type": "datetime"
			}, {
				"label": "Salary:",
				"name": "salary"
			}
			]
		} );

		// New record
		$('a.create_record').on('click', function (e) {
			e.preventDefault();

			editor.create( {
				title: 'Create new record',
				buttons: 'Add'
			} );
		} );

		// Edit record
		$('.data_table').on('click', 'a.editor_edit', function (e) {
			e.preventDefault();

			editor.edit( $(this).closest('tr'), {
				title: 'Edit record',
				buttons: 'Update'
			} );
		} );

		// Delete a record
		$('.data_table').on('click', 'a.editor_remove', function (e) {
			e.preventDefault();

			editor.remove( $(this).closest('tr'), {
				title: 'Delete record',
				message: 'Are you sure you wish to remove this record?',
				buttons: 'Delete'
			} );
		} );

		$('.data_table').DataTable( {
			ajax: "staff.json",
			columns: [
				{ data: null, render: function ( data, type, row ) {
					// Combine the first and last names into a single table field
					return data.first_name+' '+data.last_name;
				} },
				{ data: "position" },
				{ data: "office" },
				{ data: "extn" },
				{ data: "start_date" },
				{ data: "salary", render: $.fn.dataTable.render.number( ',', '.', 0, '$' ) },
				{
					data: null,
					className: "center",
					defaultContent: '<a href="" class="editor_edit">Edit</a> / <a href="" class="editor_remove">Delete</a>'
				}
			]
		} );
	} );


	// highchart functions

	$('.linechart').highcharts({
		 chart: {
            type: 'spline'
        },
		title: {
			text: '',
			x: -20 //center
		},

		xAxis: {
			categories: ['1', '2', '3', '4', '5','6','7', '8', '9', '10', '11', '12','13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24','25','26', '27', '28', '29', '30', '31']
		},
		yAxis: {
			title: {
				text: ''
			},
			labels: {
				formatter: function() {
					return this.value + ' Hours';
				}
			},
			plotLines: [{
				value: 0,
				width: 1,
				color: 'red'
			}]
		},
		tooltip: {
			valueSuffix: 'hour'
		},
		legend: {
			layout: 'vertical',
			align: 'right',
			verticalAlign: 'middle',
			borderWidth: 0
		},
		series: [{
			name: 'May 2016',
			allowPointSelect: true,
			color: 'yellow',
			data: [2, 6, 3.25, 0, 0, 0, 0, 8, 1.40, 2, 5, 0,3, 2, 2, 4, 9, 12, 0,0.5,0.5, 3.30, 0,4,8, 9, 0, 0, 0, 0, 0.25]
		}, {
			name: 'June 2016',
			allowPointSelect: true,
			color: 'red',
			data: [1, 4, 1.25, 5, 7, 9, 0, 2, 3, 7, 9, 2,0, 0, 0, 8, 1, 1.8, 1,5,0, 0, 3,9,0, 1, 0, 0, 0, 0, 3]
		}, {
			name: 'July 2016',
			allowPointSelect: true,
			color: 'green',
			data: [3, 1, 2, 7, 9, 1, 0, 2.25, 3.40, 0, 4, 1,0, 3, 10, 5, 0, 0, 1,6,0.3, 1.30, 0,2,0, 1, 3, 0, 0, 0, 1]
		}]
	});



	/*$('.data_table').each(function(){
		var id=$(this).attr(id);
		console.log(id)
		var table=$('#'+id).DataTable(
			{
				initComplete: function () {
					var table_index=$(this).parents('.dt_custom_filter');

					this.api().column(3).every( function () {
						var column = this;
						var select = $('<div class="dropdown"><button class="dropdown_date dropdown-toggle" type="button"  data-toggle="dropdown"><span>Show All </span><span class="">|</span><span class="caret"></span></button><ul class="dropdown-menu"><li><a data-value="">Show All </a></li></ul></div>')
							.appendTo( table_index.find('.custom_filter_cont' ));


						column.data().unique().sort().each( function ( d, j ) {
							select.find('.dropdown-menu').append( '<li><a data-value="'+d+'">Show only :'+d+'</a></li>' )

						} );

						select.find('.dropdown-menu li a').on( 'click', function () {
							select.find('span:first-child').text($(this).text());
							var val = $.fn.dataTable.util.escapeRegex(
								$(this).data('value')
							);

							column
								.search( val ? '^'+val+'$' : '', true, false )
								.draw();
						} );

					} );
				},
				buttons: [
					'copy', 'excel', 'pdf'
				],


			}
		);

		table.buttons().container()
			.appendTo( $('.export_cont .dropdown'));



// global search
		function filterGlobal (table,textbox) {
			$(table).DataTable().search(
				$(textbox).val()
			).draw();
		}
		$('.search_dt').on( 'keyup click', function () {
			filterGlobal('.data_table',this)
		} );


// change the table results length
		$('.results_cont .dropdown').find('.dropdown-menu li a').click(function (){
			$(this).parents('.results_cont').find('button > span:first-child').text($(this).text());
			var lengths= $(this).data('lenght');
			table.page.len( lengths ).draw();
		})
		$('.results_cont .dropdown').find('.dropdown-menu li:first-child a').click();

	});


*/



});// document ready end


// data table configuration

function generate_datatable (id){

var table=$(id).DataTable(
	{
		initComplete: function () {
			var table_index=$(this).parents('.dt_custom_filter');

			this.api().column(3).every( function () {
				var column = this;
				var select = $('<div class="dropdown"><button class="dropdown_date dropdown-toggle" type="button"  data-toggle="dropdown"><span>Show All </span><span class="">|</span><span class="caret"></span></button><ul class="dropdown-menu"><li><a data-value="">Show All </a></li></ul></div>')
					.appendTo( table_index.find('.custom_filter_cont' ));


				column.data().unique().sort().each( function ( d, j ) {
					select.find('.dropdown-menu').append( '<li><a data-value="'+d+'">Show only :'+d+'</a></li>' )

				} );

				select.find('.dropdown-menu li a').on( 'click', function () {
					select.find('span:first-child').text($(this).text());
					var val = $.fn.dataTable.util.escapeRegex(
						$(this).data('value')
					);

					column
						.search( val ? '^'+val+'$' : '', true, false )
						.draw();
				} );

			} );
		},
		paging: true,
		"ordering": true,
		"lengthChange": true,
		buttons: [
			'copy', 'excel', 'pdf'
		],


	}
);

table.buttons().container()
	.appendTo( $('.export_cont .dropdown'));



// global search
function filterGlobal (table,textbox) {
	$(table).DataTable().search(
		$(textbox).val()
	).draw();
}
$('.search_dt').on( 'keyup click', function () {
	filterGlobal('.data_table',this)
} );


// change the table results length
$('.results_cont .dropdown').find('.dropdown-menu li a').click(function (){
	$(this).parents('.results_cont').find('button > span:first-child').text($(this).text());
	var lengths= $(this).data('lenght');
	table.page.len( lengths ).draw();
})
$('.results_cont .dropdown').find('.dropdown-menu li:first-child a').click();
}

/* Formatting function for row details - modify as you need */
function format ( d ) {
	// `d` is the original data object for the row
	return '<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;">'+
		'<tr>'+
		'<td>Full name:</td>'+
		'<td>samak</td>'+
		'</tr>'+
		'<tr>'+
		'<td>Extension number:</td>'+
		'<td>3333</td>'+
		'</tr>'+
		'<tr>'+
		'<td>Extra info:</td>'+
		'<td>And any further details here (images etc)...</td>'+
		'</tr>'+
		'</table>';
}


/******************/


/******************/
 

    // Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('.header,.topMenu,.icon-scroll').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('.header,.topMenu,.icon-scroll').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('.header,.topMenu,.icon-scroll').removeClass('nav-up').addClass('nav-down');
        }
    }


    
    lastScrollTop = st;
}







