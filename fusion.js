
jQuery(document).ready(function($){
   // loadCSS = function(href) {
      //  var cssLink = $("<link rel='stylesheet' type='text/css' href='"+href+"'>");
       // $("head").append(cssLink);
   // };

   // loadCSS("https://ejadasys.github.io/fusion.css");

    $('.iconBlock div.x1a a').click(function(){

        $('.iconBlock').removeClass('active');
        $(this).parents('.iconBlock').toggleClass('active');
    })
    //$('span.x1fa').text($('span.x1fa').text())
  //  ak = $('[accesskey]').each(function() {

    //})
   /*$('button').each(function(){
        // alert($(this).text())
        $(this).text($(this).text());
       $(this).prop('accesskey','');

    })
*/
    $('.bodyContent   img.xhf').attr('src','https://ejadasys.github.io/images/user_male_portrait.png').addClass('user_img');
});
