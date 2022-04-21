namespace mod03 {
    interface ISape {
        width: number;
        height: number;
        getArea(): number;
    }
    class Rectangle implements ISape {
        constructor(public id: number, public width: number, public height: number) {

        }
        //width!: number; // 跟編譯器說 忽略檢查
        //height=0;       //直接給定初始值
        getArea(): number {
            return this.width * this.height;
        }
    }

    let s:ISape = new Rectangle(1,20, 10);
    console.log(s.getArea()); //因為ISape並沒有id 所以無法使用id
    
    console.log((s as Rectangle).id); //若要只用id可將s轉型成Rectangle
    
    let s2 = new Rectangle(2,50,100);
    console.log(s2.id,s2.height,s2.width,s2.getArea());
}