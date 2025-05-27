
using namespace std;

class Solution {

public:
    int differenceOfSums(int inclusiveUpperLimit, int divideValue) const {
        int sumAllElements = sumElementsArithmeticProgression(1, inclusiveUpperLimit, 1);
        int totalElementsDivisibleByDivideValue = (inclusiveUpperLimit / divideValue);
        int sumElementsDivisibleByDivideValue = sumElementsArithmeticProgression(divideValue, totalElementsDivisibleByDivideValue, divideValue);
        int sumElementsNotDivisibleByDivideValue = sumAllElements - sumElementsDivisibleByDivideValue;

        return sumElementsNotDivisibleByDivideValue - sumElementsDivisibleByDivideValue;
    }

private:
    int sumElementsArithmeticProgression(int firstElement, int totalElements, int step) const {
        return totalElements * ((2 * firstElement) + (totalElements - 1) * step) / 2;
    }
};
