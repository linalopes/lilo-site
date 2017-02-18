$(function() {
  $(".breadcrumb-button").on("click",function() {
    // toggle underline
    $(".breadcrumb-button span").css("border-bottom", "none");
    $(this).find("span").css("border-bottom", "3px #ff0080 solid");

    if($(this).hasClass( "evento-ano-2017" )){
      $(".evento-item").show();
    } else {
      //$(".evento-item").hide();
      $(".evento-item").css("display", "none");
      $("."+$(this).attr('class').match(/evento\-.*/)[0]).show();
    }
  });
});
