$(document).ready(function() {
    $(".uppercase").click(function() {
        var fieldtocopy = $(".info-textarea").val();
        var fieldtocopy = fieldtocopy.toUpperCase();
        $(".info-textarea").val(fieldtocopy);
    });

    $(".lowercase").click(function() {
        var fieldtocopy = $(".info-textarea").val();
        var fieldtocopy = fieldtocopy.toLowerCase();
        $(".info-textarea").val(fieldtocopy);
    });

    $(".titlecase").click(function() {
        var fieldtocopy = $(".info-textarea").val();
        var fieldtocopy = fieldtocopy.toLowerCase().split(' ');
        for (var i = 0; i < fieldtocopy.length; i++) {
            fieldtocopy[i] = fieldtocopy[i].charAt(0).toUpperCase() + fieldtocopy[i].slice(1) + " ";
        }

        fieldtocopy = fieldtocopy.join('');
        $(".info-textarea").val(fieldtocopy);
    });

    $(".sentencecase").click(function() {
        var fieldtocopy = $(".info-textarea").val();
        var fieldtocopy = fieldtocopy.toLowerCase().split('. ');
        for (var i = 0; i < fieldtocopy.length; i++) {
            fieldtocopy[i] = fieldtocopy[i].charAt(0).toUpperCase() + fieldtocopy[i].slice(1) + ". ";
        }

        fieldtocopy = fieldtocopy.join('');
        $(".info-textarea").val(fieldtocopy);
    });

    var windowwidth = $(window).width();
    if (windowwidth <= 767) {
        $(".info-textarea").attr({
            rows: "10"
        });
    };

});

function getvalue() {
    var fieldlength = $(".info-textarea").val().length;
    $(".charwithspace").html(fieldlength);

    var fieldlength1 = $(".info-textarea").val().split(/[\s\.\?]+/).length;
    var whitespaces = fieldlength1 - 1;

    var fieldlength2 = fieldlength - fieldlength1 + 1;
    $(".charwithoutspace").html(fieldlength2);
    $(".whitespaces").html(whitespaces);

    var fieldvalue = $.trim($(".info-textarea").val()).length;

    if (fieldvalue >= 1) {
        var fieldvalue1 = $(".info-textarea").val().match(/\b[-?(\w+)?]+\b/gi);

        $(".words").html(fieldvalue1.length);
    };

    if (fieldlength < 1) {
        $(".words").html(0);
    };
};

$(document).ready(function() {
    $("#usertext").keyup(function() {
        var usertext = $("#usertext").val();
        var charlength = $("#usertext").val().length;
        var fieldlength1 = $(".info-textarea").val().split(" ").length;
        var whitespaces = fieldlength1 - 1;
        var charwithoutspace = charlength - fieldlength1 + 1;
        var fieldvalue = $.trim($(".info-textarea").val()).length;
        if (fieldvalue >= 1) {
            var fieldvalue1 = $.trim($(".info-textarea").val()).match(/\b[-?(\w+)?]+\b/gi);
            localStorage.setItem("words", fieldvalue1.length);
        };

        localStorage.setItem("text", usertext);
        localStorage.setItem("charwithspace", charlength);
        localStorage.setItem("whitespaces", whitespaces);
        localStorage.setItem("charwithoutspace", charwithoutspace);

    });
    $("#usertext").val(localStorage.text);
    $(".whitespaces").text(localStorage.whitespaces);
    $(".charwithspace").text(localStorage.charwithspace);
    $(".charwithoutspace").text(localStorage.charwithoutspace);
    $(".words").text(localStorage.words);
    if (localStorage.charwithspace < 1) {
        $(".words").text(0);
    };
});

$('.copy-button').click(function() {
    $(this).CopyToClipboard();
});

function showMsg(msgtext) {
    var x = document.getElementById("snackbar");
    x.innerHTML = msgtext;
    x.className = "show";
    setTimeout(function() {
        x.className = x.className.replace("show", "");
    }, 3000);
};

// count characters on selection
function getSelectedText() {
    if (window.getSelection) {
        return window.getSelection().toString();
    } else if (document.selection) {
        return document.selection.createRange().text;
    }
    return '';
}

$('#usertext').mouseup(function() {
    if (getSelectedText().length > 0) {
        $("#selectionresult").show();
        $("#selectedletters").html(getSelectedText().length);
    } else {
        $("#selectedletters").html("0");
    }
});

$('#usertext').keyup(function() {
    if (getSelectedText().length > 0) {
        $("#selectionresult").show();
        $("#selectedletters").html(getSelectedText().length);
    } else {
        $("#selectedletters").html("0");
    }
});
// end

// count space on selection
$('#usertext').mouseup(function() {
    if (getSelectedText().length > 0) {
        var selectedvalue = getSelectedText().split(" ").length;
        var selectedspace = selectedvalue - 1;
        $("#selectedspace").html(selectedspace);
    } else {
        $("#selectedspace").html("0");
    }
});

$('#usertext').keyup(function() {
    if (getSelectedText().length > 0) {
        var selectedvalue = getSelectedText().split(" ").length;
        var selectedspace = selectedvalue - 1;
        $("#selectedspace").html(selectedspace);
    } else {
        $("#selectedspace").html("0");
    }
});
// end

// count characters without spaces on selection

var fieldlength = $(".info-textarea").val().length;
$(".charwithspace").html(fieldlength);

var fieldlength1 = $(".info-textarea").val().split(" ").length;
var whitespaces = fieldlength1 - 1;

var fieldlength2 = fieldlength - fieldlength1 + 1;
$(".charwithoutspace").html(fieldlength2);
$(".whitespaces").html(whitespaces);

$('#usertext').mouseup(function() {
    if (getSelectedText().length > 0) {
        var selectedtextlength = getSelectedText().length;
        var selectedvalue = getSelectedText().split(" ").length;
        var selectedspace = selectedvalue - 1;
        var lettersnospace = selectedtextlength - selectedvalue + 1;
        $("#selectedlettersnospace").html(lettersnospace);
    } else {
        $("#selectedlettersnospace").html("0");
    }
});

$('#usertext').keyup(function() {
    if (getSelectedText().length > 0) {
        var selectedtextlength = getSelectedText().length;
        var selectedvalue = getSelectedText().split(" ").length;
        var selectedspace = selectedvalue - 1;
        var lettersnospace = selectedtextlength - selectedvalue + 1;
        $("#selectedlettersnospace").html(lettersnospace);
    } else {
        $("#selectedlettersnospace").html("0");
    }
});
// end

// count words on selection

$('#usertext').mouseup(function() {
    if (getSelectedText().length > 0) {
        var selectionlength = getSelectedText().length;
        if (selectionlength >= 1) {
            var trimsplit = $.trim(getSelectedText()).match(/\b[-?(\w+)?]+\b/gi).length;
            $("#selectedwords").html(trimsplit);
        }
    } else {
        $("#selectedwords").html("0");
    }
});

$('#usertext').keyup(function() {
    if (getSelectedText().length > 0) {
        var selectionlength = getSelectedText().length;
        if (selectionlength >= 1) {
            var trimsplit = $.trim(getSelectedText()).match(/\b[-?(\w+)?]+\b/gi).length;
            $("#selectedwords").html(trimsplit);
        }
    } else {
        $("#selectedwords").html("0");
    }
});
// end

$("#smlength").click(function() {
    $('html,body').animate({
            scrollTop: $("#accordionlink").offset().top
        },
        'slow');
});

$("#tools").click(function() {
    $('html,body').animate({
            scrollTop: $(".bannercontainer").offset().top
        },
        'slow');
});