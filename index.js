// Q1 (A): 
function reverseString(input) {
  let result = '';
  for (let index = input.length - 1; index > -1; index--) {
    const eachCharacter = input[index]
    result += eachCharacter;
  }
  return result
}

console.log(reverseString('abcdefr'))

// Q1 (B):
function reverseSentence(input) {
  let splitArray = input.split(' ');
  let result = '';
  for (let i = 0; i < splitArray.length; i++) {
    const eachWord = splitArray[i];
    result += `${reverseString(eachWord)} `;
  }
  return result.substring(0, result.length - 1)
}

console.log(reverseSentence('flipped class room is important'))

// Q2: 
function leaveValidNumber(input) {
  let result = [];
  for (let j = 1; j <= input; j++) {
    if (j % 15 === 0) {
      result.push(j);
    } else if (j % 3 !== 0 && j % 5 !== 0) {
      result.push(j);
    } else {
      continue;
    }
  }
  return result.length;
}

console.log(leaveValidNumber(15))

// Q3: 
// 因為標示都是錯的，所以只會有兩種可能
// 實際:  鉛筆、原子筆、混合
// 可能標示依序會是: 原子筆、混合、鉛筆
// 或是          : 混合、鉛筆、原子筆

// 所以如果從標示混合的袋子拿出發現是鉛筆，就會是第二種排列組合，
// 如果從標記混合的袋子拿出的是原子筆代表是第一種排列組合

// Q4: 
// 原本 900 元，服務生偷拿 60 元，所以還剩下 840 元，
// 以這樣情況來看每個人應該出 280 元，
// 但後來服務生退給每個人 30 元後，一個人平均出 270 元，也就是說每個人跟 280 都差 10 元
// 三個人總共差了 30 元，這是遺失的 30 元，其實公式是有問題的