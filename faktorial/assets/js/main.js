function Factorial(num) {
    if (num > 0) {
        let result = 1;
        for (i = 1; i <= num; i++) {
            result *= i;
        }
        return result;
    }
}
function Clicker() {
    var InnerArea = document.getElementById("Inner");
    console.log(InnerArea.value);
    var FactorialV = Factorial(InnerArea.value);
    document.getElementById("Result").innerHTML = InnerArea.value + " sayısının faktoriyel değeri = " + FactorialV;
}