let volume = document.getElementById('volume');

function volume_sphere(event) {
    //Write your code here
	// formula => (4/3)*(3.14)*r*r*r;

	event.preventDefault();

	let radius = document.getElementById('radius').value;
	radius = parseInt(radius);
	
	if(radius < 0 || isNaN(radius)) {
		volume.value = NaN;
		return;
	}

	let volum = 4/3 * Math.PI * Math.pow(radius,3);

	volume.value = volum.toFixed(4);
  
} 

window.onload = () => {
	document.getElementById('MyForm').onsubmit = volume_sphere;
}
