$(document).ready(function(){function n(n){"add"==n?($(".nav-content").addClass("overlay"),$(".navbar-nav").addClass("overlay-content"),$(".nav-content").css("width",0),$(".closebtn").css("display","block")):($(".nav-content").removeClass("overlay"),$(".navbar-nav").removeClass("overlay-content"),$(".nav-content").css("width","100%"),$(".closebtn").css("display","none"))}$(window).resize(function(){n($(window).width()<1024?"add":"remove")}),n($(window).width()<1024?"add":"remove");new Typed("#typed",{stringsElement:"#typed-strings",loop:!0,typeSpeed:100});$(".carousel").flickity({cellAlign:"left",contain:!0,groupCells:1,pageDots:!0,prevNextButtons:!0,wrapAround:!0}),$(window).scroll(function(){$(window).scrollTop()>$(".navbar").position().top?$(".navbar").addClass("header-scroll"):$(".navbar").removeClass("header-scroll")}),$("#OpenNav").click(function(){$(".overlay").css("width","100%")}),$(".closebtn").click(function(){$(".overlay").css("width",0)}),$(".nav-link").click(function(){$(".closebtn").trigger("click")})});