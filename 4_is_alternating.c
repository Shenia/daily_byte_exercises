// 2020-12-22
#include <stdio.h>

int main()
{
    printf("5: %d\n", isAlternatingIterative(5));
    printf("8: %d\n", isAlternatingIterative(8));
    printf("6: %d\n", isAlternatingIterative(6));
    printf("0: %d\n", isAlternatingIterative(0));
    
    printf("5: %d\n", isAlternatingRecursive(5));
    printf("8: %d\n", isAlternatingRecursive(8));
    printf("6: %d\n", isAlternatingRecursive(6));
    printf("0: %d\n", isAlternatingRecursive(0));
}

int isAlternatingIterative(int input){
    int oddness = input % 2;
    while (input >= 2) {
        input = input / 2;
        int newOddness = input % 2;
        if (newOddness == oddness) {
            return 0;
        }
        oddness = newOddness;
    }
    return 1;
}

// runtime: O(log base 2 (input))
// space: O(1)

int isAlternatingRecursive(int input) {
    if (input < 2) {
        return 1;
    } else {
        return isAlternatingHelper(input / 2, input % 2);
    }
}

int isAlternatingHelper(int input, int oddness) {
    int newOddness = input % 2;
    if (newOddness == oddness) {
        return 0;
    }
    int newInput = input / 2;
    if (newInput == 0) {
        return 1;
    }
    isAlternatingHelper(newInput, newOddness);
}

// runtime: O(log base 2 (input))
// space: O(log base 2 (input))
