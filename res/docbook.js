// general
var onZIndex = 1;
var onBackgroundColor = 'rgba(0,0,0,0.9)';
var onTop = 0;
var onLeft = 0;
var onPosition = 'fixed';
var onWidth = '100vw';
var onHeight = '100vh';
var onJustifyContent = 'center';

var offZIndex = 0;
var offBackgroundColor = '#fff';
var offTop = 'auto';
var offLeft = 'auto';
var offPosition = 'relative';
var offWidth = 'auto';
var offHeight = 'auto';
var offJustifyContent = 'start';

// full size figures
var onFigMaxWidth = '95%';
var onFigMaxHeight = '95%';
var offFigMaxWidth = '100%';
var offFigMaxHeight = '31.5rem';

// medium sized figures
var onInformalMaxWidth = '95%';
var onInformalMaxHeight = '95%';
var offInformalMaxWidth = '70%';
var offInformalMaxHeight = '8.75rem';

// inline figures
var onInlineAlignItems = 'center';
var onInlineDisplay = 'flex';
var offInlineAlignItems = 'auto';
var offInlineDisplay = 'inline-block';
var onInlineMaxWidth = '95%';
var onInlineMaxHeight = '95%';
var offInlineMaxWidth = '100%';
var offInlineMaxHeight = '1rem';


window.onload = (event) => {

    var figContentMediaobj = document.querySelectorAll(".figure-contents > .mediaobject");
    for (var ii = 0; ii < figContentMediaobj.length; ii++){
	figContentMediaobj.item(ii).onclick = function() {
	    if (this.style.zIndex == 0) {
		this.style.zIndex = onZIndex;
		this.style.backgroundColor = onBackgroundColor;
		this.style.top = onTop;
		this.style.left = onLeft;
		this.style.position = onPosition;
		this.style.width = onWidth;
		this.style.height = onHeight;
		this.firstChild.style.maxWidth = onFigMaxWidth;
		this.firstChild.style.maxHeight = onFigMaxHeight;
		document.querySelector("body").style.overflow = "hidden";
	    } else {
		this.style.zIndex = offZIndex;
		this.style.backgroundColor = offBackgroundColor;
		this.style.top = offTop;
		this.style.left = offLeft;
		this.style.position = offPosition;
		this.style.width = offWidth;
		this.style.height = offHeight;
		this.firstChild.style.maxWidth = offFigMaxWidth;
		this.firstChild.style.maxHeight = offFigMaxHeight;
		document.querySelector("body").style.overflow = "auto";
	    }
	}
    }

    var informafigs = document.querySelectorAll(".informalfigure > .mediaobject");
    for (var ii = 0; ii < informafigs.length; ii++){
	informafigs.item(ii).onclick = function() {
	    if (this.style.zIndex == 0) {
		console.log('on if');
		this.style.zIndex = onZIndex;
		this.style.backgroundColor = onBackgroundColor;
		this.style.top = onTop;
		this.style.left = onLeft;
		this.style.position = onPosition;
		this.style.width = onWidth;
		this.style.height = onHeight;
		this.style.justifyContent = onJustifyContent;
		this.firstChild.style.maxWidth = onInformalMaxWidth;
		this.firstChild.style.maxHeight = onInformalMaxHeight;
		document.querySelector("body").style.overflow = "hidden";
	    } else {
		console.log('off if');
		this.style.zIndex = offZIndex;
		this.style.backgroundColor = offBackgroundColor;
		this.style.top = offTop;
		this.style.left = offLeft;
		this.style.position = offPosition;
		this.style.width = offWidth;
		this.style.height = offHeight;
		this.style.justifyContent = offJustifyContent;
		this.firstChild.style.maxWidth = offInformalMaxWidth;
		this.firstChild.style.maxHeight = offInformalMaxHeight;
		document.querySelector("body").style.overflow = "auto";
	    }
	}
    }

    var inlinemediaobjs = document.querySelectorAll(".inlinemediaobject");
    for (var ii = 0; ii < inlinemediaobjs.length; ii++){
	inlinemediaobjs.item(ii).onclick = function() {
	    if (this.style.zIndex == 0) {
		console.log('on il');
		this.style.zIndex = onZIndex;
		this.style.backgroundColor = onBackgroundColor;
		this.style.top = onTop;
		this.style.left = onLeft;
		this.style.position = onPosition;
		this.style.width = onWidth;
		this.style.height = onHeight;
		this.style.justifyContent = onJustifyContent;
		this.style.alignItems = onInlineAlignItems;
		this.style.display = onInlineDisplay;
		this.firstChild.style.maxWidth = onInlineMaxWidth;
		this.firstChild.style.maxHeight = onInlineMaxHeight;
		document.querySelector("body").style.overflow = "hidden";
	    } else {
		console.log('off il');
		this.style.zIndex = offZIndex;
		this.style.backgroundColor = offBackgroundColor;
		this.style.top = offTop;
		this.style.left = offLeft;
		this.style.position = offPosition;
		this.style.width = offWidth;
		this.style.height = offHeight;
		this.style.alignItems = offInlineAlignItems;
		this.style.justifyContent = offJustifyContent;
		this.style.display = offInlineDisplay;
		this.firstChild.style.maxWidth = offInlineMaxWidth;
		this.firstChild.style.maxHeight = offInlineMaxHeight;
		document.querySelector("body").style.overflow = "auto";
	    }
	}
    }
}
