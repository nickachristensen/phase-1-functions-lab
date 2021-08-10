const hq = 42
const blocksInFeet = 264

const distanceFromHqInBlocks = function(number) {
    if (number < 42) {
        return hq - number;
    }
    else {
    return number - hq;
    }
}

// distanceFromHqInBlocks(43);

// distanceFromHqInBlocks(50);

// distanceFromHqInBlocks(34);

const distanceFromHqInFeet = function(number) {
    if (number < 42){
        return (hq - number) * blocksInFeet;
    }
    else {
        return (number - hq) * blocksInFeet;
    }
}

const distanceTravelledInFeet = function(number, number2) {
    if (number2 > number) {
        return (number2 - number) * blocksInFeet;
    }
    else {
        return (number - number2) * blocksInFeet;
    }
}

// distanceFromHqInFeet(43, 48);

// distanceTravelledInFeet(50, 60);

// distanceTravelledInFeet(34, 28);


function calculatesFarePrice(start, destination) {
    if (Math.abs((start - destination) * blocksInFeet) < 400) {
        return 0;
    }
    else if (Math.abs((start - destination) * blocksInFeet) > 2000) {
        return 25;
    }
    else if (Math.abs((start - destination) * blocksInFeet) > 2500) {
        return 'cannot travel that far';
    }
    else {
        return Math.abs(((start - destination) * blocksInFeet) - 400) * .02 }
    }


    