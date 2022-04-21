namespace mod03{
    class Employee {
        id=0;
        name="none";
    }
    let emp=new Employee();
    console.log(1, emp.id,emp.name);
    emp.id=100;
    emp.name="aaa";
    console.log(2, emp.id, emp.name);
}