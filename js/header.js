$(function(){
    $("#x").click(function(){
     $("#y").slideToggle();
    });
});
   
   

$(window).resize(function(){
    if(window.innerWidth<=1099){
        $('#y').hide();
    }
});

