class ElecAppl {
    constructor(name, power) {
        this.name = name;
        this.power = power;
        this.dang = 'может ударить током';
    }
    onOrOff(onOrOff) {
        if (onOrOff === 'on') {
            console.log('Прибор включён в розетку');
        } else {
            console.log('Прибор выключен из розетки');
        }
    }
}


class Phone extends ElecAppl {
    constructor(name, power) {
        super(dang);
        this.name = name;
        this.power = power;
        this.wires = 'wireless';
        this.powerMethod = 'battery';
        super.onOrOff();
    }
    call1() {
        console.log('Идёт вызов');
    }
}


class Fridge extends ElecAppl {
    constructor(name, power) {
        this.func = 'cool';
        this.name = name;
        this.power = power;
        super(dang);
        super.onOrOff();
    }
}

const samsung = new Phone('Samsung', 30);
const smallFridge = new Fridge('unname', 500);

samsung.call1();
samsung.onOrOff('off');

console.log(samsung);