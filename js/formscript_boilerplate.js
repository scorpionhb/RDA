$(document).ready(function(){
        $("ul li").hover(
            function(){
                $(this).addClass("active");
            },
            function(){
                $(this).removeClass("active");
            }
        ); 
        $("a").hover(
            function(){
                $(this).addClass("active");
            },
            function(){
                $(this).removeClass("active");
            }
        );  
});

