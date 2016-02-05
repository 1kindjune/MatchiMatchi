function main(){
	var sketch = document.getElementById('sketch');
	var context = sketch.getContext("2d");

	//Face
	context.fillStyle = "#c69"
	context.beginPath();
	context.arc(150, 150, 100, 0, 2 * Math.PI, true);
	context.closePath();
	context.fill();

	//Eyes - white
	context.fillStyle = "#fff"
	context.beginPath();
	context.arc(110, 130, 25, 0, 2 * Math.PI, true);
	context.closePath();
	context.fill();
	context.fillStyle = "#fff"
	context.beginPath();
	context.arc(190, 130, 25, 0, 2 * Math.PI, true);
	context.closePath();
	context.fill();

	//Pupils - black
	context.fillStyle = "#445"
	context.beginPath();
	context.arc(110, 135, 20, 0, 2 * Math.PI, true);
	context.closePath();
	context.fill();	
	context.fillStyle = "#445"
	context.beginPath();
	context.arc(190, 135, 20, 0, 2 * Math.PI, true);
	context.closePath();
	context.fill();		

	//Mouth - white half circle
	context.fillStyle = "#fff"
	context.beginPath();
	context.arc(150, 180, 30, 1 * Math.PI, 2 * Math.PI, true);
	context.closePath();
	context.fill();

}
document.addEventListener('DOMContentLoaded', main);