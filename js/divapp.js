$(document).ready(function(){


  $(document).on("click", "li.international"),    function(){

    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $("#slide-down").slideUp();
    } else {
      $("#primary-nav li").removeClass("active");
      $(this).addClass("active");

    $("#international-drop").show();
    $("#politics-drop, #business-drop, #culture-drop, #technology-drop, #blogs-drop").hide();
    $("#slide-down").slideDown();
    //$("this").addClass(active);
  };
  $(document).on("click", "li.politics"), function(){

    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $("#slide-down").slideUp();
    } else {
      $("#primary-nav li").removeClass("active");
      $(this).addClass("active");

    $("#politics-drop").show();
    $("#international-drop, #business-drop, #culture-drop, #technology-drop, #blogs-drop").hide();
    $("#slide-down").slideDown();
    //$("this").addClass(active);
  };
  $(document).on("click", "li.business"), function(){

    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $("#slide-down").slideUp();
    } else {
      $("#primary-nav li").removeClass("active");
      $(this).addClass("active");

      $("#business-drop").show();
      $("#politics-drop, #international, #culture-drop, #technology-drop, #blogs-drop").hide();
      $("#slide-down").slideDown();
      //$("this").addClass(active);
  };
  $(document).on("click", "li.culture"), function(){

    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $("#slide-down").slideUp();
    } else {
      $("#primary-nav li").removeClass("active");
      $(this).addClass("active");

      $("#iculture-drop").show();
      $("#politics-drop, #business-drop, #international-drop, #technology-drop, #blogs-drop").hide();
      $("#slide-down").slideDown();
      //$("this").addClass(active);
  };
  $(document).on("click", "li.technology"), function(){

    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $("#slide-down").slideUp();
    } else {
      $("#primary-nav li").removeClass("active");
      $(this).addClass("active");

      $("#technology-drop").show();
      $("#politics-drop, #business-drop, #culture-drop, #international-drop, #blogs-drop").hide();
      $("#slide-down").slideDown();
      //$("this").addClass(active);
  };
  $(document).on("click", "li.blogs"), function(){

    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $("#slide-down").slideUp();
    } else {
      $("#primary-nav li").removeClass("active");
      $(this).addClass("active");

      $("#blogs-drop").show();
      $("#politics-drop, #business-drop, #culture-drop, #technology-drop, #international-drop").hide();
      $("#slide-down").slideDown();
      //$("this").addClass(active);
  };
//.hasClass .removeClass .slideUp and if else for task 3
// slide down the entire content sections

  //$("slide-down").slideDown();
  //check if the li clicked on hass class "active"

});
