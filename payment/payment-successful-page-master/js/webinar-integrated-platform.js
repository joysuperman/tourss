$(document).ready(function() {
    function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
    }
    $("#trial_form_submit_webinar").click(function() {
        var accemail = $("#email").val();
        var accname = $("#firstname").val();
        var acclastname = $("#lastname").val();
        if (accname == "") {
  
            $("#firstname")
              .focus()
              .attr("style", "border-color:red");
            $("#error-message1").text("Please enter your firstname.");
            $(this).attr("disabled", false);
          
            return false;
          } else {
            
            $("#firstname").attr("style", "");
            $("#error-message1").remove();
          }
          if (acclastname == "") {
  
            $("#lastname")
              .focus()
              .attr("style", "border-color:red");
              $("#error-message2").text("Please enter your lastname.");
            $(this).attr("disabled", false);
           
          return false;
          } else {
            
            $("#lastname").attr("style", "");
            $("#error-message2").remove();
          }
        if (accemail == "") {
    
            $("#email")
              .focus()
              .attr("style", "border-color:red");
            $(this).attr("disabled", false);
            $("#error-message3").text("Please enter your email address.");
          
            return false;
          } else {
            if (!isEmail(accemail)) {
          
              $("#email")
                .focus()
                .attr("style", "border-color:red");
             $("#error-message3").text("Please enter a valid email address.");
             $(this).attr("disabled", false);
          
              return false;
            } else {
              $("#email").attr("style", "");
              $("#error-message3").remove();
            }
          }

    });
});