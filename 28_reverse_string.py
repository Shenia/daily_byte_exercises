# 2021-01-15
def reverse_string(s):
    return "".join(reversed(s))

# time: reversed is O(1), join takes O(n) => O(n)
# space: reversed is O(1), join takes O(n) => O(n)

example_1 = "Cat"
example_2 = "The Daily Byte"
example_3 = "civic"

print(reverse_string(example_1))
print(reverse_string(example_2))
print(reverse_string(example_3))