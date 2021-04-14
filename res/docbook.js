window.onload = (event) => {
    console.log('The page has fully loaded');
    console.log("document.load", event, Date.now());
    
    var figContentMediaobj = document.querySelectorAll(".figure-contents > .mediaobject");
    for (var ii = 0; ii < figContentMediaobj.length; ii++){
	figContentMediaobj.item(ii).onclick = function() {
	    if (this.style.zIndex == 0) {
		this.style.zIndex = 1;
		this.style.backgroundColor = 'rgba(0,0,0,0.9)';
		this.style.top = 0;
		this.style.left = 0;
		this.style.position = 'fixed';
		this.style.width = '100vw';
		this.style.height = '100vh';
		document.querySelector("body").style.overflow = "hidden";
	    } else {
		this.style.zIndex = 0;
		this.style.backgroundColor = '#fff';
		this.style.top = 'auto';
		this.style.left = 'auto';
		this.style.position = 'relative';
		this.style.width = 'auto';
		this.style.height = 'auto';
		document.querySelector("body").style.overflow = "auto";
	    }
	}
    }

    var informafigs = document.querySelectorAll(".informalfigure");
    for (var ii = 0; ii < informafigs.length; ii++){
	informafigs.item(ii).onclick = function() {
	    if (this.style.zIndex == 0) {
		this.style.zIndex = 1;
		this.style.backgroundColor = 'rgba(0,0,0,0.9)';
		this.style.top = 0;
		this.style.left = 0;
		this.style.position = 'fixed';
		this.style.width = '100vw';
		this.style.height = '100vh';
		this.style.justifyContent = 'center';
		document.querySelector("body").style.overflow = "hidden";
	    } else {
		this.style.zIndex = 0;
		this.style.backgroundColor = '#fff';
		this.style.top = 'auto';
		this.style.left = 'auto';
		this.style.position = 'relative';
		this.style.width = 'auto';
		this.style.height = 'auto';
		this.style.justifyContent = 'start';
		document.querySelector("body").style.overflow = "auto";
	    }
	}
    }

    var inlinemediaobjs = document.querySelectorAll(".inlinemediaobject");
    for (var ii = 0; ii < inlinemediaobjs.length; ii++){
	inlinemediaobjs.item(ii).onclick = function() {
	    if (this.style.zIndex == 0) {
		this.style.zIndex = 1;
		this.style.backgroundColor = 'rgba(0,0,0,0.9)';
		this.style.top = 0;
		this.style.left = 0;
		this.style.position = 'fixed';
		this.style.width = '100vw';
		this.style.height = '100vh';
		this.style.justifyContent = 'center';
		this.style.alignItems = 'center';
		this.style.display = 'flex';
		document.querySelector("body").style.overflow = "hidden";
	    } else {
		this.style.zIndex = 0;
		this.style.backgroundColor = '#fff';
		this.style.top = 'auto';
		this.style.left = 'auto';
		this.style.position = 'relative';
		this.style.width = 'auto';
		this.style.height = 'auto';
		this.style.alignItems = 'auto';
		this.style.justifyContent = 'start';
		this.style.display = 'block'
		document.querySelector("body").style.overflow = "auto";
	    }
	}
    }

    var figContentsMediaObjImgs = document.querySelectorAll(".figure-contents > .mediaobject > .img");
    for (var ii = 0; ii < figContentsMediaObjImgs.length; ii++){
	figContentsMediaObjImgs.item(ii).onclick = function() {
	    if (this.style.padding == '0em') {
		console.log('selected');
		this.style.padding = '0px';
		this.style.maxWidth = '95%';
		this.style.maxHeight = '95%';
	    } else {
		console.log('deselected');
		this.style.padding = '0em';
		this.style.maxWidth = '100%';
		this.style.maxHeight = '31.5rem';
	    }
	}
    }
    
    var informalfigImgs = document.querySelectorAll(".informalfigure > .img");
    for (var ii = 0; ii < informalfigImgs.length; ii++){
	informalfigImgs.item(ii).onclick = function() {
	    if (this.style.padding == '0em') {
		console.log('selected');
		this.style.padding = '0px';
		this.style.maxWidth = '95%';
		this.style.maxHeight = '95%';
	    } else {
		console.log('deselected');
		this.style.padding = '0em';
		this.style.maxWidth = '70%';
		this.style.maxHeight = '8.75rem';
	    }
	}
    }

    var inlinemediaobjImgs = document.querySelectorAll(".informalfigure > .img");
    for (var ii = 0; ii < inlinemediaobjImgs.length; ii++){
	inlinemediaobjImgs.item(ii).onclick = function() {
	    if (this.style.padding == '0em') {
		console.log('selected');
		this.style.padding = '0px';
		this.style.maxWidth = '95%';
		this.style.maxHeight = '95%';
	    } else {
		console.log('deselected');
		this.style.padding = '0em';
		this.style.maxWidth = '100%';
		this.style.maxHeight = '1.75rem';
	    }
	}
    }
}
