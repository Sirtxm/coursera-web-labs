function temperature() {
    var c = document.getElementById("celsius").value;
    var f = (c*9/5) + 32
    document.getElementById("fahrenheit").value = f
}

function weight(){
    var kg = document.getElementById("kilo").value;
    var p = kg * 2.2
    document.getElementById("pounds").value = p
}

// function weight(){
//     //To convert KGs to Pounds
//     // KG * 2.2
//     var kg = document.getElementById("kilo").value;
//     var p = kg * 2.2
//     document.getElementById("pounds").value = p
// }

function distance(){
    var km = document.getElementById("km").value;
    var m = km*0.6137
    document.getElementById("miles").value = m
}