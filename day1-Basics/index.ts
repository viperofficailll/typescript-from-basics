console.log("hello world");

//everyday types in typescript

//primitive types
// 1. string
// 2. number
// 3. Boolean

// Syntax

const myarr: number[] = [1, 2, 4, 5];
const strarr: string[] = ["gg", "ok", "chill"];
const chiilarr: Array<number> = [1, 3, 4, 5, 6, 45];
// meaning array of numbers

// type annotation on variables
let myname: string = "Alice";

//functions
function c(name: string): void {
  console.log(`hello   ${name}`);
}
c("sandesh");

//return type annotation
function add(num1: number, num2: number): number {
  return num1 + num2;
}

add(5, 6);

//unions types
function printId(id: number | string) {
  if (typeof id === "string") {
    console.log(id.toUpperCase);
  } else console.log("your id is " + id);
}

printId(202);
printId("chill");

//type Aliases
type Point = {
  x: number;
  y: number;
};

function printCoord(pt: Point) {
  console.log("the co-ordinate's x value is " + pt.x);
  console.log("the co-ordinate's y value is " + pt.y);
}

printCoord({ x: 5, y: 6 });

//interfaces
interface point {
  x: number;
  y: number;
}

function printCoord1(pt: point) {
  console.log("the x co-ordinate is " + pt.x);
  console.log("the  y co-ordinate is " + pt.y);
}

printCoord1({ x: 5, y: 6 });

///generics
function genneric<T>(value: T): T {
  return value;
}
const stringResult = genneric("hello");
const intResult = genneric(4);

////extending types

interface BasicAddress {
  name?: string;
  street: string;
  city: string;
  country: string;
  postalcode: string;
}

interface Addresswithunit extends BasicAddress {
  unit: string;
}


//typeof type operator

let s = "hello"
let n = typeof s
console.log(n)


//conditional Types

interface animal{
    live():void;

}
interface dog extends animal{
    woof():void;
}

type example1 = dog extends animal ? number:string
type example2 = RegExp extends animal ? number: string