function add (num1, num2, callback){
  return callback(num1 + num2);
}
console.log(add(5, 6, result => result));
