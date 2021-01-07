// 2020-12-23
#include <stdio.h>

int main()
{
    printf("%d, iterative reversed: %d\n", 1, reverseIterative(1));
    printf("%d, iterative reversed: %d\n", -1, reverseIterative(-1));
    printf("%d, iterative reversed: %d\n", -123, reverseIterative(-123));
    printf("%d, iterative reversed: %d\n", 123, reverseIterative(123));
    printf("%d, iterative reversed: %d\n", 0, reverseIterative(0));
    
    printf("%d, recursive reversed: %d\n", 1, reverseRecursive(1));
    printf("%d, recursive reversed: %d\n", -1, reverseRecursive(-1));
    printf("%d, recursive reversed: %d\n", -123, reverseRecursive(-123));
    printf("%d, recursive reversed: %d\n", 123, reverseRecursive(123));
    printf("%d, recursive reversed: %d\n", 0, reverseRecursive(0));
}

signed int reverseIterative(signed int input) {
    int negative = input < 0;
    int magnitude = input * (negative ? -1:1);
    signed int ret = 0;
    while (magnitude > 0) {
        int digit = magnitude % 10;
        ret = ret * 10 + digit;
        magnitude = magnitude / 10;
    }
    ret = ret * (negative ? -1:1);
    return ret;
}

// runtime: O(log_10 a)
// space: O(1)

signed int reverseRecursive(signed int input) {
    if (input == 0) {
        return 0;
    }
    
    int negative = input < 0;
    int magnitude = input * (negative ? -1:1);
    signed int ret = reverseRecursiveHelper(magnitude, 0);
    ret = ret * (negative ? -1:1);
    return ret;
}

signed int reverseRecursiveHelper(signed int input, signed int ret) {
    if (input == 0) {
        return ret; 
    }
    int digit = input % 10;
    ret = ret * 10 + digit;
    input = input / 10;
    return reverseRecursiveHelper(input, ret);
}

// runtime: O(log_10 a)
// space: O(log_10 a)