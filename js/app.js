let screenHeight = $(window).height();
$(window).scroll(function () {
    let currentPosition = $(this).scrollTop();
    if(currentPosition >= screenHeight-100){
        $('.site-nav').addClass("nav_fixed");
    }
    else {
        $('.site-nav').removeClass("nav_fixed");
    }
});

// filterObjects("pathologist");

// function filterObjects(c){
//     let x, i;
//     x = document.getElementsByClassName("box");
//     if(c === "all") c = "";
//     for(i=0;i<x.length;i++){
//         removeClass(x[i], "show");
//         if(x[i].className.indexOf(c) > -1) addClass(x[i], "show")
//     }
// }

function addClass(element,name){
    let i,arr1,arr2;
    arr1 = element.className.split(" ")
    arr2 = name.split(" ");
    for(i=0;i<arr2.length;i++){
        if(arr1.indexOf(arr2[i]) === -1){
            element.className += " " + arr2[i];
        }
    }
}

function removeClass(element, name){
    let i,arr1,arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for(i=0; i<arr2.length;i++){
        while(arr1.indexOf(arr2[i]) > -1){
            arr1.splice(arr1.indexOf(arr2[i]),1)
        }
    }
    element.className = arr1.join(" ");
}
$("#button .filterButton").click(function (){
    $(this).addClass("active").siblings().removeClass("active");
});

const toTop = document.querySelector(".scroll_to_top");
window.addEventListener("scroll", ()=> {
    if(window.pageYOffset > 100){
        toTop.classList.add("scrollTop");
    }
    else{
        toTop.classList.remove("scrollTop");
    }
});

$(".navbar-toggler").click(function (){
    let result = $(".navbar-collapse").hasClass("show");
    console.log(result);
    if (result){
        $(".menu-icon").removeClass("fa-close").addClass("fa-bars");
    }else{
        $(".menu-icon").removeClass("fa-bars").addClass("fa-close");
    }
});

new WOW().init();

$(window).on("load",function (){
    $(".loader-container").fadeOut(500,function (){
        $(this).remove();
    });
});


