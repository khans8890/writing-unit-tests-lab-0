// Question 1
const isRealPalindrome = (str) => {
  let strLower = str.match(/[a-z0-9]/gi).join('').toLowerCase();
  let reversedStr = str.match(/[a-z0-9]/gi).join('').split('').reverse().join('').toLowerCase();
      return reversedStr === strLower;
};

// Question 2
const runningTotal = (arr) => {
  const newArr = [];
  let sum = 0;
  for(let i = 0; i < arr.length; i++){
    newArr.push(sum += arr[i]);
  }
  return newArr;
};

// Question 3
const swap = str => str.split(' ').map(word => {
  word = [...word];
  [word[0], word[word.length - 1]] = [word[word.length - 1], word[0]];
  return word.join("").toString();}).join(" ");

// Question 4
const wordSizes = (str) => {
  let obj = {};
  if(str !== ''){
  let strCopy = str.split(' ');
    for(let i = 0; i < strCopy.length; i++){  
       if(obj[strCopy[i].length]){
       obj[strCopy[i].length]++;
    }else{
      obj[strCopy[i].length] = 1;
    }
  }
  return obj;
}else {
  return obj;
}
  
};

// Question 5
const union = (arr1, arr2) => {
  return [...new Set(arr1.concat(arr2))];
};

// Question 6
const firstRecurring = (str) => {
  for(let i = 0; i < str.length; i++){
    for(let j = i + 1; j < str.length; j++){
      if(str[i] === str[j]){
        return str[i];
      }
      }
    }
      return "";
};

// Question 7
const showMultiplicativeAverage = (arr) => {
  let avg = 1;
  for(let i = 0; i < arr.length; i++){
    avg *= arr[i];
  }
  return (avg/arr.length).toFixed(3);
};

// Quetsion 8
const multiplyList = (arr1, arr2) => {
  let results = [];
  for(let i = 0; i < arr1.length; i++){
      results[i] = arr1[i] * arr2[i];
    }
  
  return results;
};

// Question 9
const sequence = (int) => {
  let nums = [];
  for(let i = 1; i <= int; i++){
    nums += i;
  }
nums = nums.split('');
return nums.map(x => Number(x));
};

// The below code connects this JS file to our test file
module.exports = {
  isRealPalindrome,
  runningTotal,
  swap,
  wordSizes,
  union,
  firstRecurring,
  showMultiplicativeAverage,
  multiplyList,
  sequence
};
