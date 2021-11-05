class Pleyer{
	constructor(options){
		this.objLoade=new OBJLoader();
		this.x=options.x;
		this.y=options.y;
		this.z=options.z;
		this.file=options.file;
	}
	draw(){
		this.objLoade.load(this,(obj)=>{
			obj.rotation.x=radians(-80);
			obj.position.set(this.x,this.y,this.z);
			this.obj=obj;
		});
	}
}