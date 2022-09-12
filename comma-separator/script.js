$('#go').click(function() {
	var lines = $('#input').val().split(/\n/);
	var output = [];
	var outputText = [];
	for (var i = 0; i < lines.length; i++) {
	  // only push this line if it contains a non whitespace character.
	  if (/\S/.test(lines[i])) {
		if (i == 0) {
		  outputText.push($.trim(lines[i]));
		}else{outputText.push(' ' +$.trim(lines[i]));}
		output.push($.trim(lines[i]));
	  }
	}
	console.log(output);
	$('#output').val(outputText);
  });