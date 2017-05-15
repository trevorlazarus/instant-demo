(function($) {
  Drupal.behaviors.MODULENAME = {
    attach: function (context, settings) {
      // alert(settings.MODULENAME.testvar);
      //var orcidId = settings.orcid_authentication.orcid_id;
      //var msg = window.prompt("Please Provide your email", "email"); 
     // alert(msg); 
     // window.location.href = "?email="+msg+"&orcid_id="+orcidId;
	 
	 $('<p><h1>Data Science</h1></br>   Please enter your email below.     <br>     All emails from the submission system will be sent to this address. <br>The email address will not be made public.</p>').prompt(function(email){
		
		 var orcidId = settings.orcid_authentication.orcid_id;
		 var fName = settings.orcid_authentication.fname;
		 var lName = settings.orcid_authentication.lname;
		 
		 if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.response))
				{
			// alert(email.response);
            // window.location.href = "?email="+email.response+"&orcid_id="+orcidId;
			window.location.href = "?email="+email.response+"&orcid_id="+orcidId+"&fname="+fName+"&lname="+lName;
	  
			}
		else{
		alert("Please enater valid email");
               // bootbox.alert("Hello world!"); 
 
                  return false;	
		}
		
		
	});
    }
  };

})(jQuery);
