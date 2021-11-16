//window.addEventListener = 0;
window.addEventListener("load", function(){
    console.log("Az oldal betöltődött.")
});

var myFirstString = 'ez "egy" string';
var mySecondString = "ez 'is egy' string";
var myThirdString = `ez egy "több" 'soros' ${mySecondString} string`;

var myFirstNumber = 0;
var mySecondNumber = 35;
var myThirdNumber = 6478999;

var myFirstBoolean = true;
var mySecondBoolean = false;

var myFirstArray = ["1984", "Lord of the Rings", "Mester és Margarita", "Vita Brevis", "Galaxis útikalauz stopposoknak"];
var myFirstArray = [1984, "Lord of the Rings", "Mester és Margarita", "Vita Brevis", "Galaxis útikalauz stopposoknak"];

var myFirstObject = {
    title: "Lord of the Rings",
    publicationDate: 1954,
    translations: ["hu", "de", "fr", "jp"],
};

console.log(myFirstArray[0]);
console.log(myFirstObject.title);
console.log(myFirstObject["title"]);

// tömbök is objektumok

var a = 1;
var b = 2;
var c = a+b; //összeadás itt zajlik le
console.log(c);

function add(firstNumber, secondNumber) {
    console.log(firstNumber+secondNumber)
}

add(1,2) //összeadás itt történik, a függvény meghívásakor

var subtraction = function (a, b){
    if (a>b) {
        console.log(a-b);
    } else if (a===b) { //tartalmilag hasonlít össze a két egyenlőségjel: típus különbözik, de az érték uaz
        console.log(a-b);
        console.log("A végeredmény nulla");
    } else {
        console.log(b-a);
    }

}
subtraction(3,6);
subtraction("15", 15);

add("15", 15); //JS nem egy típusos nyelv, így próbál konvertálni. Összeadáskor stringgé formázza a számot is
add("nyitva", "tartás");    

subtraction("nyitva", "tartás"); //NaN = Not a Number

function ifElseCheck (text) {
    if(text==="hello") {
        console.log("text az volt, hogy hello")
    } else if (text==="hello") {
        console.log("a text megint az volt, hogy hello")
    }
    if (text==="hello") {
        console.log("a text már megint hello") //ez az if egy új ág, ez lefut
    }
}
ifElseCheck ("hello") // első igaz találat esetén kiugrik az else if-ből

//hármas egyenlőségjel kivesézése

function compare(a,b){
    console.log("== " , a==b);
    console.log("=== ", a===b);
    var c =a+b; //minden matematikai műveletnél konvertál a JS numberré, kivéve az összeadásnál; JS nem típusos nyelv, ezért érdemes a számokat számként kezelni, konvertálni számmá stb., mert bármikor kellhet az összeadás is
    console.log(typeof c);
    console.log(c);
}
compare(1984, "1984");
compare("15", "16");

var myFirstFunctionVariable = function(){
    console.log("ez egy függvény, amit változóban tároltunk el");
}
myFirstFunctionVariable();

(function(){
    console.log("?");
}()); //immediately invoked functionexpression, jelentősége, amikor nem vt const és let

var anotherVar = myFirstFunctionVariable(); //ha a függvény neve mögött a zárójel ki van téve, akkor legyen bárhol, a függvény lefut
//anotherVar();
console.log(typeof anotherVar); //undefined, mert már lefutott a függvény
console.log(anotherVar); 

var anotherVar2 = myFirstFunctionVariable;
anotherVar2();

console.log(typeof anotherVar2);

//függvényt argumentumként is át tudunk adni egy másik függvénynek
function theLastFunction(obj1, obj2){
    console.log("obj1 értéke: ", obj1);
    console.log("obj1 típusa: ", typeof obj1);
    console.log("obj2 értéke: ", obj2);
    console.log("obj2 típusa: ", typeof obj2);
    console.log(obj2());
}

theLastFunction("hello", function (){
    return "I'm calling theLastFunction";
});
/*
var window = {
    addEventListener: function (eventName, eventFunction){
        ...
    }
}
*/