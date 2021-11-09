class Pleyer{
	constructor(options){
		this.scene=options.scene;
		this.objLoade=new THREE.OBJLoader();
		this.pos=options.pos;
		this.rotate=options.rotate;
		this.scale=options.scale;
		this.materialCar=options.materialCar;
		this.car=options.car;
		this.robot=options.robot;
	}
	draw(file,pos,rotation,scale){
		var objMesh;
		this.objLoade.load(this.car,(obj)=>{
			obj.position.set(pos.x,pos.y,pos.z);
			obj.rotation.set(rotation.x,rotation.y,rotation.z);
			obj.scale.set(scale.x,scale.y,scale.z);
			objMesh=obj;
			obj.traverse((child)=>{
				if(child instanceof THREE.Mesh){
					child.material=this.materialCar;
				}
			});
			this.scene.add(obj);
		});
		return objMesh;
	}
	drawCar(car=true){
		let pos;
		if(car===true){
			pos=this.pos;
		}else{
			pos={x:0,y:0,z:0};
		}
		return this.draw(this.car,pos,this.rotate,this.scale);
			
	}
}
