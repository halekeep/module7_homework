function ownProp(randomObj) {
    for (let key in randomObj) {
        if (randomObj.hasOwnProperty(key)) {
            console.log(key + ' - ' + randomObj[key]);
        }
    }
}

const randomNum = {
    1: 18,
    2: 33,
    3: 9112
}

const randomSymbols = Object.create(randomNum);
randomSymbols.a = 'rkke';
randomSymbols.b = 'ghte';

ownProp(randomSymbols);