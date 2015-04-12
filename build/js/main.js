
/*
do ->
	alert "Hello!!!"
 */
var checkParallax, init, killParallax, resized, setParallax, setScrollParams, windowWidth;

windowWidth = 0;

init = function() {
  setScrollParams();
  checkParallax();
  $(window).on("debouncedresize", function(event) {
    return resized();
  });
};

resized = function() {
  if ($(window).width() !== windowWidth) {
    checkParallax();
    windowWidth = $(window).width();
  }
};

checkParallax = function() {
  if (Modernizr.touch || Modernizr.mq('only screen and (max-width: 768px)')) {
    killParallax();
  } else {
    setParallax();
  }
};

setParallax = function() {
  var s;
  s = skrollr.init({
    smoothScrolling: false
  });
};

killParallax = function() {
  skrollr.init().destroy();
};

setScrollParams = function() {
  $("#feature-1 .feature-image .parallax-bg").attr("data-50-top", "transform:translate3d(0px, 0px, 0px)");
  $("#feature-1 .feature-image .parallax-bg").attr("data-top-bottom", "transform:translate3d(0px, 100px, 0px)");
  $("#feature-2 .feature-image .parallax-bg").attr("data-bottom-top", "transform:translate3d(0px, -200px, 0px)");
  $("#feature-2 .feature-image .parallax-bg").attr("data-top-bottom", "transform:translate3d(0px, 0px, 0px)");
  $("#feature-3 .feature-image .parallax-bg").attr("data-bottom-top", "transform:translate3d(0px, -200px, 0px)");
  $("#feature-3 .feature-image .parallax-bg").attr("data-top-bottom", "transform:translate3d(0px, 0px, 0px)");
  $("#feature-4 .feature-image .parallax-bg").attr("data-bottom-top", "transform:translate3d(0px, -200px, 0px)");
  $("#feature-4 .feature-image .parallax-bg").attr("data-top-bottom", "transform:translate3d(0px, 0px, 0px)");
};

$(document).ready(function() {
  var headerShowing, i, jobTitles, lst;
  init();
  headerShowing = true;
  lst = 0;
  $(window).scroll(function(event) {
    var st;
    st = $(this).scrollTop();
    if (st > lst && st > 200) {
      if (headerShowing) {
        $('header').animate({
          top: "-50"
        }, 250);
        headerShowing = false;
      }
    } else {
      if (!headerShowing) {
        $('header').stop(true, false);
        $('header').animate({
          top: "0"
        }, 250);
        headerShowing = true;
      }
    }
    lst = st;
  });
  i = 0;
  jobTitles = ['Designer', 'Developer', 'Producer', 'Creative Lead', 'Technical Lead'];
  $('.text-roller').append("<div class='rolling-text rolling-text-1'>" + jobTitles[0] + "</div><div class='rolling-text rolling-text-2'></div>");
  return setInterval(function() {
    $('.rolling-text-2').html(jobTitles[i++]);
    if (i >= jobTitles.length) {
      i = 0;
    }
    $('.rolling-text-1').html(jobTitles[i]);
    $('.rolling-text-1').css("top", "-=40");
    $('.rolling-text-1').animate({
      top: "0"
    }, 500);
    $('.rolling-text-2').css("top", "0");
    return $('.rolling-text-2').animate({
      top: "40"
    }, 500);
  }, 2000);
});

