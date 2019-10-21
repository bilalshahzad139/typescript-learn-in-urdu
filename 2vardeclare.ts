export {};


//var scope is function level 

//let scope is block level 
// let & const are same, const value can't be changed

function Test(){

    var a =5;
    {
        var a =10; //same variable will be overriden
        console.log(a);
    }
    console.log(a);
}

Test();
console.log('-------aaaaaaa------');

function Test1(){

    let a =5;

    {
        let a =10; // a new variable scopped to this block
        console.log(a);
    }

    console.log(a);
}
Test1();
console.log('-----abc--------');

function Test3(){
    //multiple declarations using var allowed (refer to same variable)
    var a=10;
    var a=20;

    let b=10;
    //let b=20; //can't do this with with let

    const x = 10; //compile time thing
    //x=50; //will give compile time error
}


