$(document).ready(function () {
  $("nav a.mobile_menu").on("click", () => {
    let currentNavHeight = $("nav").height();
    if (currentNavHeight < 5) {
      let newNavHeight = $("nav > ul").height() + 15;
      $("nav").animate({ height: newNavHeight + "px" }, 750);
    } else {
      $("nav").animate({ height: "0px" }, 750, () => {
        $(this).removeAttr("style");
      });
    }
  });
  $(window).resize(() => {
    if ($(this).width() > 625) {
      $("nav").removeAttr("style");
    }
  });
});
