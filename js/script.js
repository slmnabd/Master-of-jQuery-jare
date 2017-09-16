function animationintro() {
  $("#text span").velocity("transition.slideLeftIn",{
    stagger: 100,
    complete: function(){
      animtionbuttomstart();
    }
  });
}

function animtionbuttomstart() {
  $("#start").velocity("transition.slideUpIn")
             .mouseenter(function(){
               $(this).velocity({width: 100});
             })
             .mouseleave(function(){
               $(this).velocity({width: 125});
             });
}

function animationintroout(){
  $("#start").velocity("transition.whirlOut",{
    stagger: 100,
    complete: function(){
      $("#text").velocity({"font-size" : "20px", "top" : "95%"},{
        duration : 1000,
        complete: function() {
          callmenu();
          $("#menu ul li a[href='what_we_do']").trigger("click");
        }
      });
    }
  });
}

function callmenu() {
  $("#menu ul li").velocity("transition.slideLeftIn",{
    stagger: 250
  });

  $("#menu ul li a").click(function(event) {
    event.preventDefault();
    $(this).parent("li").addClass("active").siblings().removeClass("active");

    var hrefstring = $(this).attr("href");
    $("#" + hrefstring).show();
    window[hrefstring]();
  });
}

function what_we_do() {
  $("#what_we_do img").velocity("transition.flipYIn",{duration:1500});
  $("#what_we_do .title").velocity("transition.slideUpIn",{duration:1500});
  $("#what_we_do div").velocity("transition.slideDownIn",{duration:1500});
}

$(document).ready(function(){
  animationintro();
});
