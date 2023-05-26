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
   
    $("#popup-submit").click(function() {
    $(this).attr("disabled", true);
    $("#form_success")
      .attr("style", "display:none")
      .html("");
    var to_list = [
      { email_id: "marketing@corefactors.in", name: "Corefactors Marketing" },
      { email_id: "nagarjunan.d@corefactors.in", name: "Naga" }
    ];
    var accemail = $("#popup-email").val();
    var accmobile = $("#popup-mobile").val();
    var contactmessage = $("#textarea").val();

    if (contactmessage == "") {
      $("#form-error-message").attr("style","").html("Please type your <strong>Questions</strong>");
      $('#textarea').focus().attr("style","border-color:red");
      $(this).attr("disabled", false);
      return false;
    } else {
     $("#textarea").attr("style", "");
    }
    if (accemail == "") {
        $("#form-error-message").html("Please enter your <strong>Email</strong>").attr("style","");
        $('#popup-email').focus().attr("style","border-color:red");
        $(this).attr("disabled", false);
        
        return false;
    } else {
      if (!isEmail(accemail)) {
    
        $("#form-error-message").html("Please enter valid <strong>Email</strong>").attr("style","");
        $('#popup-email').focus().attr("style","border-color:red");
        $(this).attr("disabled", false);
    
        return false;
      } else {
        $("#popup-email").attr("style", "");
      }
    }
    if (accmobile == "") {
      $("#form-error-message").attr("style","").html("Please enter your <strong>Mobile Number</strong>");
      $('#popup-mobile').focus().attr("style","border-color:red");
      $(this).attr("disabled", false);
  
      return false;
    } else {
      if (!IsMobileNumber(accmobile)) {
   
        $("#form-error-message").attr("style","").html("Please enter valid <strong>Mobile Number</strong>");
        $('#popup-mobile').focus().attr("style","border-color:red");
        $(this).attr("disabled", false);
        
        return false;
      } else {
        $("#popup-mobile").attr("style", "");
      }
    }
    // if (!$("#check-box").prop("checked")) {
    //   alert("Kindly agree the terms and conditions");
    //   $(this).attr("disabled", false);
    //   return false;
    // }
  
    htmlcontent =
      '<html><head><title></title></head><body><p style="text-align: center;"><img alt="" src="//teleduce.in/media/sendy_email_template/logo-blue_1.png" style="width: 250px; height: 58px;" /></p><div style="background:#eee;border:1px solid #ccc;padding:5px 10px;">';
    htmlcontent +=
      '<p><span style="font-size:16px;"><kbd><samp><span style="font-family:times new roman;"><strong>Questions &nbsp; &nbsp; :</strong>&nbsp;' +
      contactmessage +
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
      $("#popup-form").trigger("reset");
      if (data.response_code == "5011") {
        // alert("Thanks! for choosing corefactors. We will contact you shortly");
        $.ajax({
          url: 'https://teleduce.corefactors.in/lead/apiwebhook/b946312a-89c1-4fe9-a7b3-0db1b7ade389/Default/',
          type: "POST",
          dataType: "json",
          data: {
          
          "mobile" : accmobile,
          "email" : accemail,
          "requirements" : contactmessage,
          "lead_source": "Akshay-Edtech"
          },
          success: function(json) {
          console.log(json.response + ": " + json.response_code);
          window.location.replace("akshay-edtech-solutions/thank-you.html");
          },
          error: function(xhr, errmsg, err){
          console.log(xhr.status + ": " + xhr.responseText);
          window.location.replace("akshay-edtech-solutions/thank-you.html");
          }
          });
      
      } else {
        alert("Some error has been occured. Kindly, reach us by call");
        return false;
      }
    });
    
  return true;
  });

  //edtech form

  $("#slide-submit").click(function() {
    $(this).attr("disabled", true);
    $("#form-success")
      .attr("style", "display:none")
      .html("");
    var to_list = [
      { email_id: "marketing@corefactors.in", name: "Corefactors Marketing" },
      { email_id: "nagarjunan.d@corefactors.in", name: "Naga" }
    ];
    var first_name = $("#firstname").val();
    var submit_email = $("#email").val();
    var submit_mobile = $("#mobile").val();
    var submit_company = $("#company").val();
    // var contactmessage = $("#textarea").val();
    // var acclastname = $("#lastname").val();
    // var first_name = accname + ' ' + acclastname;
    
    if (first_name == "") {
  
      $("#form-error").html("Please enter your <strong>Name</strong>").attr("style","");
      $('#firstname').focus().attr("style","border-color:red");
      $(this).attr("disabled", false);
    
      return false;
    } else {
      
      $("#firstname").attr("style", "");
    }
    if (submit_company == "") {
    
        $("#form-error").attr("style","").html("Please enter your <strong>Company Name</strong>");
        $('#company').focus().attr("style","border-color:red");
        $(this).attr("disabled", false);
     
      return false;
    } else {
     
      $("#company").attr("style", "");
    }
    if (submit_email == "") {
        $("#form-error").html("Please enter your <strong>Email</strong>").attr("style","");
        $('#email').focus().attr("style","border-color:red");
        $(this).attr("disabled", false);
        
        return false;
    } else {
      if (!isEmail(submit_email)) {
    
        $("#form-error").html("Please enter valid <strong>Email</strong>").attr("style","");
        $('#email').focus().attr("style","border-color:red");
        $(this).attr("disabled", false);
    
        return false;
      } else {
        $("#email").attr("style", "");
      }
    }
    if (submit_mobile == "") {
      $("#form-error").attr("style","").html("Please enter your <strong>Mobile Number</strong>");
      $('#mobile').focus().attr("style","border-color:red");
      $(this).attr("disabled", false);
  
      return false;
    } else {
      if (!IsMobileNumber(submit_mobile)) {
   
        $("#form-error").attr("style","").html("Please enter valid <strong>Mobile Number</strong>");
        $('#mobile').focus().attr("style","border-color:red");
        $(this).attr("disabled", false);
        
        return false;
      } else {
        $("#mobile").attr("style", "");
      }
    }
    // if (!$("#check-box").prop("checked")) {
    //   alert("Kindly agree the terms and conditions");
    //   $(this).attr("disabled", false);
    //   return false;
    // }
  
    htmlcontent =
      '<html><head><title></title></head><body><p style="text-align: center;"><img alt="" src="//teleduce.in/media/sendy_email_template/logo-blue_1.png" style="width: 250px; height: 58px;" /></p><div style="background:#eee;border:1px solid #ccc;padding:5px 10px;">';
    htmlcontent +=
      '<p><span style="font-size:16px;"><kbd><samp><span style="font-family:times new roman;"><strong>Name &nbsp; &nbsp; :</strong>&nbsp;' +
      first_name +
      '</span></samp></kbd></span></p><p><span style="font-size:16px;"><kbd><samp><span style="font-family:times new roman;">';
    htmlcontent +=
      '<strong>Mobile &nbsp; :</strong> </span></samp></kbd></span><span style="font-family: &quot;times new roman&quot;; font-size: 16px; background-color: rgb(238, 238, 238);">' +
      submit_mobile.toString() +
      '</span></p><p><span style="font-size:16px;"><kbd><samp>';
    htmlcontent +=
      '<span style="font-family:times new roman;"><strong>Email &nbsp; &nbsp; :&nbsp;</strong></span></samp></kbd></span><span style="font-family: &quot;times new roman&quot;; font-size: 16px; background-color: rgb(238, 238, 238);">' +
      submit_email +
      "</span></p><p>";
    htmlcontent +=
      '<span style="font-size:16px;"><kbd><samp><font face="times new roman"><b>Company :&nbsp;</b></font></samp></kbd></span><span style="font-family: &quot;times new roman&quot;; font-size: 16px; background-color: rgb(238, 238, 238);">' +
      submit_company +
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
      $("#edtech-form").trigger("reset");
      if (data.response_code == "5011") {
        // alert("Thanks! for choosing corefactors. We will contact you shortly");
        $.ajax({
          url: 'https://teleduce.corefactors.in/lead/apiwebhook/b946312a-89c1-4fe9-a7b3-0db1b7ade389/Default/',
          type: "POST",
          dataType: "json",
          data: {
          "first_name"  : first_name,
          "mobile" : submit_mobile,
          "email" : submit_email,
          "company_name" : submit_company,
          "requirements" : " ",
          "lead_source": "Akshay-Edtech"
          },
          success: function(json) {
          console.log(json.response + ": " + json.response_code);
          window.location.replace("akshay-edtech-solutions/thank-you.html");
          },
          error: function(xhr, errmsg, err){
          console.log(xhr.status + ": " + xhr.responseText);
          window.location.replace("akshay-edtech-solutions/thank-you.html");
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