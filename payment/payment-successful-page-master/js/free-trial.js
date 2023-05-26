$(document).ready(function(){
    function isEmail(email) {
          var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
          return regex.test(email);
        }
        function IsMobileNumber(txtMobId) {
            var mob = /^[1-9]{1}[0-9]{9}$/;
            return mob.test(txtMobId)
        }
    $("#trial_form_submit").click(function(){
        var plan = findGetParameter('plan');
        $(this).attr("disabled",true);
        var to_list=[
            {"email_id":"nagarjunan.d@corefactors.in","name":"Naga"}]
        var accname = $('#name').val();
        var accemail = $('#email').val();
        var accmobile = $('#mobile').val();
        var company_name = $('#company_name').val();
        if (accname == ""){
            $("#form_error").html("Please enter your <strong>Name</strong>").attr("style","");;
            $('#name').focus().attr("style","border-color:red");
            $(this).attr("disabled",false);
    //		$(window).scrollTop($('#form_error').offset().top);
            $('html, body').animate({
            scrollTop: $("#form_error").offset().top
            }, 100);
            return false;
        }
        else{
            //$("#form_error").html("").css("display","none");
            $('#name').attr("style","");
        }
        if (accmobile == ""){
            $("#form_error").attr("style","").html("Please enter your <strong>Mobile</strong>");
            $('#mobile').focus().attr("style","border-color:red");
            $(this).attr("disabled",false);
            $('html, body').animate({
            scrollTop: $("#form_error").offset().top
            }, 100);
            return false;
        }
        else{
            if (!IsMobileNumber(accmobile)){
                $("#form_error").attr("style","").html("Please enter valid <strong>Mobile</strong>");
                $('#mobile').focus().attr("style","border-color:red");
                $(this).attr("disabled",false);
        //		$(window).scrollTop($('#form_error').offset().top);
                $('html, body').animate({
                scrollTop: $("#form_error").offset().top
                }, 100);
                return false;
            }
            else{
                $('#mobile').attr("style","");
            }
        }
        if (accemail == ""){
            $("#form_error").html("Please enter your <strong>Email</strong>").attr("style","");
            $('#email').focus().attr("style","border-color:red");
            $(this).attr("disabled",false);
    //		$(window).scrollTop($('#form_error').offset().top);
            $('html, body').animate({
            scrollTop: $("#form_error").offset().top
            }, 100);
            return false;
        }
        else{
            if (!isEmail(accemail)){
                $("#form_error").attr("style","").html("Please enter valid <strong>Email</strong>");
                $('#email').focus().attr("style","border-color:red");
                $(this).attr("disabled",false);
                $('html, body').animate({
            scrollTop: $("#form_error").offset().top
            }, 100);
                return false;
            }
            else{
                $('#email').attr("style","");
            }
            
        }
        if (company_name == ""){
            $("#form_error").html("Please enter <strong>Company Name</strong>").attr("style","");
            $('#company_name').focus().attr("style","border-color:red");
            $(this).attr("disabled",false);
    //		$(window).scrollTop($('#form_error').offset().top);
            $('html, body').animate({
            scrollTop: $("#form_error").offset().top
            }, 100);
            return false;
        }
        else{
            //$("#form_error").html("").css("display","none");
            $('#company_name').attr("style","");
        }
        $("#form_error").attr("style","display:none");
        $('#sub_spinner').attr("style","");
        $.ajax({
                url: "//teleduce.corefactors.in/signup/",
                type: "POST",
                dataType: "json",
                data: {
                    name: $("#name").val(),
                    username: $("#email").val(),
                    mobile: $("#mobile").val(),
                    email: $("#email").val(),
                    cname: $('#company_name').val(),
                    requestsource : "Sign Up - Start your free trial",
                    request_type: "signup",
                    customer_type: 'Permanent',
                 //   csrfmiddlewaretoken: '{{ csrf_token }}'
                },
                success: function (json) {
                    if (json.datas == 'username') {
                        $('#form_error').attr("style","").html(json.error);
                        $('#trial_form_submit').attr("disabled",false);
                        $('#sub_spinner').attr("style","display:none");
                        return false;
                    }
                    else if (json.datas == 'email') {
                        $('#form_error').attr("style","").html(json.error);
                        $('#trial_form_submit').attr("disabled",false);
                        $('#sub_spinner').attr("style","display:none");
                        return false;
                    }
                    else if (json.datas == 'mobile') {
                        $('#form_error').attr("style","").html(json.error);
                        $('#trial_form_submit').attr("disabled",false);
                        $('#sub_spinner').attr("style","display:none");
                        return false;
                    }
                    else if (json.datas == 'success') {
                       
                        $.ajax({
                            url: 'https://teleduce.corefactors.in/lead/apiwebhook/32c17645-575d-4ffe-bd89-0a80622b47f2/Default/',
                            type: "POST",
                            dataType: "json",
                            data: {
                                "mobile" : accmobile,
                                "email" : accemail,
                                "first_name" : accname,
                                "plans" : plan,
                                "company_name" : company_name,
                                "leadsource" : "Website",
                            },
                            success: function(json) {
                                console.log(json.response + ": " + json.response_code);
                            },
                            error: function(xhr, errmsg, err){
                                console.log(xhr.status + ": " + xhr.responseText);
                            }
                        });
                        
                        $("#form_error").attr("style","display:none");
                        $.ajax({
                            type: "GET",
                            url: json.domain_url,
                            dataType: "json",
                            success: function (json1) {
                                // 	 window.location.href = json1.domain1
                                $('#trial-form').trigger('reset');
                                $("#form_error").attr("style","display:none");
                                $("#form_success").attr("style","").html('We have sent an email to you. Please verify your email address. Once verified, your account will get activated.');
                                $('#trial_form_submit').attr("disabled",false);
                                $('#sub_spinner').attr("style","display:none");
                                setTimeout(window.location.replace("free-trial/thankyou.html"), 2000);
                                return false;
                            },
                            error: function (xhr, errmsg, err) {
                                $('#form_error').attr("style","").html("Some error has been occured");
                                $('#trial_form_submit').attr("disabled",false);
                                $('#sub_spinner').attr("style","display:none");
                                return false;
                            }
                        });
                        return false;
                    }
                },
                error: function (xhr, errmsg, err) {
                    $('#form_error').attr("style","").html("Some error has been occured");
                    $('#trial_form_submit').attr("disabled",false);
                    $('#sub_spinner').attr("style","display:none");
                    return false;
                }

            });	
            return false;
    });
    
});

 /*popup script */
 $(document).ready(function() {
    function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
    }
    function IsMobileNumber(txtMobId) {
      // var mob = /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/;
      var mob = /^(?:(?:\+|0{0,3})(\s*[\-]\s*)?|[0]?)?[0-9]\d{6,14}$/;
      return mob.test(txtMobId);
    
    }
   
    $("#exit-popup-submit").click(function() {
    $(this).attr("disabled", true);
    $("#popup_form_success")
      .attr("style", "display:none")
      .html("");
    var to_list = [
      { email_id: "marketing@corefactors.in", name: "Corefactors Marketing" },
      { email_id: "nagarjunan.d@corefactors.in", name: "Naga" }
    ];
    var popupname = $("#firstname").val();
    var popupemail = $("#popup-email").val();
    var popupmobile = $("#popup-mobile").val();
    var company_name = $("#company").val();
    
    if (popupname == "") {
  
      $("#firstname")
        .focus()
        .attr("style", "border-color:red");
      $("#popup_form_error").html("Please enter your <strong>Name</strong>").attr("style","");
      $(this).attr("disabled", false);
    
      return false;
    } else {
      
      $("#firstname").attr("style", "");
    }
    if (popupemail == "") {
    
      $("#popup-email")
        .focus()
        .attr("style", "border-color:red");
      $("#popup_form_error").html("Please enter your <strong>Email</strong>").attr("style","");
      $(this).attr("disabled", false);
    
      return false;
    } else {
      if (!isEmail(popupemail)) {
    
        $("#popup-email")
          .focus()
          .attr("style", "border-color:red");
        $("#popup_form_error").html("Please enter <strong> Valid Email</strong>").attr("style","");
        $(this).attr("disabled", false);
    
        return false;
      } else {
        $("#popup-email").attr("style", "");
      }
    }
    if (popupmobile == "") {
   
      $("#popup-mobile")
        .focus()
        .attr("style", "border-color:red");
      $("#popup_form_error").attr("style","").html("Please enter your <strong>Mobile Number</strong>");
      $(this).attr("disabled", false);
  
      return false;
    } else {
      if (!IsMobileNumber(popupmobile)) {
   
        $("#popup-mobile")
          .focus()
          .attr("style", "border-color:red");
        $("#popup_form_error").attr("style","").html("Please enter <strong>Valid Mobile Number</strong>");
        $(this).attr("disabled", false);
        
        return false;
      } else {
        $("#popup-mobile").attr("style", "");
      }
    }
    if (company_name == "") {
    
      $("#company")
        .focus()
        .attr("style", "border-color:red");
      $("#popup_form_error").html("Please enter your <strong>Company Name</strong>").attr("style","");
      $(this).attr("disabled", false);
     
      return false;
    } else {
     
      $("#company").attr("style", "");
    }
    
    htmlcontent =
      '<html><head><title></title></head><body><p style="text-align: center;"><img alt="" src="//teleduce.in/media/sendy_email_template/logo-blue_1.png" style="width: 250px; height: 58px;" /></p><div style="background:#eee;border:1px solid #ccc;padding:5px 10px;">';
    htmlcontent +=
      '<p><span style="font-size:16px;"><kbd><samp><span style="font-family:times new roman;"><strong>Name &nbsp; &nbsp; :</strong>&nbsp;' +
      popupname +
      '</span></samp></kbd></span></p><p><span style="font-size:16px;"><kbd><samp><span style="font-family:times new roman;">';
    htmlcontent +=
      '<strong>Mobile &nbsp; :</strong> </span></samp></kbd></span><span style="font-family: &quot;times new roman&quot;; font-size: 16px; background-color: rgb(238, 238, 238);">' +
      popupmobile.toString() +
      '</span></p><p><span style="font-size:16px;"><kbd><samp>';
    htmlcontent +=
      '<span style="font-family:times new roman;"><strong>Email &nbsp; &nbsp; :&nbsp;</strong></span></samp></kbd></span><span style="font-family: &quot;times new roman&quot;; font-size: 16px; background-color: rgb(238, 238, 238);">' +
      popupemail +
      "</span></p><p>";
    htmlcontent +=
      '<span style="font-size:16px;"><kbd><samp><font face="times new roman"><b>Company :&nbsp;</b></font></samp></kbd></span><span style="font-family: &quot;times new roman&quot;; font-size: 16px; background-color: rgb(238, 238, 238);">' +
      company_name +
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
      $("#exit-popup-form").trigger("reset");
      if (data.response_code == "5011") {
        // alert("Thanks! for choosing corefactors. We will contact you shortly");
        $.ajax({
          url: 'https://teleduce.corefactors.in/lead/apiwebhook/b946312a-89c1-4fe9-a7b3-0db1b7ade389/Default/',
          type: "POST",
          dataType: "json",
          data: {
          
          "first_name" : popupname,
          "company_name" : company_name,
          "mobile" : popupmobile,
          "email" : popupemail,
          "requirements" : " ",
          "lead_source": "Exit popup - Freetrial"
          },
          success: function(json) {
          console.log(json.response + ": " + json.response_code);
          $("#popup_form_success").html("Thank you for scheduling a demo. Our Solution expert will reach out to you shortly.").attr("style","");
          },
          error: function(xhr, errmsg, err){
          console.log(xhr.status + ": " + xhr.responseText);
          $("#popup_form_success").html("Thank you for scheduling a demo. Our Solution expert will reach out to you shortly.").attr("style","");
          }
          });
      
      } else {
        alert("Some error has been occured. Kindly, reach us by call");
        return false;
      }
    });
    
  return true;
  });
});