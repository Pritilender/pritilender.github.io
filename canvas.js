var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");
ctx.fillStyle = "green";
//ctx.fillRect(10, 10, 100, 100);
var i = 0;
var ang = 1;
var txt = 0;

var dgr2rad = function(dgr){
	return dgr*(Math.PI/180);
}

var portion = function(dgr){
	return dgr/360*100;
}

var interval = setInterval(function(){
	if(i <= 100){
		ctx.fillRect(10, 10, 100, i);
		i += 5;
	} else if(ang <= 360){		
		ctx.clearRect(120, 0, 200, 200);
		ctx.beginPath();
		ctx.arc(200, 60, 50, 0, dgr2rad(ang));
		ctx.stroke();
		ctx.fillText(portion(ang).toFixed(2), 195, 60);
		ang++;
	} else {
		clearInterval(interval);
	}
	}, 20);
