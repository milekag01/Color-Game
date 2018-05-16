var numsquare=6;
colors=generateRandomColor(numsquare);

function generateRandomColor(num)
{
	var arr=[];
	for(var i=0;i<num;i++)
		arr.push(randomColor());
	return arr;
}
function randomColor()
{
	var r=Math.floor(Math.random()*255);
	var g=Math.floor(Math.random()*255);
	var b=Math.floor(Math.random()*255);

	return "rgb(" + r + ", " + g + ", " + b + ")";
}
function pickColor()
{
	var random=Math.floor(Math.random()*colors.length);
	return colors[random];
}
var square=document.querySelectorAll(".square");
var displayColor=document.querySelector("#displaycolor");
var message=document.querySelector("#displayMessage");
var h1=document.querySelector("h1");
var reset=document.querySelector("#reset");
var easy=document.querySelector("#easy");
var hard=document.querySelector("#hard");

var pickedColor=pickColor();

displaycolor.textContent=pickedColor;

for(var i=0;i<square.length;i++)
	square[i].style.backgroundColor=colors[i];

for(var i=0;i<square.length;i++)
{
	square[i].addEventListener("click",function(){
		var clickedColor=this.style.backgroundColor;
		if(clickedColor===pickedColor)
		{
			for(var i=0;i<square.length;i++)
				square[i].style.backgroundColor=clickedColor;
			message.textContent= "Correct!";
			h1.style.backgroundColor=clickedColor;
			reset.textContent="Play Again?";
		}
		else
		{
			this.style.backgroundColor="#232323";
			message.textContent= "Try Again";
		}
	});
}

reset.addEventListener("click",function(){
	
	reset.textContent="New colors";
	message.textContent="";
	colors=generateRandomColor(numsquare);
	pickedColor=pickColor();
	displaycolor.textContent=pickedColor;

	for(var i=0;i<square.length;i++)
	square[i].style.backgroundColor=colors[i];
	h1.style.backgroundColor="steelblue";

});

easy.addEventListener("click",function(){
	this.classList.add("selected");
	hard.classList.remove("selected");
	message.textContent="";
	numsquare=3;
	reset.textContent="New colors";
	h1.style.backgroundColor="steelblue";
	
	easy.classList.add("selected");
	hard.classList.remove("selected");

	colors=generateRandomColor(numsquare);
	pickedColor=pickColor();
	displaycolor.textContent=pickedColor;

	for(var i=0;i<square.length;i++)
	{
		if(colors[i])
			square[i].style.backgroundColor=colors[i];
		else
			square[i].style.display="none";
	}
	
});

hard.addEventListener("click",function(){
	this.classList.add("selected");
	easy.classList.remove("selected");
	numsquare=6;
	message.textContent="";
	reset.textContent="New colors";
	h1.style.backgroundColor="steelblue";
	
	hard.classList.add("selected");
	easy.classList.remove("selected");

	colors=generateRandomColor(numsquare);
	pickedColor=pickColor();
	displaycolor.textContent=pickedColor;

	for(var i=0;i<square.length;i++)
	{
		square[i].style.backgroundColor=colors[i];
		square[i].style.display="block";
	}
});
