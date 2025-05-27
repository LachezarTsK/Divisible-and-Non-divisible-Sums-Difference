
class Solution {

    fun differenceOfSums(inclusiveUpperLimit: Int, divideValue: Int): Int {
        val sumAllElements = sumElementsArithmeticProgression(1, inclusiveUpperLimit, 1)
        val totalElementsDivisibleByDivideValue = (inclusiveUpperLimit / divideValue)
        val sumElementsDivisibleByDivideValue = sumElementsArithmeticProgression(divideValue, totalElementsDivisibleByDivideValue, divideValue)
        val sumElementsNotDivisibleByDivideValue = sumAllElements - sumElementsDivisibleByDivideValue

        return sumElementsNotDivisibleByDivideValue - sumElementsDivisibleByDivideValue
    }

    private fun sumElementsArithmeticProgression(firstElement: Int, totalElements: Int, step: Int): Int {
        return totalElements * ((2 * firstElement) + (totalElements - 1) * step) / 2
    }
}
