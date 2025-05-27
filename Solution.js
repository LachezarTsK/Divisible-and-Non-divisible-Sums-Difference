
/**
 * @param {number} inclusiveUpperLimit
 * @param {number} divideValue
 * @return {number}
 */
var differenceOfSums = function (inclusiveUpperLimit, divideValue) {    
    const sumAllElements = sumElementsArithmeticProgression(1, inclusiveUpperLimit, 1);
    const totalElementsDivisibleByDivideValue = Math.floor(inclusiveUpperLimit / divideValue);
    const sumElementsDivisibleByDivideValue = sumElementsArithmeticProgression(divideValue, totalElementsDivisibleByDivideValue, divideValue);
    const sumElementsNotDivisibleByDivideValue = sumAllElements - sumElementsDivisibleByDivideValue;

    return sumElementsNotDivisibleByDivideValue - sumElementsDivisibleByDivideValue;
};

/**
 * @param {number} firstElement
 * @param {number} totalElements
 * @param {number} step 
 * @return {number}
 */
function sumElementsArithmeticProgression(firstElement, totalElements, step) {
    return totalElements * ((2 * firstElement) + (totalElements - 1) * step) / 2;
}
