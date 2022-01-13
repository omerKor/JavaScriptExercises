function BasicRomanNumerals(str) { 
    let num = convertNumber(str.charAt(0));
    let num1;
    let num2;

    for (let i = 1; i < str.length; i++) {
        num2 = convertNumber(str.charAt(i));
        num1 = convertNumber(str.charAt(i - 1));
        if (num2 <= num1) {
            num += num2;
        } else {
            num = num - num1 * 2 + num2;
        }
    }
    return num;
}

function convertNumber(c) {
    switch (c) {
        case "I":
            return 1;
        case "V":
            return 5;
        case "X":
            return 10;
        case "L":
            return 50;
        case "C":
            return 100;
        case "D":
            return 500;
        case "M":
            return 1000;

    }
}

function Clicker() {
    var InnerArea = document.getElementById("Inner");
    console.log(InnerArea.value);
    var BasicRomanNumeralsV = BasicRomanNumerals(InnerArea.value);
    document.getElementById("Result").innerHTML = InnerArea.value + " ==> " + BasicRomanNumeralsV;
}