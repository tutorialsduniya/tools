function generate_url(){

	var url = document.getElementById("url").value;
	var source = document.getElementById("source").value;
	var medium = document.getElementById("medium").value;
	var name = document.getElementById("name").value;
	var term = document.getElementById("term").value;
	var content = document.getElementById("content").value;

	var generated_url = document.getElementById("generated_url");

	if(1){
		generated_url.innerText = "";
	}

	if(url != ""){
		generated_url.innerText = url;
	}
	if(source != ""){
		generated_url.innerText += "?utm_source=" + source;
	}
	if(medium != ""){
		generated_url.innerText += "&utm_medium=" + medium;
	}
	if(name != ""){
		generated_url.innerText += "&utm_campaign=" + name;
	}
	if(term != ""){
		generated_url.innerText += "?utm_term=" + term;
	}
	if(content != ""){
		generated_url.innerText += "?utm_content=" + content;
	}


}







