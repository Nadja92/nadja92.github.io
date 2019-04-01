document.getElementById('page1').onclick = function(){

		// disable previous active
		document.getElementById('page2').classList.remove('active');
		document.getElementById('page3').classList.remove('active');
		document.getElementById('page4').classList.remove('active');

		// set active
		document.getElementById('page1').classList.add('active');

		// load document
    	document.getElementById('pageHolder').src = "pages/exponential-function-and-graphic.html"
}

document.getElementById('page2').onclick = function(){
    	
    	// disable previous active
		document.getElementById('page1').classList.remove('active');
		document.getElementById('page3').classList.remove('active');
		document.getElementById('page4').classList.remove('active');

		// set active
		document.getElementById('page2').classList.add('active');

		// load document
    	document.getElementById('pageHolder').src = "pages/exponential-equation-and-inequalities.html"
}

document.getElementById('page3').onclick = function(){

		// disable previous active
		document.getElementById('page1').classList.remove('active');
		document.getElementById('page2').classList.remove('active');
		document.getElementById('page4').classList.remove('active');

		// set active
		document.getElementById('page3').classList.add('active');

		// load document	    
		document.getElementById('pageHolder').src = "pages/logarithmic-function-and-graphic.html"
}

document.getElementById('page4').onclick = function(){

		// disable previous active
		document.getElementById('page1').classList.remove('active');
		document.getElementById('page2').classList.remove('active');
		document.getElementById('page3').classList.remove('active');

		// set active
		document.getElementById('page4').classList.add('active');

		// load document
      	document.getElementById('pageHolder').src = "pages/logarithmic-equation-and-inequalities.html"
}