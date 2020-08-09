function validateform(){  
	var pid=document.follow.pid.value;  
	var priscription=document.follow.priscription.value;  
	var note=document.follow.note.value;
	if (pid==null || pid==""){  
	  alert("Patient ID can't be blank");  
	  return false;  
	}
	if (priscription==null || priscription==""){  
	  alert("Priscription can't be blank");  
	  return false;  
	}
	document.write("Patient ID:\t"+pid+"<br>");
	document.write("Priscription:\t"+priscription+"<br>");
	document.write("Note:\t"+note+"<br>");
	alert("Form Submitted Successfully!");
	return true;
}