
function differenceOfSums(inclusiveUpperLimit: number, divideValue: number): number {
    const sumAllElements = sumElementsArithmeticProgression(1, inclusiveUpperLimit, 1);
    const totalElementsDivisibleByDivideValue = Math.floor(inclusiveUpperLimit / divideValue);
    const sumElementsDivisibleByDivideValue = sumElementsArithmeticProgression(divideValue, totalElementsDivisibleByDivideValue, divideValue);
    const sumElementsNotDivisibleByDivideValue = sumAllElements - sumElementsDivisibleByDivideValue;

    return sumElementsNotDivisibleByDivideValue - sumElementsDivisibleByDivideValue;
};

function sumElementsArithmeticProgression(firstElement: number, totalElements: number, step: number): number {
    return totalElements * ((2 * firstElement) + (totalElements - 1) * step) / 2;
}
