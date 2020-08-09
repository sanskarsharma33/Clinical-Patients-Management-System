function validateform(){  
	var username=document.sign.user.value;  
	var password=document.sign.pass.value;  
	var password1=document.sign.pass1.value;  
	var email=document.sign.email.value;

	if (username==null || username==""){  
	  alert("username can't be blank");  
	  return false;  
	}
	else if(password.length<6)
	{  
	  alert("Password must be at least 6 characters long.");  
	  return false;  
	}
	else if(password!=password1)	
	{  
	  alert("You Entered Both Diffrent Password!");  
	  return false;  
	}    
	else if(email.indexOf("@") == -1 || email.length < 6){
	    alert("Please Enter valid Email");
	    return false;
    }
	document.write("User Name:\t"+username+"<br>");
	document.write("Password:\t"+password+"<br>");
	document.write("Email:\t"+email+"<br>");
	alert("Form Submitted Successfully!");
	return true;
}