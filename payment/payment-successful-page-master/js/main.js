$(document).ready(function() {
  try {
    $(".customer-logos").slick({
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1000,
      arrows: false,
      dots: false,
      pauseOnHover: false,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 4
          }
        },
        {
          breakpoint: 520,
          settings: {
            slidesToShow: 3
          }
        }
      ]
    });
  } catch (error) {
    console.log("slick is not a function", error);
  }
});

/* End of slick script */

(function($) {
  $.fn.scrollingTo = function(opts) {
    var defaults = {
      animationTime: 1000,
      easing: "",
      callbackBeforeTransition: function() {},
      callbackAfterTransition: function() {}
    };

    var config = $.extend({}, defaults, opts);

    $(this).click(function(e) {
      var eventVal = e;
      e.preventDefault();

      var $section = $(document).find($(this).data("section"));
      if ($section.length < 1) {
        return false;
      }

      if ($("html, body").is(":animated")) {
        $("html, body").stop(true, true);
      }

      var scrollPos = $section.offset().top;

      if ($(window).scrollTop() == scrollPos) {
        return false;
      }

      config.callbackBeforeTransition(eventVal, $section);

      $("html, body").animate(
        {
          scrollTop: scrollPos + "px"
        },
        config.animationTime,
        config.easing,
        function() {
          config.callbackAfterTransition(eventVal, $section);
        }
      );
    });
  };
})(jQuery);

jQuery(document).ready(function() {
  "use strict";
  new WOW().init();

  (function() {
    jQuery(".smooth-scroll").scrollingTo();
  });
});

$(document).ready(function() {
  $(window).scroll(function() {
    if ($(window).scrollTop() > 50) {
      $(".navbar-brand a").css("color", "#fff");
      $("#top-bar").removeClass("animated-header");
    } else {
      $(".navbar-brand a").css("color", "inherit");
      $("#top-bar").addClass("animated-header");
    }
  });
});

// Click To Call
$(document).ready(function() {
  function IsMobileNumber(txtMobId) {
    var mob = /^[1-9]{1}[0-9]{9}$/;
    return mob.test(txtMobId);
  }
  $("#cl2call").click(function() {
    var teleduce_mobile = $("#cl2call_mobile").val();
    var teleduce_to_mobile = $("#cl2call_to_mobile").val();
    if (teleduce_mobile == "") {
      $("#cl2call_form_error")
        .attr("style", "")
        .html("Please enter <strong>Mobile number</strong>");
      $("#cl2call_form_error").show();
      $("#cl2call_mobile")
        .focus()
        .attr("style", "border-color:red");
      $(window).scrollTop($("#cl2call_form_error").offset().top);
      return false;
    } else {
      if (!IsMobileNumber(teleduce_mobile)) {
        $("#cl2call_form_error")
          .attr("style", "")
          .html("Please enter valid <strong>Mobile number</strong>");
        $("#cl2call_form_error").show();
        $("#cl2call_mobile")
          .focus()
          .attr("style", "border-color:red");
        $(window).scrollTop($("#cl2call_form_error").offset().top);
        return false;
      } else {
        $("#cl2call_form_error")
          .attr("style", "")
          .html("");
        $("#cl2call_form_error").hide();
        $("#cl2call_mobile").attr("style", "");
      }
    }
    call_latch_url =
      "https://teleduce.in/calllatch/partha/partha/" +
      teleduce_mobile +
      "/9036164750/8067335515/?async=true";

    try {
      var ajaxRequest = new XMLHttpRequest();
      ajaxRequest.onreadystatechange = function() {
        if (ajaxRequest.readyState == 4) {
          console.log(ajaxRequest.responseText);
          $("#cl2call_form_success")
            .attr("style", "")
            .html("Call Triggered Successfully");
          $(window).scrollTop($("#cl2call_form_success").offset().top);
          return false;
        }
      };
      // Production URL
      ajaxRequest.open("GET", call_latch_url, true);
      ajaxRequest.send(null);
    } catch (e) {
      console.log(e);
    }
  });
});

