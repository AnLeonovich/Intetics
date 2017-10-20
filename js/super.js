$(document).ready(function(){
	document.getElementById("user_name").innerHTML = localStorage.getItem("username");
  
  $(".images__line_item-img-picture").click(function(){
      var img = $(this);  
    var src = img.attr('src'); 
    $("body").append("<div class='popup'>"+ 
             "<div class='popup_bg'></div>"+ 
             "<img src='"+src+"' class='popup_img' />"+ 
             "</div>"); 
    $(".popup").fadeIn(400); 
    $(".popup_bg").click(function(){       
      $(".popup").fadeOut(400); 
      setTimeout(function() { 
        $(".popup").remove(); 
      }, 400);
    });
  });
});

function addpicture(){
    document.getElementById("addpic").style.display="block";
}

function publish(){
	document.getElementById("addpic").style.display="none";
}

