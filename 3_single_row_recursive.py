# 2020-12-21
row1 = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p']
row2 = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l']
row3 = ['z', 'x', 'c', 'v', 'b', 'n', 'm']

# assume no numbers or special characters
# assume empty strings is true
def single_row_iterative(arr):
    retArr = []
    for item in arr:
        if item == "":
            retArr.append(item)
        else:
            row = get_row(item[0])
            for index, letter in enumerate(item):
                if get_row(letter) != row:
                    break
                if index == len(item)-1:
                    retArr.append(item) 
    return retArr       

# time complexity: m is the length of biggest word, n is the length of array, O(mn)
# space complexity: O(n) 

def get_row(char):
    if char in row1:
        return 1
    elif char in row2:
        return 2
    else:
        return 3

example_1 = ["two", "dad", "cat"] 
example_2 = ["ufo", "xzy", "byte"]
print(single_row_iterative(example_1))
print(single_row_iterative(example_2))

def single_row_recursive(arr):
    if len(arr) == 0:
        return []

    item = arr[0]
    retArr = []
    if item == "":
        retArr.append(item)
    else:
        row = get_row(item[0])
        for index, letter in enumerate(item):
            if get_row(letter) != row:
                break
            if index == len(item)-1:
                retArr.append(item)
    retArr = retArr + single_row_recursive(arr[1:])
    return retArr

# time complexity: O(n)
# space complexity: O(n) (stack storage for each recursive call)

def single_row_recursive2(arr):
    if len(arr) == 0:
        return []

    item = arr[0]
    retArr = []
    if item == "":
        retArr.append(item)
    else:
        row = get_row(item[0])
        if single_row_recursive_helper(item, row):
            retArr.append(item)
    retArr = retArr + single_row_recursive2(arr[1:])
    return retArr

def single_row_recursive_helper(item, row):
    if item == "":
        return True
    if row != get_row(item[0]):
        return False
    return single_row_recursive_helper(item[1:], row)

print(single_row_recursive(example_1))
print(single_row_recursive(example_2))

print(single_row_recursive2(example_1))
print(single_row_recursive2(example_2))
