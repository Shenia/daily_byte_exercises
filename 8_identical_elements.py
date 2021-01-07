# 2020-12-26
def identical_elements_iterative(array, k):
    occurrences = {}
    for index, item in enumerate(array):
        if item in occurrences:
            occurrences[item].append(index)
        else:
            occurrences[item] = [index]
    for key in occurrences.keys():
        occurrence = occurrences[key]
        for index, item in enumerate(occurrence):
            if index > 0 and (occurrence[index] - occurrence[index - 1] > k):
                return False
    return True

print("[1, 2, 1], 1:", identical_elements_iterative([1, 2, 1], 1))
print("[2, 3, 3], 2:", identical_elements_iterative([2, 3, 3], 2))

# runtime: O(n)
# space: O(m)
