# 2020-12-19
# Assume array is an array of numbers
# Returns True if array contains 1 element or less
def monotonically(arr):
    length = len(arr)
    if length <= 1:
        return True
    isDecreasing = None
    lastVal = arr[0]
    for elem in arr:
        if isDecreasing is None:
            if elem < lastVal:
                isDecreasing = True
            elif elem > lastVal:
                isDecreasing = False
        elif isDecreasing:
            if elem > lastVal:
                return False
        else:
            if elem < lastVal:
                return False
        lastVal = elem
    return True

print(monotonically([1, 2, 3, 4, 5]))
print(monotonically([5]))
print(monotonically([]))
print(monotonically([5, 4, 3]))
print(monotonically([1, 2, 5, 0]))

# space complexity: O(1)
# time complexity: O(n)

def monotonically_recursive(arr):
    return mono_helper(arr, None)

def mono_helper(arr, isDecreasing):
    if len(arr) <= 1:
        return True
    firstVal = arr[0]
    secondVal = arr[1]
    if firstVal == secondVal:
        pass
    elif isDecreasing is None:
        if firstVal > secondVal:
            isDecreasing = True
        else:
            isDecreasing = False
    elif firstVal < secondVal and isDecreasing:
        return False
    elif firstVal > secondVal and not isDecreasing:
        return False
    return mono_helper(arr[1:], isDecreasing)

print(monotonically_recursive([1, 2, 3, 4, 5]))
print(monotonically_recursive([5]))
print(monotonically_recursive([]))
print(monotonically_recursive([5, 4, 3]))
print(monotonically_recursive([1, 2, 5, 0]))

# space complexity: O(n^2)
# time complexity: O(n)