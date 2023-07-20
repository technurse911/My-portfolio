$("document").ready(function(){


    $("#div1").accordion({
        animate: 1500,
        icons:{header:"ui-icon-caret-1-s", activeHeader:"ui-icon-caret-1-n"},
        event: "mouseover"
    })

    $(".btn").mouseover(function(){
        $(".btn").animate({
          "background-color": "white",
           "width": "80px"}, "1000"),
         $(".btn a").css({
            "color": "#F23D3D"
         })
    })

    $(".btn").mouseout(function(){
        $(".btn").animate({
        "background-color": "#F23D3D",
        "width": "100px"} ,"slow"),
        $(".btn a").css({
            "color": "white"
         })
        })


        
    $(".btn2").mouseover(function(){
        $(".btn2").animate({
          "background-color": "white",
         "width": "80px"}, "1000"),
         $(".btn2 a").css({
            "color": "#F23D3D"
         })
    })

    $(".btn2").mouseout(function(){
        $(".btn2").animate({
        "background-color": "#F23D3D",
        "width": "100px"} ,"slow"),
        $(".btn2 a").css({
            "color": "white"
         })
        })
      });
