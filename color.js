var color=random(6);
var pickedColor=colorpicked();
var colorDisplay=document.querySelector("span");
colorDisplay.textContent=pickedColor;
var square=document.querySelectorAll(".sqaure");
var message=document.querySelector("#message");
var button=document.querySelector("#reset");
var h1=document.querySelector("h1");
var easy=document.querySelector("#easy");
var hard=document.querySelector("#hard");
var medium=document.querySelector("#medium");
var mode="6";
display();
easy.addEventListener("click",function(){
	mode=3;
	easy.classList.add("selected");
	medium.classList.remove("selected");
	hard.classList.remove("selected");
	color=random(3);
	pickedColor=colorpicked();
	message.textContent=" ";
	h1.style.background="steelblue";
	colorDisplay.textContent=pickedColor;
	display();
});
medium.addEventListener("click",function(){
	mode=6;
	color=random(6);
	display();
	medium.classList.add("selected");
	easy.classList.remove("selected");
	hard.classList.remove("selected");
	h1.style.background="steelblue";
	colorDisplay.textContent=pickedColor;
	pickedColor=colorpicked();
	message.textContent=" ";
	colorDisplay.textContent=pickedColor;
	
});
hard.addEventListener("click",function(){
	mode=9;
	medium.classList.remove("selected");
	hard.classList.add("selected");
	easy.classList.remove("selected");
	h1.style.background="steelblue";
	colorDisplay.textContent=pickedColor;
	color=random(9);
	pickedColor=colorpicked();
	message.textContent=" ";
	colorDisplay.textContent=pickedColor;
	display();
});
for (var i = square.length - 1; i >= 0; i--) {
	square[i].style.background=color[i];
	square[i].addEventListener("click", function () {
		var boxColor= this.style.background;
		if(boxColor==pickedColor){
			right();
			message.textContent="Right";
			h1.style.background=pickedColor;
			button.textContent="Play Again?";
		}
		else {
			this.style.background="#232323";
			message.textContent="Try Again";
		}
	})
}
button.addEventListener("click", function(){
	color=random(mode);
	message.textContent=" ";
	this.textContent="New Colors"
	pickedColor=colorpicked();
	colorDisplay.textContent=pickedColor;
	for (var i = square.length - 1; i >= 0; i--) {
		square[i].style.background=color[i];
	}
	h1.style.background="steelblue";
})
function right(){
	for (var i = square.length - 1; i >= 0; i--) {
		square[i].style.background=pickedColor;
	}
}
function random(num){
	var arr=[];
	for (var i = 0; i <=num-1; i++) {
		arr[i]=generate();
	}
	return arr;
}
function generate(){
	r=Math.floor(Math.random()*256);
	g=Math.floor(Math.random()*256);
	b=Math.floor(Math.random()*256);
	return "rgb("+ r +", " + g +", " +b +")";

}
function colorpicked(){
	return color[Math.floor(Math.random()*color.length)];

}
function display(){
	for(var i=0;i<square.length;i++){
		if(color[i]){
			square[i].style.background=color[i];
			square[i].style.display="block";
		}
	 else{
	 	 square[i].style.display="none";
		}
	}
}