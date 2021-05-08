class paper
{
	constructor(x,y)
	{
		var options={
            restitution:0.3,
            density:1.2,
            friction:0.2,
			isStatic:false,			
			}
		
		this.r=70
		this.body=Bodies.circle(x, y,20, options);
        this.image=loadImage("paper.png");
 		World.add(world, this.body);

	}
	display()
	{
			
			var Pos=this.body.position;		

			push()
			translate(Pos.x,Pos.y);
			
			//strokeWeight(4);
			
			
            imageMode(CENTER);
			
            image (this.image,0,0,this.r,this.r)
			pop()
			
	}
 
}