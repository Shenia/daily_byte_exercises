# 2020-12-28
def cake_for_none_iterative(appetites, cakes):
    sortedAppetites = sorted(appetites, reverse=True)
    sortedCakes = sorted(cakes, reverse=True)
    retVal = 0

    for appetite in sortedAppetites:
        if len(sortedCakes) == 0:
            return retVal
        if appetite <= sortedCakes[0]:
            sortedCakes.pop(0)
            retVal += 1

    return retVal

print(cake_for_none_iterative([3, 2, 1], [1, 2, 3]))
print(cake_for_none_iterative([3, 4, 5], [2, 3]))
print(cake_for_none_iterative([2, 3, 4, 5], [6, 4, 4, 2]))

# runtime: O(k log k), k = max(size of appetites, size of cakes)
# space: O(j), j = max(size of cakes, size of appetites