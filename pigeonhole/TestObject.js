let mystring = "Kitchenhamara";
console.log(mystring.length);

function greet(){

    console.log("Hello from",mystring); 
     
    return 99;
}
const result = greet();
console.log("result",result);
greet.newday = "Hello NewDay";
console.log(greet.newday);
greet.newday = ()=>{
    console.log("Instance NewDay");
    return 1000;
}
console.log(greet.newday()); 