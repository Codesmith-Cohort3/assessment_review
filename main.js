// Write a function that takes a string and capitalizes every vowel in it
// capitalizeVowels('hella world');  -> 'hEllA wOrld'
function capitalizeVowels(str) {
  str.replace(/[aeiou]/gi, function(letter){
    return letter.toUpperCase();
  });
  return str;
}

// Write a function that takes an array and two integers as arguments. These two numbers will be indeces. All array elements between (and including) these positions should be reversed.
// var zeroToTen = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// reverseChunk(zeroToTen, 2, 6);  -> [0, 1, 6, 5, 4, 3, 2, 7, 8, 9, 10]
// var primes = [2, 3, 5, 7, 11];
// reverseChunk(primes, 1, 4);  -> [2, 11, 7, 5, 3]
function reverseChunk(arr, start, end) {
  var firstHalf = arr.slice(0, start);
  var secondHalf = arr.slice(start, end + 1).reverse();
  var thirdPart = arr.slice(end + 1);
  return firstHalf.concat(secondHalf, thirdPart);
}


// Write a function that takes a string and converts it from snake case to camel case.
// snake case: words_separated_by_underscores
// camel case: wordsSeparatedByCapitals
// snakeToCamel("hello_there_world");  -> "helloThereWorld"
function snakeToCamel(str) {
  return str.replace(/(_\w)/g, function(letter) {
    return letter[1].toUpperCase();
  } );
}


// Write a function that takes an object and returns a nested array. These inner arrays will each have two elements: the key-value pairs from the object. These whole array should be sorted in alphabetical order by the key names.
// var phoneNums = {
//   chris: 3429588375,
//   andy: 4829574932,
//   mildew: 9975723073
// }
// objToSortedArray(phoneNums);  -> [ ['andy', 4829574932],
//                                    ['chris', 3429588375],
//                                    ['mildew', 9975723073] ]
function objToSortedArray(obj) {
  var result = [];
  for(var i in obj) {
    result.push([i,obj[i]]);
  }
  return result.sort();
}
