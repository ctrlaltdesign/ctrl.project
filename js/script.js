

window.onload = function(){
var ww = window.innerWidth,
	wh = window.innerHeight,
	cvs = document.getElementById('can001'),
	ctx = cvs.getContext("2D");
	
	var sqr = ww < wh? ww : wh;
    
	w = cvs.width =	h = cvs.height = sqr;
	cvs.style.marginLeft = (sqr/2)*-1+"px";

}
