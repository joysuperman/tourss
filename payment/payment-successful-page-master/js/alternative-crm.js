  /* seo audit form script */
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
    
    $("#cfs-hero-form-submit").click(function() {
    $(this).attr("disabled", true);
    $("#form-success-message")
      .attr("style", "display:none")
      .html("");
    var to_list = [
      { email_id: "marketing@corefactors.in", name: "Corefactors Marketing" },
      { email_id: "nagarjunan.d@corefactors.in", name: "Naga" },
      { email_id: "mouna.c@corefactors.in", name: "Mouna" }
    ];
    var full_name = $("#fullname").val();
    var phone_no = $("#phoneno").val();
    var email_id = $("#emailid").val();
    var company_name = $("#company-name").val();
    
    if (full_name == "") {
  
      $("#fullname")
        .focus()
        .attr("style", "border-color:red");
      $("#form-error-message").html("Please enter your <strong>Name</strong>").attr("style","");
      $(this).attr("disabled", false);
    
      return false;
    } else {
      
      $("#fullname").attr("style", "");
    }
    if (phone_no == "") {
   
        $("#phoneno")
          .focus()
          .attr("style", "border-color:red");
        $("#form-error-message").attr("style","").html("Please enter your <strong>Mobile Number</strong>");
        $(this).attr("disabled", false);
    
        return false;
      } else {
        if (!IsMobileNumber(phone_no)) {
     
          $("#phoneno")
            .focus()
            .attr("style", "border-color:red");
          $("#form-error-message").attr("style","").html("Please enter <strong>Valid Mobile Number</strong>");
          $(this).attr("disabled", false);
          
          return false;
        } else {
          $("#phoneno").attr("style", "");
        }
      }
    if (email_id == "") {
    
      $("#emailid")
        .focus()
        .attr("style", "border-color:red");
      $("#form-error-message").html("Please enter your <strong>Email</strong>").attr("style","");
      $(this).attr("disabled", false);
    
      return false;
    } else {
      if (!isEmail(email_id)) {
    
        $("#emailid")
          .focus()
          .attr("style", "border-color:red");
        $("#form-error-message").html("Please enter <strong> Valid Email</strong>").attr("style","");
        $(this).attr("disabled", false);
    
        return false;
      } else {
        $("#emailid").attr("style", "");
      }
    }
    if (company_name == "") {
    
      $("#company-name")
        .focus()
        .attr("style", "border-color:red");
      $("#form-error-message").html("Please enter your <strong>Company Name</strong>").attr("style","");
      $(this).attr("disabled", false);
     
      return false;
    } else {
     
      $("#company-name").attr("style", "");
    }
  
    // if (!$("#checkbox").prop("checked")) {
    //   alert("Kindly agree the terms and conditions");
    //   $(this).attr("disabled", false);
    //   return false;
    // }
  
    htmlcontent =
      '<html><head><title></title></head><body><p style="text-align: center;"><img alt="" src="//teleduce.in/media/sendy_email_template/logo-blue_1.png" style="width: 250px; height: 58px;" /></p><div style="background:#eee;border:1px solid #ccc;padding:5px 10px;">';
    htmlcontent +=
      '<p><span style="font-size:16px;"><kbd><samp><span style="font-family:times new roman;"><strong>Name &nbsp; &nbsp; :</strong>&nbsp;' +
      full_name +
      '</span></samp></kbd></span></p><p><span style="font-size:16px;"><kbd><samp><span style="font-family:times new roman;">';
    htmlcontent +=
      '<strong>Mobile &nbsp; :</strong> </span></samp></kbd></span><span style="font-family: &quot;times new roman&quot;; font-size: 16px; background-color: rgb(238, 238, 238);">' +
      phone_no.toString() +
      '</span></p><p><span style="font-size:16px;"><kbd><samp>';
    htmlcontent +=
      '<span style="font-family:times new roman;"><strong>Email &nbsp; &nbsp; :&nbsp;</strong></span></samp></kbd></span><span style="font-family: &quot;times new roman&quot;; font-size: 16px; background-color: rgb(238, 238, 238);">' +
      email_id +
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
      subject: "New Contact from Alternative CRM",
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
      $("#corefactors-form").trigger("reset");
      if (data.response_code == "5011") {
        // alert("Thanks! for choosing corefactors. We will contact you shortly");
        $.ajax({
          url: 'https://teleduce.corefactors.in/lead/apiwebhook/b946312a-89c1-4fe9-a7b3-0db1b7ade389/Default/',
          type: "POST",
          dataType: "json",
          data: {
          "first_name" : full_name,
          "mobile" : phone_no,
          "email" : email_id,
          "company_name" : company_name,
          "lead_source": "Software Suggest"
          },
          success: function(json) {
          console.log(json.response + ": " + json.response_code);
          $("#form-success-message").html("Thank you for reaching out. Our Solution expert will reach out to you shortly.").attr("style","");
          window.location.replace("alternative-crm/thank-you.html");
          },
          error: function(xhr, errmsg, err){
          console.log(xhr.status + ": " + xhr.responseText);
          $("#form-success-message").html("Thank you for reaching out. Our Solution expert will reach out to you shortly.").attr("style","");
          window.location.replace("alternative-crm/thank-you.html");
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