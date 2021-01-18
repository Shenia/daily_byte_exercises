def take_two(nums):
  seen_once = {}
  ret_array = []
  for num in nums:
    if not num in seen_once:
      seen_once[num] = 1
    else:
      ret_array.append(num)
  return ret_array

def check_output(test_function, input_val, expected):
  print("input:", input_val, "expected:", expected, "got:", test_function(input_val))
  return

example_1 = [2, 3, 1, 5, 5]
example_2 = [1, 2, 3]
example_3 = [7, 2, 2, 3, 3, 4, 4]
example_4 = []
check_output(take_two, example_1, [5])
check_output(take_two, example_2, [])
check_output(take_two, example_3, [2, 3, 4])
check_output(take_two, example_4, [])

# time: O(n)
# space complexity: O(n)