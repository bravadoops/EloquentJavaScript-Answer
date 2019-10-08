/**
* 5-1
* 用reduce将a,b不断地拼接在一起返回新的array
*/
let arrays = [[1, 2, 3], [4, 5], [6]];
console.log(arrays.reduce((a, b) => a.concat(b)));

/**
* 5-2
* update()返回一个新值而不是改变原来的值，需要将更新后的值赋值给value
*/
function loop(value, test, update, body) {
    while (test(value)) {
      body(value);
      value = update(value);
    }
  }
  loop(3, n => n > 0, n => n - 1, console.log);
  /**
  * 5-3
  * 使用了forEach()就无法使用hint中for loop 提前返回的方式，时间复杂度会有下降
  */
  function every(array, test) {
    result = true;
    array.forEach(a => {
      if (!test(a)) {
        result = false;
      }
    });
    return result;
  }
  console.log(every([1, 3, 5], n => n < 10));
  // → true
  console.log(every([2, 4, 16], n => n < 10));
  // → false
  console.log(every([], n => n < 10));
  // → true