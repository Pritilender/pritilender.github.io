var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");
ctx.fillStyle = "green";
//ctx.fillRect(10, 10, 100, 100);
var i = 0;
var ang = 0;
var dgr2rad = 0.0873;
var txt = 0;
var interval = setInterval(function(){
	if(i <= 100){
		ctx.fillRect(10, 10, 100, i);
		i += 5;

	} else if(ang < 2 * Math.PI){		
		ctx.clearRect(120, 0, 200, 200);
		ang += dgr2rad;
		ctx.beginPath();
		ctx.arc(200, 60, 50, 0, ang);
		ctx.stroke();
		ctx.fillText(txt++, 195, 60);
		console.log(ang);
	} else {
		clearInterval(interval);
	}
	}, 20);
