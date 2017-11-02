$(document).ready(function(){
  $(".international").on("click", function(event){
    event.preventDefault();

    $("#international-drop").show();
    $("#politics-drop").hide();
    $("#business-drop").hide();
    $("#technology-drop").hide();
    $("#culture-drop").hide();
    $("#blogs-drop").hide();

    if ($(this).hasClass("active")) {
      $("#slide-down").slideUp();
      $(this).removeClass("active");
    } else {
      $("#slide-down").slideDown();
      $(this).addClass("active");
    }
  });
});

$(document).ready(function(){
  $(".politics").on("click", function(event){
    event.preventDefault();

    $("#international-drop").hide();
    $("#politics-drop").show();
    $("#business-drop").hide();
    $("#technology-drop").hide();
    $("#culture-drop").hide();
    $("#blogs-drop").hide();

    if ($(this).hasClass("active")) {
        $("#slide-down").slideUp();
          $(this).removeClass("active");
        } else {
          $("#slide-down").slideDown();
          $(this).addClass("active");
    }
  });
});

$(document).ready(function(){
  $(".business").on("click", function(event){
    event.preventDefault();

    $("#international-drop").hide();
    $("#politics-drop").hide();
    $("#business-drop").show();
    $("#technology-drop").hide();
    $("#culture-drop").hide();
    $("#blogs-drop").hide();

  if ($(this).hasClass("active")) {
      $("#slide-down").slideUp();
      $(this).removeClass("active");
    } else {
      $("#slide-down").slideDown();
      $(this).addClass("active");
    }
  });
});

$(document).ready(function(){
  $(".technology").on("click", function(event){
    event.preventDefault();

    $("#international-drop").hide();
    $("#politics-drop").hide();
    $("#business-drop").hide();
    $("#technology-drop").show();
    $("#culture-drop").hide();
    $("#blogs-drop").hide();

    if ($(this).hasClass("active")) {
        $("#slide-down").slideUp();
          $(this).removeClass("active");
        } else {
          $("#slide-down").slideDown();
          $(this).addClass("active");
    }
  });
});

$(document).ready(function(){
  $(".culture").on("click", function(event){
    event.preventDefault();

    $("#international-drop").hide();
    $("#politics-drop").hide();
    $("#business-drop").hide();
    $("#technology-drop").hide();
    $("#culture-drop").show();
    $("#blogs-drop").hide();

    if ($(this).hasClass("active")) {
        $("#slide-down").slideUp();
          $(this).removeClass("active");
        } else {
          $("#slide-down").slideDown();
          $(this).addClass("active");
    }
  });
});

$(document).ready(function(){
  $(".blogs").on("click", function(event){
    event.preventDefault();

    $("#international-drop").hide();
    $("#politics-drop").hide();
    $("#business-drop").hide();
    $("#technology-drop").hide();
    $("#culture-drop").hide();
    $("#blogs-drop").show();

    if ($(this).hasClass("active")) {
        $("#slide-down").slideUp();
          $(this).removeClass("active");
        } else {
          $("#slide-down").slideDown();
          $(this).addClass("active");
    }
  });
});
