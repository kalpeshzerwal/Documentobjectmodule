var change=0;
alert("ok");
(function( $ ){
   $.fn.colorChange = function() {
   	if(change == 0) {
   		change++;
			$("#board").css("background","grey");
			$("#switchoff").html("switch is on");
			$("#state1").css("background","black");
			$("#state2").css("background","grey");
			$("#state3").css("background","black");
			$("#state4").css("background","grey");
			$("#switchon").css("display","none");
			$("#switchoff").css("display","block");
   	}
   	else {
   		change=0;
   		$("#board").css("background","red");
   		$("#switchoff").html("switch is off");
   		$("#state1").css("background","grey");
   		$("#state2").css("background","black");
   		$("#state3").css("background","grey");
   		$("#state4").css("background","black");
   		$("switchon").css("display","none");
   		$("#switchoff").css("display","block");
   	}
}
(function( $ ){
   $.fn.checkBox = function() {
   checked = $("capture").checked;
   console.log(check);
   if(checked == true){
   	  $("#btn").css("background","green");
   		$("#switchoff").css("display","none");
   		$("#switchon").css("display","block");
   		$("switchon").html("switch is on");
   		setTimeout(function(){
			$("#switchon").css("display","none");
				},5000);
   }
   else {
   	  $("#btn").css("background","yellow");
   	  $("#switchoff").css("display","none");
   		$("#switchon").css("display","none");
  }
}