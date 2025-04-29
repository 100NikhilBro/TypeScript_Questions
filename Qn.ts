
// Question 1: Declare a variable with string type
let username : string;

// Question 2: Write a function that sums two numbers
function sum(a:number, b:number):number {
    return a + b;
}

// Question 3: Declare a variable that can hold either a number or a string
let userId : number | string;

// Question 4: Declare an array of numbers
let arr: number[] = [90, 85, 78];

// Question 5: Declare a tuple with a number and a string
let tup: [number, string] = [12, "Raju"];

// Question 6: Define a type for a product
type Product = {
    id: number,
    name: string,
    price?: number // jb bhi apne pass Optional field aaye to if condition dhyaan se
}

// Question 7: Create a product object and print it using a function
let p1: Product = {
    id: 1,
    name: "Bin",
    price: 10
}

function printProduct(prod: Product): void {
    console.log({ prod })
}

printProduct(p1);

// Question 8: Write a function that returns the price of a product or 0 if undefined
function priceShots(prod: Product): number {
    if (prod.price !== undefined) {  // Check if the price is provided
        return prod.price;
    }
    return 0;
}

// Question 9: Write a function that calculates discount based on input type (number or string)
function getDiscountPrice(a: number | string): number {
    if (typeof a === "number") {
        return a * 0.9; // 10% discount for numbers
    }
    else if (typeof a === "string") {
        return 10; // Default discount for string type
    }
    return 0;
}

// Question 10: Define an interface for a person and write a function that returns a person object
interface Person {
    name: string,
    age: number,
    isEmployee: boolean,
}

function printDetails(person: Person): Person {
    return person;
}

printDetails({ name: "Rahul", age: 12, isEmployee: true })

// Question 11: Write a function to calculate discount for both numbers and strings
function getDiscount(a: number | string): number {
    if (typeof a === "number") {
        return a * 0.9;
    }
    else if (typeof a === "string") {
        return 5; // Default discount for strings
    }
    return 0;
}

// Question 12: Write a function to get an HTML element by ID and return it as HTMLDivElement
function getElementbyid(id: string): HTMLDivElement {
    const element = document.getElementById(id);  // yahan pr apne ko yeh cheej pehle hi nikalke rakhni padegi kyuki ysh undefined bhi ho skti hai
    if (element) {
        return element as HTMLDivElement; // yahn pr apun "as" keyword ka use krenge 
    }
    throw new Error("Element does not exist");
}

// Question 13: Create an enum for order statuses and use it in a function to return the order status
enum OrderStatus {
    PENDING = "pending",
    PROCESSING = "processing",
    SHIPPED = "shipped",
    DELIVERED = "delivered"
}

// REMEMBER ---> jb bhi enum ka use fn mein hota hai to most of time apne ko switch use krna hota hai

function getStatus(status: OrderStatus): string {
    switch (status) {
        case OrderStatus.PENDING:
            return "Your order is pending";
        case OrderStatus.PROCESSING:
            return "Your order is processing";
        case OrderStatus.SHIPPED:
            return "Your order is shipped";
        case OrderStatus.DELIVERED:
            return "Your order is delivered";
        default:
            return "Unknown Status"
    }
}

getStatus(OrderStatus.PENDING);

// Question 14: Write a function that greets based on the input type (string or number)
function greet(a: number | string): string {
    if (typeof a === "string") {
        return `Hello ${a}`;
    }
    return `Hello ${a}`;
}

// Question 15: Write a function to calculate the area of a rectangle
type Rectangle = {
    height: number,
    width: number,
}

function getArea(r: Rectangle): number {
    return r.width * r.height; 
}

getArea({ height: 10, width: 5 });

// Question 16: Write a function that returns employee information
interface Employee {
    id: number,
    name: string,
    department?: string,
    salary?: number,
}

function getInfo(e: Employee): Employee {
    return e;
}

getInfo({ id: 1, name: "Raju" });
getInfo({ id: 11, name: "John", department: "CSE" });

// Question 17: Create a union type for events and handle them
type MEvent = "click" | "keydown";

function getEvent(e: MEvent) {
    if (e === "click") {
        return "Click is clicked";
    }
    else if (e === "keydown") {
        return "Keydown is clicked";
    }
}

// Question 18: Define an interface for mathematical operations
interface MathsOperation {
    (a: number, b: number): number
}

const add: MathsOperation = (a, b) => a + b;
const multiply: MathsOperation = (a, b) => a * b;

console.log(add(5, 3));
console.log(multiply(5, 6));

