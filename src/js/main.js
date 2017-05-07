import $ from "jquery";

$("a").addClass("test")
$(".gif").addClass("off")
$(".auth-image").hover(
  function () {
    $(".auth-image").toggleClass("off");
  });

$("#mute").click(
  function () {
      console.log($("#player-audio")[0].muted);
      if ($("#player-audio")[0].muted === true) {
          $("#player-audio")[0].prop('muted', false);
        } else { $("#player-audio").prop('muted', true); }
        $('#mute').prop('disabled', true);
      });
