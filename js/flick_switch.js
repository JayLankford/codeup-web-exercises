function flickSwitch(array) {
    const returnArray = [];
    let currentBoolean = true;

    for(const word of array) {
        if (word === 'flick') {
            currentBoolean = !currentBoolean;
        }
        returnArray.push(currentBoolean);
    }
    return returnArray;
}