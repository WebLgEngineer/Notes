namespace mod02 {
    let coordinate: [number, number];
    coordinate = [10,20];
    console.log(coordinate[0], coordinate[1]);


    let data:[number,string,Date];
    data=[100,"aaa",new Date()];
    console.log(data[0]+50,data[1].toUpperCase(), data[2].toLocaleDateString("zh-tw"));

}