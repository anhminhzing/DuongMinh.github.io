$(document).ready(function(){
    $(window).resize(function() {
        var width = $(window).width();
        if (width < 1024){
            AddRemove_ClassNavbar('add');
        }
        else{
            AddRemove_ClassNavbar('remove');
        }
    });
    var width = $(window).width();
    if (width < 1024){
        AddRemove_ClassNavbar('add');
    }
    else{
        AddRemove_ClassNavbar('remove');
    }


    var typed = new Typed('#typed', {
        stringsElement: '#typed-strings',
        loop: true,
        typeSpeed: 100,
    });
    $('.carousel').flickity({
        // options
        cellAlign: 'left',
        contain: true,
        groupCells: 1,
        pageDots: true,
        prevNextButtons: true,
        wrapAround: true,
    });
        
    $(window).scroll(function () {
        if ($(window).scrollTop() > $('.navbar').position().top) {
            $('.navbar').addClass('header-scroll')
        }
        else {
            $('.navbar').removeClass('header-scroll')
        }
    })

   
    function AddRemove_ClassNavbar(type){
       if(type == "add"){
            $('.nav-content').addClass('overlay');
            $('.navbar-nav').addClass('overlay-content');
            $(".nav-content").css("width", 0);
            $(".closebtn").css("display", 'block');
       }
       else{
            $('.nav-content').removeClass('overlay')
            $('.navbar-nav').removeClass('overlay-content');
            $(".nav-content").css("width", '100%');
            $(".closebtn").css("display", 'none');
       }
    }
    $('#OpenNav').click(function(){
        $(".overlay").css("width", "100%");
    })
    $('.closebtn').click(function(){
        $(".overlay").css("width", 0);
    })
    $('.nav-link').click(function(){
        $('.closebtn').trigger('click');
    })
    function openNav() {
        console.log("ASdsad");
    }
})
