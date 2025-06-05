//generic types  in typescript

function chill<T>(arg: T): T {
  return arg;
}

chill(4);
chill("sandesh");

// keyof operator is used to get the keys of a typescript type or interface as unions of string literals
// think of this like asking "hey typescirpt give me the list of the property names of this object types"

type product = {
  name: string;
  price: number;
  inStock: boolean;
};

type productkeys = keyof product;

const anotherkey: productkeys = "name";
const anotherkey1: productkeys = "price";

// type of type operator  helps you get the type of a variable and helps you to reuse it somewhere else

const product = {
  name: "laptop",
  price: 1000,
  instock: true,
};
type Product = typeof product;

// in operator in typescript
//can be used in two contexts 1. for checking if  a property exists in an object 2. for creating mapped types
const product2 = {
  name: "laptop",
  price: 3000,
};
console.log("name" in product2); // returns true
console.log("stock" in product2); //returns false

//in operator in mapped types     "For each key in Product, create a new key with boolean value"
type productflags = {
  [key in keyof product]: boolean;
};

const productflags = {
  name: true,
  price: true,
  instock: false,
};

// in to narrow types

type admin = {
  username: string;
  role: "admin";
  accesslevel: number;
};
type User = {
  username: string;
  email: string;
};

type person = admin | User;

function getuserinfo(person: person) {
  if ("accesslevel" in person) {
    console.log("this is a admin");
    console.log(
      `admin ${person.username}  ,${person.accesslevel} ,${person.role}`
    );
  }
}

///utility types in ts

//  1. Awaited<type> is a typescript utility that helps you get the type inside of a promise
async function fetchuser() {
  return {
    id: 1,
    name: "alice",
  };
}

type userpromise = ReturnType<typeof fetchuser>;

//   2. partial <type>  make all the properties of an object optional
interface todo {
  title: string;
  description: string;
}

function updatetodo(Todo: todo, fieldstoupdate: Partial<todo>) {
  return {
    ...Todo,
    ...fieldstoupdate,
  };
}
const todo1 = {
  title: "titile1",
  description: "clear clutter",
};
const todo2 = updatetodo(todo1, { description: "chill" });

//  3.  Required<Type> makes all the optional field required

interface Props {
  a?: number;
  b?: number;
}

const obj1: Props = {
  a: 5,
};
const obj2: Required<Props> = {
  a: 5,
  b: 6,
};

//   4. Record<Keys, Type>  creates a new object type where each key comes from keys and each type Type

type status = "pending" | "approved" | "rejected";

type statusmessage = Record<status, string>;
const message: statusmessage = {
  pending: "your request is pending",
  approved: "your message is approved",
  rejected: "your request is rejected",
};

// 5. pick<type,keys>  creates a new type by picking only specific keys from an existing type

type newuser = Pick<product, "name" | "inStock">;

//      6.Extract<Type, Union>
type Animals = "dog" | "cat" | "lion" | "tiger";
type Pets = "dog" | "cat";
type Common = Extract<Animals, Pets>;
// Result: "dog" | "cat"

// 7. exclude   takes a union type and removes specific members from it.
type role = "user" | "admin" | "guests";

type Authenticatedroles = Exclude<role, "guest">;

//8. Parameters<Type> is a TypeScript utility type that extracts the types of the parameters of a function type and gives them back as a tuple.

function greet(name: string, age: number) {
  return `hello ${name}, age${age}`;
}

type greetparams = Parameters<typeof greet>;

//narrowing
// type of  narrowing

function handle(value: number | string) {
  if (typeof value === "string") {
    console.log(value.toLowerCase);
  }
  if (typeof value === "number") {
    console.log(value.toFixed(2));
  }
}
///equality narrowing
let role = "chill";
if (role === "admin") {
}

// type predicates
// A type predicate is a return type like this:value is Type
// “If this function returns true, then value must be of type Type.”

function isstring(value: unknown): value is string {
  return typeof value === "string";
}

//another one
type Admin = {
  role: "admin";
  permissions: string[];
};

type Guest = {
  role: "guest";
  visitReason: string;
};

type Usser = Admin | Guest;
  