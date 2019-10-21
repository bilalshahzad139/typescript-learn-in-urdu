

//Single line commenting

/* Multiline
 commenting */

//var vs. let (JavaScript thing)
/*
- let allows you to define block level scopped variables
*/

let a: boolean = true;
console.log(a);

let b: number = 5;
console.log(b);

let s1: string = "Pakistan zindabad....";
console.log(s1);

//Use of backtick (`)

let s2: string = `Pakistan Zindabad.
Welcome to Pakistan!`;
console.log(s2);

//embedded expressions are of the form ${ expr }

let s3: string = `Text is ${s1}`;
console.log(s3);

//Intellisense support


//Array
let arr1: number [] = [1,2,3];

//Array using Generic Array type
let arr2: Array<Number> = [1,2,3];

//Tuple
let t: [number, string,boolean] = [ 1,"abc",true];




//t = ["abc",5]; //Error in TypeScript

enum SecurityRoles {Normal,SuperUser,Admin};
//enum SecurityRoles {Normal=1,SuperUser=2,Admin=3};
//enum SecurityRoles {Normal=5,SuperUser,Admin};

let ev: SecurityRoles = SecurityRoles.Admin;
console.log(ev);

//-------Any Data Type----------

let at1 = 5; //type of at1 is 'Number' => Type Inference

let at2; // type of at2 is 'Any'
let at3: any;


at3 = 5;
at3 = "abc";
at3 = false;
console.log(at3);

//at3.show(); //It will not be compile time error but at runtime if at3 doesn't contain show, it will throw error

let x: null;
let y: undefined;


//----------void type
function Test(): void{
    //This function should not return anything
    //return 10; //will give error in TS
}

//----------Type assertions (or type casting like we've in other languages)

//Angle-Brackets

let s: any;
s = "Hello world";

let n = (<string>s).substr(0,3); //Compile time not runtime thing
console.log(n);

//using 'as' syntax

n = (s as string).substr(0,3);
console.log(n);

//-------------------------------------

let o:Object = new Object(); //non-permitive type

// o.id =1;
// o.name = "abc";

let o1 = {id:1, name: "abc"};
