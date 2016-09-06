
var downBanner=document.getElementById("downBanner");
var middle=document.getElementById("middle");
var count=0;
var sliderad=document.getElementById("sliderad");
var a=sliderad.getElementsByTagName("a");
var lbt=document.getElementById("lbt");
var rbt=document.getElementById("rbt");
var autoslider=setInterval(slider,5000);
var goodsClass=document.getElementById("goodsClass");
var goodsClassli=goodsClass.getElementsByTagName("li");
var classDetails=goodsClass.getElementsByClassName("classDetails");
var slidernav=document.getElementById("slidernav");
var slidernavli=slidernav.getElementsByTagName("li");
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
    autoslider=setInterval(slider,5000);
}

function handlerbt(){
    clearInterval(autoslider);
    slider();
    autoslider=setInterval(slider,5000);
}

function slider(){
    sliderad.appendChild(a[0]);
    count++;
    slidernavli[count-1].style.backgroundColor="#3e3e3e";
    count=count%slidernavli.length;
    slidernavli[count].style.backgroundColor="#B1191A";
}


