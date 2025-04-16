$(document).ready(function () {

    //txt_slide
    var txt= $("#ts_mid div");
    var cnt=0;
    var max=txt.length-1;
    setInterval(next ,1500);
    
    function next(){
        if(txt.is(":animated")) return false;
        $(txt[cnt]).animate({"top":"-100%"}).siblings().css({"top":"100%"});
        cnt++;
        if(cnt>max) cnt=0;
        $(txt[cnt]).animate({"top":0});
        }

    //sign_in_popup
    function open(){
        $('#pop').css({"display":"block"});
    
        $('#semi_wrap').css({"position":"sticky"});
        $('section').css({"margin-top":"0"});
    }
    $(".sign_in").on("click",open);
    function close(){
        $('#pop').css({"display":"none"});
        $('#semi_wrap').css({"position":"fixed"});
        $('section').css({"margin-top":"101px"});
    }
    $("#close").on("click",close);

    $('input[type="checkbox"][name="user_category"]').click(function(){

        if($(this).prop('checked')){
           $('input[type="checkbox"][name="user_category"]').prop('checked',false);
           $(this).prop('checked',true);
          }
    });

    /*product_detail*/
    var detail_main = document.querySelector(".detail_main img");
    var detail_sub = document.querySelector(".detail_sub");

    // var ping = document.querySelectorAll(".de_sub img");

    detail_sub.onclick = function(e){
        // console.log(event.target);
        if(e.target.getName == "DIV"){
            return;
        }
        detail_main.src = e.target.src;
    }
    // ping.onclick = function(){
    //     if(ping.classList.contains("pr_ping")){
    //         ping.style.width = "50px";
    //         ping.style.height = "50px";
    //         ping.style.border = "5px solid black";
    //     }else{
    //         ping.style.width = "50px";
    //         ping.style.height = "50px";
    //         ping.style.border = "none";
    //     }
    //     ping.classList.toggle("pr_ping");
    // }
});
