// creating Array of digits of number
function numInAray(num) {
    let numArr = [];
    let numStr = num.toString();
    for (let i of numStr) {
      numArr.push(parseInt(i));
    }
    return numArr;
  }
// function to check whether the number is Happy or Not!!
  function isNumHappy(Num) {
    let arr = numInAray(Num).map(ele => ele ** 2);
    let ans = arr.reduce((i,j) =>{return i+j})
    if (ans >= 10) {
      return isNumHappy(ans);
    }
    else if (ans < 10 && ans == 1) {
      return true;
    }
    else {
      return false;
    }
  } 

