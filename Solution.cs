
using System;

public class Solution
{
    public int DifferenceOfSums(int inclusiveUpperLimit, int divideValue)
    {
        int sumAllElements = SumElementsArithmeticProgression(1, inclusiveUpperLimit, 1);
        int totalElementsDivisibleByDivideValue = (inclusiveUpperLimit / divideValue);
        int sumElementsDivisibleByDivideValue = SumElementsArithmeticProgression(divideValue, totalElementsDivisibleByDivideValue, divideValue);
        int sumElementsNotDivisibleByDivideValue = sumAllElements - sumElementsDivisibleByDivideValue;

        return sumElementsNotDivisibleByDivideValue - sumElementsDivisibleByDivideValue;
    }

    private int SumElementsArithmeticProgression(int firstElement, int totalElements, int step)
    {
        return totalElements * ((2 * firstElement) + (totalElements - 1) * step) / 2;
    }
}
