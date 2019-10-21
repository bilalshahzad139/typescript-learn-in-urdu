export {};

// Lets understand 'interfaces' by type checking

function printLabel2(labeledObj: { label: string }) {
    console.log(labeledObj.label);
}

let myObj2 = {size: 10, label: "Size 10 Object"};
printLabel2(myObj2);


//--------------Same exmple but by using interfaces----------

interface LabeledValue {
    label: string;
}

function printLabel(labeledObj: LabeledValue) {
    console.log(labeledObj.label);
}




let myObj = {size: 10, label: "Size 10 Object"}; //Not object of type LabeledValue but it fulfilling the structure of input
printLabel(myObj);



//--------optional properties

interface SquareConfig {
    color?: string;
    width?: number;
}

//--------- Readonly properties
interface Point {
    readonly x: number;
    readonly y: number;
}

let p1: Point = { x: 10, y: 20 };
//p1.x = 5; // error!