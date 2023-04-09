function checkName(name, list) {
    for (let key in list) {
        if (name === key) {
            console.log(true);
            return;
        }
    }
    return console.log(false);
}

const randomSymbols = {
    'beast': 'goat',
    'fruit': 'apple',
    'color': 'green'
}

checkName('color', randomSymbols);