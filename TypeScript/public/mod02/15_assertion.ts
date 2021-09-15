namespace mod02{
    let s1:unknown="aaa";
    console.log((<string>s1).toUpperCase());

    let s2:unknown="bbb";
    console.log((s2 as string).toUpperCase());
}