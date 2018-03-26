var start = new Date().getTime();
function makeShapeAppear(){

	if ( Math.random()>0.50)
	{
		document.getElementById("shape").style.borderRadius = "50%";
	}
	else{
		document.getElementById("shape").style.borderRadius ="0";
	}
	var top =(Math.random()*220)+100;
	document.getElementById("shape").style.top =top + "px";

		var bottom =(Math.random()*220)+100;
document.getElementById("shape").style.bottom =bottom + "px";

		var left =(Math.random()*600)+100;
	document.getElementById("shape").style.left =left+ "px";

		var width =(Math.random()*200)+100;
	document.getElementById("shape").style.width = width + "px";
	
	var height =(Math.random()*200)+50;
	document.getElementById("shape").style.height =height + "px";

	var r = Math.floor(Math.random()*255+1);
	var g = Math.floor(Math.random()*255+1);
	var b = Math.floor(Math.random()*255+1);
	 var colors = "rgb(" +r+", " +g+", "+b+")";
	 document.getElementById("shape").style.background = colors;

	document.getElementById("shape").style.display ="block";
	start = new Date().getTime();
}
function appearAfterDelay()
{
	setTimeout(makeShapeAppear, Math.random() * 1000);
}
appearAfterDelay();

document.getElementById("shape").onclick = function()
{
	document.getElementById("shape").style.display = "none"
	var end = new Date().getTime();
    var  timeDisplay = (end - start)/1000;	
    timeDisplay = timeDisplay + "s" ;
	document.getElementById("timeDisplayer").innerHTML = timeDisplay ;
	
appearAfterDelay();
}
