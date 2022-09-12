function generateiFrame() {

    var url = document.getElementById("url").value;
    var name = document.getElementById("name").value;
    var w = document.getElementById("w").value;
    var w1 = document.getElementById("w1").value;
    var h = document.getElementById("h").value;
    var h1 = document.getElementById("h1").value;
    var align = document.getElementById("align").value;
    var scrolling = document.getElementById("scrolling").value;
    var border = document.getElementById("border").value;
    var bwidth = document.getElementById("bwidth").value;
    var bstyle = document.getElementById("bstyle").value;
    var bcolor = document.getElementById("bcolor").value;

    if(border == "no"){
        var code = "<iframe src=\"" + url + "\" name=\"" + name + "\" width=\"" + w + w1 + "\" height=\"" + h + h1 + "\" align=\"" + align + "\" scrolling=\"" + scrolling + "\" style=\"border: 0" + "\">\n</iframe>";
    }
    else{
        var code = "<iframe src=\"" + url + "\" name=\"" + name + "\" width=\"" + w + w1 + "\" height=\"" + h + h1 + "\" align=\"" + align + "\" scrolling=\"" + scrolling + "\" style=\"border: " + bwidth + " " + bcolor + " " + bstyle + "\">\n</iframe>";
    }

    var generated_code = document.getElementById("generated_code").innerText = code;
    var preview_div = document.getElementById("preview_div").innerHTML = code;
}