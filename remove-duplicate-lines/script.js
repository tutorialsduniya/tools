$(document).ready(function(){
	$("#remove_duplicates").click(function()
	{
		var duplicate_values = $("#duplicate_lines").val();

		var unique_value = duplicate_values.split(/\n/g).filter((word, i, arr) => arr.indexOf(word) === i);

		$("#unique_lines").val(unique_value.join('\n'));
	});

	$("#copy_lines").click(function(){

		var copyText = document.getElementById("unique_lines");
		copyText.select();
		  copyText.setSelectionRange(0, 99999); /*For mobile devices*/

		document.execCommand("copy");

		$("#copy_lines").html("Copied");

		setTimeout(function(){ $("#copy_lines").html("Copy Unique Lines"); }, 1500);

	});

	$("#duplicate_lines").on('input', function(){

	var text = $("#duplicate_lines").val();   
	var lines = text.split(/\r|\r\n|\n/);
	var count = lines.length;

	$("#count_duplicate_lines").html("Lines: " + "<strong>"+count+"</strong>");
	});

	$("#remove_duplicates").on('click', function(){

	var text = $("#unique_lines").val();   
	var lines = text.split(/\r|\r\n|\n/);
	var count = lines.length;

	$("#count_unique_lines").html("Lines: " + "<strong>"+count+"</strong>");
	});

});