// create custom attendance calendar
var days_headers =['f','s','s','m','t','w','t','f','s','s','m','t','w','t','f','s','s','m','t','w','t','f','s','s','m','t','w','t','f','s','s','m','t','w','t','f','s','s','m','t','w','t','f','s','s','m','t','w','t','f','s','s','m','t','w','t','f','s','s','m','t','w','t','f','s','s','m','t','w','t','f','s','s','m','t','w','t','f','s','s','m','t','w','t','f','s','s','m','t','w','t','f','s','s','m','t','w','t','f','s','s','m','t','w','t'];
var days_nums = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31'];


$(document).ready(function (){
var month = 1;
    createCal(0,31,['2','8','9','10','25','26'],['late_1','late_3','late_3','late_3','late_2','late_2'])
    $('.change_attendance_months ul.dropdown-menu li a').on('click',function (){
        month = parseInt($(this).data('value'));
       $(this).parents('.change_attendance_months').find('button span.text').text($(this).text());
        checkmonths(month);
    });











}) // end of document ready

function checkmonths(month){
    if(month == 1){
        //var dys =['3','5','7']
        createCal(0,31,['3','9','10','11'],['late_1','late_2','late_3','late_3'])
    }
    else if (month == 2){
        createCal(31,29,['12','13','14','23'],['late_2','late_2','late_2','late_3'])
    }
    else if (month == 3){
        createCal(60,30,['10','18','19','30'],['late_1','late_2','late_2','late_3'])
    }
}

function createCal(start,days,day,classname){
    var day_title="";
    var day_numbers="";




    for (i=0; i < days; i++){

        day_title +='<div class="day_div">'+days_headers[i+start]+'</div>';
        day_numbers+='<div class="day_div"><a href="#">'+days_nums[i]+'</a></div>';
    }

    $('.days_headers').html(day_title);
    $('.days_numbers').html(day_numbers)

   // alert(day.size())

    // assign the classes to one or multiple dates
    for (j=0; j < day.length; j++){

        $('.days_numbers').find('.day_div').eq(day[j]-1).addClass(classname[j]);
    }




    //adding tooltip to the calendar

    var date_tooltip='<div class="tooltip right" role="tooltip" style="display:none;">';
    date_tooltip+='<div class="tooltip-arrow"></div>';
    date_tooltip+=' <div class="tooltip-inner" style="">';
    date_tooltip+=' <div class="bottom_border">';
    date_tooltip+='<h3>Lateness  : <span class="lateness_val">40 Minutes</span></h3>';
    date_tooltip+='<h3>Shortness  : <span class="shortness_val">25 Minutes</span></h3>';
    date_tooltip+='</div><div class="btns_cont">';
    date_tooltip+='<a href="#"><i class="fa fa-pencil" aria-hidden="true"></i> Justify Lateness</a>';
    date_tooltip+='</div></div></div>';
    $('.days_numbers .day_div.late_1 a').append(date_tooltip)

    $('.days_numbers .day_div a').click(function (){
        if($(this).parent().hasClass('late_1')){
            $('.days_numbers .day_div a').find('.tooltip').css({'opacity':'0', 'display': 'none' })
            $(this).find('.tooltip').css({'opacity':'1', 'display': 'block' })
        }

        return false;

    })
    // hide the tooltip when clicking on the body
    $('body').click (function(){
        $('.days_numbers .day_div a').find('.tooltip').css({'opacity':'0', 'display': 'none' })
    })


}