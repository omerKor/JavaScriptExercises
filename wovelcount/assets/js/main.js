function VowelCount(str) { 
    let counter = 0;
    for (let i = 0; i < str.length; i++) {
      if(str[i] == "a" || str[i] == "e" || str[i] == "i" || str[i] == "u"|| str[i] == "o" || str[i] == "ı" || str[i] == "ö" || str[i] == "ü") {
        counter++
      }
    }
    return counter; 
  }

function Clicker() {
    var InnerArea = document.getElementById("Inner");
    console.log(InnerArea.value);
    var VowelCountV = VowelCount(InnerArea.value);
    document.getElementById("Result").innerHTML = InnerArea.value + " ==>  " + VowelCountV;
}