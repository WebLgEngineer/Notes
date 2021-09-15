namespace mod02 {
    let data: [number, string, Date];
    data = [100, "aaa", new Date()];
    console.log(data[0] + 1, data[1].toUpperCase(), data[2].toLocaleDateString("zh-tw"));

}