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
* 5-3-1 use for loop
*/
function every(array, test) {
    for (let i = 0; i < array.length; i++) {
      if (!test(array[i])) {
        return false;
      }
    }
    return true
  }
  console.log(every([1, 3, 5], n => n < 10));
  // → true
  console.log(every([2, 4, 16], n => n < 10));
  // → false
  console.log(every([], n => n < 10));
  // → true

  // 5-3-2
  // 不会
  function every_some(array, test) {

  }
  console.log(every_some([1, 3, 5], n => n < 10));
  // → true
  console.log(every_some([2, 4, 16], n => n < 10));
  // → false
  console.log(every_some([], n => n < 10));
  // → true

  // 5-4