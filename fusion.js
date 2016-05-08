/**
 * Created by mohammadsamak on 5/8/16.
 */
jQuery(document).ready(function($){
    loadCSS = function(href) {
        var cssLink = $("<link rel='stylesheet' type='text/css' href='"+href+"'>");
        $("head").append(cssLink);
    };

    loadCSS("https://ejadasys.github.io/fusion.css");

    $('.iconBlock div.x1a a').click(function(){

        $('.iconBlock').removeClass('active');
        $(this).parents('.iconBlock').toggleClass('active');
    })
});
