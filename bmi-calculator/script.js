"use strict"
var isMetric=false;
window.onload = function() {
};

function OnReset()
{
   $("#calcform .btn-group label").removeClass("active");
   $("#calcform .btn-group label:first-child").addClass("active");
}

function OnUnitMetric()
{
    document.getElementById("ftdiv").style.display = "none";
    document.getElementById("lbdiv").style.display = "none";
    document.getElementById("cmdiv").style.display = "flex";
    document.getElementById("kgdiv").style.display = "flex";
    isMetric = true;
}

function OnUnitUS()
{
    document.getElementById("ftdiv").style.display = "flex";
    document.getElementById("lbdiv").style.display = "flex";
    document.getElementById("cmdiv").style.display = "none";
    document.getElementById("kgdiv").style.display = "none";
    isMetric = false;
}

function OnCalc()
{
    if( isMetric )
    {
        var cm = document.getElementById("cm").value;
        var kg = document.getElementById("kg").value;
        if( cm=="" ) cm="0";
        if( kg=="" ) kg="0";
        cm=parseFloat(cm);
        kg=parseFloat(kg);
        var m=cm/100.0;
        var bmi=kg/(m*m);
        document.getElementById("bmi").value = bmi.toFixed(1);
    }
    else
    {
        var ft = document.getElementById("ft").value;
        var inch = document.getElementById("in").value;
        var lbs = document.getElementById("lb").value;
        if( ft=="" ) ft="0";
        if( inch=="" ) inch="0";
        if( lbs=="" ) lbs="0";
        ft=parseFloat(ft);
        inch=parseFloat(inch);
        lbs=parseFloat(lbs);
        inch += 12.0*ft;
        var bmi=703*lbs/(inch*inch);
        document.getElementById("bmi").value=bmi.toFixed(1);
    }

    var risk="",cat="";
    if( bmi<18.5 ) { cat="Underweight"; risk="Malnutrition Risk"; }
    else if( bmi<25 ) { cat="Normal Weight"; risk="Low Risk"; }
    else if( bmi<30 ) { cat="Overweight"; risk="Enchanced Risk"; }
    else if( bmi<35 ) { cat="Moderately Obese"; risk="Medium Risk"; }
    else if( bmi<40 ) { cat="Severely Obese"; risk="High Risk"; }
    else if( bmi>=40 ) { cat="Very Severely Obese"; risk="Very High Risk"; }

    document.getElementById("category").value = cat;
    document.getElementById("risk").value = risk;
}