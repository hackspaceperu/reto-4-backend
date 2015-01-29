$(document).ready(function(){
$("#contactform").submit(function(){

var str = $(this).serialize();

   $.ajax({
   type: "POST",
   url: "contact_form/contact.php",
   data: str,
   success: function(msg){
    
$("#note").ajaxComplete(function(event, request, settings){

if(msg == 'OK') // Message Sent? Show the 'Thank You' message
{	
result = '<div class="notification_ok">Your message has been sent Succesfully. Thank you!</div>';
$("#contactform").find(".textbox").val("");
}
else
{
result = msg;
}

$(this).hide();
$(this).html(result).slideDown("slow");
$(this).html(result);


});

}

 });

return false;

});

});
