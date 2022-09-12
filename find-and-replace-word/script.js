$("#tools").click(function() {
    $('html,body').animate({
        scrollTop: $("h3").offset().top},
        'slow');
});

$("#intro").click(function(){
    $(".introp").slideDown("slow");
});

$("#intro").click(function() {
    $('html,body').animate({
        scrollTop: $("#intro").offset().top},
        'slow');
});

var matchcase = "gi";

$(document).ready(function(){
        $("#casebtn").click(function(){
            if($(this).prop("checked") == true){
                matchcase = "g";
            }
            else if($(this).prop("checked") == false){
                matchcase = "gi";
            }

            var inputtext = $("#inputtext").val();
  var findthis = $("#findthis").val();
  var replacewith = $("#replacewith").val();
  var outputtext = inputtext.replace(new RegExp(findthis, matchcase), replacewith);
  $("#outputtext").val(outputtext);
        });
    });

$("#inputtext").val(localStorage.inputtext);
$("#findthis").val(localStorage.findthis);
$("#replacewith").val(localStorage.replacewith);
$("#outputtext").val(localStorage.outputtext);

$("#replacewith, #inputtext, #findthis").keyup(function(){
  var inputtext = $("#inputtext").val();
  var findthis = $("#findthis").val();
  var replacewith = $("#replacewith").val();
  var outputtext = inputtext.replace(new RegExp(findthis, matchcase), replacewith);
  $("#outputtext").val(outputtext);

  localStorage.setItem("inputtext", inputtext);
  localStorage.setItem("findthis", findthis);
  localStorage.setItem("replacewith", replacewith);
  localStorage.setItem("outputtext", outputtext);
});