//# sourceMappingURL=data:application/json;base64,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QSxXQUFBLENBQVksU0FBQSxHQUFBO0FBQ1gsSUFBQSxDQUFBLENBQUUsaUJBQUYsQ0FBb0IsQ0FBQyxJQUFyQixDQUEwQixTQUFVLENBQUEsQ0FBQSxFQUFBLENBQXBDLENBQUEsQ0FBQTtBQUNBLElBQUEsSUFBRyxDQUFBLElBQUssU0FBUyxDQUFDLE1BQWxCO0FBQ0MsTUFBQSxDQUFBLEdBQUUsQ0FBRixDQUREO0tBREE7QUFBQSxJQUdBLENBQUEsQ0FBRSxpQkFBRixDQUFvQixDQUFDLElBQXJCLENBQTBCLFNBQVUsQ0FBQSxDQUFBLENBQXBDLENBSEEsQ0FBQTtBQUFBLElBS0EsQ0FBQSxDQUFFLGlCQUFGLENBQW9CLENBQUMsR0FBckIsQ0FBeUIsS0FBekIsRUFBZ0MsTUFBaEMsQ0FMQSxDQUFBO0FBQUEsSUFNQSxDQUFBLENBQUUsaUJBQUYsQ0FBb0IsQ0FBQyxPQUFyQixDQUE2QjtBQUFBLE1BQUMsR0FBQSxFQUFLLEdBQU47S0FBN0IsRUFBeUMsR0FBekMsQ0FOQSxDQUFBO0FBQUEsSUFRQSxDQUFBLENBQUUsaUJBQUYsQ0FBb0IsQ0FBQyxHQUFyQixDQUF5QixLQUF6QixFQUFnQyxHQUFoQyxDQVJBLENBQUE7V0FTQSxDQUFBLENBQUUsaUJBQUYsQ0FBb0IsQ0FBQyxPQUFyQixDQUE2QjtBQUFBLE1BQUMsR0FBQSxFQUFLLElBQU47S0FBN0IsRUFBMEMsR0FBMUMsRUFWVztFQUFBLENBQVosRUFXRSxJQVhGLEVBbkNpQjtBQUFBLENBQWxCLENBekRBLENBQUEiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyIsInNvdXJjZXNDb250ZW50IjpbIiMjI1xuZG8gLT5cblx0YWxlcnQgXCJIZWxsbyEhIVwiXG4jIyNcblxud2luZG93V2lkdGg9MFxuXG5pbml0ID0gKCkgLT5cblx0c2V0U2Nyb2xsUGFyYW1zKClcblx0Y2hlY2tQYXJhbGxheCgpXG5cblx0JCh3aW5kb3cpLm9uKFwiZGVib3VuY2VkcmVzaXplXCIsIChldmVudCktPlxuXHRcdHJlc2l6ZWQoKVxuXHQgKVxuXG5cdHJldHVyblxuXG5cbnJlc2l6ZWQgPSAoKSAtPlxuXHRpZiAkKHdpbmRvdykud2lkdGgoKSAhPSB3aW5kb3dXaWR0aFxuXHRcdGNoZWNrUGFyYWxsYXgoKVxuXHRcdHdpbmRvd1dpZHRoID0gJCh3aW5kb3cpLndpZHRoKClcblx0cmV0dXJuXG5cblxuY2hlY2tQYXJhbGxheCA9ICgpIC0+XG5cdGlmIE1vZGVybml6ci50b3VjaCBvciBNb2Rlcm5penIubXEoJ29ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCknKVxuICAgICAgICBraWxsUGFyYWxsYXgoKVxuICAgIGVsc2VcbiAgICBcdHNldFBhcmFsbGF4KClcbiAgICByZXR1cm5cbiAgXG5cbnNldFBhcmFsbGF4ID0gKCkgLT5cblx0cyA9IHNrcm9sbHIuaW5pdCBzbW9vdGhTY3JvbGxpbmc6IGZhbHNlXG5cdHJldHVyblxuXG5raWxsUGFyYWxsYXggPSAoKSAtPlxuXHRza3JvbGxyLmluaXQoKS5kZXN0cm95KClcblx0cmV0dXJuXG5cbnNldFNjcm9sbFBhcmFtcyA9ICgpIC0+XG5cdFxuXHQkKFwiI2ZlYXR1cmUtMSAuZmVhdHVyZS1pbWFnZSAucGFyYWxsYXgtYmdcIikuYXR0cihcImRhdGEtNTAtdG9wXCIsIFwidHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDBweCwgMHB4LCAwcHgpXCIpO1xuXHQkKFwiI2ZlYXR1cmUtMSAuZmVhdHVyZS1pbWFnZSAucGFyYWxsYXgtYmdcIikuYXR0cihcImRhdGEtdG9wLWJvdHRvbVwiLCBcInRyYW5zZm9ybTp0cmFuc2xhdGUzZCgwcHgsIDEwMHB4LCAwcHgpXCIpO1xuXG5cdCQoXCIjZmVhdHVyZS0yIC5mZWF0dXJlLWltYWdlIC5wYXJhbGxheC1iZ1wiKS5hdHRyKFwiZGF0YS1ib3R0b20tdG9wXCIsIFwidHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDBweCwgLTIwMHB4LCAwcHgpXCIpO1xuXHQkKFwiI2ZlYXR1cmUtMiAuZmVhdHVyZS1pbWFnZSAucGFyYWxsYXgtYmdcIikuYXR0cihcImRhdGEtdG9wLWJvdHRvbVwiLCBcInRyYW5zZm9ybTp0cmFuc2xhdGUzZCgwcHgsIDBweCwgMHB4KVwiKTtcblxuXHQkKFwiI2ZlYXR1cmUtMyAuZmVhdHVyZS1pbWFnZSAucGFyYWxsYXgtYmdcIikuYXR0cihcImRhdGEtYm90dG9tLXRvcFwiLCBcInRyYW5zZm9ybTp0cmFuc2xhdGUzZCgwcHgsIC0yMDBweCwgMHB4KVwiKTtcblx0JChcIiNmZWF0dXJlLTMgLmZlYXR1cmUtaW1hZ2UgLnBhcmFsbGF4LWJnXCIpLmF0dHIoXCJkYXRhLXRvcC1ib3R0b21cIiwgXCJ0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMHB4LCAwcHgsIDBweClcIik7XG5cblx0JChcIiNmZWF0dXJlLTQgLmZlYXR1cmUtaW1hZ2UgLnBhcmFsbGF4LWJnXCIpLmF0dHIoXCJkYXRhLWJvdHRvbS10b3BcIiwgXCJ0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMHB4LCAtMjAwcHgsIDBweClcIik7XG5cdCQoXCIjZmVhdHVyZS00IC5mZWF0dXJlLWltYWdlIC5wYXJhbGxheC1iZ1wiKS5hdHRyKFwiZGF0YS10b3AtYm90dG9tXCIsIFwidHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDBweCwgMHB4LCAwcHgpXCIpO1xuXG5cdHJldHVyblxuXHRcbiQoZG9jdW1lbnQpLnJlYWR5IC0+XG5cblx0aW5pdCgpXG5cblx0aGVhZGVyU2hvd2luZyA9IHRydWVcblxuXHRsc3QgPSAwXG5cdCQod2luZG93KS5zY3JvbGwgKGV2ZW50KS0+XG5cdFx0c3QgPSAkKHRoaXMpLnNjcm9sbFRvcCgpXG5cdFx0XG5cdFx0aWYgc3QgPiBsc3QgYW5kIHN0ID4gMjAwXG5cdFx0XHRpZiBoZWFkZXJTaG93aW5nXG5cdFx0XHRcdCQoJ2hlYWRlcicpLmFuaW1hdGUoe3RvcDogXCItNTBcIn0sIDI1MClcblx0XHRcdFx0aGVhZGVyU2hvd2luZyA9IGZhbHNlXG5cdFx0ZWxzZVxuXHRcdFx0aWYgIWhlYWRlclNob3dpbmdcblx0XHRcdFx0JCgnaGVhZGVyJykuc3RvcCh0cnVlLCBmYWxzZSlcblx0XHRcdFx0JCgnaGVhZGVyJykuYW5pbWF0ZSh7dG9wOiBcIjBcIn0sIDI1MClcblx0XHRcdFx0aGVhZGVyU2hvd2luZyA9IHRydWVcblx0XHRsc3QgPSBzdFxuXG5cblx0XHRcdFxuXHRcdHJldHVyblxuXG5cblxuXHQjIFNldCB1cCB0aGUgcm9sbGluZyB0ZXh0IHdpdGggdGhlIGpvYiB0aXRsZXNcblxuXHRpPTBcblxuXHRqb2JUaXRsZXMgPSBbJ0Rlc2lnbmVyJywgJ0RldmVsb3BlcicsICdQcm9kdWNlcicsICdDcmVhdGl2ZSBMZWFkJywgJ1RlY2huaWNhbCBMZWFkJ11cblxuXHQkKCcudGV4dC1yb2xsZXInKS5hcHBlbmQoXCI8ZGl2IGNsYXNzPSdyb2xsaW5nLXRleHQgcm9sbGluZy10ZXh0LTEnPlwiK2pvYlRpdGxlc1swXStcIjwvZGl2PjxkaXYgY2xhc3M9J3JvbGxpbmctdGV4dCByb2xsaW5nLXRleHQtMic+PC9kaXY+XCIpXG5cblx0c2V0SW50ZXJ2YWwgLT5cblx0XHQkKCcucm9sbGluZy10ZXh0LTInKS5odG1sKGpvYlRpdGxlc1tpKytdKVxuXHRcdGlmIGkgPj0gam9iVGl0bGVzLmxlbmd0aFxuXHRcdFx0aT0wXG5cdFx0JCgnLnJvbGxpbmctdGV4dC0xJykuaHRtbChqb2JUaXRsZXNbaV0pXG5cblx0XHQkKCcucm9sbGluZy10ZXh0LTEnKS5jc3MoXCJ0b3BcIiwgXCItPTQwXCIpXG5cdFx0JCgnLnJvbGxpbmctdGV4dC0xJykuYW5pbWF0ZSh7dG9wOiBcIjBcIn0sIDUwMClcblxuXHRcdCQoJy5yb2xsaW5nLXRleHQtMicpLmNzcyhcInRvcFwiLCBcIjBcIilcblx0XHQkKCcucm9sbGluZy10ZXh0LTInKS5hbmltYXRlKHt0b3A6IFwiNDBcIn0sIDUwMClcblx0LCAyMDAwXG4iXX0=