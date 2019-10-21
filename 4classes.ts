export {};

//functions & prototypal inheritance in JS
//From ES 6 (or ECMA 2015) onwards, class construct is available in JS though

class Person{
    //define data memebers
    id:number;
    name:string;
    age:number;

    //to define constructor
    constructor(){
        //use this to access class members
        this.id=0;
        this.name = "";
        this.age = 0;
    }
    
    //function members
    show(){
        console.log(this.id);
    }
}

let p:Person = new Person();
p.show();

class Customer{
    //define data memebers
    id:number;
    name:string;
    
    //to define parameterized constructor
    constructor(id:number, n:string){
        //use this to access class members
        this.id=id;
        this.name = n;
    
    }
    
    //function members
    show(){
        console.log("ID:" + this.id + " and Name:" + this.name);
    }
}

let c = new Customer(1,"Bilal");
c.show();


class SeniorCustomer extends Customer{
    age:number;
    
    constructor(id:number,name:string,age:number){
        super(id,name);
        this.age = age;
    }
    show(){
        super.show();
        console.log(this.age);
    }
}

let sc = new SeniorCustomer(1,"Bilal",100);
sc.show();


let sc2:Customer = new SeniorCustomer(2,"Shahzad",200);
sc2.show();

//Access Modifiers, Public is by default

class Teacher{
    public subject:string;
    private salary:number;

    //one more is protected (like private but for dervied classes)
    constructor(){
        this.subject = "";
        this.salary = 0;
    }
}

class Teacher2{
    
    constructor(private subject:string, public salary:string ){
        
    }

    show(){
        console.log(this.subject + " ---- " + this.salary);
    }
}

