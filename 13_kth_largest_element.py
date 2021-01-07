# 2020-12-31
def kth_largest_element_iterative(nums, k):
    for i in range(0, k):
        largestIndex = i
        for j in range(i, len(nums)):
            if nums[j] > nums[largestIndex]:
                temp = nums[j]
                nums[j] = nums[i]
                nums[i] = temp
                largestIndex = j
    return nums[k-1]

print(kth_largest_element_iterative([0, 1, 2], 2))
print(kth_largest_element_iterative([12, 17, -5], 2))
print(kth_largest_element_iterative([0, 2, 0], 2))
print(kth_largest_element_iterative([9, 2, 1, 7, 3, 2], 5))

# runtime: O(kn), n = size of nums, better for if k small
# can do nums.sort() which takes O(nlogn) if k > logn
# space: O(1)