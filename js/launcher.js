class Launcher{
	constructor(body,anchor)
	{
		
		var options={
			 bodyA:body,			 
			pointB:anchor, 
			stiffness:0.004, 
			length:20,
			
		}
		
		this.bodyA=body
		this.pointB=anchor
		this.launcher=Constraint.create(options)
		World.add(world,this.launcher)
	}

	
    attach(body){
        this.launcher.bodyA = body;
    }

	fly()
	{
		this.launcher.bodyA = null;
		
	}

	display()
	{
        if(this.launcher.bodyA){
			var pointA = this.launcher.bodyA.position
			var pointB = this.pointB
			push();
			strokeWeight(5);
			fill(110,61,16);
			stroke(110,61,16);
			line(pointA.x,pointA.y,pointB.x,pointB.y);
			pop();
			}
	}
}