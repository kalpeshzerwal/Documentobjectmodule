var s,change=0,checked,
animation ={

	settings: {
		board : document.getElementById("board"),
		switchoff : document.getElementById("switchoff"),
		state1 : document.getElementById("state1"),
		state2 : document.getElementById("state2"),
		state3 : document.getElementById("state3"),
		state4 : document.getElementById("state4"),
		btn : document.getElementById("btn"),
		switchon : document.getElementById("state1"),
		checked : document.getElementById("chkId")
	},

	init : function() {
		s = this.settings;
    this.bindUIActions();
	},

	bindUIActions: function() {
    s.btn.addEventListener("click",function(){
      animation.colorRev();
    });
    s.check.addEventListener("click",function(){
      animation.capture();
    });
  },

  changeColor : function() {
  	if(change == 0) {
  		change++;
  		s.switchBoard.style.backgroundColor="grey";
  		s.switchoff.innerHTML ="switch is on";
  		s.state1.style.backgroundColor="black";
  		s.even.style.backgroundColor="grey";
  		s.state11.style.backgroundColor="black";
  		s.even1.style.backgroundColor="grey";
  		s.switchoff1.style.display="none";
  		s.switchoff.style.display="block";
  	}
  	else {
  		change=0;	
  		s.switchBoard.style.backgroundColor="red";
  		s.switchoff.innerHTML ="switch is off";
  		s.state1.style.backgroundColor="grey";
  		s.even.style.backgroundColor="black";
  		s.state11.style.backgroundColor="grey";
  		s.even1.style.backgroundColor="black";
  		s.switchoff1.style.display="none";
  		s.switchoff.style.display="block";
  	}
  },

  checkBox : function() {
  	s.checked.checked;
  	if(checked == true) {
  		s.btn.style.backgroundColor="green";
  		s.switchoff.style.display="none";
  		s.switchoff1.innerHTML="switch is on hello";
  		setTimeout(function(){
  			switchoff1.style.display="none";
  		},5000);
  	}
  	else {
  		s.btn.style.backgroundColor="yellow";
  		s.switchoff.style.display="none";
  		s.switchoff1.style.display="none";
  	}
  }
}
animation.init();
