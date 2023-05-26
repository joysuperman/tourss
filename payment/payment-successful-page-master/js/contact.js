$(document).ready(function(){
    function isEmail(email) {
          var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
          return regex.test(email);
        }
        function IsMobileNumber(txtMobId) {
            var mob = /^[1-9]{1}[0-9]{9}$/;
            return mob.test(txtMobId)
        }
    $("#contact-submit").click(function(){
        var to_list=[{"email_id":"sales@corefactors.in"},
            {"email_id":"sharmila.s@corefactors.in"},{"email_id":"marketing@corefactors.in"}]
        var contactname = $('#contact-name').val();
        var contactemail = $('#contact-email').val();
        var contactmobile = $('#contact-mobile').val();
        var contactmessage = $('#contact-message').val();
        var contactcapcha = $('#subject').val();
        if (contactname == ""){
            $("#form_error").html("Please enter your <strong>Name</strong>").attr("style","");
            $('#contact-name').focus().attr("style","border-color:red");
            $(window).scrollTop($('#form_error').offset().top);
            return false;
        }
        else{
            //$("#form_error").html("").css("display","none");
            $('#contact-name').attr("style","");
        }
        if (contactemail == ""){
            $("#form_error").html("Please enter your <strong>Email</strong>").attr("style","");
            $('#contact-email').focus().attr("style","border-color:red");
            $(window).scrollTop($('#form_error').offset().top);
            return false;
        }
        else{
            if (!isEmail(contactemail)){
                $("#form_error").attr("style","").html("Please enter valid <strong>Email</strong>");
                $('#contact-email').focus().attr("style","border-color:red");
                $(window).scrollTop($('#form_error').offset().top);
                return false;
            }
            else{
                $('#contact-email').attr("style","");
            }
            
        }
        if (contactmobile == ""){
            $("#form_error").attr("style","").html("Please enter your <strong>Mobile Number</strong>");
            $('#contact-mobile').focus().attr("style","border-color:red");
            $(window).scrollTop($('#form_error').offset().top);
            return false;
        }
        else{
            if (!IsMobileNumber(contactmobile)){
                $("#form_error").attr("style","").html("Please enter valid <strong>Mobile Number</strong>");
                $('#contact-mobile').focus().attr("style","border-color:red");
                $(window).scrollTop($('#form_error').offset().top);
                return false;
            }
            else{
                $('#contact-mobile').attr("style","");
            }
        }
        $("#form_error").attr("style","display:none");
        htmlcontent =  '<html><head><title></title></head><body><p style="text-align: center;"><img alt="" src="//teleduce.in/media/sendy_email_template/logo-blue_1.png" style="width: 250px; height: 58px;" /></p><div style="background:#eee;border:1px solid #ccc;padding:5px 10px;">';
        htmlcontent += '<p><span style="font-size:16px;"><kbd><samp><span style="font-family:times new roman;"><strong>Name &nbsp; &nbsp; :</strong>&nbsp;'+contactname+'</span></samp></kbd></span></p><p><span style="font-size:16px;"><kbd><samp><span style="font-family:times new roman;">';
        htmlcontent += '<strong>Mobile &nbsp; :</strong> </span></samp></kbd></span><span style="font-family: &quot;times new roman&quot;; font-size: 16px; background-color: rgb(238, 238, 238);">'+contactmobile.toString()+'</span></p><p><span style="font-size:16px;"><kbd><samp>';
        htmlcontent += '<span style="font-family:times new roman;"><strong>Email &nbsp; &nbsp; :&nbsp;</strong></span></samp></kbd></span><span style="font-family: &quot;times new roman&quot;; font-size: 16px; background-color: rgb(238, 238, 238);">'+contactemail+'</span></p><p>';
        htmlcontent += '<span style="font-size:16px;"><kbd><samp><font face="times new roman"><b>Message :&nbsp;</b></font></samp></kbd></span><span style="font-family: &quot;times new roman&quot;; font-size: 16px; background-color: rgb(238, 238, 238);">'+contactmessage+'</span></p>';
        htmlcontent += '</div><p style="text-align: center;">&nbsp;<span class="il" style="color: rgb(34, 34, 34); font-family: arial, sans-serif; font-size: 12.8px; text-align: -webkit-center; background-color: rgb(255, 255, 255);">Copyright</span>';
        htmlcontent += '<span style="color: rgb(34, 34, 34); font-family: arial, sans-serif; font-size: 12.8px; text-align: -webkit-center; background-color: rgb(255, 255, 255);">&nbsp;&copy;2016&nbsp;<a href="http://www.corefactors.in">http://www.corefactors.in</a></span></p></body></html>';
        var email_message = {
                "html_content":htmlcontent,
                "subject":"New Contact from Corefactors",
                "from_mail":"support@corefactors.in",
                "from_name":"Corefactors Support",
                "reply_to":"support@gmail.com",
                "to_recipients":to_list
                }
        var payload = {"message" :email_message}
        var single_content = {"mail_datas":payload}

        var emailurl = "//teleduce.in/send-email-json-otom/b946312a-89c1-4fe9-a7b3-0db1b7ade389/1004/";
        $.post(emailurl,
        JSON.stringify(single_content),
        function(data,status){
            $("#contact-form-1").trigger('reset');
            if (data.response_code == '5011'){
                $("#form_success").html("Thanks! for choosing corefactors. We will contact you shortly").attr("style","");
            }
            else{
                $("#form_error").attr("style","").html("Some error has been occured. Kindly, reach us by call");
                return false;
            }
        });
        $('#sub_spinner').attr("style","");
         //Website - ContactUs
       $.ajax({
            url: 'https://teleduce.corefactors.in/lead/apiwebhook/b946312a-89c1-4fe9-a7b3-0db1b7ade389/Default/',
            type: "POST",
            dataType: "json",
            data: {
                "first_name"  : contactname,
                "mobile"      : contactmobile,
                "email"       : contactemail,
                "requirements": contactmessage,
                "lead_source" : "Website - ContactUs",
            },
            success: function (json) {console.log(json.response +": "+ json.response_code);
            $('#sub_spinner').attr("style","display:none");
            window.location.replace("contact/thankyou.html");
        },
            error: function(xhr, errmsg, err) {console.log(xhr.status + ": " + xhr.responseText);
            $('#sub_spinner').attr("style","display:none");
            window.location.replace("contact/thankyou.html");
        }
        }); 
    });

    //sales box
    $("#sales-submit").click(function(){
        var to_list=[{"email_id":"sales@corefactors.in"},
            {"email_id":"sharmila.s@corefactors.in"},{"email_id":"marketing@corefactors.in"}]
        var salesname = $('#sales-name').val();
        var salesemail = $('#sales-email').val();
        var salesmobile = $('#sales-mobile').val();
        var salesmessage = $('#sales-message').val();
        var contactcapcha = $('#subject').val();
        if (salesname == ""){
            $("#form_error_sales").html("Please enter your <strong>Name</strong>").attr("style","");
            $('#sales-name').focus().attr("style","border-color:red");
            $(window).scrollTop($('#form_error_sales').offset().top);
            return false;
        }
        else{
            $('#sales-name').attr("style","");
        }
        if (salesmobile == ""){
            $("#form_error_sales").attr("style","").html("Please enter your <strong>Mobile Number</strong>");
            $('#sales-mobile').focus().attr("style","border-color:red");
            $(window).scrollTop($('#form_error_sales').offset().top);
            return false;
        }
        else{
            if (!IsMobileNumber(salesmobile)){
                $("#form_error_sales").attr("style","").html("Please enter valid <strong>Mobile Number</strong>");
                $('#sales-mobile').focus().attr("style","border-color:red");
                $(window).scrollTop($('#form_error_sales').offset().top);
                return false;
            }
            else{
                $('#sales-mobile').attr("style","");
            }
        }
        if (salesemail == ""){
            $("#form_error_sales").html("Please enter your <strong>Email</strong>").attr("style","");
            $('#sales-email').focus().attr("style","border-color:red");
            $(window).scrollTop($('#form_error_sales').offset().top);
            return false;
        }
        else{
            if (!isEmail(salesemail)){
                $("#form_error_sales").attr("style","").html("Please enter valid <strong>Email</strong>");
                $('#sales-email').focus().attr("style","border-color:red");
                $(window).scrollTop($('#form_error_sales').offset().top);
                return false;
            }
            else{
                $('#sales-email').attr("style","");
            }
            
        }
        $("#form_error_sales").attr("style","display:none");
        htmlcontent =  '<html><head><title></title></head><body><p style="text-align: center;"><img alt="" src="//teleduce.in/media/sendy_email_template/logo-blue_1.png" style="width: 250px; height: 58px;" /></p><div style="background:#eee;border:1px solid #ccc;padding:5px 10px;">';
        htmlcontent += '<p><span style="font-size:16px;"><kbd><samp><span style="font-family:times new roman;"><strong>Name &nbsp; &nbsp; :</strong>&nbsp;'+salesname+'</span></samp></kbd></span></p><p><span style="font-size:16px;"><kbd><samp><span style="font-family:times new roman;">';
        htmlcontent += '<strong>Mobile &nbsp; :</strong> </span></samp></kbd></span><span style="font-family: &quot;times new roman&quot;; font-size: 16px; background-color: rgb(238, 238, 238);">'+salesmobile.toString()+'</span></p><p><span style="font-size:16px;"><kbd><samp>';
        htmlcontent += '<span style="font-family:times new roman;"><strong>Email &nbsp; &nbsp; :&nbsp;</strong></span></samp></kbd></span><span style="font-family: &quot;times new roman&quot;; font-size: 16px; background-color: rgb(238, 238, 238);">'+salesemail+'</span></p><p>';
        htmlcontent += '<span style="font-size:16px;"><kbd><samp><font face="times new roman"><b>Message :&nbsp;</b></font></samp></kbd></span><span style="font-family: &quot;times new roman&quot;; font-size: 16px; background-color: rgb(238, 238, 238);">'+salesmessage+'</span></p>';
        htmlcontent += '</div><p style="text-align: center;">&nbsp;<span class="il" style="color: rgb(34, 34, 34); font-family: arial, sans-serif; font-size: 12.8px; text-align: -webkit-center; background-color: rgb(255, 255, 255);">Copyright</span>';
        htmlcontent += '<span style="color: rgb(34, 34, 34); font-family: arial, sans-serif; font-size: 12.8px; text-align: -webkit-center; background-color: rgb(255, 255, 255);">&nbsp;&copy;2016&nbsp;<a href="http://www.corefactors.in">http://www.corefactors.in</a></span></p></body></html>';
        var email_message = {
                "html_content":htmlcontent,
                "subject":"New Contact from Corefactors",
                "from_mail":"support@corefactors.in",
                "from_name":"Corefactors Support",
                "reply_to":"support@gmail.com",
                "to_recipients":to_list
                }
        var payload = {"message" :email_message}
        var single_content = {"mail_datas":payload}

        var emailurl = "//teleduce.in/send-email-json-otom/b946312a-89c1-4fe9-a7b3-0db1b7ade389/1004/";
        $.post(emailurl,
        JSON.stringify(single_content),
        function(data,status){
            $("#contact-form-2").trigger('reset');
            if (data.response_code == '5011'){
                $("#form_success_sales").html("Thanks! for choosing corefactors. We will contact you shortly").attr("style","");
            }
            else{
                $("#form_error_sales").attr("style","").html("Some error has been occured. Kindly, reach us by call");
                return false;
            }
        });
        $('#sub_spinner').attr("style","");
         //Website - ContactUs
       $.ajax({
            url: 'https://teleduce.corefactors.in/lead/apiwebhook/b946312a-89c1-4fe9-a7b3-0db1b7ade389/Default/',
            type: "POST",
            dataType: "json",
            data: {
                "first_name"  : salesname,
                "mobile"      : salesmobile,
                "email"       : salesemail,
                "requirements": salesmessage,
                "lead_source" : "ContactUs(sales)",
            },
            success: function (json) {console.log(json.response +": "+ json.response_code);
            $('#sub_spinner').attr("style","display:none");
            window.location.replace("contact/thankyou.html");
        },
            error: function(xhr, errmsg, err) {console.log(xhr.status + ": " + xhr.responseText);
            $('#sub_spinner').attr("style","display:none");
            window.location.replace("contact/thankyou.html");
        }
        }); 
    });

    //support box
    $("#support-submit").click(function(){
        var to_list=[{"email_id":"sales@corefactors.in"},
            {"email_id":"sharmila.s@corefactors.in"},{"email_id":"marketing@corefactors.in"}]
        var supportname = $('#support-name').val();
        var supportmobile = $('#support-mobile').val();
        var supportmessage = $('#support-message').val();
        var contactcapcha = $('#subject').val();
        if (supportname == ""){
            $("#form_error_support").html("Please enter your <strong>Name</strong>").attr("style","");
            $('#support-name').focus().attr("style","border-color:red");
            $(window).scrollTop($('#form_error_support').offset().top);
            return false;
        }
        else{
            $('#support-name').attr("style","");
        }
        if (supportmobile == ""){
            $("#form_error_support").attr("style","").html("Please enter your <strong>Mobile Number</strong>");
            $('#support-mobile').focus().attr("style","border-color:red");
            $(window).scrollTop($('#form_error_support').offset().top);
            return false;
        }
        else{
            if (!IsMobileNumber(supportmobile)){
                $("#form_error_support").attr("style","").html("Please enter valid <strong>Mobile Number</strong>");
                $('#support-mobile').focus().attr("style","border-color:red");
                $(window).scrollTop($('#form_error_support').offset().top);
                return false;
            }
            else{
                $('#support-mobile').attr("style","");
            }
        }
        $("#form_error_support").attr("style","display:none");
        htmlcontent =  '<html><head><title></title></head><body><p style="text-align: center;"><img alt="" src="//teleduce.in/media/sendy_email_template/logo-blue_1.png" style="width: 250px; height: 58px;" /></p><div style="background:#eee;border:1px solid #ccc;padding:5px 10px;">';
        htmlcontent += '<p><span style="font-size:16px;"><kbd><samp><span style="font-family:times new roman;"><strong>Name &nbsp; &nbsp; :</strong>&nbsp;'+supportname+'</span></samp></kbd></span></p><p><span style="font-size:16px;"><kbd><samp><span style="font-family:times new roman;">';
        htmlcontent += '<strong>Mobile &nbsp; :</strong> </span></samp></kbd></span><span style="font-family: &quot;times new roman&quot;; font-size: 16px; background-color: rgb(238, 238, 238);">'+supportmobile.toString()+'</span></p><p><span style="font-size:16px;"><kbd><samp>';
        htmlcontent += '<span style="font-size:16px;"><kbd><samp><font face="times new roman"><b>Message :&nbsp;</b></font></samp></kbd></span><span style="font-family: &quot;times new roman&quot;; font-size: 16px; background-color: rgb(238, 238, 238);">'+supportmessage+'</span></p>';
        htmlcontent += '</div><p style="text-align: center;">&nbsp;<span class="il" style="color: rgb(34, 34, 34); font-family: arial, sans-serif; font-size: 12.8px; text-align: -webkit-center; background-color: rgb(255, 255, 255);">Copyright</span>';
        htmlcontent += '<span style="color: rgb(34, 34, 34); font-family: arial, sans-serif; font-size: 12.8px; text-align: -webkit-center; background-color: rgb(255, 255, 255);">&nbsp;&copy;2016&nbsp;<a href="http://www.corefactors.in">http://www.corefactors.in</a></span></p></body></html>';
        var email_message = {
                "html_content":htmlcontent,
                "subject":"New Contact from Corefactors",
                "from_mail":"support@corefactors.in",
                "from_name":"Corefactors Support",
                "reply_to":"support@gmail.com",
                "to_recipients":to_list
                }
        var payload = {"message" :email_message}
        var single_content = {"mail_datas":payload}

        var emailurl = "//teleduce.in/send-email-json-otom/b946312a-89c1-4fe9-a7b3-0db1b7ade389/1004/";
        $.post(emailurl,
        JSON.stringify(single_content),
        function(data,status){
            $("#contact-form-3").trigger('reset');
            if (data.response_code == '5011'){
                $("#form_success_support").html("Thanks! for choosing corefactors. We will contact you shortly").attr("style","");
            }
            else{
                $("#form_error_support").attr("style","").html("Some error has been occured. Kindly, reach us by call");
                return false;
            }
        });
        $('#sub_spinner').attr("style","");
         //Website - ContactUs
       $.ajax({
            url: 'https://teleduce.corefactors.in/lead/apiwebhook/b946312a-89c1-4fe9-a7b3-0db1b7ade389/Default/',
            type: "POST",
            dataType: "json",
            data: {
                "first_name"  : supportname,
                "mobile"      : supportmobile,
                "requirements": supportmessage,
                "lead_source" : "ContactUs(support)",
            },
            success: function (json) {console.log(json.response +": "+ json.response_code);
            $('#sub_spinner').attr("style","display:none");
            window.location.replace("contact/thankyou.html");
        },
            error: function(xhr, errmsg, err) {console.log(xhr.status + ": " + xhr.responseText);
            $('#sub_spinner').attr("style","display:none");
            window.location.replace("contact/thankyou.html");
        }
        }); 
    });

    //free-trial box
    $("#freetrial-submit").click(function(){
        var freetrialname = $('#freetrial-name').val();
        var freetrialmobile = $('#freetrial-mobile').val();

        if (freetrialname == ""){
            $("#form_error_freetrial").html("Please enter your <strong>Name</strong>").attr("style","");
            $('#freetrial-name').focus().attr("style","border-color:red");
            $(window).scrollTop($('#form_error_freetrial').offset().top);
            return false;
        }
        else{
            $('#freetrial-name').attr("style","");
        }
        if (freetrialmobile == ""){
            $("#form_error_freetrial").attr("style","").html("Please enter your <strong>Mobile Number</strong>");
            $('#freetrial-mobile').focus().attr("style","border-color:red");
            $(window).scrollTop($('#form_error_freetrial').offset().top);
            return false;
        }
        else{
            if (!IsMobileNumber(freetrialmobile)){
                $("#form_error_freetrial").attr("style","").html("Please enter valid <strong>Mobile Number</strong>");
                $('#freetrial-mobile').focus().attr("style","border-color:red");
                $(window).scrollTop($('#form_error_freetrial').offset().top);
                return false;
            }
            else{
                $('#freetrial-mobile').attr("style","");
            }
        }

    });
    
});