# 2021-01-01
def reverse_words_iterative(s):
    return " ".join(reversed(s.split(" ")))

print(reverse_words_iterative("he llo"))

# time: O(n)
# space: O(n)