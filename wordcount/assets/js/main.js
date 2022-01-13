function WordCount(str) {
  let counter = 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == " ") {
      counter++
    }

  }
  return counter;
}

function Clicker() {
  var InnerArea = document.getElementById("Inner");
  console.log(InnerArea.value);
  var WordCountV = WordCount(InnerArea.value);
  document.getElementById("Result").innerHTML = InnerArea.value + " ==>  " + WordCountV;
}