$(function() {
  $(".breadcrumb-button").on("click",function() {
    // toggle underline
    $("span.filter-active").removeClass("filter-active");
    $(this).find("span").addClass("filter-active");

    if($(this).hasClass( "evento-ano-2017" )){
      $(".evento-item").show();
    } else {
      $(".evento-item").hide();
      $("."+$(this).attr('class').match(/evento\-.*/)[0]).show();
    }
  });
});