// Question 19: Create a user object with method logDetails
interface Usser {
    idd: number,
    name: string,
    logDetails: () => void;
}

let ri: Usser = {
    name: "Raju",
    idd: 1,
    logDetails() {
        console.log(this.name, this.idd);
    }
}

// Question 20: Create a car object with a method to start the engine
interface Car {
    brand: string,
    model: string,
    startEngine: () => void;
}

let car: Car = {
    brand: "UB-100",
    model: "OYO-00",
    startEngine() {
        console.log(this.brand, this.model);
    },
}

// Question 21: Define a book type and write a function to print its details
type Book = {
    title: string,
    author: string,
    pages: number,
}

function printBook(book: Book): string {
    return `title: ${book.title} author: ${book.author} pages: ${book.pages}`;
}

printBook({ author: "Raju", title: "RajuKiPremKahanhi", pages: 1111 });

// Question 22: Handle response statuses with union type
type ResponsedStatus = "success" | "error" | "loading";

function getReponseStatus(res: ResponsedStatus): string | void {
    if (res === "success") {
        return "Success";
    }
    else if (res === "error") {
        return "Error";
    }
    else if (res === "loading") {
        return "Loading";
    }
}

// Question 23: Write a function to calculate area of circle or rectangle using union type
type Circle = {
    readonly kind: "circle",
    radius: number,
}
type Rrectangle = {
    readonly kind: "rectangle",
    l: number,
    b: number
}

function calArea(a: Circle | Rrectangle): number {
    if (a.kind === "circle") {
        return 3.14 * a.radius * a.radius;
    }
    else if (a.kind === "rectangle") {
        return a.l * a.b;
    }
    return 0;
}

// Question 24: Handle optional properties in user address type
type Address = {
    city?: string,
    country?: string,
}

type UserO = {
    name: string,
    address?: Address,
}

function getuserCity(u: UserO): string | undefined {
    if (u.address) {
        if (u.address.city) {
            return u.address.city;
        }
    }
    return;
}

// Question 25: Handle union types with different user types (Admin or Guest)
type UserAdmin = {
    type: "Admin",
    adminlevel: number,
}

type UserGuest = {
    type: "Guest",
    email: string,
}

function handleUser(user: UserAdmin | UserGuest): string {
    if (user.type === "Admin") {
        return "" + (user.adminlevel);
    }
    else if (user.type === "Guest") {
        return user.email;
    }
    return "";
}

// Question 26: Merge two objects using generics
function merging<T>(obj1: T, obj2: T): T {
    return { ...obj1, ...obj2 };
}

// Question 27: Generic function to reverse an array
function mergeArray<T, S>(a: T[], b: S[]): (T | S)[] {
    return [...a, ...b];
}

mergeArray<number, string>([1, 2, 3], ["a", "b", "c"]);

// Question 28: Get the length of a generic array
function getLeng<T>(a: T[]): number {
    return a.length;
}

getLeng<string>(["a", "b", "c"]);

// Question 29: Generic swap function for two values
function swapVal<A, B>(a: A, b: B): string {
    return `${b} ${a}`;
}

swapVal<string, number>("Raju", 100);

// Question 30: Swap values and return a tuple with generic types
function swap<A, B>(a: A, b: B): [B, A] {
    return [b, a];
}

swap<string, number>("Raju", 100);

// Question 31: Create a generic interface for key-value pair
interface MyFR<K, V> {
    key: K,
    val: V
}

function print(u: MyFR<string, number>) {
    console.log(u.key, u.val);
}

print({ key: "Hey", val: 100 });

// Question 32: Write a function to return the first element from an array using generics
function getFirst<T>(a: T[]): T {
    return a[0];
}

getFirst<string>(["a", "b", "c"]);

// Question 33: Create a generic response type and wrap data in a response object
interface Rresponse<T> {
    status: string,
    date: T
}

let obj: Rresponse<number[]> = {
    status: "success",
    date: [1, 2, 4],
};

// Question 34: Wrap data in an array using generics
function warpInArr<T>(a: T): T[] {
    return [a];
}

warpInArr<string>("Olo");

// Question 35: Create a Box class with generics
class Box<T> {
    constructor(protected _a: T) { }

    get a(): T {
        return this._a;
    }
}

let b1 = new Box<number>(100);
console.log(b1.a);

// Question 36: Create a Pair class with generics
class Pair<K, V> {
    constructor(public a: K, public b: V) { }

    getPair() {
        return `${this.a} ${this.b}`;
    }
}

let p11 = new Pair<string, number>("a", 1);
p11.getPair();
