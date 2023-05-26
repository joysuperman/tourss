$(document).ready(function() {
	cdn = "https://d2woyw6vp5g0b2.cloudfront.net/";
	$("img").each(function() {
	  $(this).attr("src", cdn + $(this).attr("src"));
	});
  });
  $(document).ready(function() {
	$(".hover").hover(
	  function() {
		$(this).addClass("flip");
	  },
	  function() {
		$(this).removeClass("flip");
	  }
	);
  });
  $(document).ready(function() {
	(function(h, o, t, j, a, r) {
	  h.hj =
		h.hj ||
		function() {
		  (h.hj.q = h.hj.q || []).push(arguments);
		};
	  h._hjSettings = { hjid: 821992, hjsv: 6 };
	  a = o.getElementsByTagName("head")[0];
	  r = o.createElement("script");
	  r.async = 1;
	  r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
	  a.appendChild(r);
	})(window, document, "https://static.hotjar.com/c/hotjar-", ".js?sv=");
  });

  //Webinar Popup Script
  $(window).on('load',setTimeout(function(){
	$('#exampleModal').modal('show');}, 2000));

function popupclose(){
	  $("#exampleModal").modal('hide');
	}
  