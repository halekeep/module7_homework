function ElecAppl(name, power) {
    this.name = name;
    this.power = power;
    this.dang = 'может ударить током';
}

ElecAppl.prototype.onOrOff = function(onOrOff) {
    if (onOrOff === 'on') {
        console.log('Прибор включён в розетку');
    } else {
        console.log('Прибор выключен из розетки');
    }
}

function Phone(name, power) {
    this.name = name;
    this.power = power;
    this.wires = 'wireless';
    this.powerMethod = 'battery'; 
}

Phone.prototype = new ElecAppl();

Phone.prototype.call1 = function() {
    console.log('Идёт вызов');
}

function Fridge(name, power) {
    this.name = name;
    this.power = power;
    this.func = 'cool';
}

Fridge.prototype = new ElecAppl();

const samsung = new Phone('Samsung', 30);
const smallFridge = new Fridge('unname', 500);

samsung.call1();
samsung.onOrOff('off');

console.log(samsung);