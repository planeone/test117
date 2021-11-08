function drawGame(){
	const scene=new THREE.Scene();
	const camera=new THREE.PerspectiveCamera(45,window.innerWidth/window.innerHeight,0.1,1000);
	
	const render=new THREE.WebGLRenderer();
	
	render.setSize(window.innerWidth,window.innerHeight);
	
	document.body.prepend(render.domElement);
	render.domElement.id="gameCanvas";
	
	const light=new THREE.DirectionalLight(0xffffff,1);
	const pointLight=new THREE.PointLight(0xffffff,1);
	
	const texture=new THREE.TextureLoader();
	
	scene.background=texture.load('./nebo.jpg');
	
	const plane=new THREE.PlaneGeometry(2000,1000);
	const material=new THREE.MeshBasicMaterial({map:texture.load("grass.png")});
	
	const mesh=new THREE.Mesh(plane,material);
	
	const mesh2=new THREE.Mesh(plane,material);
	
	const carMaterial=new THREE.MeshBasicMaterial({map:texture.load("Rx7_rx9_rx7_color_color.png")});
	
	const pleyer=new Pleyer({scene:scene,rotate:{x:0,y:radians(180),z:0},pos:{x:0,y:1,z:500},scale:{x:1,y:1,z:1},car:"carPleyer.obj",materialCar:carMaterial});
	
	pleyer.drawCar();
	
	console.log(pleyer);

	scene.add(light);
	scene.add(pointLight);
	scene.add(mesh);
	scene.add(mesh2);
	
	mesh.rotation.x=radians(-90);
	mesh2.rotation.x=radians(-90);
	
	mesh2.position.z=-1000
	
	const meshArr=[mesh,mesh2];
	
	camera.position.z=520;
	camera.rotation.x=radians(-10);
	camera.position.y=10;
	light.position=camera.position;
	pointLight.position=camera.position;
	
	
	const button1=document.createElement("button");
	const button2=document.createElement('button');
	
	button1.textContent="<";
	button2.textContent=">";
	
	button1.className="control";
	button2.className="control";
	
	const div=document.body.children[1];
	
	div.style.top=window.innerHeight-(parseInt(div.clientHeight)+200)+"px";
	div.style.paddingLeft="100px";
	
	div.append(button1);
	div.append(button2);
	
	window.addEventListener("resize",function(){
		div.style.top=window.innerHeight-(parseInt(div.clientHeight)+200)+"px";
		div.style.paddingLeft="100px";
		render.setSize(window.innerWidth,window.innerHeight);
		camera.aspect=window.innerWidth/window.innerHeight;
		camera.updateProjectionMatrix();
	});
	function cycle(){
		meshArr.forEach(function(elem){
			elem.position.z+=1;
			if(elem.position.z>=1000){
				elem.position.z=-1000;
			}
		});
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
	drawGame();
	button.remove();
});
button.addEventListener("mouseover",function(){
	button.style.background="#00ffff";
});
button.addEventListener("mouseout",function(){
	button.style.background="url(\"imageButton.png\")";
});
