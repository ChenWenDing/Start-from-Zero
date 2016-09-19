$(document).ready(function(){

var downBanner=document.getElementById("downBanner");
var middle=document.getElementById("middle");
var sliderad=document.getElementById("sliderad");
var a=sliderad.getElementsByTagName("a");
var autoslider=setInterval(slider,5000);
var goodsClass=document.getElementById("goodsClass");
var goodsClassli=goodsClass.getElementsByTagName("li");
var classDetails=goodsClass.getElementsByClassName("classDetails");
var slidernav=document.getElementById("slidernav");
var slidernavli=slidernav.getElementsByTagName("li");
var count=0;

var lbt=document.getElementById("lbt");
var rbt=document.getElementById("rbt");
lbt.onclick=handlelbt;
rbt.onclick=handlerbt;


downBanner.onclick=function(){
	middle.style.display="none";
}

for(var i=0;i<goodsClassli.length;i++){
	(function(n){
		goodsClassli[i].onmouseenter=function(){
			if (getScrollOffsets().y<=256) {
				classDetails[n].style.top=(-1-n*31)+"px";
			}else{
				classDetails[n].style.top=(-1-n*31+getScrollOffsets().y-256)+"px";
			};
	    }
    }(i)
    );
}

for(var i=0;i<a.length;i++){
	var j=document.createElement("li");
	j.innerHTML=i+1;
	slidernav.appendChild(j);
	(function(n){
		slidernavli[i].onmouseenter=function(){
			while(count!=n) {
				slider();
			};
			clearInterval(autoslider);
		};
		a[i].onmouseenter=function(){
			clearInterval(autoslider);
		};
		a[i].onmouseleave=function(){
			autoslider=setInterval(slider,5000);
		};
	}(i));
}

function getScrollOffsets(w){
	w=w||window;
	if(w.pageXOffset!=null){
		return {x:w.pageXOffset,y:w.pageYOffset};
	}

	var d=w.document;
	if(document.compatMode=="CSS1Compat"){
		return {x:d.documentElement.ScrollLeft,y:d.documentElement.ScrollTop};
	}
	return {x:d.body.ScrollLeft,y:d.body.ScrollTop};
}


function handlelbt(){
    clearInterval(autoslider);
    sliderad.insertBefore(a[a.length-1],a[0]);
    slidernavli[count].style.backgroundColor="#3e3e3e";
    count=(count+slidernavli.length-1)%slidernavli.length;
    slidernavli[count].style.backgroundColor="#B1191A";
    autoslider=setInterval(slider,5000);
}

function handlerbt(){
    clearInterval(autoslider);
    slider();
    autoslider=setInterval(slider,5000);
}

function slider(){
    sliderad.appendChild(a[0]);
    slidernavli[count].style.backgroundColor="#3e3e3e";
    count++;
    count=count%slidernavli.length;
    slidernavli[count].style.backgroundColor="#B1191A";
}



var firstMenu=document.querySelector("#lifeServiceDown .firstMenu");
var firstMenuli=document.querySelectorAll("#lifeServiceDown .firstMenu>li");
var secondMenu=document.querySelectorAll("#lifeServiceDown .secondMenu");
var secondMenuli;
var thirdMenu;


for(var i=0;i<firstMenuli.length;i++){
	(function(n){
		    firstMenuli[i].onmouseenter=function(){
		    firstMenuli=Array.prototype.slice.call(firstMenuli,0);
			secondMenu=Array.prototype.slice.call(secondMenu,0);
			firstMenuli.forEach(function(x){x.style.borderTop="none";x.style.borderBottom="1px solid #ddd";});
			firstMenuli[n].style.borderTop="2px solid #B1191A";
			firstMenuli[n].style.borderBottom="none";
			secondMenu.forEach(function(x){x.style.display="none";});
			secondMenu[n].style.display="block";
			secondMenuli=secondMenu[n].querySelectorAll("#lifeServiceDown .secondMenu>li");
			thirdMenu=secondMenu[n].getElementsByClassName("thirdMenu");
			for(var i=0;i<secondMenuli.length;i++){
				(function(n){
					    secondMenuli[i].onmouseenter=function(){
					    secondMenuli=Array.prototype.slice.call(secondMenuli,0);
			            thirdMenu=Array.prototype.slice.call(thirdMenu,0);	
						secondMenuli.forEach(function(x){x.style.background="#fff";x.getElementsByTagName("a")[0].style.color="#666";});
						secondMenuli[n].style.background="url(images/firstFrame/lifeService/iframe-san.png) center 0 no-repeat";
						secondMenuli[n].getElementsByTagName("a")[0].style.color="#fff";
						thirdMenu.forEach(function(x){x.style.display="none";});
						thirdMenu[n].style.display="block";
					}
				}(i));
			}
		}
	}(i));
}

	$(".lifeu").bind({"mouseenter":lifeslide,"mouseleave":function(){$(".lifeu").bind("mouseenter",lifeslide)}});

	$("#lifeServiceDown .close").click(function(){
		$("#lifeServiceUp").slideDown();
		$(".lifeu").unbind("mouseenter");
	});

	$("#lifeServiceDown").find("*").not(".close").click(function(e){
		e.stopPropagation();
	});

	$("body").click(function(){
		$("#lifeServiceUp").slideDown();
	});

	function lifeslide(){
    	$("#lifeServiceUp").slideUp();
    }
});