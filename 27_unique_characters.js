// 2021-01-14
function returnLongestPhraseLength(words) {
  let cleanedWords = removeDuplicates(words);
  return pickNext(cleanedWords, []);
}

function pickNext(words, chosen) {
  if (words.length === 0) {
    return chosen.length;
  }
  let retVal = 0;
  for (let i = 0; i < words.length; i++) {
    let newWords = words.slice();
    newWords.splice(i, 1);
    let newChosen = chosen.slice();
    if (fit(chosen, words[i])) {
      newChosen = pushLetters(chosen, words[i]);
    }
    let finishedPick = pickNext(newWords, newChosen);
    if (finishedPick > retVal) {
      retVal = finishedPick;
    }
  }
  return retVal;
}

function pushLetters(letters, word) {
  let newLetters = letters.slice();
  for (let i = 0; i < word.length; i++) {
    if (!newLetters.includes(word[i])) {
      newLetters.push(word[i]);
    }
  }
  return newLetters;
}

function removeDuplicates(words) {
  let notRepeated = [];
  for (let i = 0; i < words.length; i++) {
    let seen = [];
    for (let j = 0; j < words[i].length; j++) {
      if (seen.includes(words[i][j])) {
        break;
      } else if (!seen.includes(words[i][j]) && j === words[i].length - 1) {
        notRepeated.push(words[i]);
        break;
      } else {
        seen.push(words[i][j]);
      }
    }
  }
  let retArr = [];
  for (let i = 0; i < notRepeated.length; i++) {
    if (!retArr.includes(notRepeated[i])) {
      retArr.push(notRepeated[i])
    }
  }
  return retArr;
}

function fit(words, word) {
  let uniqueChars = [];
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words[i].length; j++) {
      if (!(words[i][j] in uniqueChars)) {
        uniqueChars.push(words[i][j]);
      }
    }
  }
  for (let i = 0; i < word.length; i++) {
    if (uniqueChars.includes(word[i])) {
      return false;
    }
  }
  return true;
}

function checkOutput(testFunction, input) {
  console.log("Input:", input, "Output:", testFunction(input));
}

example1 = ['abc', 'ade', 'fgi'];
example2 = ['the', 'eagle', 'flew', "the"];
example3 = ['the', 'dog', 'rano', 'the', 'eagle'];
checkOutput(returnLongestPhraseLength, example1);
checkOutput(returnLongestPhraseLength, example2);
checkOutput(returnLongestPhraseLength, example3);

//very bruteforce... hopefully I can return to this later...