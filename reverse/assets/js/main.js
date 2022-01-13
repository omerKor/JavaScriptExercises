function Reverse(str) {
    let result = ""
    result = str.split("").reverse().join("")
    return result;
}

function Clicker() {
    var InnerArea = document.getElementById("Inner");
    console.log(InnerArea.value);
    var ReverseV = Reverse(InnerArea.value);
    document.getElementById("Result").innerHTML = InnerArea.value + " sayısının faktoriyel değeri = " + ReverseV;
}