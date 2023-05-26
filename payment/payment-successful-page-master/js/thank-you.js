$(document).ready(function() {
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
  });
  
  (function($) {
    $.fn.changeWords = function(options) {
      var settings = $.extend(
        {
          time: 1500,
          animate: "zoomIn",
          selector: "span",
          repeat: true
        },
        options
      );
      var wordCount = $(settings.selector, this).length;
      var words = $(settings.selector, this);
      words
        .filter(function() {
          return $(this).attr("data-id") != "1";
        })
        .css("display", "none");
      var count = 1;
      var changeThisWord = setInterval(function() {
        ++count;
        var wordOrder = count;
        words
          .filter(function() {
            return $(this).attr("data-id") == wordOrder;
          })
          .addClass("animated " + settings.animate)
          .css("display", "inline-block");
        words
          .filter(function() {
            return $(this).attr("data-id") != wordOrder;
          })
          .css("display", "none")
          .removeClass();
        if (count == wordCount) {
          count = 0;
        }
        if (count == 0 && settings.repeat != true) {
          clearInterval(changeThisWord);
        }
      }, settings.time);
    };
  })(jQuery);
  
  /* schedule a demo script */
  $(document).ready(function() {
    function isEmail(email) {
      var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      return regex.test(email);
    }
    function IsMobileNumber(txtMobId) {
      var mob = /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/;
      return mob.test(txtMobId);
    }
    $("#trial_form_submit").click(function() {
      $(this).attr("disabled", true);
      $("#form_success")
        .attr("style", "display:none")
        .html("");
      var to_list = [
        { email_id: "marketing@corefactors.in", name: "Corefactors Marketing" },
        { email_id: "nagarjunan.d@corefactors.in", name: "Naga" }
      ];
      var accname = $("#firstname").val();
      var accemail = $("#email").val();
      var accmobile = $("#mobile").val();
      var acccompany = $("#company_name").val();
      if (accname == "") {
    //    $("#form_error")
      //    .html("Please enter your <strong>Name</strong>")
       //   .attr("style", "");
        $("#firstname")
          .focus()
          .attr("style", "border-color:red");
        $(this).attr("disabled", false);
       // 		$(window).scrollTop($('#form_error').offset().top);
    //    $("html, body").animate(
    //      {
    //        scrollTop: $("#form_error").offset().top
      //    },
     //     100
      //  );
        return false;
      } else {
        //$("#form_error").html("").css("display","none");
        $("#firstname").attr("style", "");
      }
      if (accemail == "") {
      //  $("#form_error")
    //      .html("Please enter your <strong>Email</strong>")
      //    .attr("style", "");
        $("#email")
          .focus()
          .attr("style", "border-color:red");
        $(this).attr("disabled", false);
      //  		$(window).scrollTop($('#form_error').offset().top);
    /*    $("html, body").animate(
          {
            scrollTop: $("#form_error").offset().top
          },
          100
        );*/
        return false;
      } else {
        if (!isEmail(accemail)) {
      //    $("#form_error")
      //      .attr("style", "")
      //      .html("Please enter valid <strong>Email</strong>");
          $("#email")
            .focus()
            .attr("style", "border-color:red");
          $(this).attr("disabled", false);
      //    $("html, body").animate(
      //      {
      //        scrollTop: $("#form_error").offset().top
       //     },
       //     100
      //    );
          return false;
        } else {
          $("#email").attr("style", "");
        }
      }
      if (accmobile == "") {
     //   $("#form_error")
    //      .attr("style", "")
     //     .html("Please enter your <strong>Mobile</strong>");
    //    $("#form_success")
     //     .attr("style", "display:none")
      //    .html("");
        $("#mobile")
          .focus()
          .attr("style", "border-color:red");
        $(this).attr("disabled", false);
   //     $("html, body").animate(
     //     {
     //       scrollTop: $("#trial_form_submit").offset().top
     //     },
     //     100
     //   );
        return false;
      } else {
        if (!IsMobileNumber(accmobile)) {
     //     $("#form_success")
     //       .attr("style", "display:none")
     //       .html("");
      //    $("#form_error")
      //      .attr("style", "")
      //      .html("Please enter valid <strong>Mobile</strong>");
          $("#mobile")
            .focus()
            .attr("style", "border-color:red");
          $(this).attr("disabled", false);
          //		$(window).scrollTop($('#form_error').offset().top);
     //     $("html, body").animate(
      //      {
      //        scrollTop: $("#form_error").offset().top
      //      },
      //      100
      //    );
          return false;
        } else {
          $("#mobile").attr("style", "");
        }
      }
      if (acccompany == "") {
      //  $("#form_error")
      //    .html("Please enter <strong>Company Name</strong>")
      //    .attr("style", "");
     //   $("#form_success")
      //    .attr("style", "display:none")
      //    .html("");
        $("#company_name")
          .focus()
          .attr("style", "border-color:red");
        $(this).attr("disabled", false);
        //		$(window).scrollTop($('#form_error').offset().top);
    //    $("html, body").animate(
     //     {
     //       scrollTop: $("#form_error").offset().top
     //     },
     //     100
     //   );
        return false;
      } else {
        //$("#form_error").html("").css("display","none");
        $("#company_name").attr("style", "");
      }
  
      if (!$("#check-box").prop("checked")) {
        alert("Kindly agree the terms and conditions");
        $(this).attr("disabled", false);
        return false;
      }
  
      htmlcontent =
        '<html><head><title></title></head><body><p style="text-align: center;"><img alt="" src="//teleduce.in/media/sendy_email_template/logo-blue_1.png" style="width: 250px; height: 58px;" /></p><div style="background:#eee;border:1px solid #ccc;padding:5px 10px;">';
      htmlcontent +=
        '<p><span style="font-size:16px;"><kbd><samp><span style="font-family:times new roman;"><strong>Name &nbsp; &nbsp; :</strong>&nbsp;' +
        accname +
        '</span></samp></kbd></span></p><p><span style="font-size:16px;"><kbd><samp><span style="font-family:times new roman;">';
      htmlcontent +=
        '<strong>Mobile &nbsp; :</strong> </span></samp></kbd></span><span style="font-family: &quot;times new roman&quot;; font-size: 16px; background-color: rgb(238, 238, 238);">' +
        accmobile.toString() +
        '</span></p><p><span style="font-size:16px;"><kbd><samp>';
      htmlcontent +=
        '<span style="font-family:times new roman;"><strong>Email &nbsp; &nbsp; :&nbsp;</strong></span></samp></kbd></span><span style="font-family: &quot;times new roman&quot;; font-size: 16px; background-color: rgb(238, 238, 238);">' +
        accemail +
        "</span></p><p>";
      htmlcontent +=
        '<span style="font-size:16px;"><kbd><samp><font face="times new roman"><b>Company :&nbsp;</b></font></samp></kbd></span><span style="font-family: &quot;times new roman&quot;; font-size: 16px; background-color: rgb(238, 238, 238);">' +
        acccompany +
        "</span></p>";
      htmlcontent +=
        '</div><p style="text-align: center;">&nbsp;<span class="il" style="color: rgb(34, 34, 34); font-family: arial, sans-serif; font-size: 12.8px; text-align: -webkit-center; background-color: rgb(255, 255, 255);">Copyright</span>';
      htmlcontent +=
        '<span style="color: rgb(34, 34, 34); font-family: arial, sans-serif; font-size: 12.8px; text-align: -webkit-center; background-color: rgb(255, 255, 255);">&nbsp;&copy;2016&nbsp;<a href="http://www.corefactors.in">http://www.corefactors.in</a></span></p></body></html>';
      var email_message = {
        html_content: htmlcontent,
        subject: "New Contact from Corefactors",
        from_mail: "support@corefactors.in",
        from_name: "Corefactors Support",
        reply_to: "support@corefactors.in",
        to_recipients: to_list
      };
      var payload = { message: email_message };
      var single_content = { mail_datas: payload };
  
      var emailurl =
        "https://teleduce.in/send-email-json-otom/b946312a-89c1-4fe9-a7b3-0db1b7ade389/1004/";
      $.post(emailurl, JSON.stringify(single_content), function(data, status) {
        $("#contact-form").trigger("reset");
        if (data.response_code == "5011") {
          alert("Thanks! for choosing corefactors. We will contact you shortly");
        } else {
          alert("Some error has been occured. Kindly, reach us by call");
          return false;
        }
      });
  
      return true;
   //   $("#form_error").attr("style", "display:none");
   //   $("#form_success")
     //   .attr("style", "")
    //    .html("Loading...");
      $("#sub_spinner").attr("style", "");
      $.ajax({
        url: "https://teleduce.corefactors.in/signup/",
        //url: "http://localhost:8000/signup/",
        type: "POST",
        dataType: "json",
        data: {
          name: $("#firstname").val(),
          username: $("#email").val(),
          mobile: $("#mobile").val(),
          email: $("#email").val(),
          cname: $("#company_name").val(),
          requestsource: "corefactor site",
          request_type: "signup",
          customer_type: "Permanent"
          //   csrfmiddlewaretoken: '{{ csrf_token }}'
        },
        success: function(json) {
          if (json.datas == "username") {
         //   $("#form_error")
       //       .attr("style", "")
        //      .html(json.error);
            $("#trial_form_submit").attr("disabled", false);
            //		$('#sub_spinner').attr("style","display:none");
            return false;
          } else if (json.datas == "email") {
      ////      $("#form_error")
       //       .attr("style", "")
       //       .html(json.error);
            $("#trial_form_submit").attr("disabled", false);
            //		$('#sub_spinner').attr("style","display:none");
            return false;
          } else if (json.datas == "mobile") {
       //     $("#form_error")
      //        .attr("style", "")
      //        .html(json.error);
            $("#trial_form_submit").attr("disabled", false);
            //		$('#sub_spinner').attr("style","display:none");
            return false;
          } else if (json.datas == "success") {
            // Sign Up - Start your free trial Lead
            $.ajax({
              url:
                "https://teleduce.corefactors.in/lead/apiwebhook/b946312a-89c1-4fe9-a7b3-0db1b7ade389/",
              //url: "http://localhost:8000/lead/apiwebhook/ab0b44cd-9b09-4742-8df4-c2b160f74c76/",
              type: "POST",
              dataType: "json",
              data: {
                first_name: accname,
                mobile: accmobile,
                email: accemail,
                company: acccompany,
                lead_source: "Sign Up - Start your free trial"
              },
              success: function(json) {
                console.log(json.response + ": " + json.response_code);
              },
              error: function(xhr, errmsg, err) {
                console.log(xhr.status + ": " + xhr.responseText);
              }
            });
  
        //    $("#form_error").attr("style", "display:none");
            console.log(json.domain_url);
            $.ajax({
              type: "GET",
              url: "https:" + json.domain_url,
  
              dataType: "json",
              success: function(json1) {
                // 	 window.location.href = json1.domain1
                $("#submit-form").trigger("reset");
                //      $("#form_error").attr("style","display:none");
                //     $("#form_success").attr("style","").html('We have sent an email to you. Please verify your email address. Once verified, your account will get activated.');
                alert(
                  "We have sent an email to you. Please verify your email address. Once verified, your account will get activated."
                );
                $("#trial_form_submit").attr("disabled", false);
                //	$('#sub_spinner').attr("style","display:none");
                return false;
              },
              error: function(xhr, errmsg, err) {
         //       $("#form_error")
          //        .attr("style", "")
          //        .html("Some error has been occured");
                $("#trial_form_submit").attr("disabled", false);
                //		$('#sub_spinner').attr("style","display:none");
                return false;
              }
            });
            return false;
          }
        },
        error: function(xhr, errmsg, err) {
       //   $("#form_error")
       //     .attr("style", "")
       //     .html("Some error has been occured");
       //   $("#form_success")
       //     .attr("style", "display:none")
      //      .html("");
          $("#trial_form_submit").attr("disabled", false);
          //	$('#sub_spinner').attr("style","display:none");
          return false;
        }
      });
      return false;
    });
  });
  