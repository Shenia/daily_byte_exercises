# 2020-12-29
def self_divisible_iterative(n):
    retVal = 0
    for number in range(1, n): #iterable, doesn't create list of 1 to n
        if (self_divisible_helper(number)):
            retVal += 1
    return retVal

def self_divisible_helper(number):
    for letter in str(number): #string of length log_10 n
        if letter == "0":
            return False
        if number % int(letter) != 0:
            return False
    return True

# runtime: O(n log_10 n) 
# space: O(log_10 n), could be O(1) if we divide by 10 and take mod instead of converting to string in line 9

def self_divisible_memoized(n):
    def self_divisible_memoized_helper(n, memo):
        if n == 1:
            memo[1] = 0
            return memo
        else:
            if (self_divisible_helper(n-1)):
                memo[n] = memo[n-1] + 1
                return memo
            else:
                memo[n] = memo[n-1]
                return memo
    retVal = 0
    memo = {}
    for number in range(1, n+1):
        memo = self_divisible_memoized_helper(number, memo)
    return memo[n]

# runtime: O(n log_10 n)
# space complexity: O(n) + O(log_10 n) => O(n)

print("17:", self_divisible_iterative(17))
print("9:", self_divisible_iterative(9))
print("10:", self_divisible_iterative(10))

print("17:", self_divisible_memoized(17))
print("9:", self_divisible_memoized(9))
print("10:", self_divisible_memoized(10))