# 2021-01-05
def repeated_ten_characters(s):
    retVal = {}
    for i in range(0, len(s) - 9):
        substring = s[i:i+10]
        if repeat_helper(substring, 1):
            if not substring in retVal:
                retVal[substring] = True
        elif repeat_helper(substring, 2):
            if not substring in retVal:
                retVal[substring] = True
        elif repeat_helper(substring, 5):
            if not substring in retVal:
                retVal[substring] = True
    return list(retVal.keys())

def repeat_helper(substring, mod):
    for j in range(0, 10):
        rem = j % mod
        if substring[j] == substring[rem] and j == 9:
            return True
        elif substring[j] != substring[rem]:
            return False

example_1 = "BBBBBBBBBBA"
example_2 = "ABABABABABABBBBBBBBBB"
example_3 = "ABABABABABAB"
example_4 = "ABCDEABCDEABCDE"

print(repeated_ten_characters(example_1))
print(repeated_ten_characters(example_2))
print(repeated_ten_characters(example_3))
print(repeated_ten_characters(example_4))