// Write code to create a function that returns the factorial of `num`

var factorial = function(num) {
    if (num <= 1){
        return 1
    }
    return factorial(num - 1) * num
};
