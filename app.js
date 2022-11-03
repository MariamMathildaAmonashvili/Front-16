// Task 1

function trueOrfalse (m) {
    if ( m % 2 ) {
        return false ;
    } else { 
        return true;
    }

    }
let product = trueOrfalse (20);


//console.log(product);


// Task 2 

function perimeter (a,b) {
    return a*b;
}

let x = perimeter (12,6) ;

//console.log(x); 

//Task 3 

function square (a) {
    return a*a ;

}

let y = square (7);
//console.log(y);


//Task 4 

//Math.random() - არის ფუნქცია, რომელიც აბრუნებს შემთხვევით რიცხვს 0-დან 1-მდე.
//Math.floor() - ამრგვალებს რიცხვს ქვემოთ, მაგალითად Math.floor(4.9) აბრუნებს 4-ს.
//Math.round() - ამრგვალებს რიცხვს უახლოეს მთელამდე.
//(Disregard this pls)


function getRandomNumber (x) {
    return Math.floor ( 
        (Math.random ()  * x ) 
    );
};

    let k = getRandomNumber (100) ;

//console.log (k) ;


//Task 5 


//getCurrencySymbolFromCode 

let currencySymbol = ["$" , "€" , "ლ" ] ;
let moneyCurrency = [ "USD" , "EUR" ,  "GEL"];

let s = Math.floor ( Math.random() *3) ;
let b = Math.floor ( Math.random() *3) ;

function getCurrencySymbolFromCode (l) {

    if ( s == b ) {
        return moneyCurrency [b] + " " + currencySymbol [s];
    } else { 
        return "Unmatching" ; 
    }
}

let p = getCurrencySymbolFromCode (b) ;
//console.log(p);

//Task 6 

const perObj =  [
    {
        name : "Mariam",
        age : 21 ,
    } , 
    {
        name: "Luka",
        age : 27,
    },
    {
        name: "Tamar",
        age: 3 ,
    } ,
    {
        name: "Giga",
        age: 18,
    },
    {
        name: "Matthew",
        age : 45 , 

    }
]




let youngest; 
function whostYoungest () {
    return youngest = Math.min (perObj[0].age, perObj[1].age , perObj[2].age, perObj[3].age , perObj[4].age  ); 
}

let showmeResult = whostYoungest(perObj);

//console.log(showmeResult);