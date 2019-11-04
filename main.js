//=========================================================== 1
//Write a function called operateOn that takes 3 parameters (firstNumber, secondNumber, operation)
//If the operation number is 0, the function adds the two numbers together and return the result
//If the operation number is 1, the function multiplies the two numbers together and return the result
//If the operation number is 2, the function divides the two numbers and return the result
//If the operation number is other than that, it should return “Nothing to Operate On”
//The function should never return undefined

function operateOn(firstNumber, secondNumber, operation) {

  switch (operation) {
    case 0:
    return firstNumber + secondNumber;
      break;
    case 1:
    return firstNumber * secondNumber

        break;
    case 2:
    return firstNumber / secondNumber
      break;
    default:
       return "Nothing to Operate On";
  }
}

//========================================================== 2
//Write a function called addArrays that takes two arrays as parameters (firstArray, secondArray)
//The function adds the elements with matching indexes to each other and returns the results in an array
//If the arrays are of different length the function should add 1 to the elements that 
//don’t having matching indexes in the other
//Write the function using while loop and for loop

function addArraysWhileLoop(firstArray, secondArray) {

  var i = 0;
  var arr3 = [];



  if (firstArray.length>secondArray.length){

    while(i < secondArray.length){
      if (i<firstArray) {

        arr3.push(firstArray[i]+secondArray[i]);

      } else {
        arr3.push(firstArray[i]+1);

      }
      i++
    }


  }

  if (secondArray.length >= firstArray.length){

    while(i < firstArray.length){

      if (i<secondArray.length) {

        arr3.push(firstArray[i]+secondArray[i]);

      } else {
        arr3.push(secondArray[i]+1);

      }

      i++
    }

  }
  return arr3;

}

function addArraysForLoop(firstArray, secondArray) {

  var arr3 = [];

  if (secondArray.length >= firstArray.length) {

    for (var i = 0; i < firstArray.length; i++) {
          arr3.push(firstArray[i]+secondArray[i]);
    }

    for (var k = firstArray.length; k < secondArray.length; k++) {
      arr3.push(secondArray[k] + 1)
    }
  }

  if (secondArray.length < firstArray.length) {

    for (var i = 0; i < secondArray.length; i++) {
          arr3.push(firstArray[i]+secondArray[i]);
    }

    for (var j = secondArray.length; j < firstArray.length; j++) {
      arr3.push(firstArray[j] + 1)
    }
  }

  
  return arr3;
}

//=========================================================== 3
//Using recursion, return the sum of all of the positives numbers of an array of numbers.
// posSum[1,-4,7,12] => 1 + 7 + 12 = 20




function posSum(arr){
  var acc = 0;

  if (arr.length === 1) {

    if (arr[0] > 0){
      return acc + arr[0];
    }

  }

  if (arr[0] > 0){

    arr.shift();
    
    return acc = acc + posSum(arr);

  }

  return acc;

}







//=========================================================== 4

var bucketOfSloths = [
  { name: { first: 'Furry', middle: 'Danger', last: 'Assassin' }, age: 2 },
  { name: { first: 'Slow', last: 'Pumpkin' }, age: 3 },
  { name: { first: 'Bullet', middle: 'Proof', last: 'Sloth' }, age: 4 },
  { name: { first: 'Boos', middle: 'Boos', last: 'Bun' }, age: 5 },
  { name: { first: 'Jungle', last: 'Fuzz' }, age: 2 }
];


function fullName(array, index) {

  var acc = "";

  if (array[index].name.first !== undefined) {

   acc = acc + array[index].name.first + " "

  }

  if (array[index].name.middle !== undefined){
    acc = acc + array[index].name.middle + " "
  }

  if (array[index].name.last !== undefined) {
    acc = acc +  array[index].name.last
  }

  return  acc

}


function longestName(bucketOfSloths) {

  var array = [], max = 0, indexOfMax;

  for (var i = 0; i < bucketOfSloths.length; i++) {
    
    array.push(fullName(bucketOfSloths, i))
    
    if (array[i].length > max){

      max = array[i].length;
      indexOfMax = i;
    }
  }

  return array[indexOfMax] + " is the longest name in the object";

}

