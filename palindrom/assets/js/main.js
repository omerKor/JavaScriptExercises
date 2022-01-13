function Palindrome(str) {
    let regEx = /[\W_]/g
    let str1 = str.toLowerCase().replace(regEx, "") // ["neveroddoreven"]
    let str2 = str1.split("").reverse().join("")
    return str2 === str1 ? "palindromdur" : "palindrom değildir"
}

function Clicker() {
    var InnerArea = document.getElementById("Inner");
    console.log(InnerArea.value);
    var isPalindrom = Palindrome(InnerArea.value);
    document.getElementById("Result").innerHTML = InnerArea.value + " metni " + isPalindrom;
}