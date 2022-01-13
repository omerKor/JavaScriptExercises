function StringChallenge(str) {
    let liste = [""];
    liste = str.split("");
    liste = liste.sort(function (a, b) {
        return a.localeCompare(b)
    });
    liste = liste.join("");
    return liste;
}

function Clicker() {
    var InnerArea = document.getElementById("Inner");
    console.log(InnerArea.value);
    var StringChallengeV = StringChallenge(InnerArea.value);
    document.getElementById("Result").innerHTML = InnerArea.value + " ==>  " + StringChallengeV;
}