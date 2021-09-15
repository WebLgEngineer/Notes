namespace mod03{
    interface IShape{
        width:number;
        height:number;
        getArea():number;
    }

    class Rectangle implements IShape {
        constructor(public id:number,public width:number, public height:number) {
            
        }
        //width!: number;
        //height=0;
        getArea(): number {
           return this.width*this.height;
        }
    }
    let s:IShape=new Rectangle(1, 20,10);
    console.log(s.getArea());

    console.log((s as Rectangle).id);

    let s2=new Rectangle(2, 50,100);
    console.log(s2.id,s2.height,s2.width,s2.getArea());
}