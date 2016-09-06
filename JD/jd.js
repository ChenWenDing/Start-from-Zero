
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



var serA=document.getElementById("serA");
var serB=document.getElementById("serB");
var serAli=serA.getElementsByTagName("li");
var serBul=serB.getElementsByTagName("ul");
serAli=Array.prototype.slice.call(serAli,0);
serBul=Array.prototype.slice.call(serBul,0);

for(var i=0;i<serAli.length;i++){
	(function(n){
		    serAli[i].onmouseenter=function(){
			serAli.forEach(function(x){x.style.borderTop="none";x.style.borderBottom="1px solid #ddd";});
			serAli[n].style.borderTop="2px solid #B1191A";
			serAli[n].style.borderBottom="none";
			serBul.forEach(function(x){x.style.display="none";});
			serBul[n].style.display="block";
		}
	}(i));
}