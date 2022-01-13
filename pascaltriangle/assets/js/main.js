function PascalTriangleRow(n) {
    var result = ""
    result = Math.pow(2 , n)
    return result;
}

function Clicker() {
    var InnerArea = document.getElementById("Inner");
    console.log(InnerArea.value);
    var PascalTriangleRowV = PascalTriangleRow(InnerArea.value);
    document.getElementById("Result").innerHTML = InnerArea.value + " ==>  " + PascalTriangleRowV;
}