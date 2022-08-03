function fibonacciGenerator(n) {
  //Do NOT change any of the code above 👆

  //Write your code here:
  let output = [0, 1];
  if (n === 1) {
    output = [0];
    return output;
  } else if (n === 2) {
    output = [0, 1];
    return output;
  } else {
    for (let i = 0; i <= n - 3; i++) {
      let newNumber = output[i] + output[i + 1];
      output.push(newNumber);
    }
    return output;
  }

  //Return an array of fibonacci numbers starting from 0.

  //Do NOT change any of the code below 👇
}
