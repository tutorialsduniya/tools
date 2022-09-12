// Generate a password string
function randString(id, dataSize){
    var dataSet = $(id).attr("data-character-set").split(',');  
    var possible = '';
    if($.inArray('a-z', dataSet) >= 0){
      possible += 'abcdefghijklmnopqrstuvwxyz';
    }
    if($.inArray('A-Z', dataSet) >= 0){
      possible += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }
    if($.inArray('0-9', dataSet) >= 0){
      possible += '0123456789';
    }
    if($.inArray('#', dataSet) >= 0){
      possible += '![]{}()%&*$#^<>~@|';
    }
    var text = '';
  
  
    for(var i=0; i < dataSize; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
  
    return text;
  }
  
  // Create a new password on page load
  $('input[rel="gp"]').each(function(){
    $(this).val(randString($(this)));
  });

  // Auto Select Pass On Focus
  $('input[rel="gp"]').on("click", function () {
     $(this).select();
  });

  var slider = document.getElementById("myRange");
  var output = document.getElementById("demo");
  output.innerHTML = slider.value;

  var field = $('input[rel="gp"]');
  field.val(randString(field, slider.value));
  
  slider.oninput = function() {
    output.innerHTML = this.value;
    var field = $('input[rel="gp"]');
    field.val(randString(field, slider.value));
  }

  // Create a new password on refresh
  $(".getNewPass").click(function(){
    var field = $('input[rel="gp"]');
    field.val(randString(field, slider.value));
  });

  // include uppercase
  $(".include_uppercase").change(function() {
      var isUppercaseChecked = $(this).is(':checked');
      var field = $('input[rel="gp"]');
  
      if (isUppercaseChecked){
      var existingValue = $('input[rel="gp"]').attr("data-character-set");
      var foundValue = existingValue.indexOf("A-Z");
  
      if (foundValue == -1) {
        var exist = $('input[rel="gp"]').attr("data-character-set");
      $('input[rel="gp"]').attr("data-character-set", exist+",A-Z");
      
      field.val(randString(field, slider.value));
      }
     }
  
  // remove uppercase
  
      if (!isUppercaseChecked) {
  
      var existingValue = $('input[rel="gp"]').attr("data-character-set");
  
      var replaceVal = existingValue.replace(",A-Z","");
  
      $('input[rel="gp"]').attr("data-character-set", replaceVal); 
  
      field.val(randString(field, slider.value));
  
     }
  
  });
  
  
  // include lowercase
  
  $(".include_lowercase").change(function() {
      var isLowercaseChecked = $(this).is(':checked');
      var field = $('input[rel="gp"]');
  
      if (isLowercaseChecked){
      var existingValue = $('input[rel="gp"]').attr("data-character-set");
      var foundValue = existingValue.indexOf("a-z");
  
      if (foundValue == -1) {
        var exist = $('input[rel="gp"]').attr("data-character-set");
      $('input[rel="gp"]').attr("data-character-set", exist+",a-z");
      
      field.val(randString(field, slider.value));
      }
     }
  
  // remove lowercase
  
      if (!isLowercaseChecked) {
  
      var existingValue = $('input[rel="gp"]').attr("data-character-set");
  
      var replaceVal = existingValue.replace("a-z","");
  
      $('input[rel="gp"]').attr("data-character-set", replaceVal); 
  
      field.val(randString(field, slider.value));
  
     }
  
  });

  // include numbers
  $(".include_numbers").change(function() {
      var isNumbersChecked = $(this).is(':checked');
      var field = $('input[rel="gp"]');
  
      if (isNumbersChecked){
      var existingValue = $('input[rel="gp"]').attr("data-character-set");
      var foundValue = existingValue.indexOf("0-9");
      if (foundValue == -1) {
        var exist = $('input[rel="gp"]').attr("data-character-set");
      $('input[rel="gp"]').attr("data-character-set", exist+",0-9");
      
      field.val(randString(field, slider.value));
      }
     }
  
  // remove numbers
      if (!isNumbersChecked) {
  
      var existingValue = $('input[rel="gp"]').attr("data-character-set");
  
      var replaceVal = existingValue.replace(",0-9","");
  
      $('input[rel="gp"]').attr("data-character-set", replaceVal); 
  
      field.val(randString(field, slider.value));
  
     }
  });

  // include symbols
  $(".include_symbols").change(function() {
      var isSymbolsChecked = $(this).is(':checked');
      var field = $('input[rel="gp"]');
  
      if (isSymbolsChecked){
      var existingValue = $('input[rel="gp"]').attr("data-character-set");
      var foundValue = existingValue.indexOf("#");
      if (foundValue == -1) {
        var exist = $('input[rel="gp"]').attr("data-character-set");
      $('input[rel="gp"]').attr("data-character-set", exist+",#");
      
      field.val(randString(field, slider.value));
      }
     }
  
  // remove symbols
      if (!isSymbolsChecked) {
  
      var existingValue = $('input[rel="gp"]').attr("data-character-set");
  
      var replaceVal = existingValue.replace(",#","");
  
      $('input[rel="gp"]').attr("data-character-set", replaceVal); 
  
      field.val(randString(field, slider.value));
  
     }
  });
  
  $(".icon_div").click(function(){
   $('.fa-refresh').toggleClass("rotate_icon");
  });
  
  
  $(".copyPass").click(function(){
    var copyText = document.getElementById("password");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
    $('.copied').show();
    setTimeout(function hideCopied(){$('.copied').hide();}, 7000);
  });