function TimeConvert(num) {
    return Math.floor(num / 60) + ':' + (num % 60)
}

function Clicker() {
    var InnerArea = document.getElementById("Inner");
    console.log(InnerArea.value);
    var TimeConvertV = TimeConvert(InnerArea.value);
    document.getElementById("Result").innerHTML = InnerArea.value + " ==>  " + TimeConvertV;
}