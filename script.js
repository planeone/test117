function radians(deg){
	return (Math.PI*deg)/180
}


function drawGame(){
	const scene=new THREE.Scene();
	const camera=new THREE.PerspectiveCamera(45,window.innerWidth/window.innerHeight,0.1,1000);
	
	const render=new THREE.WebGLRenderer();
	
	render.setSize(window.innerWidth,window.innerHeight);
	
	document.body.prepend(render.domElement);
	render.domElement.id="gameCanvas";
	
	let texture=new THREE.TextureLoader();
	
	scene.background=texture.load('./nebo.jpg');
	
	const plane=new THREE.PlaneGeometry(2000,1000);
	const plane2=new THREE.PlaneGeometry(100,1000);
	
	const material=new THREE.MeshBasicMaterial({map:texture.load("grass.jpg")});
	const matirialRoad=new THREE.MeshBasicMaterial({map:texture.load("road.jpg")});
	
	const mesh=new THREE.Mesh(plane,material);
	const road=new THREE.Mesh(plane2,matirialRoad);
	
	scene.add(mesh);
	
	mesh.rotation.x=radians(-80);
	road.rotation.x=radians(-80);
	road.position.y=0.1;
	
	camera.position.z=510;
	
	window.addEventListener("resize",function(){
		render.setSize(window.innerWidth,window.innerHeight);
		camera.aspect=window.innerWidth/window.innerHeight;
		camera.updateProjectionMatrix();
	});
	function cycle(){
		requestAnimationFrame(cycle);
		render.render(scene,camera);
	}
	cycle();
}
const button=document.getElementById("start");
button.addEventListener("mousedown",function(){
	button.style.background="#00ff00";
});
button.addEventListener("mouseup",function(){
	button.style.background="url(\"imageButton.png\")";
	button.remove();
	drawGame();
});
