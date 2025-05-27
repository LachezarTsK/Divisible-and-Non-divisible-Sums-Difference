
package main

func differenceOfSums(inclusiveUpperLimit int, divideValue int) int {
    sumAllElements := sumElementsArithmeticProgression(1, inclusiveUpperLimit, 1)
    totalElementsDivisibleByDivideValue := (inclusiveUpperLimit / divideValue)
    sumElementsDivisibleByDivideValue := sumElementsArithmeticProgression(divideValue, totalElementsDivisibleByDivideValue, divideValue)
    sumElementsNotDivisibleByDivideValue := sumAllElements - sumElementsDivisibleByDivideValue

    return sumElementsNotDivisibleByDivideValue - sumElementsDivisibleByDivideValue
}

func sumElementsArithmeticProgression(firstElement int, totalElements int, step int) int {
    return totalElements * ((2 * firstElement) + (totalElements - 1) * step) / 2
}
