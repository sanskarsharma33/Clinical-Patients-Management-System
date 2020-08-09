function validateform(){  
	var name=document.one.name.value;  
	var pid=document.one.id.value;  
	var majordisease=document.one.majordisease.value;  
	var note=document.one.note.value;
	if (name==null || name==""){  
	  alert("Name can't be blank");  
	  return false;  
	}
	if (pid==null || pid==""){  
	  alert("Patient ID can't be blank");  
	  return false;  
	}
	if (majordisease==null || majordisease==""){  
	  alert("Major disease can't be blank");  
	  return false;  
	}
	document.write("Name:\t"+name+"<br>");
	document.write("Patient ID:\t"+pid+"<br>");
	document.write("Major disease:\t"+majordisease+"<br>");
	document.write("Note:\t"+note+"<br>");
	alert("Form Submitted Successfully!");
	return true;
}