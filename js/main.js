/*var color_1 = new ZeroClipboard( document.getElementById("color-1") );
var color_2 = new ZeroClipboard( document.getElementById("color-2") );
var color_3 = new ZeroClipboard( document.getElementById("color-3") );
var color_4 = new ZeroClipboard( document.getElementById("color-4") );
var color_5 = new ZeroClipboard( document.getElementById("color-5") );
var color_6 = new ZeroClipboard( document.getElementById("color-6") );
*/
var zeroc = []
var dom = []
/*
for (var i = 0; i < 6; i++) {
	alert(i+1)
	var something = new ZeroClipboard( document.getElementById("color-"+String(i+1)) );
  	something.on( "ready", function( readyEvent ) {
  		something.on( "aftercopy", function( event ) {
   			alert("Copied text to clipboard: " + event.data["text/plain"] );
   			ZeroClipboard.focus(something);
   		});
  	});

    hex1.push(something);
}
*/

for (var i = 0; i < 6; i++) {
	zeroc.push(new ZeroClipboard( document.getElementById("color-"+String(i+1)) ));
	dom.push(document.getElementById("color-"+String(i+1)) );  
}

//alert(dom[0].style.backgroundColor);
//alert(dom[1].style.backgroundColor);

//var ext = 0;
//var overlaycolor = []
zeroc[0].on( "ready", function( readyEvent ) {
	this.on( "aftercopy", function( event ) {
		document.getElementById("overlay").style.backgroundColor = dom[0].style.backgroundColor;
	});
});
zeroc[1].on( "ready", function( readyEvent ) {
	this.on( "aftercopy", function( event ) {
		document.getElementById("overlay").style.backgroundColor = dom[1].style.backgroundColor;
	});
});
zeroc[2].on( "ready", function( readyEvent ) {
	this.on( "aftercopy", function( event ) {
		document.getElementById("overlay").style.backgroundColor = dom[2].style.backgroundColor;
	});
});
zeroc[3].on( "ready", function( readyEvent ) {
	this.on( "aftercopy", function( event ) {
		document.getElementById("overlay").style.backgroundColor = dom[3].style.backgroundColor;
	});
});
zeroc[4].on( "ready", function( readyEvent ) {
	this.on( "aftercopy", function( event ) {
		document.getElementById("overlay").style.backgroundColor = dom[4].style.backgroundColor;
	});
});
zeroc[5].on( "ready", function( readyEvent ) {
	this.on( "aftercopy", function( event ) {
		document.getElementById("overlay").style.backgroundColor = dom[5].style.backgroundColor;
	});
});


for (var i = 0; i < 6; i++) {
//	overlaycolor.push(dom[i].style.backgroundColor);
  	zeroc[i].on( "ready", function( readyEvent ) {
  		this.on( "aftercopy", function( event ) {

   			//document.getElementById("overlay").style.backgroundColor = overlaycolor[i];

   			document.getElementById("overlay").classList.add("active");
   			document.getElementById("overlay").classList.add("visible");
   			setTimeout(function(){
   				document.getElementById("overlay").classList.add("fade");
   			}, 0);
   			setTimeout(function(){
   				document.getElementById("overlay").classList.remove("active");
   				document.getElementById("overlay").classList.remove("visible");
   				document.getElementById("overlay").classList.remove("fade");
   			}, 1000);
   		});
  	});
}

var hex1 = document.getElementById("hex1");
var hex2 = document.getElementById("hex2");
var rgb = document.getElementById("rgb");
var rgba = document.getElementById("rgba");

/*setData("text/plain", "Blah");*/

var format = document.getElementById("format");

hex1.onclick = function() {
  format.innerHTML = "HEX - #1234EF";
  dom[0].setAttribute("data-clipboard-text", "#f15e27");
  dom[1].setAttribute("data-clipboard-text", "#f48020");
  dom[2].setAttribute("data-clipboard-text", "#f8a046");
  dom[3].setAttribute("data-clipboard-text", "#f6f7bd");
  dom[4].setAttribute("data-clipboard-text", "#655643");
  dom[5].setAttribute("data-clipboard-text", "#54c2ba");
};

hex2.onclick = function() {
	format.innerHTML = "HEX - 1234EF";
  dom[0].setAttribute("data-clipboard-text", "f15e27");
  dom[1].setAttribute("data-clipboard-text", "f48020");
  dom[2].setAttribute("data-clipboard-text", "f8a046");
  dom[3].setAttribute("data-clipboard-text", "f6f7bd");
  dom[4].setAttribute("data-clipboard-text", "655643");
  dom[5].setAttribute("data-clipboard-text", "54c2ba");
};

rgb.onclick = function() {
	format.innerHTML = "RGB - (255, 255, 255)";
  dom[0].setAttribute("data-clipboard-text", "rgb(241, 94, 39)");
  dom[1].setAttribute("data-clipboard-text", "rgb(244, 128, 32)");
  dom[2].setAttribute("data-clipboard-text", "rgb(248, 160, 70)");
  dom[3].setAttribute("data-clipboard-text", "rgb(246, 247, 189)");
  dom[4].setAttribute("data-clipboard-text", "rgb(101, 86, 67)");
  dom[5].setAttribute("data-clipboard-text", "rgb(84, 194, 186)");
};

rgba.onclick = function() {
	format.innerHTML = "RGBA - (12, 12, 12, 1.0)";
  dom[0].setAttribute("data-clipboard-text", "rgba(241, 94, 39, 1.0)");
  dom[1].setAttribute("data-clipboard-text", "rgba(244, 128, 32, 1.0)");
  dom[2].setAttribute("data-clipboard-text", "rgba(248, 160, 70, 1.0)");
  dom[3].setAttribute("data-clipboard-text", "rgba(246, 247, 189, 1.0)");
  dom[4].setAttribute("data-clipboard-text", "rgba(101, 86, 67, 1.0)");
  dom[5].setAttribute("data-clipboard-text", "rgba(84, 194, 186, 1.0)");
};