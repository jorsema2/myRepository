function hypotenuse(cathetus1, cathetus2) {
    if (cathetus1 <= 0 || cathetus2 <= 0) {
        throw Error('The catheti must have positive integer values.');
    }
    const sum = Math.pow(cathetus1, 2) + Math.pow(cathetus2, 2); //Returns the sum of the squared catheti.
    const hypotenuse = Math.sqrt(sum);
    return hypotenuse;
}

console.log(hypotenuse(2, 4)); //Example that follows the 'if' statement of the first function.

console.log(hypotenuse(0, 1)); //Example that follows the 'else' statement of the first function.
