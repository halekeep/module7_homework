function СreateNewEmptyObj() {
    //this.__proto__ = null
}

СreateNewEmptyObj.prototype = null;

let ranObj = new СreateNewEmptyObj('number1');
console.log(ranObj);
Object.getPrototypeOf(ranObj);