# 2020-12-24
import math

def no_same_neighbor_iterative(input_string):
    if len(input_string) <= 1:
        return ""

    occurrences = {}
    length = len(input_string)

    for letter in input_string:
        if letter in occurrences:
            occurrences[letter] += 1
        else:
            occurrences[letter] = 1
    
    for key in occurrences:
        if occurrences[key] > math.ceil(length / 2):
            return ""

    sortedOccurrences = sorted(occurrences.items(), key = lambda kv:(kv[1], kv[0]))
    sortedOccurrences = sortedOccurrences[::-1]
    print(input_string)
    print(sortedOccurrences)
    retVal = []

    while sortedOccurrences[0][1] > 0:
        index = 0
        if len(retVal) != 0 and sortedOccurrences[0][0] == retVal[len(retVal) - 1]:
            index = 1
        
        retVal.append(sortedOccurrences[index][0])

        sortedOccurrences[index] = (sortedOccurrences[index][0], sortedOccurrences[index][1] - 1)
        sortedOccurrences = sorted(sortedOccurrences, key = lambda tup:tup[1])
        sortedOccurrences = sortedOccurrences[::-1]
        print(sortedOccurrences)

    retVal = "".join(retVal)

    return retVal

# runtime: O(mnlog(m)), m = number of unique characters in string, n = number of characters in string
# space: O(m + n), m for sortedOccurrences, n is for retVal

def no_same_neighbor_recursive(input_string):
    if len(input_string) <= 1:
        return ""
    
    occurrences = {}

    for letter in input_string:
        if letter in occurrences:
            occurrences[letter] += 1
        else:
            occurrences[letter] = 1
    
    for key in occurrences:
        if occurrences[key] > math.ceil(len(input_string) / 2):
            return ""
    
    sortedOccurrences = sorted(occurrences.items(), key = lambda kv:(kv[1], kv[0]))
    sortedOccurrences = sortedOccurrences[::-1]
    return no_same_neighbor_recursive_helper(sortedOccurrences, "")

def no_same_neighbor_recursive_helper(sortedOccurrences, retVal):
    if sortedOccurrences[0][1] == 0:
        return retVal
    
    index = 0
    if len(retVal) - 1 >= 0 and sortedOccurrences[0][0] == retVal[len(retVal) - 1]:
        index = 1
    
    retVal = retVal + sortedOccurrences[index][0]
    current = sortedOccurrences[index][0]

    sortedOccurrences[index] = (sortedOccurrences[index][0], sortedOccurrences[index][1] - 1)
    sortedOccurrences = sorted(sortedOccurrences, key = lambda tup:tup[1])
    sortedOccurrences = sortedOccurrences[::-1]
    return no_same_neighbor_recursive_helper(sortedOccurrences, retVal)

print(no_same_neighbor_iterative("hello"))
print(no_same_neighbor_iterative("acccdddd"))
print(no_same_neighbor_iterative("acbbb"))
print(no_same_neighbor_iterative("hellotoyou"))
print(no_same_neighbor_recursive("hello"))
print(no_same_neighbor_recursive("acccdddd"))
print(no_same_neighbor_recursive("acbbb"))
print(no_same_neighbor_recursive("hellotoyou"))

