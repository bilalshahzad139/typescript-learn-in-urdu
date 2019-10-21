export {};

function Show(a:number):number{

    return 10;
}

function Show2(a:number):{id:number}{
    return {id:1};
}

//arrow function
var f = ()=> {

    return 10;
}

var r = f();
console.log(r);
