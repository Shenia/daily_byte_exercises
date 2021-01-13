// 2021-01-12
function lastWordLength(s) {
  while (s!== "" && s[s.length - 1] === " ") {
    s = s.substring(0, s.length - 1);
  }

  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === " "){
      return s.length - i - 1;
    }
  }

  return s.length;
}

function checkOutput(testFunction, input) {
  console.log(`Input: ${input}, Output: ${testFunction(input)}`);
}

example1 = "The Daily Byte";
example2 = "";
example3 = " Byte";
example4 = " ";
example5 = "Byte    ";
checkOutput(lastWordLength, example1);
checkOutput(lastWordLength, example2);
checkOutput(lastWordLength, example3);
checkOutput(lastWordLength, example4);
checkOutput(lastWordLength, example5);

// runtime: O(n), n = # letters in s
// space: O(1)