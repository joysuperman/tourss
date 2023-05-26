  /* seo audit form script */
  $(document).ready(function() {
    function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
    }
    function isUrl(websiteurl) {
        var url = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;
        return url.test(websiteurl);
    }
    
    $("#seo-form-submit-button").click(function() {
    $(this).attr("disabled", true);
    $("#form-success-message")
      .attr("style", "display:none")
      .html("");
    var to_list = [
      { email_id: "marketing@corefactors.in", name: "Corefactors Marketing" },
      { email_id: "nagarjunan.d@corefactors.in", name: "Naga" },
      { email_id: "mouna.c@corefactors.in", name: "Mouna" }
    ];
    var firstname = $("#firstname").val();
    var website = $("#website").val();
    var accemail = $("#email").val();
    var company_name = $("#company").val();
    
    if (firstname == "") {
  
      $("#firstname")
        .focus()
        .attr("style", "border-color:red");
      $("#form-error-message").html("Please enter your <strong>Name</strong>").attr("style","");
      $(this).attr("disabled", false);
    
      return false;
    } else {
      
      $("#firstname").attr("style", "");
    }
    if (website == "") {
    
        $("#website")
          .focus()
          .attr("style", "border-color:red");
        $("#form-error-message").html("Please enter your <strong>Website URL</strong>").attr("style","");
        $(this).attr("disabled", false);
       
        return false;
      } else {
        if (!isUrl(website)) {

            $("#website")
          .focus()
          .attr("style", "border-color:red");
        $("#form-error-message").html("Please enter <strong>Valid URL</strong>").attr("style","");
        $(this).attr("disabled", false);
       
        return false;
        }
        else {
            $("#website").attr("style", "");
        }
     }
    if (accemail == "") {
    
      $("#email")
        .focus()
        .attr("style", "border-color:red");
      $("#form-error-message").html("Please enter your <strong>Email</strong>").attr("style","");
      $(this).attr("disabled", false);
    
      return false;
    } else {
      if (!isEmail(accemail)) {
    
        $("#email")
          .focus()
          .attr("style", "border-color:red");
        $("#form-error-message").html("Please enter <strong> Valid Email</strong>").attr("style","");
        $(this).attr("disabled", false);
    
        return false;
      } else {
        $("#email").attr("style", "");
      }
    }
    if (company_name == "") {
    
      $("#company")
        .focus()
        .attr("style", "border-color:red");
      $("#form-error-message").html("Please enter your <strong>Company Name</strong>").attr("style","");
      $(this).attr("disabled", false);
     
      return false;
    } else {
     
      $("#company").attr("style", "");
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
      firstname +
      '</span></samp></kbd></span></p><p><span style="font-size:16px;"><kbd><samp><span style="font-family:times new roman;">';
    htmlcontent +=
      '<span style="font-size:16px;"><kbd><samp><font face="times new roman"><b>Website :&nbsp;</b></font></samp></kbd></span><span style="font-family: &quot;times new roman&quot;; font-size: 16px; background-color: rgb(238, 238, 238);">' +
      website +
      "</span></p>";
    htmlcontent +=
      '<span style="font-family:times new roman;"><strong>Email &nbsp; &nbsp; :&nbsp;</strong></span></samp></kbd></span><span style="font-family: &quot;times new roman&quot;; font-size: 16px; background-color: rgb(238, 238, 238);">' +
      accemail +
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
      subject: "New Enquiry from SEO Audit",
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
      $("#seo-audit-form").trigger("reset");
      if (data.response_code == "5011") {
        // alert("Thanks! for choosing corefactors. We will contact you shortly");
        $.ajax({
          url: 'https://teleduce.corefactors.in/lead/apiwebhook/32c17645-575d-4ffe-bd89-0a80622b47f2/SEOAuditPage/',
          type: "POST",
          dataType: "json",
          data: {
          "Website" : website,
          "Name" : firstname,
          "Company Name" : company_name,
          "Email" : accemail,
          "lead_source": "SEO Audit",
          },
          success: function(json) {
          console.log(json.response + ": " + json.response_code);
          $("#form-success-message").html("Thank you for the information provided for SEO Audit Report. We will get back to you in 24 hours.").attr("style","");
          window.location.replace("seo-audit-report/thank-you.html");
          },
          error: function(xhr, errmsg, err){
          console.log(xhr.status + ": " + xhr.responseText);
          $("#form-success-message").html("Thank you for the information provided for SEO Audit Report. We will get back to you in 24 hours.").attr("style","");
          window.location.replace("seo-audit-report/thank-you.html");
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