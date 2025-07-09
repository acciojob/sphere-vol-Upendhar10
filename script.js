let radius = document.getElementById('radius').innerText;
let volume = document.getElemntById('volume');

function volume_sphere() {
    //Write your code here
	// formula => (4/3)*(3.14)*r*r*r;

	radius = parseInt(radius);
	
	if(radius < 0 || isNaN(radius)) return NaN;

	let volum = 4/3 * (3.14) * (radius * radius * radius);

	volume.innerText = volum.toFixed(4);
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
