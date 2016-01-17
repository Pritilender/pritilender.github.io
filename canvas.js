var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");
ctx.fillStyle = "green";
//ctx.fillRect(10, 10, 100, 100);
var i = 0;
var txt = 0;

var dgr2rad = function(dgr){
	return dgr*(Math.PI/180);
}

var portion = function(dgr){
	return dgr/360*100;
}

var drawPercentage = function(prct, width, ival){
	ctx.lineWidth = width;
	var ang = -90;
	var step = ((360*prct)/180); //nadjemo deo kruga koji treba da se iscrta i izdelimo ga na 180 delova

	var interval = setInterval(function(){
		if((ang + 90) <= 360*prct){
			ctx.clearRect(120, 0, 200, 200);
			ctx.beginPath();
			ctx.arc(200, 60, 50, -Math.PI/2, dgr2rad(ang));
			ctx.stroke();
			ctx.closePath();
			ctx.fillText(portion(ang + 90).toFixed(2), 195, 60); //korekcija za stampu
			ang += step;
			console.log(ang);
		} else {
			clearInterval(interval);
		}
	}, ival);
}

drawPercentage(0.44, 20, 1);