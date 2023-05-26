const nav = document.getElementById('navbar');
const scrollHandle=()=>{
    if(nav)
    window.scrollY>25?nav.classList.add("navShadow"):nav.classList.remove("navShadow");
}
window.addEventListener("scroll",scrollHandle)
        $(document).ready(function(){
            $('.customer-logos').slick({
              slidesToShow: 6,
              slidesToScroll: 1,
              autoplay: true,
              autoplaySpeed: 1000,
              arrows: false,
              dots: false,
              pauseOnHover: false,
              responsive: [{
                breakpoint: 768,
                settings: {
                  slidesToShow: 4
                }
              }, {
                breakpoint: 520,
                settings: {
                  slidesToShow: 3
                }
              }]
            });
          });
      /* Fade in fade out testimonial */
     
      $(document).ready(function() {
        $("div#testiCA").removeClass("hidden");
    });

      $("#slideshow > div:gt(0)").hide();

      setInterval(function() {
        $('#slideshow > div:first')
          .fadeOut(1000)
          .next()
          .fadeIn(1000)
          .end()
          .appendTo('#slideshow');
      }, 3000);




    /*   $('.slideshow').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows:false,
      }); */

      /* scroll to doc */

      function autoScrollTo(el) {
        if(el!=='section3')
       { var top = $("#" + el).offset().top;
        $("html, body").animate({ scrollTop: top }, 1000);}
    }

    const getFocus=() =>{
      var a = document.getElementById("firstName");
      a.focus();
      var top = $("#" + 'section3').offset().top;
      if(window.innerWidth<1250)
      {
        top=top+700
      }
      $("html, body").animate({ scrollTop: top}, 1000);
    }
    