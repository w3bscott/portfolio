
$("main").waypoint(function(direction){
    if(direction == "down"){
        $("nav").addClass("mobile-navbar");
        $('.hamburger').addClass('sticky');
    }else{
        $("nav").removeClass("mobile-navbar");
        $('.hamburger').removeClass('sticky');
    }      
},  {
offset: "60px"
});


$(".section-projects").waypoint(function(){
    $(".sUp").addClass("magictime slideDownReturn");
    $(".sRight").addClass("magictime slideRightReturn");
    $(".sLeft").addClass("magictime slideLeftReturn");
    },{
        offset: "550px"
});
$("#projects").on("click" , projectScroll );
$('.hero button').on('click', projectScroll)

function projectScroll(){
    $("html,body").animate({scrollTop: $(".section-projects").offset().top}, 900)
}

$("#about").on("click" , function(){
    $("html,body").animate({scrollTop: $(".section-about").offset().top}, 900)
});
$("#skills").on("click" , function(){
    $("html,body").animate({scrollTop: $(".section-skills").offset().top}, 700)
});
$("#contact").on("click" , function(){
    $("html,body").animate({scrollTop: $("footer").offset().top}, 700)
});





var back =  document.querySelector('.backdrop');

$('.hamburger').on('click', function(){
    $('.hamburger').toggleClass("is-active");
    $('nav ul').toggleClass('mobile-nav');
    
    back.classList.toggle('show');

    $('nav ul').toggleClass('slideRightReturn');
});

back.addEventListener('click' , function(){
    $('.hamburger').toggleClass("is-active");
    $('nav ul').toggleClass('mobile-nav');
    
    this.classList.toggle('show');

    $('nav ul').toggleClass('slideRightReturn');
});

    $('.hamburger-black').on('click' , function(){
        $(this).toggleClass("is-active");
        $('nav ul').toggleClass('mobile-nav');
        
        back.classList.toggle('show');

        $('nav ul').toggleClass('slideRightReturn');
    });


    $('.read-more').on('click', function(){
        $('.more').addClass('boingInUp');
        $('.more').toggleClass('show');
        $(this).remove();
    });



var img = document.querySelectorAll('.project');
var caption = document.querySelectorAll('.project h5');


for(var i = 0; i < img.length; i++){
    img[i].addEventListener('mouseover', function(){
        this.firstElementChild.style.opacity = '1';

        this.children[1].classList.add('project-hover');
    });

    img[i].addEventListener('mouseout', function(){
        this.firstElementChild.style.opacity = '0';

        this.children[1].classList.remove('project-hover');
    });
}


