function sumSquaredCatheti(cathetus1, cathetus2) {
    if (cathetus1 <= 0 || cathetus2 <= 0) {
        return console.log('The catheti must have positive integer values.'); //Prints The catheti must have positive integer values.
    }
    return sum = Math.pow(cathetus1, 2) + Math.pow(cathetus2, 2); //Returns the sum of the squared catheti.
}

function squareRoot(cathetus1, cathetus2) {
    return Math.sqrt(sumSquaredCatheti(cathetus1, cathetus2)); //Returns the square root of the sum of the squared catheti.
}

function hypotenuse(cathetus1, cathetus2) {
    return squareRoot(cathetus1, cathetus2); //Returns the value of the square root of the sum of the squared catheti, i.e. the hypotenuse.
}

console.log(hypotenuse(2, 4));

console.log(hypotenuse(0, 1));
