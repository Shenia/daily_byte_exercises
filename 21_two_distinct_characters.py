# 2021-01-09

def two_distinct_character(s):
    max_length = 0
    for i in range(0, len(s)):
        possible_length = len(s) - i
        if max_length > possible_length:
            return max_length
        length = two_distinct_character_helper(s, i)
        if length > max_length:
            max_length = length
    return max_length

def two_distinct_character_helper(s, i):
    unique_characters = []
    for j in range(i, len(s)):
        if not s[j] in unique_characters and len(unique_characters) >= 2:
            return j - i
        elif not s[j] in unique_characters:
            unique_characters.append(s[j])
    return len(s) - i
                
# print("aba", two_distinct_character("aba")) #3
# print("abca", two_distinct_character("abca")) #2
# print("abccc", two_distinct_character("abccc")) #4
# print("abccdcb", two_distinct_character("abccdcb")) #4
# print("ccdc", two_distinct_character("ccdc")) #4

# runtime: O(n^2)
# space: O(1)

def two_distinct_character_window(s):
    window = {}
    max_length = 0
    curr_length = 0
    for i in range(0, len(s)):
        if not s[i] in window and len(window) < 2:
            window[s[i]] = i
            curr_length += 1
        elif not s[i] in window:
            first_key = list(window.keys())[0]
            if curr_length > max_length:
                max_length = curr_length
            curr_length = i - window.pop(first_key)
            window[s[i]] = i
        else:
            window.pop(s[i])
            window[s[i]] = i
            curr_length += 1
    if curr_length > max_length:
        max_length = curr_length
    return max_length

print("aba", two_distinct_character("aba")) #3
print("abca", two_distinct_character("abca")) #2
print("abccc", two_distinct_character("abccc")) #4
print("abccdcb", two_distinct_character("abccdcb")) #4
print("ccdc", two_distinct_character("ccdc")) #4

# runtime: O(n)
# space: O(1)