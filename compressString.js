
/*
var compress = (charArray) => {
  let count = 1;
  let result = [];
  charArray.push(".");
  for (let i = 0; i < charArray.length - 1; i++) {
    if (charArray[i] === charArray[i + 1]) {
      count += 1;
      continue;
    } else {
      result.push(charArray[i]);
      if (count != 1) {
        result.push(count);
      }
      count = 1;
    }
  }
  console.log(result.join("").split(""));

  return result.join("").split("").length;
};
**/

/**
 * 
 * make two variable 
 *  countSameLeter as a number initialize to one 
 *  result as an array 
 * for (loop through the array ) --> index based loop 
    * if (the charecter on this index is same as the next one) 
      * Increase count by one; and then skip
    * endif
    * if not then that is the edge case
        * push the character into the result array 
        * And then push the count into the array
        * reset count to one
    * endif
    
 * endloop

 * join and then split the result because you need string version of each charecter in the array eg. If the number is 10, you need to make it "1", "0"
 * return the length of the array 
 * finish

 */
/**
 * btw leetcode doesnt another array as part of the submittion so the change has to be in place
 * to counter this you have to return the same array
 * after the join and then split the result... step you can do a deepcopy of the results into the char array
 * and then remove the excess element
 */
/**
 * @param {character[]} givenCharArray
 * @return {number}
 */
var compress = (givenCharArray) => {
  let countSameLetter = 1;
  let compressedArray = [];

  for (let i = 0; i <= givenCharArray.length - 1; i++) {
    if (givenCharArray[i] === givenCharArray[i + 1]) {
      //   same case
      countSameLetter++;
      // continue;
    } else {
      // edge case
      compressedArray.push(givenCharArray[i]);
      if (countSameLetter !== 1) {
        compressedArray.push(countSameLetter);
      }
      // reset count
      countSameLetter = 1;
    }
  }
  // split the number above 10 to "1","0"  after converting it to string using the join()
  compressedArray = compressedArray.join("").split("");

  givenCharArray = deepcopyBtoA(compressedArray, givenCharArray);
  return givenCharArray;
};
/**
 * @param {[]} source the array you want to copy from
 * @param {[]} destination the array you want to copy to
 */
const deepcopyBtoA = (source, destination) => {
  destination.splice(0,destination.length)
 source.forEach((e) => destination.push(e));
  return destination;
};
