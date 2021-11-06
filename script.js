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
	const material=new THREE.MeshBasicMaterial({map:texture.load("grass.png")});
	
	const mesh=new THREE.Mesh(plane,material);
	
	scene.add(mesh);
	
	mesh.rotation.x=radians(-80);
	
	camera.position.z=510;
	const button1=document.createElement("button");
	const button2=document.createElement('button');
	
	button1.textContent="<";
	button2.textContent=">";
	
	button1.className="control";
	button2.className="control";
	
	const div=document.body.children[1];
	
	console.log(new Pleyer());
	
	div.append(button1);
	div.append(button2);
	
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
