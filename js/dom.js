var change=0;
function changeColor() {	
    if(change == 0) {
        document.getElementById("board").style.backgroundColor="grey";
        change++;
        document.getElementById("switchoff").innerHTML ="switch is on";
        document.getElementById("state1").style.backgroundColor="black";
        document.getElementById("state2").style.backgroundColor="grey";
        document.getElementById("state3").style.backgroundColor="black";
        document.getElementById("state4").style.backgroundColor="grey";
        document.getElementById("switchon").style.display="none";
        document.getElementById("switchoff").style.display="block";
    }
    else {
        document.getElementById("board").style.backgroundColor="red";
        change =0;
        document.getElementById("switchoff").innerHTML ="switch is off";
        document.getElementById("state1").style.backgroundColor="grey";
        document.getElementById("state2").style.backgroundColor="black";
        document.getElementById("state3").style.backgroundColor="grey";
        document.getElementById("state4").style.backgroundColor="black";
        document.getElementById("switchon").style.display="none";
        document.getElementById("switchoff").style.display="block";
    }
}   
function checkBox() {
    var checked = document.getElementById("chkId").checked;
    console.log(checked);
    if(checked == true) {
        document.getElementById("btn").style.backgroundColor="green";
        document.getElementById("switchoff").style.display="none";
        document.getElementById("switchon").style.display="block";
        document.getElementById("switchon").innerHTML ="switch is on Hello";
        setTimeout(function(){
            document.getElementById('switchon').style.display="none";
        },5000);
    }
    else {
        document.getElementById("btn").style.backgroundColor="yellow";
        document.getElementById("switchhoff").style.display="none";
        document.getElementById("switchon").style.display="none";
    }
}

